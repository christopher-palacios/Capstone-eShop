import React, { createContext, useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";

// https://e-shop-cp.herokuapp.com/api/product/list
export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const baseUrl = "https://e-shop-cp.herokuapp.com/api";
  const token = localStorage.getItem("token");
  // const user = localStorage.getItem("user");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [randomItems, setRandomItems] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  const [drop, setDrop] = useState("");
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState();
  const [logInModalShow, setLogInModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  let storage = JSON.parse(localStorage.getItem("guestCart"));
  const guestCart = {
    isOpen: true,
    products: [],
    cartQuantity: 0,
    cartTotal: 0,
  };

  //Get list of categories
  const getCategoryList = async () => {
    axios
      .get(`${baseUrl}/categories`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => swal(err.message));
  };

  //Get product list
  const getProductList = async () => {
    axios
      .get(`${baseUrl}/product/list`)
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => swal(err.message));
  };

  //CART FUNCTIONS//
  //Get cart
  const getCart = async () => {
    axios
      .get(`${baseUrl}/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCart(res.data))
      .catch((err) => swal("getCart", err.message));
  };
  console.log(cart);
  //INCREASE product quantity in cart
  const increaseQty = async (product, cartId) => {
    if (!token) {
      let guestCart = JSON.parse(localStorage.getItem("guestCart"));
      //find product index in guest cart
      let index = guestCart.products
        .map((product) => product.name)
        .indexOf(product.name);
      //update product quantity
      guestCart.products[index].quantity =
        guestCart.products[index].quantity + 1;
      guestCart.products[index].productTotal =
        guestCart.products[index].productTotal + product.price;
      //recalculate cart totals
      guestCart.cartTotal = guestCart.products
        .map((product) => product.productTotal)
        .reduce((acc, curr) => acc + curr);
      guestCart.cartQuantity = guestCart.products
        .map((product) => product.quantity)
        .reduce((acc, curr) => acc + curr);
      //save guest cart to state and local storage
      setCart(guestCart);
      localStorage.setItem("guestCart", JSON.stringify(guestCart));
    } else if (token) {
      try {
        await axios
          .put(
            `${baseUrl}/cart/increase/${cartId}`,
            { product, cartId },
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => setCart(res.data), setLoading(false));
      } catch (error) {
        swal(
          "Please login or create an account to add items to your cart",
          error.message
        );
      }
    }
  };

  //DECREASE product quantity in cart
  const decreaseQty = async (product, cartId) => {
    if (!token) {
      let guestCart = JSON.parse(localStorage.getItem("guestCart"));
      //find product index in guest cart
      let index = guestCart.products
        .map((product) => product.name)
        .indexOf(product.name);
      //update product quantity
      guestCart.products[index].quantity =
        guestCart.products[index].quantity - 1;
      guestCart.products[index].productTotal =
        guestCart.products[index].productTotal - product.price;
      //recalculate cart totals
      guestCart.cartTotal = guestCart.products
        .map((product) => product.productTotal)
        .reduce((acc, curr) => acc + curr);
      guestCart.cartQuantity = guestCart.products
        .map((product) => product.quantity)
        .reduce((acc, curr) => acc + curr);
      //save guest cart to state and local storage
      setCart(guestCart);
      localStorage.setItem("guestCart", JSON.stringify(guestCart));
    } else {
      try {
        await axios
          .put(
            `${baseUrl}/cart/decrease/${cartId}`,
            { product },
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => setCart(res.data))
          .catch((err) => swal(err.message));
      } catch (error) {
        swal(error.message);
      }
    }
  };

  //DELETE selected product from cart
  const deleteProduct = async (product, cartId) => {
    if (!token) {
      let guestCart = JSON.parse(localStorage.getItem("guestCart"));
      //remove selected product from guest cart
      if (guestCart.products.length === 1) {
        guestCart.products = [];
        guestCart.cartTotal = 0;
        guestCart.cartQuantity = 0;
      } else if (guestCart.products.length > 1) {
        guestCart.products = guestCart.products.filter(
          (item) => item.name !== product.name
        );
        //recalculate cart totals
        guestCart.cartTotal = guestCart.products
          .map((product) => product.productTotal)
          .reduce((acc, curr) => acc + curr);
        guestCart.cartQuantity = guestCart.products
          .map((product) => product.quantity)
          .reduce((acc, curr) => acc + curr);
      }

      //save guest cart to state and local storage
      setCart(guestCart);
      localStorage.setItem("guestCart", JSON.stringify(guestCart));
    } else {
      try {
        await axios
          .put(
            `${baseUrl}/cart/delete/${cartId}`,
            { product, cartId },
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => setCart(res.data))
          .catch((err) => swal(err.message));
      } catch (error) {
        swal(error.message);
      }
    }
  };
  // const getRandom = () => {
  //   const randomIndex = Math.floor(Math.random() * categoryList?.length);
  //   const randomId = categoryList[randomIndex]?._id;

  //   axios.get(`${baseUrl}/categories/${randomId}`).then((res) => {
  //     setRandomItems(res.data);
  //     console.log(res.data);
  //   });
  // };

  useEffect(() => {
    getCategoryList();
    getProductList();
    // getRandom();
    if (!token && storage === null) {
      setCart(guestCart);
      localStorage.setItem("guestCart", JSON.stringify(guestCart));
    } else if (!token && storage) {
      let guestCart = JSON.parse(localStorage.getItem("guestCart"));
      setCart(guestCart);
    }

    if (token) {
      localStorage.removeItem("guestCart");
      getCart();
    }
  }, [token]);

  return (
    <AppContext.Provider
      value={{
        baseUrl,
        randomItems,
        setRandomItems,
        isSignedIn,
        setIsSignedIn,
        logInModalShow,
        setLogInModalShow,
        signUpModalShow,
        setSignUpModalShow,
        selectedCategory,
        setSelectedCategory,
        selectedProduct,
        setSelectedProduct,
        loading,
        setLoading,
        categoryList,
        setCategoryList,
        productList,
        currentUser,
        setCurrentUser,
        getCategoryList,
        drop,
        setDrop,
        cart,
        setCart,
        token,
        increaseQty,
        decreaseQty,
        deleteProduct,
        purchased,
        setPurchased,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
