if (process.env.NODE_ENV !== "production") require("dotenv").config();
//bring in db connection
require("./db/config");
const express = require("express");
const app = express();
const passport = require("./middleware/authentication");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 8080;

// if (process.env.NODE_ENV === "production") {
//   //cd into client folder and npm run build when ready
//   app.use(express.static("client/build"));
//   app.use(cors());
// }

//open routes
const openRoutes = require("./routes/open");

//authenticated routes
const secureUserRoutes = require("./routes/secure/users");
const secureCartRoutes = require("./routes/secure/carts");
const secureOrderRoutes = require("./routes/secure/orders");

//resolve cors
app.use(cors());

//Middleware to interact with body of requst
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "client/build")));
}

//Open routes
app.use("/api/", openRoutes);

//Passport middleware, any routes under this MUST have the jwt bearer token in header
app.use("/api/*", passport.authenticate("jwt", { session: false }));
//Authenticated routes
app.use("/api/users", secureUserRoutes);
app.use("/api/cart", secureCartRoutes);
app.use("/api/order", secureOrderRoutes);

if (process.env.NODE_ENV === "production") {
  // Handle React routing, return all requests to React app
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "client/build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Express is running on ${PORT}`));
