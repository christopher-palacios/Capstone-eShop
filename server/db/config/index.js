const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
  });
  console.log("MongoDB connection established");
} catch (error) {
  console.log(error);
}
