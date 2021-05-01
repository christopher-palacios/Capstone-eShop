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
        productId: {
          type: String,
          required: true,
        },
        productTotal: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          // required: true,
        },
        description: {
          type: String,
          // required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
        categoryId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
        },
      },
    ],
    cartQuantity: {
      type: Number,
      required: true,
    },
    cartTotal: {
      type: Number,
      requred: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamp: Date,
  }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
