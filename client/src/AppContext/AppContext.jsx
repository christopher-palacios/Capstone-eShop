import React, { createContext, useState, useEffect } from "react";
import swal from "sweetalert";
import axios from "axios";

const baseUrl = "http://localhost:8080/api";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [drop, setDrop] = useState("");
  const [cart, setCart] = useState();
  const [purchased, setPurchased] = useState();

  //Get cart
  const getCart = async () => {
    axios
      .get(`${baseUrl}/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCart(res.data))
      .catch((err) => swal(err.message));
  };

  const getCategoryList = async () => {
    axios
      .get(`${baseUrl}/categories`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => swal(err.message));
  };

  //Get current user
  const getCurrentuser = async () => {
    axios
      .get(`${baseUrl}/users/current`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCurrentUser(res.data))
      .catch((err) => swal(err.message));
  };

  //INCREASE product quantity in cart
  const increaseQty = async (product, cartId) => {
    setLoading(true);
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
        .then((res) =>
          setTimeout(() => {
            setCart(res.data);
            setLoading(false);
          }, 1500)
        )
        .catch((err) => swal(err.message));
    } catch (error) {
      swal(
        "Please login or create an account to add items to your cart",
        error.message
      );
    }
  };

  //DECREASE product quantity in cart
  const decreaseQty = async (product, cartId) => {
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
  };

  //DELETE selected product from cart
  const deleteProduct = async (product, cartId) => {
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
  };

  useEffect(() => {
    getCategoryList();
    if (token && !currentUser) {
      getCurrentuser();
      getCart();
    }
  }, [currentUser, token]);

  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedProduct,
        setSelectedProduct,
        loading,
        setLoading,
        categoryList,
        setCategoryList,
        currentUser,
        setCurrentUser,
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
