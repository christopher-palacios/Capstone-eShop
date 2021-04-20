const router = require("express").Router();

//Get the current user ifo

router.get("/current", async (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
