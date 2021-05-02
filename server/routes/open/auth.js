const express = require("express");
const router = express();

router.post("/register", (req, res) => {
  res.status(200).send("Sign Up Sucessful. Please log in");
});

module.exports = router;
