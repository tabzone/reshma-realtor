import Link from "next/link";

export default function CommissionPage() {
  const services = [
    {
      title: "Professional Photography",
      description:
        "High-quality listing photography designed to showcase your home across MLS, Zillow, Redfin, Realtor.com, and marketing campaigns.",
    },
    {
      title: "MLS & Online Exposure",
      description:
        "Your property is syndicated across major real estate platforms to maximize visibility and buyer reach.",
    },
    {
      title: "Strategic Pricing",
      description:
        "Comparative market analysis and pricing strategy tailored to current Bay Area market conditions.",
    },
    {
      title: "Open Houses & Private Tours",
      description:
        "Coordinated showings and open houses designed to attract qualified buyers.",
    },
    {
      title: "Digital Marketing",
      description:
        "Targeted online advertising, social media exposure, email campaigns, and custom marketing materials.",
    },
    {
      title: "Negotiation & Offer Management",
      description:
        "Professional representation throughout offers, counteroffers, inspections, disclosures, and closing negotiations.",
    },
    {
      title: "Transaction Coordination",
      description:
        "End-to-end management from listing to closing, including timelines, paperwork, escrow coordination, and communication.",
    },
    {
      title: "Staging Guidance",
      description:
        "Recommendations and preparation guidance to help present your home at its best.",
    },
  ];

  const faqs = [
    {
      question: "Is this a full-service listing?",
      answer:
        "Yes. Our 1.5% listing commission includes marketing, MLS exposure, negotiations, transaction management, and seller guidance throughout the process.",
    },
    {
      question: "Are professional photos included?",
      answer:
        "Yes. Professional photography is included as part of our listing service.",
    },
    {
      question: "Will my home appear on Zillow and Redfin?",
      answer:
        "Yes. Listings are syndicated across major real estate platforms through MLS distribution.",
    },
    {
      question: "Are there upfront marketing fees?",
      answer: "No hidden upfront marketing fees.",
    },
    {
      question: "Do you work throughout the Bay Area?",
      answer:
        "Yes. We primarily serve Bay Area homeowners and surrounding communities.",
    },
  ];

  return (
    <div className="bg-[#F7F4EE] text-[#111827] min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-20">
        <div className="max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-sm text-[#C9A227] mb-6">
            Bay Area Real Estate
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-light tracking-tight mb-8">
            1.5% Listing
            <br />
            <span className="text-[#C9A227]">Commission</span>
          </h1>

          <div className="w-24 h-[2px] bg-[#C9A227] mb-8" />

          <p className="text-lg md:text-xl text-[#4B5563] leading-9 max-w-3xl">
            Selling your home shouldn’t mean sacrificing service for savings.
            Our 1.5% listing commission includes professional marketing,
            strategic pricing guidance, negotiation expertise, and hands-on
            support throughout the entire selling process.
          </p>
        </div>
      </section>

      {/* INCLUDED SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 border-t border-[#E5E7EB]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#C9A227] mb-4">
              Full-Service Representation
            </p>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              What’s Included
            </h2>
          </div>

          <p className="text-[#6B7280] max-w-xl leading-8 text-lg">
            A modern approach to selling homes in the Bay Area — with premium
            marketing, strategic exposure, and personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#ECE7DD] rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full border border-[#C9A227] flex items-center justify-center mb-6 text-[#C9A227] text-lg font-medium">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-2xl font-light mb-4 tracking-tight">
                {service.title}
              </h3>

              <p className="text-[#6B7280] leading-8 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-[#E5E7EB]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#C9A227] mb-4">
              Why We Offer 1.5%
            </p>

            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
              A Modern Approach
              <br />
              to Real Estate
            </h2>
          </div>

          <div className="space-y-8 text-[#4B5563] text-lg leading-9">
            <p>
              Traditional commission structures haven’t changed much over the
              years.
            </p>

            <p>
              Our business is built around streamlined systems, digital
              marketing, and efficient operations — allowing us to provide
              full-service representation at a more competitive listing
              commission.
            </p>

            <p>
              The goal is simple:
              <span className="text-[#111827] font-medium">
                {" "}
                deliver exceptional service while helping homeowners retain more
                of their equity.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* SAVINGS TABLE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-[#E5E7EB]">
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-sm text-[#C9A227] mb-4">
            Example Savings
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Keep More of Your Equity
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#ECE7DD] bg-white">
          <table className="w-full">
            <thead className="bg-[#F8F5EF]">
              <tr>
                <th className="text-left px-8 py-6 font-medium text-[#111827]">
                  Home Price
                </th>
                <th className="text-left px-8 py-6 font-medium text-[#111827]">
                  Traditional 2.5%
                </th>
                <th className="text-left px-8 py-6 font-medium text-[#111827]">
                  Our 1.5%
                </th>
                <th className="text-left px-8 py-6 font-medium text-[#111827]">
                  Estimated Savings
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["$1,500,000", "$37,500", "$22,500", "$15,000"],
                ["$2,000,000", "$50,000", "$30,000", "$20,000"],
                ["$3,000,000", "$75,000", "$45,000", "$30,000"],
              ].map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-[#F1EFEA] hover:bg-[#FAF8F4] transition-colors"
                >
                  {row.map((item, i) => (
                    <td
                      key={i}
                      className={`px-8 py-6 text-lg ${
                        i === 3 ? "text-[#C9A227] font-semibold" : ""
                      }`}
                    >
                      {item}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-24 border-t border-[#E5E7EB]">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-[#C9A227] mb-4">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#ECE7DD] rounded-2xl p-8"
            >
              <h3 className="text-xl font-medium mb-4 text-[#111827]">
                {faq.question}
              </h3>

              <p className="text-[#6B7280] leading-8 text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 border-t border-[#E5E7EB]">
        <div className="bg-[#111827] rounded-[40px] p-12 md:p-20 text-center text-white">
          <p className="uppercase tracking-[0.25em] text-sm text-[#C9A227] mb-6">
            Bay Area Real Estate
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Thinking About Selling?
          </h2>

          <p className="text-gray-300 text-lg leading-8 max-w-2xl mx-auto mb-12">
            Learn more about our full-service listing approach and how we help
            Bay Area homeowners sell strategically while keeping more of their
            equity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <button className=""> */}
            <Link
              href="/#quote"
              className="bg-[#C9A227] text-black px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:opacity-90 transition-opacity"
            >
              Schedule Consultation
            </Link>

            {/* </button> */}

            <button className="border border-white/20 px-8 py-4 rounded-full text-sm tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300">
              <a
                href="tel:+14084789170"
                // className="rs-btn-outline"
                style={{ padding: "14px 32px", fontSize: "12px" }}
              >
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
