"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="rs-footer">
            <div className="rs-footer-inner">
                <div>
                    <span className="rs-footer-brand-name">Reshma Sait</span>
                    <span className="rs-footer-brand-dre">Realtor® · DRE #02106214 · REeBroker Group</span>
                    <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '20px', lineHeight: '1.7', fontWeight: 300 }}>
                        Luxury homes, concierge service,<br />and white-glove support.
                    </p>
                </div>
                <div>
                    <p className="rs-footer-nav-title">Navigation</p>
                    <ul className="rs-footer-nav-list">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/#about">About</Link></li>
                        <li><Link href="/#services">Services</Link></li>
                        <li><Link href="/home-valuation">Home Valuation</Link></li>
                        <li><Link href="/#quote">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="rs-footer-contact-title">Contact</p>
                    <p className="rs-footer-contact-item">
                        <a href="tel:+14084789170">+1 408 478 9170</a>
                    </p>
                    {/* <p className="rs-footer-contact-item">
                        <a href="mailto:hello@homesbyreshma.com">hello@homesbyreshma.com</a>
                    </p> */}
                </div>
            </div>
            <div className="rs-footer-bottom">
                <p className="rs-footer-copy">© {new Date().getFullYear()} Reshma Sait · REeBroker Group · DRE #02106214. All rights reserved.</p>
            </div>
        </footer>
    );
}