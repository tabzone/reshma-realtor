"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-24">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div className="lg:pr-10">

            <h3 className="text-3xl font-light tracking-[-0.03em] mb-4">
              Reshma <span className="text-[#C9A227]">Sait</span>
            </h3>

            <p className="text-xs uppercase tracking-[0.22em] text-gray-400 mb-8">
              Realtor® · DRE #02106214
            </p>

            <p className="text-[15px] leading-8 text-gray-300 max-w-sm">
              Personalized real estate guidance for buyers, sellers, and
              investors across the Bay Area.
            </p>

          </div>

          {/* NAVIGATION */}
          <div>

            <p className="text-xs uppercase tracking-[0.24em] text-[#C9A227] mb-6">
              Navigation
            </p>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/commission/1.5%commission"
                  className="hover:text-white transition-colors duration-300"
                >
                  1.5% Commission
                </Link>
              </li>

              <li>
                <Link
                  href="/home-valuation"
                  className="hover:text-white transition-colors duration-300"
                >
                  Home Valuation
                </Link>
              </li>

              <li>
                <Link
                  href="/#quote"
                  className="hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* AREAS */}
          <div>

            <p className="text-xs uppercase tracking-[0.24em] text-[#C9A227] mb-6">
              Areas Served
            </p>

            <div className="space-y-4 text-gray-300 text-[15px] leading-7">

              <p>San Jose</p>
              <p>Santa Clara</p>
              <p>Sunnyvale</p>
              <p>Cupertino</p>
              <p>Los Gatos</p>
              <p>Cambrian Park</p>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <p className="text-xs uppercase tracking-[0.24em] text-[#C9A227] mb-6">
              Contact
            </p>

            <div className="space-y-5">

              <a
                href="tel:+14084789170"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-[15px]"
              >
                +1 408 478 9170
              </a>

              {/* <a
                href="mailto:info@homesbyreshma.com"
                className="block text-gray-300 hover:text-white transition-colors duration-300 text-[15px]"
              >
                info@homesbyreshma.com
              </a> */}

              <Link
                href="/#quote"
                className="inline-flex items-center justify-center bg-[#C9A227] hover:bg-[#b8921d] text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.16em] transition-all duration-300 mt-3"
              >
                Free Consultation
              </Link>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Reshma Sait · Realtor® · DRE #02106214
          </p>

          <p className="text-sm text-gray-500 text-center md:text-right">
            Serving homeowners across the Bay Area.
          </p>

        </div>

      </div>

    </footer>
  );
}