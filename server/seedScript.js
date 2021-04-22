require("dotenv").config();

const bikeData = require("./data/bikes.json");
const connectDB = require("./db/config/index");
const Product = require("./db/models/product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(bikeData);
    console.log("Data Import Successful");
    process.exit();
  } catch (error) {
    console.error("Error with Data Import");
    process.exit(1);
  }
};

importData();
