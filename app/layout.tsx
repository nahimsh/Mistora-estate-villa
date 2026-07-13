import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { site } from "@/lib/site-config";
import { SpeedInsights } from "@vercel/speed-insights/next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "Mistora Estate Villa | Private Pool Villa in Coorg, Karnataka",
  description:
    "Mistora Estate Villa is a private pool villa on a coffee estate in Suntikoppa, Coorg. A quiet, whole-villa retreat for couples, families and groups.",
  keywords: [
    "Coorg villa",
    "Suntikoppa villa",
    "private pool villa Coorg",
    "Mistora Estate Villa",
    "Kodagu homestay",
    "luxury villa Coorg",
  ],
  authors: [{ name: "Mistora Estate Villa" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Mistora Estate Villa",
    title: "Mistora Estate Villa | Private Pool Villa in Coorg",
    description:
      "A private pool villa on a coffee estate in Suntikoppa, Coorg — quiet, whole-villa stays for couples, families and groups.",
    url: site.domain,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mistora Estate Villa | Private Pool Villa in Coorg",
    description:
      "A private pool villa on a coffee estate in Suntikoppa, Coorg — quiet, whole-villa stays for couples, families and groups.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: [{ rel: "icon", url: "/favicon/favicon.ico" }],
  },
  manifest: "/favicon/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Mistora Estate Villa",
  description:
    "A private pool villa on a coffee estate in Suntikoppa, Coorg, Karnataka, offering whole-villa stays for couples, families and groups.",
  url: site.domain,
  telephone: "+91-8073713857",
  email: "Nahimsh22@gmail.com",
  priceRange: "$$",
  image: [
    `${site.domain}/images/hero.jpg`,
    `${site.domain}/images/villa.jpg`,
    `${site.domain}/images/pool.jpg`,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Suntikoppa, Coorg",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${outfit.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <a
            href="#top"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest-dark focus:px-5 focus:py-3 focus:text-offwhite"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
