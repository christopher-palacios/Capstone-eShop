const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    count: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      requred: true,
    },
  },
  {
    timestamp: Date,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;