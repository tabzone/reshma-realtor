"use client";

import React, { useRef, useState } from "react";
import axios from "axios";

export default function ValuationForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    const data = new FormData(formRef.current);
    const value = Object.fromEntries(data.entries());

    axios
      .post("https://formspree.io/f/mnqypzev", {
        subject: "New Home Valuation Request",
        ...value
      })
      .then((res) => {
        setLoading(false);
        setStatus("Thank you! Your valuation request has been sent successfully.");
        setStatusType("success");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setStatus("There was an error sending your request. Please try again.");
        setStatusType("error");
      });
  };

  return (
    <div className="rs-form-container" style={{ background: 'var(--navy-mid)', padding: '40px', borderRadius: '4px' }}>
      {status && (
        <div className={`rs-form-status ${statusType}`}>{status}</div>
      )}

      <form ref={formRef} onSubmit={onFormSubmit} className="rs-form">
        <div className="rs-form-row">
          <div className="rs-field">
            <label>Name *</label>
            <input type="text" name="name" required placeholder="Full Name" />
          </div>
          <div className="rs-field">
            <label>Email *</label>
            <input type="email" name="email" required placeholder="email@example.com" />
          </div>
        </div>

        <div className="rs-form-row">
          <div className="rs-field">
            <label>Phone *</label>
            <input type="tel" name="phone" required placeholder="(000) 000-0000" />
          </div>
          <div className="rs-field">
            <label>Street Address *</label>
            <input type="text" name="address" required placeholder="Property Address" />
          </div>
        </div>

        <div className="rs-form-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="rs-field">
            <label>City *</label>
            <input type="text" name="city" required />
          </div>
          <div className="rs-field">
            <label>State *</label>
            <input type="text" name="state" required />
          </div>
          <div className="rs-field">
            <label>Zip *</label>
            <input type="text" name="zip" required />
          </div>
        </div>

        <div className="rs-form-row">
          <div className="rs-field">
            <label>Bedrooms *</label>
            <input type="number" name="bedrooms" required min="0" />
          </div>
          <div className="rs-field">
            <label>Bathrooms *</label>
            <input type="number" name="bathrooms" required min="0" step="0.5" />
          </div>
        </div>

        <div className="rs-form-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="rs-field">
            <label>Property Type</label>
            <select name="propertyType">
              <option value="Single Family Home">Single Family Home</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Multi-Family">Multi-Family</option>
            </select>
          </div>
          <div className="rs-field">
            <label>Plan to Sell</label>
            <select name="sellingTimeline">
              <option value="Immediately">Immediately</option>
              <option value="1-3 Months">1-3 Months</option>
              <option value="Just Curious">Just Curious</option>
            </select>
          </div>
          <div className="rs-field">
            <label>Listing Status</label>
            <select name="listingStatus">
              <option value="Not Currently Listed">Not Currently Listed</option>
              <option value="Listed with Agent">Listed with Agent</option>
            </select>
          </div>
        </div>

        <button type="submit" disabled={loading} className="rs-form-submit" style={{ marginTop: '24px' }}>
          {loading ? "Processing..." : "Get Free Valuation"}
        </button>
      </form>
    </div>
  );
}
