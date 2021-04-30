const router = require("express").Router();
const Cart = require("../../db/models/cart");

//create or update existing cart
router.post("/", async (req, res) => {
  const { product, quantity, price } = req.body;
  const total = price * quantity;

  const existingCart = await Cart.findOne({ userId: req.user._id });

  if (existingCart) {
    //Check if cart contains currentProduct
    let existingProductInCart = existingCart.products.find((obj) => {
      return obj.productId.toString() === product._id.toString();
    });
    // let productIndex = existingCart.products.findIndex((index) => {
    //   return console.log("inside", index.productId) == product._id;
    // });

    if (existingProductInCart) {
      updatedProduct = existingProductInCart;
      //UPDATE the product price total
      updatedProduct.productTotal = existingProductInCart.productTotal + total;
      //UPDATE the product qty
      updatedProduct.quantity = existingProductInCart.quantity + quantity;
      //UPDATE the product item in the products array
      existingProductInCart = updatedProduct;
      //UPDATE the cart qty
      existingCart.cartQuantity = existingCart.cartQuantity + quantity;
      //UPDATE the cart total
      // existingCart.cartTotal = existingCart.cartTotal + total;
      // console.log("inside", existingCart.cartTotal);
    } else {
      // if product does NOT EXIST in cart, CREATE new product in cart
      existingCart.products.push({
        productId: product._id,
        productTotal: total,
        name: product.name,
        price,
        image: product.image,
        category: product.category,
        quantity,
      });
      existingCart.cartQuantity = existingCart.cartQuantity + quantity;
    }
    //UPDATE the total for the cart

    //get array of product prices
    const productPrices = existingCart.products.map(
      (product) => product.price * product.quantity
    );
    console.log(productPrices);
    //calculate the sum
    existingCart.cartTotal = productPrices.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    console.log(existingCart.cartTotal);
    await existingCart.save();
    return res.status(200).json(existingCart);

    /////////////////////////////////////////////////////////////////////
    // const currentProductInCart = existingCart.products.find((obj) => {
    //   return obj.productId.toString() === product._id.toString();
    // });

    // //IF the current product is not in the cart
    // if (!currentProductInCart) {
    //   //then UPDATE cart with current product
    //   // add current product to existing cart
    //   existingCart.products.push({
    //     productId: product._id,
    //     productTotal: total,
    //     name: product.name,
    //     price,
    //     image: product.image,
    //     category: product.category,
    //     quantity,
    //   });
    //   //UPDATE cart
    //   existingCart.cartQuantity = existingCart.cartQuantity + quantity;
    //   return existingCart.save(), res.status(222).json(existingCart);
    // }

    // const productPrices = existingCart.products.map((product) => product.price);
    // existingCart.cartTotal = productPrices.reduce((accum, currValue) => {
    //   return accum + currValue;
    // });
    // //IF the current product IS in cart then update cart quantity
    // existingCart.cartQuantity = existingCart.cartQuantity + quantity;
    // existingCart.cartTotal = existingCart.cartTotal + total;
    // // & total
    // console.log(productPrices);
    // currentProductInCart.productTotal =
    //   currentProductInCart.productTotal + total;
    // currentProductInCart.quantity = currentProductInCart.quantity + quantity;
    // existingCart.products;
    // await existingCart.save();
    // return res.status(223).json(productIndex);
  }

  //if cart does NOT exist for user then CREATE new cart
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
});

//NEED TO FINISH PUT REQUEST

// router.put("/:id", async (req, res) => {
//   const { product } = req.body;
//   const cart = await Cart.findOne({ userId: req.user._id, _id: req.params.id });

//   if (cart) {
//     //Find the product
//     const currentProductInCart = existingCart.products.find((obj) => {
//       return obj.productId.toString() === product._id.toString();
//     });

//     if (currentProductInCart.quantity === 1) {
//       const updatedCart = existingCart.products.filter((obj) => {
//         obj.productId === product._id;
//       });
//     }
//   }
// });

//Get cart for current user
router.get("/", async (req, res) => {
  try {
    const existingCart = await Cart.findOne({ userId: req.user._id });
    res.status(200).json(existingCart);
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
