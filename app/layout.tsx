import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "@/app/lib/TranslationContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Ivoire",
    default:
      "Premium Bamboo Tissue Manufacturer & Wholesale Supplier | Ivoire Canada",
  },
  description:
    "Ivoire is a leading Canadian manufacturer of premium, eco-friendly bamboo tissue paper. We offer 100% sustainable retail products and custom OEM/ODM private label wholesale solutions.",
  keywords:
    "bamboo tissue paper, eco-friendly toilet paper, Canadian tissue manufacturer, sustainable paper products, OEM tissue manufacturing, ODM tissue supplier, private label tissue, wholesale bamboo tissue, biodegradable paper, Montreal tissue factory, Quebec tissue supplier, Montreal wholesale tissue",

  openGraph: {
    title: "Premium Bamboo Tissue Manufacturer & Supplier | Ivoire",
    description:
      "Eco-friendly, 100% sustainable bamboo tissue solutions for retail and OEM/ODM wholesale.",
    url: "https://ivoiretissue.com",
    siteName: "Ivoire Tissue",
    images: [
      {
        url: "/images/pandabox/1.jpg",
        width: 1200,
        height: 630,
        alt: "Ivoire Premium Bamboo Tissue",
      },
    ],
    locale: "en_CA",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "Ivoire Tissue",
    url: "https://ivoiretissue.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    areaServed: ["Quebec", "Montreal", "Canada"],
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        <TranslationProvider>{children}</TranslationProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
