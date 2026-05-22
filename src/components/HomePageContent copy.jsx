"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Reshma made our home purchase effortless and enjoyable. Her attention to detail is exceptional.",
    name: "Claire Morgan",
  },
  {
    quote:
      "A truly personalized experience. Reshma found us the perfect home ahead of schedule.",
    name: "James Carter",
  },
];

function formatCity(city) {
  if (!city) return "";

  return String(city)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default function HomePageContent({ city = "" }) {
  const contactFormRef = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const cityName = formatCity(city);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setStatusType("");

    const data = new FormData(contactFormRef.current);
    const value = Object.fromEntries(data.entries());

    axios
      .post("https://formspree.io/f/mnqypzev", {
        fullName: value.fullName,
        email: value.email,
        message: value.message,
        phone: value.phone,
        city: value.city,
      })
      .then(() => {
        setLoading(false);
        setStatus("Message sent successfully.");
        setStatusType("success");
        contactFormRef.current.reset();
      })
      .catch(() => {
        setLoading(false);
        setStatus("Failed to send. Please try again.");
        setStatusType("error");
      });
  };

  return (
    <div className="rs-page">
      {/* HERO */}
      <section className="rs-hero">
        <div>
          <p className="rs-hero-eyebrow">Bay Area Real Estate</p>

          <h1 className="rs-hero-h1">
            Bay Area
            <br />
            <em>real estate</em>
            <br />
            tailored around you.
          </h1>

          <p className="rs-hero-body">
            Strategic guidance for buyers, sellers, and investors across the
            Bay Area — combining modern marketing, local expertise, and
            personalized representation.
          </p>

          <div className="rs-hero-actions">
            <a
              href="tel:+14084789170"
              className="rs-btn-outline"
              style={{ padding: "14px 32px", fontSize: "12px" }}
            >
              +1 408 478 9170
            </a>
          </div>
        </div>

        <div className="rs-hero-img-wrap">
          <Image
            src="/images/hero.png"
            alt="Modern home exterior"
            width={700}
            height={560}
            style={{
              width: "100%",
              height: "560px",
              objectFit: "cover",
              display: "block",
            }}
            priority
          />
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="rs-section"
        style={{ scrollMarginTop: "72px" }}
      >
        <div className="rs-about-grid" style={{ alignItems: "center" }}>
          <div>
            <p className="rs-section-eyebrow">Meet Reshma Sait</p>

            <h2 className="rs-section-h2">
              A dedication to
              <br />
              <em>your success.</em>
            </h2>

            <div style={{ marginTop: "32px" }}>
              <p className="rs-about-body">
               {` Reshma Sait is more than just a real estate agent; she is a
                trusted advisor and strategic partner in your real estate
                journey. With extensive experience in the Bay Area market,
                Reshma has built a reputation for integrity, exceptional
                service, and results-driven representation.`}
              </p>

              <p className="rs-about-body" style={{ marginTop: "20px" }}>
              {`  Combining local expertise with a modern approach to marketing,
                negotiation, and client service, Reshma helps buyers, sellers,
                and investors navigate today’s competitive market with
                confidence.`}
              </p>

              <p className="rs-about-body" style={{ marginTop: "20px" }}>
              {`  Whether you're purchasing your first home, selling a longtime
                residence, or expanding your investment portfolio, every client
                receives personalized guidance tailored to their goals.`}
              </p>
            </div>
          </div>

          <div className="rs-about-aside">
            <p className="rs-about-aside-title">Why work with Reshma</p>

            {[
              "Personalized strategies tailored to your goals.",
              "Bay Area market expertise and insight.",
              "Modern marketing for maximum exposure.",
              "Full-service representation from start to close.",
            ].map((text, i) => (
              <div key={i} className="rs-differentiator">
                <span className="rs-diff-num">0{i + 1}</span>
                <span className="rs-diff-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMISSION */}
      <section className="px-6 lg:px-12 py-24">
        <div className="max-w-7xl mx-auto bg-[#111827] rounded-[40px] overflow-hidden">

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center">

            {/* LEFT */}
            <div className="p-10 md:p-16 lg:p-20 text-white">

              <p className="uppercase tracking-[0.28em] text-xs text-[#C9A227] mb-6">
                Bay Area Seller Representation
              </p>

              <h2 className="text-5xl md:text-7xl leading-[0.95] font-light tracking-[-0.04em] mb-8">
                Keep More of
                <br />
                Your Equity.

                <span className="block text-[#C9A227] mt-5 text-2xl md:text-3xl tracking-normal">
                  Full-Service Listing Representation at 1.5%
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-9 max-w-2xl mb-10">
                Professional photography, MLS exposure, digital marketing,
                negotiation support, open houses, staging guidance, and
                personalized seller representation — all included.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  "Photography",
                  "MLS Exposure",
                  "Open Houses",
                  "Digital Marketing",
                  "Negotiation",
                  "Staging Guidance",
                ].map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 rounded-full px-5 py-3 text-sm text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">

                <Link
                  href="/commission/1-5-commission"
                  className="inline-flex items-center justify-center bg-[#C9A227] hover:bg-[#b8921d] text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] transition-all duration-300"
                >
                 {` View What's Included →`}
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/15 hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] transition-all duration-300"
                >
                  Free Consultation
                </Link>

              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#F7F4EE] h-full flex items-center justify-center p-10 lg:p-16">

              <div className="w-full max-w-md bg-white rounded-[32px] p-10 border border-[#ECE7DD] shadow-xl">

                <div className="flex items-end gap-3 mb-8">

                  <span className="text-8xl leading-none font-light text-[#111827]">
                    1.5
                  </span>

                  <span className="text-3xl text-[#C9A227] mb-2">
                    %
                  </span>

                </div>

                <div className="h-px bg-[#ECE7DD] mb-8" />

                <div>

                  <p className="uppercase tracking-[0.24em] text-xs text-[#C9A227] mb-6">
                    Included Services
                  </p>

                  <div className="space-y-5">

                    {[
                      "Professional Photography",
                      "3D Virtual Tours",
                      "Digital Marketing",
                      "MLS + Zillow Exposure",
                      "Seller Representation",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 text-[#4B5563]"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#C9A227]" />

                        <span>{item}</span>
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <div
        id="services"
        className="rs-services-bg"
        style={{ scrollMarginTop: "72px" }}
      >
        <div className="rs-section" style={{ paddingBottom: "100px" }}>
          <p className="rs-section-eyebrow">What we offer</p>

          <h2 className="rs-section-h2">
            Strategic support,
            <br />
            <em>every step of the way.</em>
          </h2>

          <div className="rs-services-grid">
            <div className="rs-service-card">
              <p className="rs-service-num">01</p>

              <p className="rs-service-title">
                Buyer Representation
              </p>

              <p className="rs-service-body">
                Personalized search, market insight, and expert negotiation
                to secure the right property — on your terms and timeline.
              </p>
            </div>

            <div className="rs-service-card">
              <p className="rs-service-num">02</p>

              <p className="rs-service-title">
                Seller Strategy
              </p>

              <p className="rs-service-body">
                Strategic pricing, high-end presentation, and targeted
                marketing designed to maximize exposure and results.
              </p>

              <Link
                href="/home-valuation"
                className="rs-service-link"
              >
                Free valuation →
              </Link>
            </div>

            <div className="rs-service-card">
              <p className="rs-service-num">03</p>

              <p className="rs-service-title">
                Investment Advisory
              </p>

              <p className="rs-service-body">
                Data-driven guidance for portfolio expansion, market
                opportunities, and long-term real estate investment strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div
        id="quote"
        className="rs-contact-section"
        style={{ scrollMarginTop: "72px" }}
      >
        <div className="rs-contact-inner">

          <div className="rs-contact-left">

            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "20px",
                fontWeight: 500,
              }}
            >
              Free Consultation
            </p>

            <h2>
             {` Let's discuss your`}
              <br />
              <em>next move.</em>
            </h2>

            <p>
              Share your goals and timeline. Reshma will respond with
              personalized guidance for buying, selling, or investing in
              Bay Area real estate.
            </p>

            <div className="rs-contact-phone-block">
              <span className="rs-contact-phone-label">
                Direct line
              </span>

              <a
                href="tel:+14084789170"
                className="rs-contact-phone"
              >
                +1 408 478 9170
              </a>
            </div>

          </div>

          <div>

            {status && (
              <div className={`rs-form-status ${statusType}`}>
                {status}
              </div>
            )}

            <form
              ref={contactFormRef}
              onSubmit={onFormSubmit}
              className="rs-form"
            >
              <input
                type="hidden"
                name="city"
                value={cityName}
              />

              <div className="rs-form-row">

                <div className="rs-field">
                  <label>Full Name</label>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="rs-field">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

              </div>

              <div className="rs-form-row">

                <div className="rs-field">
                  <label>Phone</label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="(408) 000-0000"
                  />
                </div>

                <div className="rs-field">
                  <label>Property Type</label>

                  <select name="propertyType">
                    <option>Home Purchase</option>
                    <option>Home Sale</option>
                    <option>Investment Property</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              <div className="rs-form-full rs-field">
                <label>Message</label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals or timeline"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="rs-form-submit"
              >
                {loading
                  ? "Sending…"
                  : "Schedule Consultation"}
              </button>

            </form>

          </div>

        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials" className="rs-testimonials-section">

        <div className="rs-testimonials-inner">

          <p className="rs-section-eyebrow">
            Client stories
          </p>

          <h2 className="rs-section-h2">
            Trusted by
            <br />
            <em>Bay Area homeowners.</em>
          </h2>

          <div className="rs-testimonials-grid">

            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rs-testimonial-card"
              >
                <span className="rs-testimonial-quote-mark">
                  {`"`}
                </span>

                <p className="rs-testimonial-text">
                  {item.quote}
                </p>

                <p className="rs-testimonial-author">
                  {item.name}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* VALUATION CTA */}
      <div className="rs-valuation">

        <div className="rs-valuation-card">

          <div>

            <p className="rs-valuation-label">
              No cost. No obligation.
            </p>

            <h3 className="rs-valuation-headline">
              What is your
              <br />
              <em>home worth?</em>
            </h3>

            <p className="rs-valuation-sub">
              Let Reshma provide a personalized home valuation based on
              current Bay Area market conditions.
            </p>

          </div>

          <Link
            href="/home-valuation"
            className="rs-valuation-btn"
          >
            Get a Home Valuation
          </Link>

        </div>

      </div>
    </div>
  );
}