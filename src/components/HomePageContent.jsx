"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const testimonials = [
  {
    quote: "Reshma made our home purchase effortless and enjoyable. Her attention to detail is exceptional.",
    name: "Claire Morgan",
    role: "Homeowner, Los Gatos",
  },
  {
    quote: "A truly personalized experience. Reshma found us the perfect luxury home ahead of schedule.",
    name: "James Carter",
    role: "Investor, Saratoga",
  },
];

const stats = [
  { title: "Years of experience", value: "12+" },
  { title: "Client satisfaction", value: "9.5" },
  { title: "Homes sold", value: "300+" },
  { title: "Total sales volume", value: "$500M+" },
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
          <p className="rs-hero-eyebrow">Luxury Real Estate · Bay Area & Beyond</p>
          <h1 className="rs-hero-h1">
            Find your<br />
            <em>dream home</em><br />
            with Reshma.
          </h1>
          <p className="rs-hero-body">
            Expert guidance, curated service, and premium listings across top U.S. markets. Tailored for discerning buyers, sellers, and investors.
          </p>
          <div className="rs-hero-actions">
            <a href="#quote" className="rs-btn-gold" style={{ padding: '14px 32px', fontSize: '12px' }}>Get a quote</a>
            <a href="tel:+14084789170" className="rs-btn-outline" style={{ padding: '14px 32px', fontSize: '12px' }}>+1 408 478 9170</a>
          </div>
        </div>
        <div className="rs-hero-img-wrap">
          <Image
            src="/images/hero.png"
            alt="Luxury home exterior"
            width={700}
            height={560}
            style={{ width: '100%', height: '560px', objectFit: 'cover', display: 'block' }}
            priority
          />
          <div className="rs-hero-badge">
            <span className="rs-hero-badge-num">$500M+</span>
            <span className="rs-hero-badge-label">Total sales volume</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="rs-stats">
        <div className="rs-stats-inner">
          {stats.map((stat) => (
            <div key={stat.title} className="rs-stat-item">
              <span className="rs-stat-accent" />
              <span className="rs-stat-value">{stat.value}</span>
              <span className="rs-stat-label">{stat.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT / MEET RESHMA */}
      <section id="about" className="rs-section" style={{ scrollMarginTop: '72px' }}>
        <div className="rs-about-grid" style={{ alignItems: 'center' }}>
          <div>
            <p className="rs-section-eyebrow">Meet Reshma Sait</p>
            <h2 className="rs-section-h2">A dedication to<br /><em>your success.</em></h2>
            <div style={{ marginTop: '32px' }}>
              <p className="rs-about-body">
                Reshma Sait is more than just a real estate agent; she is a trusted advisor and a strategic partner in your real estate journey. With over a decade of experience in the high-stakes Bay Area market, Reshma has built a reputation for her unwavering integrity, discreet service, and exceptional results.
              </p>
              <p className="rs-about-body" style={{ marginTop: '20px' }}>
                Specializing in luxury estates and premium residential properties, she combines a deep understanding of market dynamics with a concierge-level approach. Her philosophy is simple: every client deserves a white-glove experience, regardless of the price point.
              </p>
              <p className="rs-about-body" style={{ marginTop: '20px' }}>
                Whether you're looking for your first dream home, expanding your investment portfolio, or selling a multi-million dollar estate, Reshma provides the data-driven insights and refined negotiation skills needed to navigate the complexities of today's market with confidence.
              </p>
            </div>
          </div>

          <div className="rs-about-aside">
            <p className="rs-about-aside-title">Why work with Reshma</p>
            {[
              "Personalized strategies tailored to your unique goals.",
              "Exclusive access to off-market luxury listings.",
              "Comprehensive marketing for maximum property exposure.",
              "Full-service support from listing to closing."
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
      <div className="rs-commission">
        <div className="rs-commission-inner">
          <div>
            <span className="rs-commission-label">Listing commission</span>
            <div className="rs-commission-rate">1.5<sup>%</sup></div>
          </div>
          <div>
            <span className="rs-commission-label">What this means for you</span>
            <p className="rs-commission-headline">
              Keep more of what<br />your home is worth.
            </p>
          </div>
          <div className="rs-commission-includes">
            <p className="rs-commission-includes-title">Included</p>
            <ul className="rs-commission-list">
              <li>Complimentary staging</li>
              <li>Professional photography</li>
              <li>3D virtual tours</li>
              <li>Full marketing suite</li>
              <li>…and much more</li>
            </ul>
          </div>
        </div>
      </div>

      {/* MARKET STATS */}
      <div className="rs-market">
        <p className="rs-market-header">Cambrian Park Market · Single-Family Residential · April 2026</p>
        <div className="rs-market-card">
          <div>
            <p className="rs-market-stat-label">Median Sold Price</p>
            <p className="rs-market-stat-value">$2.1M</p>
          </div>
          <div className="rs-market-divider" />
          <div>
            <p className="rs-market-stat-label">Homes Sold</p>
            <p className="rs-market-stat-value">28</p>
          </div>
          <div className="rs-market-divider" />
          <div>
            <p className="rs-market-stat-label">Avg. Price / Sq Ft</p>
            <p className="rs-market-stat-value">$1,216</p>
          </div>
          <div className="rs-market-insight">
            Strong seller conditions in 95124. Average sale-to-list ratio of <strong>104.6%</strong> with 77 active SFR listings — homes are moving fast.
          </div>
          <div className="rs-market-cta">
            <Link href="/home-valuation" className="rs-btn-gold" style={{ fontSize: '11px', display: 'inline-block', padding: '14px 28px' }}>
              Get valuation →
            </Link>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div id="services" className="rs-services-bg" style={{ scrollMarginTop: '72px' }}>
        <div className="rs-section" style={{ paddingBottom: '100px' }}>
          <p className="rs-section-eyebrow">What we offer</p>
          <h2 className="rs-section-h2">White-glove support,<br /><em>every step of the way.</em></h2>
          <div className="rs-services-grid">
            <div className="rs-service-card">
              <p className="rs-service-num">01</p>
              <p className="rs-service-title">Buyer Representation</p>
              <p className="rs-service-body">Personalized search, market insight, and expert negotiation to secure the right luxury property — on your terms and timeline.</p>
            </div>
            <div className="rs-service-card">
              <p className="rs-service-num">02</p>
              <p className="rs-service-title">Seller Strategy</p>
              <p className="rs-service-body">Strategic pricing, high-end presentation, and targeted outreach that consistently achieves premium results for discerning sellers.</p>
              <Link href="/home-valuation" className="rs-service-link">Free valuation →</Link>
            </div>
            <div className="rs-service-card">
              <p className="rs-service-num">03</p>
              <p className="rs-service-title">Investment Advisory</p>
              <p className="rs-service-body">Data-driven guidance for portfolio expansion, off-market access, and long-term wealth building through premium real estate.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div id="quote" className="rs-contact-section" style={{ scrollMarginTop: '72px' }}>
        <div className="rs-contact-inner">
          <div className="rs-contact-left">
            <p style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px', fontWeight: 500 }}>
              Request a quote
            </p>
            <h2>Start your<br /><em>luxury real estate</em><br />journey today.</h2>
            <p>Share your goals and timeline. Reshma will respond with a custom plan for buying, selling, or investing in a premium property.</p>
            <div className="rs-contact-phone-block">
              <span className="rs-contact-phone-label">Direct line</span>
              <a href="tel:+14084789170" className="rs-contact-phone">+1 408 478 9170</a>
            </div>
          </div>
          <div>
            {status && (
              <div className={`rs-form-status ${statusType}`}>{status}</div>
            )}
            <form ref={contactFormRef} onSubmit={onFormSubmit} className="rs-form">
              <input type="hidden" name="city" value={cityName} />
              <div className="rs-form-row">
                <div className="rs-field">
                  <label>Full Name</label>
                  <input type="text" name="fullName" placeholder="Your name" required />
                </div>
                <div className="rs-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="rs-form-row">
                <div className="rs-field">
                  <label>Phone</label>
                  <input type="tel" name="phone" placeholder="(408) 000-0000" />
                </div>
                <div className="rs-field">
                  <label>Property Type</label>
                  <select name="propertyType">
                    <option>Luxury home</option>
                    <option>Investment property</option>
                    <option>Estate sale</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="rs-form-full rs-field">
                <label>Message</label>
                <textarea name="message" rows={5} placeholder="Describe your ideal property, timeline, or sale objectives" required />
              </div>
              <button type="submit" disabled={loading} className="rs-form-submit">
                {loading ? "Sending…" : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div id="testimonials" className="rs-testimonials-section">
        <div className="rs-testimonials-inner">
          <p className="rs-section-eyebrow">Client stories</p>
          <h2 className="rs-section-h2">Trusted by<br /><em>satisfied homeowners.</em></h2>
          <div className="rs-testimonials-grid">
            {testimonials.map((item) => (
              <div key={item.name} className="rs-testimonial-card">
                <span className="rs-testimonial-quote-mark">"</span>
                <p className="rs-testimonial-text">{item.quote}</p>
                <p className="rs-testimonial-author">{item.name}</p>
                <p className="rs-testimonial-role">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* VALUATION CTA */}
      <div className="rs-valuation">
        <div className="rs-valuation-card">
          <div>
            <p className="rs-valuation-label">No cost. No obligation.</p>
            <h3 className="rs-valuation-headline">What is your<br /><em>home worth?</em></h3>
            <p className="rs-valuation-sub">Let Reshma find your home's current market value today.</p>
          </div>
          <Link href="/home-valuation" className="rs-valuation-btn">Get a Home Valuation</Link>
        </div>
      </div>
    </div>
  );
}