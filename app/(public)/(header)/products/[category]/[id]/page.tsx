import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { productsDatabase } from "@/app/lib/productsDatabase";
import ScrollReveal from "@/app/components/ScrollReveal";
import ContactForm from "@/app/components/ContactForm";

// ============================================================
// PRODUCT DETAIL PAGE
// Pixel-perfect replication of ivoiretissue.com Elementor layout
//
// CSS strategy:
//   - All styles inline or in <style> tag at top
//   - ScrollReveal for enter animations
//   - No separate .module.css file
//
// Sections:
//   1. Category breadcrumb
//   2. Product hero (img left + info right)
//   3. Description tab (product img + specs table + detail img)
//   4. About Ivoiretissue
//   5. Our Factory (justified grid)
//   6. Submit a Request (form + bg panel)
// ============================================================

// Factory images from ivoiretissue.com (used as placeholder until local assets ready)
const FACTORY_IMGS = [
  "https://ivoiretissue.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-03-at-00.28.58-300x169.jpeg",
  "https://ivoiretissue.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-03-at-00.12.38-300x205.jpeg",
  "https://ivoiretissue.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-03-at-00.05.20-300x226.jpeg",
  "https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-04-01-at-00.36.37-300x180.jpeg",
  "https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-04-01-at-00.45.31-300x154.jpeg",
  "https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-04-01-at-00.59.41-300x204.jpeg",
  "https://ivoiretissue.com/wp-content/uploads/2024/03/IMG_1208-300x225.jpg",
  "https://ivoiretissue.com/wp-content/uploads/2024/03/shutterstock_120745927-1-300x200.jpg",
];

// ── Hover & complex styles that can't be inline ──
const CSS = `
  /* ── Category tag ── */
  .ivt-category-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #00a698;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  /* ── Features list ── */
  .ivt-features li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    color: #555;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 12px;
  }
  .ivt-features li .bullet {
    color: #00a698;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 2px;
  }

  /* ── Quote box ── */
  .ivt-quote-box {
    background: #f9f9f9;
    padding: 24px;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    max-width: 420px;
    margin-top: 32px;
  }
  .ivt-quote-box p {
    font-size: 13px;
    color: #999;
    font-weight: 500;
    margin-bottom: 14px;
  }
  .ivt-quote-btn {
    display: inline-block;
    background: #00a698;
    color: #fff;
    padding: 11px 40px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: background 0.25s;
    text-decoration: none;
  }
  .ivt-quote-btn:hover { background: #008f83; color: #fff; }

  /* ── Description tab header ── */
  .ivt-tab-header {
    display: inline-block;
    border-bottom: 4px solid #00a698;
    padding-bottom: 8px;
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }

  /* ── Specs table ── */
  .ivt-specs-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #e8e8e8;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .ivt-specs-table tr {
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
  }
  .ivt-specs-table tr:last-child { border-bottom: none; }
  .ivt-specs-table tr:hover { background: #f9f9f9; }
  .ivt-specs-table td {
    padding: 14px 18px;
    font-size: 14px;
    vertical-align: top;
  }
  .ivt-specs-table td:first-child {
    font-weight: 700;
    color: #444;
    background: rgba(249,249,249,0.7);
    width: 30%;
    border-right: 1px solid #e8e8e8;
  }
  .ivt-specs-table td:last-child { color: #666; }

  /* ── About section heading ── */
  .ivt-section-heading {
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  /* ── Factory grid ── */
  .ivt-factory-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
  .ivt-factory-item {
    position: relative;
    aspect-ratio: 4/3;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  .ivt-factory-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  .ivt-factory-item:hover img { transform: scale(1.08); }
  .ivt-factory-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,166,152,0);
    transition: background 0.3s;
  }
  .ivt-factory-item:hover .ivt-factory-overlay {
    background: rgba(0,166,152,0.15);
  }

  /* ── Request form section ── */
  .ivt-request-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 500px;
    border-radius: 0;
    overflow: hidden;
  }
  .ivt-request-left {
    padding: 60px 48px;
    background: #fff;
  }
  .ivt-request-right {
    background: #f5f5f5;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .ivt-factory-grid { grid-template-columns: repeat(2, 1fr); }
    .ivt-request-grid { grid-template-columns: 1fr; }
    .ivt-request-right { display: none; }
  }
  @media (max-width: 768px) {
    .ivt-product-row { flex-direction: column !important; }
    .ivt-product-left,
    .ivt-product-right {
      flex: 0 0 100% !important;
      max-width: 100% !important;
    }
    .ivt-quote-box { max-width: 100%; }
    .ivt-request-left { padding: 40px 24px; }
  }
  @media (max-width: 480px) {
    .ivt-factory-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;
const categoryDescriptions: Record<string, string> = {
  bamboo:
    "Using bamboo for paper products offers several benefits. bamboo is an incredibly fast-growing plant, making it highly renewable compared to traditional wood pulp used in paper products. Bamboo cultivation requires minimal water, pesticides, and fertilizers compared to other crops, reducing the environmental footprint associated with paper production. Additionally, bamboo cultivation can help prevent soil erosion and promote biodiversity. Bamboo fibers are naturally soft and strong, making them suitable for use in toilet paper, towel paper, and napkins. Overall, the use of bamboo for toilet paper, towel paper, and napkins provides an environmentally friendly and sustainable alternative to conventional paper products, offering numerous benefits for both consumers and the planet.",
  virgin:
    "Virgin paper products refer to paper items that are made from 100% new materials, typically bamboo pulp obtained directly from bamboo. These materials have not been previously used or recycled. Virgin paper is commonly used in a variety of applications such as printing, writing, packaging, and tissue products. The process of making virgin paper involves harvesting trees, chipping the wood into small pieces, and then processing it into pulp through mechanical or chemical means. This pulp is then bleached and refined before being formed into sheets of paper. Virgin bamboo paper products are known for their high quality, smooth texture, and bright appearance. They are often preferred for applications where a pristine, uniform appearance is desired, such as in high-quality printing and packaging.",
  recycle:
    "Recycled paper products are made from materials that have been previously used and then processed to create new paper. These materials typically include post-consumer waste such as old newspapers, magazines, cardboard, and office paper. Recycling these materials helps divert them from landfills and reduces the demand for virgin wood pulp, thereby conserving natural resources and reducing environmental impact. Recycled paper products can vary in quality depending on the type and amount of recycled content used, as well as the processing techniques employed. Some recycled papers may have visible specks or imperfections due to the presence of recycled fibers, while others can achieve a high level of brightness and smoothness comparable to virgin paper.",
  mixed:
    "Mixed paper products refer to a category of paper that includes a mixture of different types of paper and paperboard materials. Unlike virgin paper, which is made from 100% new wood pulp, and recycled paper, which is made from post-consumer waste, mixed paper products may contain a combination of both virgin and recycled fibers. Mixed paper products are often collected from households, businesses, and recycling centers as part of municipal recycling programs. After collection, these materials undergo sorting and processing to separate them into different grades based on their quality and composition.",
};
  const categoryData = productsDatabase[category];
  if (!categoryData) notFound();

  const product = categoryData.find((p: any) => p.id === id);
  if (!product) notFound();

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ════════════════════════════════════════════════════
          1. CATEGORY TAG
             Elementor: small teal label above product title
          ════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 0" }}>
        <ScrollReveal direction="up">
          <div className="ivt-category-tag">
            {/* Tags icon — Elementor: e-fas-tags svg */}
            <svg
              width="13"
              height="13"
              viewBox="0 0 640 512"
              fill="currentColor"
            >
              <path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" />
            </svg>
            {category.toUpperCase()} PRODUCTS
          </div>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════════════════
          2. PRODUCT HERO
             Elementor: two-column flex container
             Left (flex-1): image with rounded border
             Right (flex-1): title + features + quote box
          ════════════════════════════════════════════════════ */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px 64px" }}
      >
        <div
          className="ivt-product-row"
          style={{
            display: "flex",
            gap: 48,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* ── Left: product image ── */}
          <ScrollReveal
            direction="right"
            className="ivt-product-left"
            style={{ flex: 1, minWidth: 0 }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: 8,
                overflow: "hidden",
                border: "1px solid #f0f0f0",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src={product.img}
                alt={product.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </ScrollReveal>

          {/* ── Right: product info ── */}
          <ScrollReveal
            direction="left"
            delay={100}
            className="ivt-product-right"
            style={{
              flex: 1,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Title — Elementor: h2, elementor-size-default */}
            <h1
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#333",
                marginBottom: 24,
                lineHeight: 1.3,
              }}
            >
              {product.title}
            </h1>

            {/* Features list — Elementor: wp-block-list */}
            <ul
              className="ivt-features"
              style={{ listStyle: "none", padding: 0, margin: "0 0 8px 0" }}
            >
              {product.features.map((feature: string, i: number) => (
                <li key={i}>
                  <span className="bullet">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Quote box — Elementor: inner container with label + button */}
            <div className="ivt-quote-box">
              <p>For product pricing, customization, or other inquiries:</p>
              <Link href="/contact-us" className="ivt-quote-btn">
                Get a Quote
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. DESCRIPTION TAB
             Elementor: n-tabs widget (single tab "Description")
             Content: product detail image + specs table + another image
          ════════════════════════════════════════════════════ */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 72px" }}
      >
        <ScrollReveal direction="up">
          {/* Tab header — Elementor: e-n-tab-title-text */}
          <div style={{ borderBottom: "1px solid #f0f0f0", marginBottom: 32 }}>
            <div className="ivt-tab-header">Description</div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          {/* Specs table — Elementor: table inside text-editor widget */}
          <div
            style={{
              overflowX: "auto",
              borderRadius: 12,
              border: "1px solid #e8e8e8",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
            }}
          >
            <table className="ivt-specs-table">
              <tbody>
                {Object.entries(product.specs).map(([key, value]: any) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* ════════════════════════════════════════════════════
          4. CATEGORY KNOWLEDGE (Replaced from original site)
          ════════════════════════════════════════════════════ */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 24px" }}
      >
        <ScrollReveal direction="up">
          {/* 动态标题：显示材质名称 */}
          <h2 className="ivt-section-heading">
            {category.charAt(0).toUpperCase() + category.slice(1)} Products
          </h2>
          {/* 动态文案：根据类别从字典抓取对应的长文 */}
          <p
            style={{
              color: "#666",
              lineHeight: 1.85,
              maxWidth: 1000,
              fontSize: 15,
              marginBottom: 56,
            }}
          >
            {categoryDescriptions[category] ||
              "Learn more about our premium sustainable paper solutions."}
          </p>
        </ScrollReveal>

        {/* ════════════════════════════════════════════════════
            5. OUR FACTORY
               Elementor: e-gallery-justified — 2 rows × 4 items
               Each item: background-image div + overlay
            ════════════════════════════════════════════════════ */}
        <ScrollReveal direction="up" delay={40}>
          <h2 className="ivt-section-heading">Our Factory</h2>
        </ScrollReveal>

        <div className="ivt-factory-grid" style={{ marginBottom: 72 }}>
          {FACTORY_IMGS.map((src, i) => (
            <ScrollReveal key={i} delay={i * 60} direction="up">
              <div className="ivt-factory-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Factory ${i + 1}`} loading="lazy" />
                <div className="ivt-factory-overlay" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. SUBMIT A REQUEST
             Elementor: two-column container
             Left (background: classic): heading + form
             Right: empty panel (bg color)
          ════════════════════════════════════════════════════ */}
      <section style={{ background: "#f9f9f9", borderTop: "1px solid #eee" }}>
        <div
          className="ivt-request-grid"
          style={{ maxWidth: 1200, margin: "0 auto" }}
        >
          {/* Left: form */}
          <ScrollReveal direction="right" className="ivt-request-left">
            <h2 className="ivt-section-heading" style={{ marginBottom: 28 }}>
              Submit a Request
            </h2>
            <ContactForm />
          </ScrollReveal>

          {/* Right: decorative panel — Elementor: empty e-con with background */}
          <div
            className="ivt-request-right"
            style={{
              backgroundImage: "url(/images/contact-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>
    </div>
  );
}