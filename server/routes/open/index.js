const router = require("express").Router();
const User = require("../../db/models/user");
const Bike = require("../../db/models/product");
const Category = require("../../db/models/category");
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
  try {
    // const bikes = await Bike.find();
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status.json({ message: "Error getting list of categories" });
  }
});

// Get list of products
router.get("/product/list", async (req, res) => {
  try {
    const productList = await Product.find();
    res.json(productList);
  } catch (err) {
    res.status(400).json({ message: "Error getting product list" });
  }
});

// Get specific product by id
router.get("/product/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: "Error getting product by ID" });
  }
});

//  Get list of products by category id
router.get("/categories/:id", async (req, res) => {
  try {
    console.log("req", req.params.id);
    const category = await Category.findById(req.params.id);
    console.log("cat", category);
    await category.populate("products").execPopulate();
    res.json(category.products);
  } catch (error) {
    res.status(200).json({ message: "Error getting products by Category ID" });
  }
});

// Get product by :id with category name included in object
router.get("/product/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  await product.populate({ path: "categoryId", select: "name" }).execPopulate();
  res.json(product);
});

module.exports = router;
