import React, { useContext, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { AppContext } from "../../AppContext/AppContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";
import "./ShoppingCart.scss";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export function ShoppingCart(props) {
  const {
    cart,
    currentUser,
    decreaseQty,
    increaseQty,
    deleteProduct,
    purchased,
    setPurchased,
  } = useContext(AppContext);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  const renderLoginMessage = () => {
    return (
      <h6 className="text-center">
        Please login/register to add items to your shopping cart
      </h6>
    );
  };

  const renderPurchaseMessage = () => {
    return (
      <div>
        <h1 className="text-center">Thank you for your Purchase!</h1>
        <Link
          className="text-center"
          to="/"
          onClick={() => setPurchased(false)}
        >
          Go to home
        </Link>
      </div>
    );
  };

  const renderEmptyCartMessage = () => {
    return (
      <div>
        <h4 className="text-center">Your cart</h4>
        <h5 className="text-center">
          No items in your cart, please continue shopping!
        </h5>
      </div>
    );
  };

  if (!currentUser) {
    return renderLoginMessage();
  }

  if (purchased) {
    return renderPurchaseMessage();
  }

  if (!cart?.products || cart?.products?.length < 1) {
    return renderEmptyCartMessage();
  }

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
            onClick={() => setShowCheckoutModal(true)}
            className="cart__footer--checkout"
          >
            Checkout
          </button>
        </div>
      )}
      <Elements stripe={stripePromise}>
        <CheckoutModal
          show={showCheckoutModal}
          onHide={() => setShowCheckoutModal(false)}
        />
      </Elements>
    </section>
  );
}

export default ShoppingCart;
