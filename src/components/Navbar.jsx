"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <header className="rs-header">
            <div className="rs-header-inner">
                <Link href="/" style={{ textDecoration: "none" }}>
                    <span className="rs-logo-name text-3xl">Reshma Sait</span>
                    <span className="rs-logo-dre" style={{ fontSize: '13px' }}>
                        Realtor® · DRE #02106214 · REeBroker Group
                    </span>
                </Link>

                <nav>
                    <ul className="rs-nav">
                        <li><Link href="/">Home</Link></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#services">Services</a></li>
                        <li>
                            <Link
                                href="/home-valuation"
                                style={{ color: "var(--gold)", fontWeight: 500 }}
                            >
                                Home Valuation
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="rs-header-cta">
                    <a href="#quote" className="rs-btn-gold">
                        Request a quote
                    </a>
                </div>
            </div>
        </header>
    );
}