import React from "react";
import { Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "./CardForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51Ih6BjA0P6i7Lbo4auI0dajeWTbAN23o06gqUPQJEaIVpIv2TYL4j1BwepoHOuc07M8MnxULcYOR9w9Q2JyIYjZM00clJLnJgh"
);

const ProcessPayment = ({handlePayment}) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CardForm handlePayment={handlePayment}></CardForm>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
