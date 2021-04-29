const router = require("express").Router();
const Cart = require("../../db/models/cart");

//create or update existing cart
router.post("/", async (req, res) => {
  const { product, quantity, price } = req.body;
  const total = price * quantity;

  const existingCart = await Cart.findOne({ userId: req.user._id });

  if (existingCart) {
    //your logic
    //Check if cart contains currentProduct
    const currentProductInCart = existingCart.products.filter((obj) => {
      obj.productId === product._id;
    });
    // console.log(existingCart);
    console.log(currentProductInCart);
    // console.log("productId", product._id);
    //IF the current product is not in the cart
    if (!currentProductInCart) {
      //then UPDATE cart with current product
      const cartUpdate = new Cart({
        products: {
          productId: product._id,
          productTotal: total,
          name: product.name,
          price,
          image: product.image,
          category: product.category,
          quantity,
        },
        cartQuantity: quantity,
        userId: req.user._id,
        cartTotal: total,
      });

      return (
        // cartUpdate.save(),
        res.status(222).json(cartUpdate)
      );
    }

    //IF the current product IS in cart then update cart quantity
    const cartQtyUpdate = new Cart({
      products: {
        productId: product._id,
        productTotal: total,
        name: product.name,
        price,
        image: product.image,
        category: product.category,
        quantity: existingCart.cartQuantity + quantity,
      },
      cartQuantity: quantity,
      userId: req.user._id,
      cartTotal: total,
    });
    return (
      await cartQtyUpdate.save(), res.status(223).json(currentProductInCart)
    );
  }

  const newCart = new Cart({
    products: {
      productId: product._id,
      productTotal: total,
      name: product.name,
      price,
      image: product.image,
      category: product.category,
      quantity,
    },
    cartQuantity: quantity,
    userId: req.user._id,
    cartTotal: total,
  });
  await newCart.save();
  res.status(224).json(newCart);

  // // //Check if cart exists
  // const cart = await Cart.findOne({ userId: req.user._id });
  // if (cart) {
  //   //Check if cart contains currentProduct
  //   if (cart.products.includes(product._id)) {
  //     //updates total items in cart
  //     cart.quantity = cart.quantity + quantity;
  //     await cart.save();
  //     await cart.populate("products").execPopulate();
  //   }
  //   // const currentProductInCart = cart[product._id];
  // }

  // //   //If cart does not contain currentProduct
  // //   if (!currentProductInCart) {
  // //     //then update cart with currentProduct
  // //     const cartUpdate = {
  // //       ...cart,
  // //       [product._id]: {
  // //         count: currentProductInCart.count,
  // //         total: total,
  // //         product,
  // //       },
  // //     };
  // //     return (
  // //       "save cart and populate with cartUpdate",
  // //       res.status(200).json(cartUpdate)
  // //     );
  // //   }
  // //   //If currentProduct exists in cart then update Qty of product
  // //   const cartQtyUpdate = {
  // //     ...cart,
  // //     [product._id]: {
  // //       count: currentProductInCart.count + 1,
  // //       product,
  // //     },
  // //   };
  // //   return (
  // //     "save cart and populate with cartQtyUpdate",
  // //     res.status(200).json(cartQtyUpdate)
  // //   );
  // // } else {
  // //   // If product does not exist in user cart then create new cart
  // //   const newCart = {};
  // // }
  // // //if it does, check if product is a;ready in the cart
  // // //if it is increase the quantity and total price of cart,
  // // //save the cart
  // // //populate the products for the cart
  // // //send it back

  // cart.products.push(product._id);
  // await cart.save();
  // await cart
  //   .populate({ path: "products", select: "name price categoryId" })
  //   .execPopulate();
  // // console.log(cart);

  // res.status(200).json(req.body);
  // // res.status(200).json("we in the back");
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
    console.log("this is body", req.body);
    console.log("this is id", req.params.id);
    const { product } = req.body;
    const { remove } = req.body;
    console.log("this is product", product);
    const cart = await Cart.findById(req.params.id);
    console.log("this is cart", cart);
    if (cart.products.includes(product._id) && !remove) {
      cart.quantity = cart.quantity + 1;
      cart.total = cart.quantity * cart.total;
      await cart.save();
      res.status(200).json(cart);
    }
    if (remove) {
      const updatedCart = cart.products.filter((item) => item !== product._id);
      await cart.save();
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
