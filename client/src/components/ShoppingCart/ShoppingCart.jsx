import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./ShoppingCart.scss";

const baseUrl = "http://localhost:8080/api";

export function ShoppingCart(props) {
  const [cart, setCart] = useState();
  const token = sessionStorage.getItem("token");

  //didmount & didupdate
  useEffect(() => {
    axios
      .get(`${baseUrl}/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCart(res.data))
      .catch((err) => alert(err.message));
  }, [token]);

  //INCREASE product quantity in cart
  const increaseQty = async (product, cartId) => {
    axios
      .put(
        `${baseUrl}/cart/increase/${cartId}`,
        { product, cartId },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setCart(res.data))
      .catch((err) => alert(err.message));
  };

  //DECREASE product quantity in cart
  const decreaseQty = async (product, cartId) => {
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
      .catch((err) => alert(err.message));
  };

  //DELETE selected product from cart
  const deleteProduct = async (product, cartId) => {
    console.log(cartId);
    console.log("PRODUCT", product);
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
      .catch((err) => alert(err.message));
  };
  console.log(cart);
  return (
    <section className="cart">
      <div className="cart__list">
        <div className="cart__list--title">
          {!cart && !cart ? (
            <div>
              <h1>Your cart is empty, continue shopping</h1>
            </div>
          ) : (
            <h1>Items in your cart</h1>
          )}
        </div>
        {cart?.products?.map((product) => {
          return (
            //  ADJUST FONT SIZES FOR BREAKPOINTS
            <Card key={product.productId} className="cart__card">
              <Card.Img
                className="cart__card--image"
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Link to={`/product/${product.productId}`}>
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Link to={`/categories`}>
                  <Card.Text>{`${product.category}`}</Card.Text>
                </Link>
              </Card.Body>
              <ListGroup className="cart__info">
                <ListGroupItem>{`Price: $${product.productTotal.toFixed(
                  2
                )}`}</ListGroupItem>
                <ListGroupItem>
                  <div
                    onClick={() => {
                      decreaseQty({ ...product }, cart._id);
                    }}
                  >
                    -
                  </div>
                  {`Qty: ${product.quantity}`}
                  <div
                    onClick={() => {
                      increaseQty({ ...product }, cart._id);
                    }}
                  >
                    +
                  </div>
                </ListGroupItem>

                <ListGroupItem
                  className="cart__info--remo"
                  onClick={() => {
                    deleteProduct({ ...product }, cart._id);
                  }}
                >
                  Remove
                </ListGroupItem>
              </ListGroup>
            </Card>
          );
        })}
      </div>
      {!cart && !cart ? (
        <div />
      ) : (
        <div className="cart__footer">
          <div className="cart__footer--total">
            <h2>
              Your total:{" "}
              {/* <Badge variant="secondary">{`$${cart?.cartTotal.toFixed(
              2
            )}`}</Badge> */}
            </h2>
            <h2>{`$${cart?.cartTotal.toFixed(2)}`}</h2>
          </div>
          <div className="cart__footer--qty">
            <h2>
              Total items:
              {/* <Badge variant="secondary">{cart?.cartQuantity}</Badge> */}
            </h2>
            <h2>{cart?.cartQuantity}</h2>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShoppingCart;
