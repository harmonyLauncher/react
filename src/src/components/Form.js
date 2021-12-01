import React from "react";
import Card from "./Card";

const Form = () => {
  return (
    <Card>
      <form method="post" action="referral-actions.html">
        <div className="mb-3">
          <input
            type="email"
            className="form-control neo-field p-3 text-white"
            id="emailID"
            placeholder="Email ID"
            aria-label="Email ID"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control neo-field p-3 text-white"
            id="wallet-address"
            placeholder="Wallet Address"
            aria-label="wallet address"
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary py-2 px-5" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
