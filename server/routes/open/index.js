const router = require("express").Router();
const User = require("../../db/models/user");

// Create a user
router.post("/", async (req, res) => {
  //Create user
  const newUser = await new User({ ...req.body });
  //Save user to db
  await newUser.save();
  //Generate token for user
  const token = await newUser.generateAuthToken();
  //Send back the user info and token
  res.status(200).json({ user: newUser, token });
});

// Login a user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByCredentials(email, password);
  const token = await user.generateAuthToken();
  res.status(200).json({ user, token });
});

module.exports = router;
