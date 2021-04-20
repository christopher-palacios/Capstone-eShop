require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });
    console.log("MongoDB connection SUCCESSFUL");
  } catch (error) {
    console.log("MongoDB connection UNSUCCESSFUL");
    //
    process.exit(1);
  }
};

module.exports = connectDB;
