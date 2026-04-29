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
      .post("https://formspree.io/f/mnqyzaaa", {
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
    <div className="rounded-[32px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
      {status && (
        <div
          className={`mb-10 rounded-2xl border px-6 py-4 text-sm ${
            statusType === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          }`}
        >
          {status}
        </div>
      )}

      <form ref={formRef} onSubmit={onFormSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="(000) 000-0000"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Street Address *</label>
            <input
              type="text"
              name="address"
              required
              placeholder="Property Address"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">City *</label>
            <input type="text" name="city" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">State *</label>
            <input type="text" name="state" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Zip *</label>
            <input type="text" name="zip" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Bedrooms *</label>
            <input type="number" name="bedrooms" required min="0" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Bathrooms *</label>
            <input type="number" name="bathrooms" required min="0" step="0.5" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Property Type</label>
            <select name="propertyType" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10">
              <option value="Single Family Home">Single Family Home</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Multi-Family">Multi-Family</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Plan to Sell</label>
            <select name="sellingTimeline" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10">
              <option value="Immediately">Immediately</option>
              <option value="1-3 Months">1-3 Months</option>
              <option value="Just Curious">Just Curious</option>
            </select>
          </div>
          <div className="space-y-2 md:col-span-2 lg:col-span-1">
            <label className="text-sm font-medium text-slate-700">Listing Status</label>
            <select name="listingStatus" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/10">
              <option value="Not Currently Listed">Not Currently Listed</option>
              <option value="Listed with Agent">Listed with Agent</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-full bg-[#002147] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-[#001533] disabled:opacity-70"
        >
          {loading ? "Processing..." : "Get Free Valuation"}
        </button>
      </form>
    </div>
  );
}
