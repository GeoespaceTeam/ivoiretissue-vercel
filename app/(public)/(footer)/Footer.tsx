"use client";

import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import s from "./Footer.module.css";

// ============================================================
// FOOTER — pixel-perfect dongshi footer1 replication
// ============================================================

export default function Footer() {
  return (
    <footer className={s.footer}>
      {/* ════════════════════════════════════════
          MAIN SECTION
          强制均分为 6 列的 Grid 布局
          ════════════════════════════════════════ */}
      <div
        className={s.main}
        style={{
          display: "grid",
          // 核心修改：使用 minmax(0, 1fr) 绝对锁定 6 份均分，防止长文字破坏网格
          gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
          maxWidth: "1200px", // 保持 1200px 居中好看
          margin: "0 auto",
          gap: "20px",
          width: "100%",
          padding: "60px 20px",
        }}
      >
        {/* Col 1 — 关于我们 → About Us */}
        <ScrollReveal delay={0}>
          <div className={s.navCol}>
            <h2>About Us</h2>
            <Link href="/about-us">Company Profile</Link>
            <Link href="/development-history">Development History</Link>
            <Link href="/our-culture">Our Culture</Link>
            <Link href="/certifications">Certifications</Link>
          </div>
        </ScrollReveal>

        {/* Col 2 — 东实家族 → Ivoire Family */}
        <ScrollReveal delay={100}>
          <div className={s.navCol}>
            <h2>Ivoire Family</h2>
            <Link href="/company-idea">Brand Concept</Link>
            <Link href="/theme-customization">Theme Customization</Link>
          </div>
        </ScrollReveal>

        {/* Col 3 — 东实外贸 → Foreign Trade */}
        <ScrollReveal delay={200}>
          <div className={s.navCol}>
            <h2>Foreign Trade</h2>
            <Link href="/foreign-trade">Foreign Trade Details</Link>
          </div>
        </ScrollReveal>

        {/* Col 4 — 线上商城 → Online Store */}
        <ScrollReveal delay={300}>
          <div className={s.navCol}>
            <h2>Online Store</h2>
            <a href="/products" target="_blank" rel="noopener noreferrer">
              Official Store
            </a>
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              Amazon Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Alibaba Store
            </a> */}
          </div>
        </ScrollReveal>

        {/* Col 5 — 东实国际 → International */}
        {/* <ScrollReveal delay={400}>
          <div className={s.navCol}>
            <h2>International</h2>
            <a
              href="https://ivoiretissue.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Website
            </a>
          </div>
        </ScrollReveal> */}

        {/* Col 6 — ── Contact column (left-aligned) ── */}
        <ScrollReveal delay={500} direction="left">
          <div
            className={s.contactCol}
            style={{ textAlign: "left", color: "#fff" }} // 改为左对齐
          >
            {/* Slogan */}
            <div
              className={s.slogan}
              style={{
                fontSize: "16px",
                paddingBottom: "24px",
                whiteSpace: "nowrap",
                fontWeight: "bold",
              }}
            >
              Pure Nature, Better Living {/* 删掉了换行符，保证一行 */}
            </div>

            {/* 联系方式：加上 whiteSpace: "nowrap" 杜绝换行，并精简前缀 */}
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "24px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Tel: +1 (514) 971-8238
            </div>
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "24px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Hotline 1: +1 (514) 291-8063
            </div>
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "24px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Hotline 2: +1 (514) 971-8238
            </div>
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "24px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Email:{" "}
              <a
                href="mailto:sales@ivoiretissue.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                sales@ivoiretissue.com
              </a>
            </div>

            {/* QR Code */}
            <div
              className={s.qrBlock}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start", // 让二维码和文字一起左对齐
              }}
            >
              <img
                src="/images/qr-code.png"
                alt="QR Code"
                width={100}
                height={100}
                style={{ display: "block" }}
              />
              <div
                className={s.qrLabel}
                style={{ paddingTop: "5px", opacity: 0.8, fontSize: "14px" }}
              >
                Follow us
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════
          COPYRIGHT BAR — darker teal strip
          ════════════════════════════════════════ */}
      <div className={s.copyrightWrapper}>
        <div
          className={s.copyrightInner}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "15px 20px",
          }}
        >
          {/* Left — 对应目标网站左下角版权信息 */}
          <span>
            Ivoire Tissue Paper Inc. 2023 All Rights Reserved. Powered by IVOIRE
            TISSUE&nbsp;·&nbsp;
            <Link href="/policy" style={{ color: "#fff", opacity: 0.8 }}>
              Privacy Policy
            </Link>
          </span>

          {/* Right — 对应目标网站右下角地址 */}
          <span>
            Address: 222 Rue Poirier, #30, St-Eustache, QC J7R 6B1, Canada
          </span>
        </div>
      </div>
    </footer>
  );
}
