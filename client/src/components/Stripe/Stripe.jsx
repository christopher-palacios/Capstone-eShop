import React, { useContext } from "react";

import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { AppContext } from "../../AppContext/AppContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function Stripe() {
  const { showCheckoutModal, setShowCheckoutModal } = useContext(AppContext);
  return (
    <>
      <Elements stripe={stripePromise}>
        <CheckoutModal
          show={showCheckoutModal}
          onHide={() => setShowCheckoutModal(false)}
        />
      </Elements>
    </>
  );
}

export default Stripe;
