import React, { useContext, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { AppContext } from "../../AppContext/AppContext";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { Link, Redirect } from "react-router-dom";
import swal from "sweetalert";
import "./ShoppingCart.scss";
import Stripe from "../../components/Stripe/Stripe";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export function ShoppingCart() {
  const {
    cart,
    decreaseQty,
    increaseQty,
    deleteProduct,
    purchased,
    currentUser,
    setCart,
    token,
    // showCheckoutModal,
    // setShowCheckoutModal,
    // setPurchased,
  } = useContext(AppContext);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  let guestCart = JSON.parse(localStorage.getItem("guestCart"));
  const checkAuth = () => {
    if (!token) {
      swal("Please sign in to checkout");
    } else {
      setShowCheckoutModal(true);
    }
  };

  const renderPurchaseMessage = () => {
    return swal("Thank you for your purchase")(<Redirect to="/" />);
  };

  const renderEmptyCartMessage = () => {
    return (
      <div className="cart__alt">
        <h3 className="cart__alt--title">Your cart</h3>
        <p className="cart__alt--empty">
          No items in your cart, please continue shopping!
        </p>
      </div>
    );
  };

  useEffect(() => {
    console.log(guestCart);

    if (!token) {
      setCart(guestCart);
    }
  }, []);

  if (purchased) {
    return renderPurchaseMessage();
  }

  if (!cart?.products || cart?.products?.length < 1) {
    return renderEmptyCartMessage();
  }
  return (
    <section className="cart">
      <div className="cart__list">
        <div className="cart__list--title"></div>
        {cart?.products?.map((product) => {
          return (
            //  ADJUST FONT SIZES FOR BREAKPOINTS
            <Card key={product.productId} className="cart__card">
              <Card.Img
                className="cart__card--image"
                variant="top"
                src={product.image}
              />
              <Card.Body className="cart__card--body">
                <Link to={`/product/${product.productId}`}>
                  <Card.Title>{product.name}</Card.Title>
                </Link>
                <Link to={`/categories`}>
                  <Card.Text>{`${product.category}`}</Card.Text>
                </Link>
              </Card.Body>
              <ListGroup className="cart__info">
                <ListGroupItem className="cart__info--price">{`Price: $${product.productTotal.toFixed(
                  2
                )}`}</ListGroupItem>
                <ListGroupItem className="cart__info--qty">
                  <div
                    className="cart__info--sub"
                    onClick={() => {
                      decreaseQty({ ...product }, cart._id);
                    }}
                  >
                    -
                  </div>
                  {`Qty: ${product.quantity}`}
                  <div
                    className="cart__info--add"
                    onClick={() => {
                      increaseQty({ ...product }, cart._id);
                    }}
                  >
                    +
                  </div>
                </ListGroupItem>

                <Button
                  className="cart__info--remo"
                  onClick={() => {
                    deleteProduct({ ...product }, cart._id);
                  }}
                >
                  Remove
                </Button>
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
          <button
            // onClick={() => setShowCheckoutModal(true)}
            onClick={() => checkAuth()}
            className="cart__footer--checkout"
          >
            Checkout
          </button>
        </div>
      )}
      <Stripe />
      {/* <Elements loadStripe={stripePromise}>
        <CheckoutModal
          show={showCheckoutModal}
          onHide={() => setShowCheckoutModal(false)}
        />
      </Elements> */}
    </section>
  );
}

export default ShoppingCart;
