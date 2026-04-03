import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Ivoire Tissue Paper | Sustainable Bamboo Tissue Products",
  description:
    "Ivoire Tissue Paper is a pioneering Canadian company dedicated to producing high-quality tissue paper using sustainable bamboo resources.",
  keywords:
    "bamboo tissue paper, sustainable paper, eco-friendly, Canadian paper manufacturer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
