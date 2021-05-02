const router = require("express").Router();
const User = require("../../db/models/user");
const Bike = require("../../db/models/product");
const Category = require("../../db/models/category");
const { response } = require("express");
const Product = require("../../db/models/product");

// Create a user
router.post("/users", async (req, res) => {
  try {
    //Create user
    const newUser = await new User({ ...req.body });
    //Save user to db
    await newUser.save();
    //Generate token for user
    const token = await newUser.generateAuthToken();
    // Send back the user info and token
    res.status(200).json({ user: newUser, token });
  } catch (error) {
    res.status(400).json(error);
  }
});

// Login a user
router.post("/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    //Find user by email && password
    const user = await User.findByCredentials(email, password);
    //Generate JWT for user
    const token = await user.generateAuthToken();
    //Respond with user and token
    res.status(200).json({ user, token });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Check your email/password and try again" });
  }
});

// Get current user
router.get("/current", async (req, res) => {
  res.status(200).json(req.user);
});

// Get list of categories
router.get("/categories", async (req, res) => {
  const bikes = await Bike.find();
  const categories = await Category.find();
  res.json(categories);
});

//  Get list of products by category id
router.get("/categories/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  await category.populate("products").execPopulate();
  res.json(category.products);
});

// Get product by :id with category name included in object
router.get("/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  await product.populate({ path: "categoryId", select: "name" }).execPopulate();
  res.json(product);
});

module.exports = router;
