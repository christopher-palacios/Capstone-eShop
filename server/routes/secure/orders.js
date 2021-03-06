const express = require("express");
const router = express();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const Cart = require("../../db/models/cart");
const Order = require("../../db/models/order");

//Payment Intent
router.post("/intent", async (req, res) => {
  const { cart, paymentMethod } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.floor(
      (Number(cart.cartTotal) * 0.07 + Number(cart.cartTotal)) * 100
    ),
    currency: "usd",
    description: cart._id,
    metadata: { integration_check: "accept_a_payment" },
    receipt_email: paymentMethod.billing_details.email,
  });
  return res.json(paymentIntent["client_secret"]);
});

//Create new order
router.post("/", async (req, res) => {
  const { cart, transactionId } = req.body;
  console.log("transaction", transactionId);

  const newOrder = new Order({
    cart: cart._id,
    subtotal: cart.cartTotal.toFixed(2),
    total: Number(cart.cartTotal) * 0.07 + Number(cart.cartTotal),
    transactionId,
  });
  await newOrder.save();

  const existingCart = await Cart.findById(cart._id);
  existingCart.isOpen = false;
  await existingCart.save();

  req.user.orders.push(newOrder._id);
  await req.user.save();
  res.json(newOrder);
});

module.exports = router;
