"use client";

import React from "react";
import Link from "next/link";
import ValuationForm from "../../components/ValuationForm";

export default function HomeValuationPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f6] text-slate-900 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="group">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#002147] transition group-hover:text-[#B8860B]">Reshma Realtor</p>
            <p className="text-xs text-slate-500">Luxury properties & concierge service</p>
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-[#002147] transition">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pt-16 lg:px-10">
        <div className="text-center space-y-6 mb-16">
          <span className="inline-flex rounded-full bg-[#B8860B]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#B8860B]">
            Expert Analysis
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl font-serif">
            Get Your Property Valuation Here
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Knowing what your property should sell for in today’s market is a crucial part of the decision to sell. 
            Relying on a formula from a machine that doesn’t know anything about your home – what the neighborhood is like 
            or what you’ve done to improve it – is a risky way to make the right call.
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Instead, get a professional who knows your area in every detail to give you a real evaluation. 
            The completely no-obligation, no-cost report can be begun by filling out the form below. It’s easy and it’s real.
          </p>
        </div>

        <ValuationForm />
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#002147]">Reshma Realtor</p>
          <p className="mt-2 text-sm text-slate-500">© 2024 All Rights Reserved. Luxury Real Estate Concierge.</p>
        </div>
      </footer>
    </div>
  );
}
