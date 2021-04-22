const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Category", categorySchema);

//Create the relationshop between category and bikes
categorySchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "categoryId",
});

module.exports = Category;
