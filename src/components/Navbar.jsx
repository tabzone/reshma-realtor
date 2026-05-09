/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="rs-header bg-white">
            <div className="rs-header-inner my-4">
                <Link href="/" style={{ textDecoration: "none" }}>
                    {/* <span className="rs-logo-name text-3xl">Reshma Sait</span>
                    <span className="rs-logo-dre" style={{ fontSize: '13px' }}>
                        Realtor® · DRE #02106214 · REeBroker Group
                    </span> */}
                    <Image
                        src="/reshma-logo2.png"
                        alt="Reshma Sait Logo"
                        width={400}
                        height={100}
                        style={{ objectFit: "contain" }}
                    />
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
                        <li>
                            <Link
                                href="/commission/1.5%commission"
                                style={{  fontWeight: 500 }}
                            >
                            1.5% commission
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="rs-header-cta">
                    <a href="#quote" className="rs-btn-gold">
                        Free Consultation
                    </a>
                </div>
            </div>
        </header>
    );
}