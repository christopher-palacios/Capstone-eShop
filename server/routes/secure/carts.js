const router = require("express").Router();
const Cart = require("../../db/models/cart");

///CREATE or UPDATE existing cart///
router.post("/", async (req, res) => {
  const { product, quantity, price } = req.body;
  const total = price * quantity;

  //Find existing cart by user id
  const existingCart = await Cart.findOne({
    userId: req.user._id,
    isOpen: true,
  });
  //IF the cart exists then..
  if (existingCart) {
    //Check if cart contains currentProduct
    let existingProductInCart = existingCart.products.find((obj) => {
      return obj.productId.toString() === product._id.toString();
    });
    //IF: the current product exists
    if (existingProductInCart) {
      let updatedProduct = existingProductInCart;
      //UPDATE the product price total
      updatedProduct.productTotal = existingProductInCart.productTotal + total;
      //UPDATE the product qty
      updatedProduct.quantity = existingProductInCart.quantity + quantity;
      //UPDATE the product item in the products array
      existingProductInCart = updatedProduct;
      //UPDATE the cart qty
      existingCart.cartQuantity = existingCart.cartQuantity + quantity;
    } else {
      //ELSE: if product does NOT EXIST in cart,
      // CREATE new product in cart and push into products array
      existingCart.products.push({
        productId: product._id,
        productTotal: total,
        name: product.name,
        price,
        image: product.image,
        category: product.category,
        quantity,
      });
      //UPDATE the cart quantity that includes new product
      existingCart.cartQuantity = existingCart.cartQuantity + quantity;
    }

    ///UPDATE the totals (price & quantity) for the cart///

    //Get array of product prices and multiply by product quantity
    const productPrices = existingCart.products.map(
      (product) => product.price * product.quantity
    );
    //Calculate cart total by using reduce method to
    //iterate through product prices and add them together
    existingCart.cartTotal = productPrices.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    //Save existing cart after being UPDATED
    await existingCart.save();
    return res.status(200).json(existingCart);
  }

  //If cart does NOT exist for user then CREATE new cart
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
  //Save new cart
  await newCart.save();
  res.status(224).json(newCart);
});

// /Increase cart quantity on click/; //
router.put("/increase/:id", async (req, res) => {
  const { product } = req.body;
  //Find cart by user id and cart id
  const existingCart = await Cart.findOne({
    userId: req.user._id,
    _id: req.params.id,
    isOpen: true,
  });
  //If cart exists then..
  if (existingCart) {
    //Find the current product by product id in cart
    let currentProductInCart = existingCart.products.find((obj) => {
      return obj.productId.toString() === product.productId.toString();
    });
    // console.log("cur", currentProductInCart);
    // //UPDATE current product
    // let updatedProduct = currentProductInCart;
    // //Increase product quantity by 1
    // updatedProduct.quantity = updatedProduct.quantity + 1;
    // //increase product total by product price
    // updatedProduct.productTotal = updatedProduct.productTotal + product.price;
    // //UPDATE product
    // // console.log("up", updatedProduct);
    // currentProductInCart = updatedProduct;

    currentProductInCart.quantity = currentProductInCart.quantity + 1;
    currentProductInCart.productTotal =
      currentProductInCart.productTotal + product.price;

    // ///UPDATE cart totals (quantity && price)///
    // //Get array of product quantities in cart
    // const cartQuantities = existingCart.products.map(
    //   (product) => product.quantity
    // );
    // console.log(cartQuantities, "qty");
    // //calculate cart quantity with reduce method to
    // //iterate through product quantities and add them together
    // existingCart.cartQuantity = cartQuantities.reduce((accum, currentValue) => {
    //   return accum + currentValue;
    // }, 0);
    // console.log(existingCart.cartQuantity);

    existingCart.cartQuantity = existingCart.products
      .map((product) => product.quantity)
      .reduce((accum, currentValue) => {
        return accum + currentValue;
      }, 0);

    // //Get array of product prices in cart
    // const productPrices = existingCart.products.map((obj) => obj.productTotal);

    // //Calculate cart total with reduce method to
    // //iterate through product prices and add them together
    // existingCart.cartTotal = productPrices.reduce(
    //   (accumulator, currentValue) => {
    //     return accumulator + currentValue;
    //   },
    //   0
    // );

    existingCart.cartTotal = existingCart.products
      .map((obj) => obj.productTotal)
      .reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

    await existingCart.save();
    return res.status(200).json(existingCart);
  }
});

///Decrease cart quantity on click///
router.put("/decrease/:id", async (req, res) => {
  const { product } = req.body;
  //Find cart by user id and cart id
  const existingCart = await Cart.findOne({
    userId: req.user._id,
    _id: req.params.id,
    isOpen: true,
  });
  //IF cart exists then..
  if (existingCart) {
    //Find the current product by product id in cart
    let currentProductInCart = existingCart.products.find((obj) => {
      return obj._id.toString() === product._id.toString();
    });

    //IF the current product quantity is equal to 1 then..
    if (currentProductInCart.quantity === 1) {
      //Filter the product by id and return new array without current product
      const updatedProducts = existingCart.products.filter((obj) => {
        return obj._id !== currentProductInCart._id;
      });
      //UPDATE existing cart with updated products
      existingCart.products = updatedProducts;
      //UPDATE existing cart quantity
      //Get array of product quantities
      const productQuantities = existingCart.products.map(
        (product) => product.quantity
      );
      //Calculate cart quantity with reduce method to iterate through product quantities and add them together
      existingCart.cartQuantity = productQuantities.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        },
        0
      );

      ///UPDATE existing cart total///
      //Get array of product prices
      const productPrices = existingCart.products.map(
        (product) => product.productTotal
      );
      console.log(productPrices);
      //Calculate cart total with reduce method to iterate through produce prices and add them together
      existingCart.cartTotal = productPrices.reduce(
        (accumulator, currentValue) => {
          return accumulator + currentValue;
        },
        0
      );
      //Save updated cart
      await existingCart.save();
      return res.status(200).json(existingCart);
    }
    /// IF current product quantity is equal to more than 1
    let updatedProduct = currentProductInCart;
    //decrease product quantity amount by 1
    updatedProduct.quantity = updatedProduct.quantity - 1;
    //subtract product price from product total
    updatedProduct.productTotal = updatedProduct.productTotal - product.price;
    //update current product
    currentProductInCart = updatedProduct;

    ///UPDATE cart quantity
    const cartQuantities = existingCart.products.map(
      (product) => product.quantity
    );
    existingCart.cartQuantity = cartQuantities.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    ///UPDATE cart total
    const productPrices = existingCart.products.map(
      (product) => product.productTotal
    );
    existingCart.cartTotal = productPrices.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );
    await existingCart.save();
    return res.status(200).json(existingCart);
  }
});

router.put("/delete/:id", async (req, res) => {
  const { product } = req.body;
  //Find cart by user id and cart id
  const existingCart = await Cart.findOne({
    userId: req.user._id,
    _id: req.params.id,
    isOpen: true,
  });
  //Find current product in user cart
  existingCart.products = existingCart.products.filter(
    (item) => item._id.toString() !== product._id.toString()
  );

  ///UPDATE cart total
  //Get array of product prices
  const productPrices = existingCart.products.map(
    (product) => product.productTotal
  );

  // //Calculate cart total  with reduce method
  existingCart.cartTotal = productPrices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  // //UPDATE cart quantity
  const cartQuantities = existingCart.products.map(
    (product) => product.quantity
  );

  existingCart.cartQuantity = cartQuantities.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue;
    },
    0
  );
  await existingCart.save();
  res.status(200).json(existingCart);
});

//Get cart for current user
router.get("/", async (req, res) => {
  try {
    const existingCart = await Cart.findOne({
      userId: req.user._id,
      isOpen: true,
    });
    res.status(200).json(existingCart);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
