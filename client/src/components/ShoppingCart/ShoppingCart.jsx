import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import "./ShoppingCart.scss";

const baseUrl = "http://localhost:8080/api";

export function ShoppingCart(props) {
  const [cart, setCart] = useState();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    // const token = sessionStorage.getItem("token");
    //   // Get user cart
    axios
      .get(`${baseUrl}/cart`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err.message));
    //   //delete selected product from user cart
    //   axios.put(`/cart/${cartId}`);
  }, [token]);

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
      .catch((err) => console.log(err.message));
  };

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
      .catch((err) => console.log(err.message));
  };

  const deleteProduct = async (product, cartId) => {
    console.log(cartId);
    ///////// CHECK CART ID AND SEE WHY ITS UNDEFINED!
    // await axios
    //   .put(
    //     `${baseUrl}/cart/delete/${cartId}`,
    //     { product, cartId },
    //     {
    //       headers: {
    //         authorization: `Bearer ${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err.message));
  };
  // console.log(cart);
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
        {cart?.products.map((product) => {
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
                <Link to="/categories">
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
                  onClick={() => {
                    deleteProduct({ ...product }, cart._Id);
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
