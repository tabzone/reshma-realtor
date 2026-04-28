import Image from "next/image";

const testimonials = [
  {
    quote: "Reshma made our home purchase effortless and enjoyable. Her attention to detail is exceptional.",
    name: "Claire Morgan",
  },
  {
    quote: "A truly personalized experience. Reshma found us the perfect luxury home ahead of schedule.",
    name: "James Carter",
  },
];

const features = [
  "Custom market analysis for luxury home sales.",
  "White-glove buyer representation and negotiation.",
  "Exclusive listing exposure and concierge support.",
];

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#f8f8f6] text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#002147]">Reshma Realtor</p>
            <p className="text-xs text-slate-500">Luxury properties & concierge service</p>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#top" className="transition hover:text-slate-900">Home</a>
            <a href="#services" className="transition hover:text-slate-900">Services</a>
            <a href="#quote" className="transition hover:text-slate-900">Quote</a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <span className="text-sm font-medium text-slate-700">Call us:</span>
            <a href="tel:+14084789170" className="text-sm font-semibold text-[#002147] transition hover:text-[#001533]">
              +1 408 478 9170
            </a>
          </div>
          <a href="#quote" className="btn-primary hidden rounded-full text-sm font-semibold md:inline-flex">
            Request a quote
          </a>
          <a href="tel:+14084789170" className="btn-secondary inline-flex rounded-full text-sm font-semibold md:hidden">
            Call now
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-10 lg:px-10">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-[#B8860B]/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.28em] text-[#B8860B]">
              Luxury real estate
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              Find your dream home with Reshma, your trusted luxury realtor.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Expert guidance, curated service, and premium listings across top U.S. markets. Get a tailored quote for buying, selling, or investing in luxury real estate.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#quote" className="btn-primary inline-flex items-center justify-center text-sm font-semibold">
                Get a quote
              </a>
              <a href="tel:+14084789170" className="btn-secondary inline-flex items-center justify-center text-sm font-semibold">
                Call +1 408 478 9170
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_35px_90px_rgba(15,23,42,0.12)]">
            <Image
              src="/images/hero.png"
              alt="Luxury home exterior"
              width={940}
              height={740}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </section>

        <section id="services" className="scroll-mt-28 grid gap-8 rounded-[36px] bg-white p-8 shadow-sm lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B8860B]">What we offer</p>
            <h2 className="text-3xl font-semibold text-slate-950">White-glove support, every step of the way.</h2>
            <p className="text-sm leading-7 text-slate-600">
              From premium marketing and staging to negotiation and closing, Reshma delivers a concierge experience for luxury buyers and sellers.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold text-slate-950">Buyer representation</p>
            <p className="text-sm leading-6 text-slate-600">
              Personalized search, market insight, and expert negotiation to secure the right luxury property.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-xl font-semibold text-slate-950">Seller strategy</p>
            <p className="text-sm leading-6 text-slate-600">
              Strategic pricing, high-end presentation, and targeted buyer outreach for faster premium sales.
            </p>
          </div>
        </section>

        <section id="quote" className="scroll-mt-28 grid gap-12 rounded-[36px] bg-[#002147] p-10 text-white lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FFD700]">Request a quote</p>
            <h2 className="text-4xl font-semibold">Start your luxury real estate journey today.</h2>
            <p className="max-w-xl text-base leading-7 text-slate-200">
              Share your goals and timeline, and Reshma will respond with a custom quote for buying, selling, or investing in a premium property.
            </p>
            <div className="rounded-[28px] bg-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Phone</p>
              <p className="mt-2 text-xl font-semibold text-white">+1 408 478 9170</p>
            </div>
          </div>
          <div className="rounded-[32px] bg-white p-8 shadow-sm text-slate-900">
            <h3 className="text-3xl font-semibold">Let's connect</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Complete the form below and Reshma will reach out with a personalized quote and next steps.
            </p>
            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20"
                    placeholder="(408) 478-9170"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  Property type
                  <select
                    name="propertyType"
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20"
                  >
                    <option>Luxury home</option>
                    <option>Investment property</option>
                    <option>Estate sale</option>
                    <option>Other</option>
                  </select>
                </label>
              </div>
              <label className="block text-sm font-medium text-slate-700">
                Message
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/20"
                  placeholder="Describe your ideal property, timeline, or sale objectives"
                />
              </label>
              <button type="submit" className="btn-primary inline-flex w-full items-center justify-center text-sm font-semibold text-white">
                Send request
              </button>
            </form>
          </div>
        </section>

        <section id="testimonials" className="scroll-mt-28 grid gap-8 rounded-[36px] bg-[#002147] p-10 text-white lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#FFD700]">Why clients love Reshma</p>
            <h2 className="text-4xl font-semibold">Trusted guidance from satisfied homeowners.</h2>
            <p className="max-w-xl text-base leading-7 text-slate-200">
              High-touch service and expert negotiation make every transaction feel effortless, from discovery through closing.
            </p>
          </div>
          <div className="grid gap-6">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[28px] bg-white/10 p-6 backdrop-blur-sm">
                <p className="text-lg leading-8">“{item.quote}”</p>
                <p className="mt-4 font-semibold text-white">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.24em] text-[#002147]">Reshma Realtor</p>
            <p className="text-sm text-slate-600">Luxury real estate advisory across the United States.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-slate-900">Email</p>
              <p className="text-sm text-slate-600">contact@reshmarealtor.com</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Phone</p>
              <p className="text-sm text-slate-600">+1 408 478 9170</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Office</p>
              <p className="text-sm text-slate-600">New York, NY • Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
