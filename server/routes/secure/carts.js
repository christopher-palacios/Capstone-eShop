const router = require("express").Router();
const Cart = require("../../db/models/cart");

router.post("/", async (req, res) => {
  //add try / catch
  const { product } = req.bodyconst;
  const total = product.price;
  const count = 1;
  const cart = new Cart({
    ...req.body,
    total,
    count,
  });
  cart.products.push(product._id);
  await cart.save();
  res.status(200).json(cart);
});

//Get cart for current user
router.get("/", async (req, res) => {
  try {
    const cart = Cart.findOne({ userId: req.user._id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//update cart
router.put("/:id", async (req, res) => {
  try {
    const { product } = req.body;
    const { remove } = req.body;
    const cart = await Cart.findById(req.params.id);
    if (cart.products.includes(product._id) && !remove) {
      cart.count = cart.count + 1;
      cart.total = cart.count * cart.total;
      await cart.save();
      res.status(200).json(cart);
    }
    if (remove) {
      const updatedCart = cart.products.filter((item) => item !== product._id);
      await cart.save();
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
