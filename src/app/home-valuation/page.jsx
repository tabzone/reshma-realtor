"use client";

import React from "react";
import Link from "next/link";
import ValuationForm from "../../components/ValuationForm";

export default function HomeValuationPage() {
  return (
    <div className="rs-page">
      {/* HERO */}
      <section className="rs-hero" style={{ background: 'var(--white)', borderBottom: '1px solid var(--stone)' }}>
        <div>
          <p className="rs-hero-eyebrow">No cost · No obligation</p>
          <h1 className="rs-hero-h1">
            Discover what your<br />
            <em>home is truly worth</em>
          </h1>
          <p className="rs-hero-body">
            Online estimates miss what really matters — your upgrades, your street, your timing.
            Get a precise, human-led valuation backed by real market expertise.
          </p>
          <div className="rs-hero-actions">
            <Link href="/home-valuation/#form" className="rs-btn-outline" style={{ padding: '14px 32px', fontSize: '12px' }}>
              ← Start Valuation
            </Link>
          </div>
        </div>
        <div style={{ paddingLeft: '40px' }}>
          <div className="rs-about-aside" style={{ border: 'none', paddingTop: 0 }}>
            <p className="rs-about-aside-title">Why a human valuation?</p>
            {[
              "Local market expert oversight.",
              "Tailored pricing strategy.",
              "Delivered within 24 hours.",
            ].map((text, i) => (
              <div key={i} className="rs-differentiator">
                <span className="rs-diff-num">0{i + 1}</span>
                <span className="rs-diff-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <main id="form" className="rs-section" style={{ paddingTop: '60px' }}>
        {/* TRUST BAR */}
        

        <div className="rs-about-grid" style={{ gap: '60px' }}>
          <div className="rs-contact-section" style={{ padding: '48px', borderRadius: '8px' }}>
            <h2 className="rs-section-h2" style={{ color: '#fff', marginBottom: '24px' }}>
              Start your<br /><em>valuation.</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.8', fontWeight: 300 }}>
              Fill in a few details and receive a personalized report tailored to your home and market conditions.
              Every valuation is personally reviewed by Reshma.
            </p>
          </div>
          <div>
            <ValuationForm />
          </div>
        </div>

        {/* SUPPORTING COPY */}
        <div className="rs-about-grid" style={{ marginTop: '80px', borderTop: '1px solid var(--stone)', paddingTop: '60px' }}>
          <div>
            <p className="rs-about-body">
              Selling your home is one of the most significant financial decisions you’ll make.
              A precise valuation ensures you price strategically — not leaving money on the table,
              and not scaring away serious buyers.
            </p>
          </div>
          <div>
            <p className="rs-about-body">
              Reshma combines real-time data with on-the-ground expertise to give you a clear, confident next step.
              Your privacy is paramount; your information is used only to prepare your report.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}