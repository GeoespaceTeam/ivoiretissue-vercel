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
  title: {
    template: "%s | Ivoire",
    // 👇 默认标题直接塞满高价值核心词（制造商、批发、优质、加拿大）
    default:
      "Premium Bamboo Tissue Manufacturer & Wholesale Supplier | Ivoire Canada",
  },
  // 👇 描述扩充到 150 字符左右的黄金长度，自然融入 OEM/ODM 和 B2B 词汇
  description:
    "Ivoire is a leading Canadian manufacturer of premium, eco-friendly bamboo tissue paper. We offer 100% sustainable retail products and custom OEM/ODM private label wholesale solutions.",
  // 👇 老板最爱看的环节：把所有能想到的长尾搜索词全部堆上去
  keywords:
    "bamboo tissue paper, eco-friendly toilet paper, Canadian tissue manufacturer, sustainable paper products, OEM tissue manufacturing, ODM tissue supplier, private label tissue, wholesale bamboo tissue, biodegradable paper, Montreal tissue factory, Quebec tissue supplier, Montreal wholesale tissue",
  // 👆 结尾加了 Quebec 和 Montreal 的精准搜索词

  openGraph: {
    title: "Premium Bamboo Tissue Manufacturer & Supplier | Ivoire",
    description:
      "Eco-friendly, 100% sustainable bamboo tissue solutions for retail and OEM/ODM wholesale.",
    url: "https://ivoiretissue.com",
    siteName: "Ivoire Tissue",
    images: [
      {
        url: "/images/pandabox/1.jpg", // 直接调用现成的精美产品图作为分享卡片
        width: 1200,
        height: 630,
        alt: "Ivoire Premium Bamboo Tissue",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  // 👇 针对搜索引擎爬虫的额外抓取指令，提升收录权重
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
  // 👇 1. 这是新增的：专门写给 Google 爬虫看的本地地址信息
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
        {children}

        {/* 👇 2. 这是新增的：把上面的地址信息偷偷塞进网页里 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}