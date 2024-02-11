import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import {CheckoutSuccess} from "./checkout-success";

//import "./App.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = await loadStripe("pk_test_51OiK2DBuXHcYytHqXLHMDXOwcLOovDVD6XvZ0DGGqrOm0mTZzErygmvEFuCfO7L0CzKojUpI6EvJMBp13bOmW5WH003ui52YSz");
export const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('');
  console.log("hello from checkout form")
  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("hello from fetch")
        console.log(data)
        setClientSecret(data.clientSecret)
      });
  }, []);

  return (
    <div id="checkout">
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{clientSecret, onComplete: () => {console.log("complete")}}}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [sentTxn, setSentTxn] = useState(false);

  useEffect(() => {
    console.log("hello")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`http://localhost:4242/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    console.log("hello from success!!")
    // ideas on how to send txn
    // 1. use a trial account
    // 2. use a LAK?
    
    return (
      <CheckoutSuccess customerEmail={customerEmail} />
    )
  }

  return null;
}
