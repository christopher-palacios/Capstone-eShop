if (process.env.NODE_ENV !== "production") require("dotenv").config();
//bring in db connection
require("./db/config");
const express = require("express");
const app = express();
const openRoutes = require("./routes/open");
const userRoutes = require("./routes/secure/users");
const passport = require("./middleware/authentication");
const connectDB = require("./db/config/index");
const PORT = 8080;

connectDB();

//Middleware to interact with body of requst
app.use(express.json());

//Route Middleware
app.use("/api/users", openRoutes);

//Passport middleware, any routes under this MUST have the jwt bearer token in header
app.use("/api/*", passport.authenticate("jwt", { session: false }));

app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Express is running on ${PORT}`));
