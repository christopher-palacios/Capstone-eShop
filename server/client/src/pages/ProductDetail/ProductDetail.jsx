import axios from "axios";
import { Form, Button } from "react-bootstrap";
import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import swal from "sweetalert";
import "./ProductDetail.scss";

// const baseUrl = "https://e-shop-cp.herokuapp.com/api";

function OnSale(props) {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [quantity] = useState(1);
  const { setCart, token, baseUrl } = useContext(AppContext);

  const handleSubmit = (product) => {
    const price = product.price.slice(0, 9).split(",").join("");
    //if not current user
    if (!token) {
      let storage = localStorage.getItem("guestCart");
      let guestCart = JSON.parse(storage);
      const isExist = guestCart.products
        .map((product) => product.name)
        .includes(product.name);
      if (!isExist) {
        let newProduct = {
          quantity: 1,
          productTotal: Number(product.price),
          productId: product._id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          category: product.category,
        };
        //add new product to guest cart
        guestCart.products.push(newProduct);
        //recalculate totals for cart
        guestCart.cartTotal = guestCart.products
          .map((product) => Number(product.productTotal))
          .reduce((acc, curr) => acc + curr);
        guestCart.cartQuantity = guestCart.products
          .map((product) => Number(product.quantity))
          .reduce((acc, curr) => acc + curr);
        //save carts to state and local storage
        localStorage.setItem("guestCart", JSON.stringify(guestCart));
        setCart(guestCart);
        swal("Success!", "Item has beeen added to cart");
      } else if (isExist) {
        //find index of existing product in guest cart
        const existingIndex = guestCart.products
          .map((product) => product.name)
          .indexOf(product.name);
        //update existing product totals
        guestCart.products[existingIndex].productTotal =
          Number(guestCart.products[existingIndex].productTotal) +
          Number(product.price);
        guestCart.products[existingIndex].quantity =
          Number(guestCart.products[existingIndex].quantity) + 1;
        //recalculate cart totals
        guestCart.cartTotal = guestCart.products
          .map((product) => product.productTotal)
          .reduce((acc, curr) => acc + curr);
        guestCart.cartQuantity = guestCart.products
          .map((product) => product.quantity)
          .reduce((acc, curr) => acc + curr);
        //save guest cart to state and local storage
        setCart(guestCart);
        swal("Success!", "Item has beeen updated");
        localStorage.setItem("guestCart", JSON.stringify(guestCart));
      }
    }
    if (token) {
      axios
        .post(
          `${baseUrl}/cart`,
          {
            quantity,
            product,
            price,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          setCart(res.data);
          swal("Success!", "Item has beeen added to cart");
        })
        .catch((err) => swal("Please sign in to continue shopping"));
    }
  };

  useEffect(() => {
    const { id } = props.match.params;
    axios.get(`${baseUrl}/product/${id}`).then((res) => {
      const selectedProduct = res.data;
      setSelectedProduct(selectedProduct);
    });
  }, [props.match.params]);
  return (
    <>
      <div className="product">
        <img
          className="product__img"
          alt="product img"
          src={selectedProduct.image}
        ></img>
        <div className="product__details">
          <div className="product__details--top">
            <div className="product__details--info">
              <h1 className="product__details--title">
                {selectedProduct.name}
              </h1>
              <h3 className="product__details--category">
                {selectedProduct.category}
              </h3>
              <h4>Price: {selectedProduct.price}</h4>
            </div>
            <div className="product__details--action">
              <div className="product__details--qty">
                <Form></Form>
              </div>
              <Button
                onClick={() => {
                  handleSubmit(selectedProduct);
                }}
                className="product__details--add"
                variant="outline-dark"
              >
                ADD TO CART
              </Button>
            </div>
          </div>
          <div className="product__details--footer">
            <p>{selectedProduct.description}</p>
          </div>
          {/* <div className="product__review">
              <div className="product__review--card">
                <div className="product__review--head">
                  <h3>user</h3>
                  <h3>timestamp</h3>
                </div>
                <h3>review text goes here</h3>
              </div>
            </div> */}
        </div>
      </div>
    </>
  );
}

export default OnSale;
