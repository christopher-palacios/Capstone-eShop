import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext/AppContext";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Modal, Button } from "react-bootstrap";
import Field from "../../components/Field/Field";
import axios from "axios";
const baseUrl = "http://localhost:8080/api";

function CheckoutModal(props) {
  const {
    cart,
    token,
    loading,
    setLoading,
    setPurchased,
    setCart,
  } = useContext(AppContext);
  const stripe = useStripe();
  const elements = useElements();
  const [formData, setFormData] = useState({});

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#264653",
        // color: '#fff',
        fontWeight: 700,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "18px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#264653",
        },
        "::placeholder": {
          color: "#e0522f7a",
        },
      },
      invalid: {
        iconColor: "#e76f51",
        color: "#e0522f7a",
      },
    },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    setLoading(true);
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: {
          city: formData.city,
          country: "US",
          line1: formData.line1,
          postal_code: formData.postal_code,
          state: formData.state,
        },
      },
    });

    const { data } = await axios.post(
      `${baseUrl}/order/intent`,
      { cart, paymentMethod },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { paymentIntent } = await stripe.confirmCardPayment(data, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            city: formData.city,
            country: "US",
            line1: formData.line1,
            postal_code: formData.postal_code,
            state: formData.state,
          },
        },
      },
    });

    if (paymentIntent.status === "succeeded") {
      await axios
        .post(
          `${baseUrl}/order`,
          { cart, transactionId: paymentIntent.id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
      setLoading(false);
      setCart({});
      setPurchased(true);
      props.onHide();
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Checkout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="form">
          <h5 className="pl-2">Billing Details</h5>
          <fieldset className="form-group">
            <Field
              label="Name"
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              autoComplete="name"
              onChange={handleChange}
            />
            <Field
              label="Email"
              id="email"
              name="email"
              type="email"
              placeholder="janedoe@gmail.com"
              required
              autoComplete="email"
              onChange={handleChange}
            />
            <Field
              label="Phone"
              id="phone"
              name="phone"
              type="tel"
              placeholder="(941) 555-0123"
              required
              autoComplete="tel"
              onChange={handleChange}
            />
            <Field
              label="Shipping Address"
              id="line1"
              name="line1"
              type="text"
              placeholder="123 Main St"
              required
              autoComplete="line1"
              onChange={handleChange}
            />
            <Field
              label="City"
              id="city"
              name="city"
              type="text"
              placeholder="Miami"
              required
              autoComplete="city"
              onChange={handleChange}
            />
            <Field
              label="State"
              id="state"
              name="state"
              type="text"
              placeholder="FL"
              required
              autoComplete="state"
              onChange={handleChange}
            />
          </fieldset>
          <fieldset className="form-group">
            <CardElement options={CARD_OPTIONS} />
          </fieldset>
        </form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <p>Total: ${cart?.cartTotal?.toFixed()}</p>
        <Button onClick={handlePayment} disabled={loading}>
          {loading ? "Sending..." : "Confirm Payment"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CheckoutModal;
