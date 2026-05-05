import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reshma Sait | Luxury Realtor® in San Jose & Bay Area | DRE #02106214",
  description: "Luxury real estate expert Reshma Sait specializes in San Jose, the Silicon Valley, and the greater Bay Area. DRE #02106214. Find your dream home in Silicon Valley today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5GJ6JCQ7HH"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5GJ6JCQ7HH');`}
      </Script>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
