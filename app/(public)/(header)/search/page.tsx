"use client";

import React, { useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { newsDatabase } from "@/app/lib/newsDatabase"; // 引入你现有的新闻数据库

// --- 1. 扩展全局搜索索引（带摘录 Excerpt 和 Date） ---
// 为了让搜索结果页面看起来像截图一样丰满，我们为静态页面和产品补充了描述
const staticPages = [
  {
    title: "HOME",
    url: "/",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "ABOUT Ivoiretissue Co., Ltd, Was established in 2001, with more than 24 years professional quality and innovative development...",
  },
  {
    title: "About Ivoiretissue",
    url: "/about-us",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "Learn about Ivoiretissue Co., Ltd. integrating R&D, production, selling together. We provide free sample and OEM & ODM are warmly welcome...",
  },
  {
    title: "Factory & Production Line",
    url: "/about-us/factory-production-line",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "Explore our state-of-the-art bamboo tissue paper manufacturing facilities, 20 production lines, and strict quality control processes...",
  },
  {
    title: "Certification",
    url: "/about-us/certification",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "Ivoiretissue won FDA and FSC, ISO, Certifications as well as BSCI audited, ensuring our bamboo paper meets global standards...",
  },
  {
    title: "Why Bamboo",
    url: "/why-bamboo",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "Discover why bamboo is the superior eco-friendly choice. It grows up to 3 feet a day, absorbs more CO2, and requires less water...",
  },
  {
    title: "FAQ - Frequently Asked Questions",
    url: "/services/faq",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "Find answers to commonly asked questions about our bamboo tissue products, shipping, and OEM/ODM customization services...",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
    type: "Page",
    date: "02/08/2025",
    excerpt:
      "Get in touch with Ivoiretissue for quotes, OEM/ODM inquiries, and customer support. Call us at +86-18223408276...",
  },
  {
    title: "All Products",
    url: "/products",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Browse our complete catalog of sustainable bamboo tissue paper products, including toilet rolls, facial tissues, and kitchen towels...",
  },
  {
    title: "Bamboo Toilet Paper",
    url: "/products/bamboo-toilet-paper",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "High-quality, eco-friendly bamboo toilet paper. Soft, strong, and highly absorbent. Perfect for sensitive skin and septic safe...",
  },
  {
    title: "Bamboo Kitchen Paper",
    url: "/products/bamboo-kitchen-paper",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Durable and super absorbent bamboo kitchen paper towels. Ideal for spills, cooking, and daily household cleaning tasks...",
  },
  {
    title: "Bamboo Facial Tissue",
    url: "/products/bamboo-facial-tissue",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Ultra-soft and hypoallergenic bamboo facial tissues. Free from harsh chemicals, making them safe for everyday facial care...",
  },
  {
    title: "Soft Pack Facial Tissue",
    url: "/products/soft-pack-facial-tissue",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Convenient soft pack bamboo facial tissues. Easy to carry, eco-friendly, and gentle on the skin for on-the-go hygiene...",
  },
  {
    title: "N-Fold Hand Towel",
    url: "/products/n-fold-hand-towel",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Commercial grade N-Fold bamboo hand towels. Highly absorbent and strong, perfect for public restrooms and offices...",
  },
  {
    title: "Hand Paper Towel",
    url: "/products/hand-paper-towel",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Premium bamboo hand paper towels. Reliable drying performance with a sustainable, tree-free footprint...",
  },
  {
    title: "Central Pull Tissue Paper",
    url: "/products/central-pull-tissue-paper",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "Efficient central pull bamboo tissue paper for high-traffic areas. Reduces waste and ensures hygienic, one-at-a-time dispensing...",
  },
  {
    title: "Mini Jumbo Toilet Rolls",
    url: "/products/mini-jumbo-toilet-rolls",
    type: "Product",
    date: "02/08/2025",
    excerpt:
      "High-capacity mini jumbo bamboo toilet rolls. Cost-effective and eco-friendly solution for commercial and public washrooms...",
  },
];

// 去除 HTML 标签的辅助函数 (用于提取新闻正文作为摘要)
const stripHtml = (html: string) => {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
};

// 内部组件，包裹在 Suspense 中以安全使用 useSearchParams
function SearchResultsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("s") || "";

  // 动态合并新闻数据与静态页面数据
  const searchIndex = useMemo(() => {
    const newsItems = Object.keys(newsDatabase).map((id) => ({
      title: newsDatabase[id].title,
      url: `/news/${id}`,
      type: "News",
      date: newsDatabase[id].date,
      excerpt: stripHtml(newsDatabase[id].content).substring(0, 150) + "...",
    }));
    return [...staticPages, ...newsItems];
  }, []);

  // 执行搜索过滤逻辑
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.excerpt.toLowerCase().includes(q),
    );
  }, [query, searchIndex]);

  return (
    <main
      id="main"
      className="site-main"
      role="main"
      style={{ backgroundColor: "#f8f9fa", minHeight: "80vh" }}
    >
      {/* 搜索页定制 CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .site-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        /* 顶部标题区 */
        .search-archive-hero-section {
          background-color: #ffffff;
          padding: 80px 20px;
          text-align: center;
          border-bottom: 1px solid #edf2f7;
        }
        .search-title {
          font-size: 42px;
          font-weight: 500;
          color: #1A202C; /* 深灰色 */
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }
        .search-title span {
          color: #00a496; 
          font-weight: 700;
        }

        /* 搜索结果网格 */
        .search-archive {
          display: grid;
          gap: 30px;
          padding: 60px 0 100px;
        }
        @media (min-width: 1024px) { .search-archive { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 768px) and (max-width: 1023px) { .search-archive { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 767px) { .search-archive { grid-template-columns: 1fr; } }

        /* 结果卡片 */
        .loop-entry {
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0px 10px 25px -10px rgba(0,0,0,0.08);
          padding: 30px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .loop-entry:hover {
          transform: translateY(-5px);
          box-shadow: 0px 15px 35px -10px rgba(0,164,150,0.2);
        }
        .loop-entry .entry-title {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 10px 0;
          font-family: 'Poppins', sans-serif;
        }
        .loop-entry .entry-title a {
          color: #08394a;
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .loop-entry .entry-title a:hover {
          color: #00a496;
        }
        .loop-entry .entry-meta {
          font-size: 13px;
          color: #777;
          margin-bottom: 15px;
        }
        .loop-entry .entry-summary {
          font-size: 15px;
          color: #555;
          line-height: 1.6;
          flex-grow: 1;
        }
        .tag-badge {
          display: inline-block;
          background: #e0f1e5;
          color: #008075;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 12px;
          margin-bottom: 15px;
          font-weight: 600;
          align-self: flex-start;
        }

        /* 无结果样式 */
        .no-results {
          text-align: center;
          padding: 100px 20px;
          font-size: 24px;
          color: #666;
        }
        .no-results svg {
          margin-bottom: 20px;
          color: #ccc;
        }
      `,
        }}
      />

      {/* 1. 顶部 Hero Section */}
      <section className="entry-hero search-archive-hero-section">
        <div className="site-container">
          <h1 className="search-title">
            Search Results for: <span>{query || "..."}</span>
          </h1>
        </div>
      </section>

      {/* 2. 搜索结果网格 */}
      <div className="content-area">
        <div className="site-container">
          {searchResults.length > 0 ? (
            <div className="search-archive">
              {searchResults.map((item, index) => (
                <article key={index} className="loop-entry">
                  <header className="entry-header">
                    <span className="tag-badge">{item.type}</span>
                    <h2 className="entry-title">
                      <Link href={item.url}>{item.title}</Link>
                    </h2>
                    <div className="entry-meta">
                      <time>{item.date}</time>
                    </div>
                  </header>
                  <div className="entry-summary">
                    <p>{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <svg
                viewBox="0 0 24 24"
                width="64"
                height="64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <p>
                Sorry, but nothing matched your search terms. Please try again
                with some different keywords.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "100px", textAlign: "center" }}>
          Loading Search...
        </div>
      }
    >
      <SearchResultsContent />
    </Suspense>
  );
}
