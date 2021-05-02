const router = require("express").Router();

//Get the current user info
router.get("/current", async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
