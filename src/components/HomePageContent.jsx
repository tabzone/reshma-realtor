"use client";

import { useState } from "react";
import Link from "next/link";

function Stat({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-display text-5xl font-bold text-[#b8986a] leading-none">
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-[#6b5e4e]">
        {label}
      </span>
    </div>
  );
}

function ServiceCard({ number, title, description, link, linkLabel }) {
  return (
    <div className="group relative border border-[#e0d8cc] bg-white p-8 hover:border-[#b8986a] transition-all duration-300 hover:shadow-lg">
      <span className="block font-display text-6xl font-bold text-[#f0ebe0] group-hover:text-[#e8dcc8] transition-colors select-none mb-4 leading-none">
        {number}
      </span>
      <h3 className="font-display text-xl font-semibold text-[#1a1612] mb-3">
        {title}
      </h3>
      <p className="text-[#5c5044] text-lg leading-relaxed mb-5">
        {description}
      </p>
      {link && (
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#b8986a] hover:text-[#9a7a4e] transition-colors"
        >
          {linkLabel || "Learn more"}
          <span className="text-base">→</span>
        </Link>
      )}
    </div>
  );
}

function TestimonialCard({ quote, name, location }) {
  return (
    <div className="bg-[#faf8f3] border border-[#e0d8cc] p-8 relative">
      <span className="font-display text-6xl text-[#d4c4a8] leading-none absolute top-4 left-6 select-none">
        {`"`}
      </span>
      <p className="text-[#4a3f35] text-base leading-relaxed mt-6 mb-6 italic">
        {quote}
      </p>
      <div>
        <p className="font-semibold text-[#1a1612] text-sm">{name}</p>
        {location && (
          <p className="text-base text-[#8a7a6a] mt-0.5">{location}</p>
        )}
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[#b8986a] flex items-center justify-center">
        <span className="font-display font-bold text-[#b8986a] text-sm">
          {step}
        </span>
      </div>
      <div>
        <h4 className="font-semibold text-[#1a1612] mb-1">{title}</h4>
        <p className="text-[#5c5044] text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e0d8cc]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-medium text-lg text-[#1a1612] pr-4">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full border border-[#b8986a] flex items-center justify-center text-[#b8986a] text-sm font-bold transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-[#5c5044] text-base leading-relaxed pb-5">{answer}</p>
      )}
    </div>
  );
}

export default function HomePageContent() {
  return (
    <div className="font-sans">
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#1a1612]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1612] via-[#1a1612]/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-6">
              Bay Area Real Estate · DRE #02106214
            </p>
            <h1
              className="text-5xl lg:text-7xl  text-white leading-[1.05] mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Bay Area homes,{" "}
              <em className="text-[#b8986a] not-italic">expertly</em> sold.
            </h1>
            <p className="text-[#c8b89a] text-lg leading-relaxed mb-10 max-w-xl">
              Reshma Sait is a licensed Realtor® under REeBroker Group — giving
              you the personal attention of a dedicated agent, backed by the
              oversight and accountability of a full brokerage.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="bg-[#b8986a] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#9a7a4e] transition-colors"
              >
                Free Consultation
              </a>
              <Link
                href="/commission/1-5-commission"
                className="border border-[#b8986a] text-[#b8986a] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#b8986a]/10 transition-colors"
              >
                1.5% Commission →
              </Link>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-px bg-white/10">
            {[
              { value: "1.5%", label: "Listing Commission" },
              { value: "Bay Area", label: "Local Market Focus" },
              { value: "Client-First", label: "Personalized Service" },
              { value: "Licensed", label: "California Real Estate Agent" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#1a1612]/80 backdrop-blur-sm p-10 flex flex-col items-center justify-center gap-2"
              >
                <span
                  className="text-4xl text-[#b8986a]"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-[#8a7a6a]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#b8986a]/60">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-[#b8986a]/40 animate-pulse" />
        </div>
      </section>

      <section className="bg-[#b8986a] py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 lg:gap-12 text-white text-xs font-semibold uppercase tracking-widest">
          {[
            "Licensed Realtor® · DRE #02106214",
            "Supervised by REeBroker Group",
            "San Jose · Silicon Valley · Bay Area",
            "1.5% Full-Service Commission",
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              {i > 0 && (
                <span className="hidden lg:inline text-white/40">·</span>
              )}
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Meet Reshma
            </p>
            <h2
              className="text-4xl lg:text-5xl text-[#1a1612] leading-tight mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              A dedicated agent,
              <em className="text-[#b8986a]">not a corporation.</em>
            </h2>
            <div className="space-y-4 text-[#5c5044] leading-relaxed text-lg">
              <p>
                Reshma Sait is a licensed California Realtor® who works
                exclusively in the Bay Area. She operates under the license and
                supervision of {" "}
                <strong className="text-[#2a2622]">REeBroker Group</strong>,
                meaning every transaction you do with her carries the full
                accountability and compliance oversight of a licensed brokerage
                — not just one agent working alone.
              </p>
              <p>
                When you hire Reshma, you work directly with Reshma. No
                hand-offs, no assistants, no junior agents. She handles your
                transaction personally from the first showing or listing
                appointment through to closing.
              </p>
              <p>
                {`With deep roots in Silicon Valley's competitive market, she
                brings local pricing intelligence, proven negotiation skills,
                and the kind of frank, honest guidance that helps clients make
                confident decisions.`}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 ">
              {[
                "CA Licensed Realtor®",
                "DRE #02106214",
                "REeBroker Group",
                "NAR Member",
              ].map((badge) => (
                <span
                  key={badge}
                  className="border border-[#b8986a] text-[#b8986a] text-xs font-semibold px-3 py-1.5 uppercase tracking-wider"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                n: "01",
                title: "Broker-Supervised Transactions",
                body: "Every deal Reshma handles is conducted under the legal supervision of REeBroker Group. That oversight protects you — and it's what the law requires of every licensed sales agent in California.",
              },
              {
                n: "02",
                title: "Direct, Personal Representation",
                body: "You speak with Reshma, not a team coordinator. She attends every showing, reviews every disclosure, and negotiates directly on your behalf.",
              },
              {
                n: "03",
                title: "Honest Bay Area Market Insight",
                body: "Reshma tells you what a home is actually worth and why — including when a property is overpriced or a neighborhood trend is working against you.",
              },
              {
                n: "04",
                title: "Commission That Makes Sense",
                body: "Full-service seller representation at 1.5%. Every service included. No hidden fees, no reduced effort.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="flex gap-5 border-b border-[#e8e0d4] pb-6 "
              >
                <span
                  className="font-bold text-[#d4c4a8] text-2xl flex-shrink-0 leading-none mt-1"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.n}
                </span>
                <div>
                  <h4 className="font-semibold text-base text-[#1a1612] mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[#5c5044] text-base leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1612] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                Seller Representation
              </p>
              <h2
                className="text-4xl lg:text-5xl text-white leading-tight mb-6"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Keep more of <em className="text-[#b8986a]">your equity.</em>
              </h2>
              <p className="text-[#a09080] leading-relaxed mb-8 text-lg">
                Most listing agents charge 2.5–3%. Reshma charges{" "}
                <strong className="text-white">1.5%</strong> for the same
                full-service representation — professional photography, MLS and
                Zillow exposure, open houses, staging guidance, and hands-on
                negotiation support. Nothing is removed from the package.
              </p>
              <p className="text-[#a09080] leading-relaxed mb-10">
                On a {" "}
                <strong className="text-white">
                  $1.5 million Bay Area home 
                </strong>
                ,{` that's up to`} {" "}
                <strong className="text-[#b8986a]">$15,000 more</strong> in your
                pocket — without sacrificing quality or service.
              </p>
              <Link
                href="/commission/1-5-commission"
                className="inline-flex items-center gap-3 bg-[#b8986a] text-white px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#9a7a4e] transition-colors"
              >
               {` See What's Included →`}
              </Link>
            </div>

            {/* Included services grid */}
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { icon: "📸", label: "Professional Photography" },
                { icon: "🎬", label: "3D Virtual Tours" },
                { icon: "📋", label: "MLS + Zillow Listing" },
                { icon: "🏡", label: "Open Houses" },
                { icon: "🎨", label: "Staging Guidance" },
                { icon: "🤝", label: "Offer Negotiation" },
                { icon: "📊", label: "Comparative Market Analysis" },
                { icon: "📝", label: "Contract & Closing Support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#1a1612] p-6 flex flex-col items-center gap-2 text-center hover:bg-[#2a2018] transition-colors"
                >
                  {/* <span className="text-2xl">{item.icon}</span> */}
                  <span className="text-white text-lg leading-snug">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            What Reshma Offers
          </p>
          <h2
            className="text-4xl lg:text-5xl text-[#1a1612] leading-tight"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Strategic support, <em className="text-[#b8986a]">every step.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-[#e0d8cc]">
          <ServiceCard
            number="01"
            title="Buyer Representation"
            description="Reshma helps buyers find the right home at the right price. That means real-time MLS access, honest evaluation of each property, and aggressive but disciplined offer strategy in Bay Area's competitive bidding environment."
            link="/#quote"
            linkLabel="Talk to Reshma"
          />
          <ServiceCard
            number="02"
            title="Seller Strategy at 1.5%"
            description="Full-service listing representation — pricing strategy, professional photography, MLS exposure, open houses, and expert negotiation — all at 1.5% commission. You keep more without receiving less."
            link="/commission/1-5-commission"
            linkLabel="See full details"
          />
          <ServiceCard
            number="03"
            title="Investment Guidance"
            description="Whether you're buying your first rental property or expanding a portfolio, Reshma provides data-driven Bay Area market analysis to help you evaluate ROI, cap rates, and long-term appreciation potential."
            link="/#quote"
            linkLabel="Get started"
          />
        </div>
      </section>

      <section className="bg-[#f4f0e8] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Seller process */}
            <div>
              <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                Selling Your Home
              </p>
              <h3
                className="text-3xl font-medium text-[#1a1612] mb-8 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The selling process with Reshma
              </h3>
              <div className="space-y-7">
                <ProcessStep
                  step="1"
                  title="Free Home Valuation"
                  description="Reshma runs a detailed comparative market analysis based on recent Bay Area sales, your home's specific condition, and current buyer demand."
                />
                <ProcessStep
                  step="2"
                  title="Prepare & Stage"
                  description="She'll advise on what repairs or staging will actually move the needle — and which aren't worth the expense."
                />
                <ProcessStep
                  step="3"
                  title="Professional Photography & Listing"
                  description="Your home goes live with high-quality photos, a compelling description, MLS, Zillow, Redfin, and Realtor.com exposure."
                />
                <ProcessStep
                  step="4"
                  title="Open Houses & Showings"
                  description="Reshma personally hosts open houses and private showings, collecting feedback and building buyer urgency."
                />
                <ProcessStep
                  step="5"
                  title="Negotiate & Close"
                  description="She evaluates every offer, explains the trade-offs clearly, and negotiates directly to get you the best outcome."
                />
              </div>
            </div>

            <div>
              <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                Buying a Home
              </p>
              <h3
                className="text-3xl font-medium text-[#1a1612] mb-8 leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                The buying process with Reshma
              </h3>
              <div className="space-y-7">
                <ProcessStep
                  step="1"
                  title="Clarify Your Goals"
                  description="One conversation is usually enough to understand your must-haves, neighborhood preferences, timeline, and budget range."
                />
                <ProcessStep
                  step="2"
                  title="Targeted Property Search"
                  description="Reshma sets up real-time alerts and personally previews homes before recommending them — saving you time on properties that don't fit."
                />
                <ProcessStep
                  step="3"
                  title="Evaluate & Inspect"
                  description="She helps you read disclosure packages, interpret inspection reports, and understand what items are deal-breakers vs. negotiating points."
                />
                <ProcessStep
                  step="4"
                  title="Strategic Offer"
                  description="In the Bay Area's competitive market, offer strategy matters. Reshma advises on price, terms, and contingencies to make your offer stand out."
                />
                <ProcessStep
                  step="5"
                  title="Close with Confidence"
                  description="She stays with you through escrow, loan coordination, final walkthrough, and key handover."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Where Reshma Works
          </p>
          <h2
            className="text-4xl font-medium text-[#1a1612]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Bay Area communities
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#e0d8cc]">
          {[
            "San Jose",
            "Silicon Valley",
            "Santa Clara",
            "Sunnyvale",
            "Los Gatos",
            "Cambrian Park",
            "Cupertino",
            "Saratoga",
            "Campbell",
            "Milpitas",
            "Fremont",
            "Mountain View",
          ].map((city) => (
            <div
              key={city}
              className="bg-white py-6 px-4 text-center hover:bg-[#b8986a] group transition-colors cursor-default"
            >
              <span className="text-lg text-[#3a3028] group-hover:text-white transition-colors">
                {city}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1612] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Client Stories
            </p>
            <h2
              className="text-4xl font-medium text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Trusted by Bay Area homeowners
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Reshma made our home purchase effortless and enjoyable. Her attention to detail and frank advice helped us avoid two properties that weren't worth the price. Exceptional."
              name="Claire Morgan"
              location="San Jose, CA"
            />
            <TestimonialCard
              quote="A truly personalized experience from start to finish. Reshma found us the perfect home ahead of schedule and negotiated $40k off asking. She works hard for her clients."
              name="James Carter"
              location="Sunnyvale, CA"
            />
            <TestimonialCard
              quote="The 1.5% listing was honestly what got our attention, but what kept us was the service. Professional photography, two open houses, and sold over asking in 12 days."
              name="Priya Nair"
              location="Santa Clara, CA"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Common Questions
          </p>
          <h2
            className="text-4xl font-medium text-[#1a1612]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Frequently asked
          </h2>
        </div>
        <div>
          {[
            {
              q: "Is Reshma a licensed real estate agent?",
              a: "Yes. Reshma Sait holds an active California real estate salesperson license (DRE #02106214). She operates under the broker supervision of REeBroker Group, which is legally required for all sales agents in California. This structure ensures every transaction is compliant, accountable, and fully protected under California real estate law.",
            },
            {
              q: "What does it mean that she works with a broker?",
              a: "In California, sales agents like Reshma must work under a licensed broker. REeBroker Group is her sponsoring broker — they provide compliance oversight, errors & omissions insurance, and transaction review. You get the personal service of a dedicated individual agent with the legal structure and accountability of a full brokerage behind every deal.",
            },
            {
              q: "Why is the commission only 1.5%?",
              a: "The 1.5% listing fee covers full-service representation: professional photography, 3D tours, MLS listing, Zillow/Redfin exposure, open houses, staging guidance, and negotiation. Reshma is able to offer this rate by running a lean, focused practice — not because she cuts corners on what matters.",
            },
            {
              q: "Do I still pay a buyer's agent commission?",
              a: "Under current NAR settlement rules, buyer's agent compensation is negotiated separately. Reshma will walk you through what's customary in your specific transaction and area, and help you understand your total costs before you commit.",
            },
            {
              q: "What areas does Reshma serve?",
              a: "Reshma is active across San Jose, Silicon Valley, Santa Clara, Sunnyvale, Los Gatos, Cambrian Park, Cupertino, Saratoga, Campbell, and surrounding Bay Area communities.",
            },
            {
              q: "How do I get started?",
              a: "The easiest first step is a free consultation — either a call or an in-person meeting. Reshma will listen to your goals, give you honest market context, and explain exactly what she'll do for you. No pressure, no obligation.",
            },
          ].map((item) => (
            <FaqItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </section>

      {/* ── HOME VALUATION CTA ───────────────────────────────────────────── */}
      <section className="bg-[#f4f0e8] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            No Cost · No Obligation
          </p>
          <h2
            className="text-4xl lg:text-5xl font-medium text-[#1a1612] mb-5"
            style={{ fontFamily: "Georgia, serif" }}
          >
            What is your home worth?
          </h2>
          <p className="text-[#5c5044] leading-relaxed mb-8">
            Get a personalized home valuation from Reshma based on current Bay
            Area market conditions — not a generic algorithm estimate.
          </p>
          <Link
            href="/home-valuation"
            className="inline-flex items-center gap-3 bg-[#1a1612] text-white px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#b8986a] transition-colors"
          >
            Get a Free Valuation →
          </Link>
        </div>
      </section>

      <section id="quote" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#b8986a] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              Free Consultation
            </p>
            <h2
              className="text-4xl lg:text-5xl font-medium text-[#1a1612] leading-tight mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {`Let's talk about `}
              <em className="text-[#b8986a]">your next move.</em>
            </h2>
            <p className="text-[#5c5044] leading-relaxed mb-8">
             {` Whether you're buying, selling, or just exploring your options,
              Reshma offers a straightforward, no-pressure consultation. She'll
              give you honest market insight and a clear plan — so you can
              decide what's right for you.`}
            </p>

            <div className="space-y-4">
              <a
                href="tel:+14084789170"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-[#b8986a] flex items-center justify-center text-[#b8986a] text-lg flex-shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-xs text-[#8a7a6a] uppercase tracking-wider mb-0.5">
                    Direct Line
                  </p>
                  <p className="font-medium text-xl text-[#1a1612] group-hover:text-[#b8986a] transition-colors">
                    +1 408 478 9170
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#b8986a] flex items-center justify-center text-[#b8986a] text-lg flex-shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-xs text-[#8a7a6a] uppercase tracking-wider mb-0.5">
                    Areas Served
                  </p>
                  <p className="font-medium text-lg text-[#1a1612]">
                    San Jose · Silicon Valley · Bay Area
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-[#b8986a] flex items-center justify-center text-[#b8986a] text-lg flex-shrink-0">
                  🏢
                </div>
                <div>
                  <p className="text-xs text-[#8a7a6a] uppercase tracking-wider mb-0.5">
                    Brokerage
                  </p>
                  <p className="font-medium text-lg text-[#1a1612]">
                    REeBroker Group · DRE #02106214
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#faf8f3] border border-[#e0d8cc] p-8">
            <h3 className="font-semibold text-[#1a1612] text-lg mb-6">
              Send a message
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8a7a6a] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#d4c8b8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#b8986a]"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8a7a6a] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-[#d4c8b8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#b8986a]"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8a7a6a] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border border-[#d4c8b8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#b8986a]"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8a7a6a] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full border border-[#d4c8b8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#b8986a]"
                  placeholder="+1 (408) 000-0000"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8a7a6a] mb-2">
                  I am a…
                </label>
                <select className="w-full border border-[#d4c8b8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#b8986a] text-[#5c5044]">
                  <option value="">Select one</option>
                  <option>Home Buyer</option>
                  <option>Home Seller</option>
                  <option>Investor</option>
                  <option>Just exploring</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#8a7a6a] mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-[#d4c8b8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#b8986a] resize-none"
                  placeholder="Tell Reshma what you're looking for…"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#b8986a] text-white py-4 text-sm font-semibold uppercase tracking-widest hover:bg-[#9a7a4e] transition-colors"
              >
                Schedule Consultation
              </button>
              <p className="text-center text-xs text-[#8a7a6a]">
                Reshma personally responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
