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
          gridTemplateColumns: "repeat(6, 1fr)", // 强制均分 6 份
          maxWidth: "1200px", // 限制最大宽度，居中好看
          margin: "0 auto",
          gap: "20px", // 列与列之间的间距
          width: "100%",
          padding: "60px 20px", // 根据需要微调上下内边距
        }}
      >
        {/* Col 1 — 关于我们 → About Us */}
        <ScrollReveal delay={0}>
          <div className={s.navCol}>
            <h2>About Us</h2>
            <Link href="/about-us">Company Profile</Link>
            <Link href="#/progress">Development History</Link>
            <Link href="#/culture">Our Culture</Link>
            <Link href="#/certificate">Certifications</Link>
          </div>
        </ScrollReveal>

        {/* Col 2 — 东实家族 → Ivoire Family */}
        <ScrollReveal delay={100}>
          <div className={s.navCol}>
            <h2>Ivoire Family</h2>
            <Link href="#/company_idea">Brand Concept</Link>
            <Link href="#/customization">Theme Customization</Link>
          </div>
        </ScrollReveal>

        {/* Col 3 — 东实外贸 → Foreign Trade */}
        <ScrollReveal delay={200}>
          <div className={s.navCol}>
            <h2>Foreign Trade</h2>
            <Link href="#/foreign-trade">Foreign Trade Details</Link>
          </div>
        </ScrollReveal>

        {/* Col 4 — 线上商城 → Online Store */}
        <ScrollReveal delay={300}>
          <div className={s.navCol}>
            <h2>Online Store</h2>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Official Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Amazon Store
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Alibaba Store
            </a>
          </div>
        </ScrollReveal>

        {/* Col 5 — 东实国际 → International */}
        <ScrollReveal delay={400}>
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
        </ScrollReveal>

        {/* Col 6 — ── Contact column (right-aligned) ── */}
        <ScrollReveal delay={500} direction="left">
          <div
            className={s.contactCol}
            style={{ textAlign: "right", color: "#fff" }}
          >
            {/* Slogan */}
            <div
              className={s.slogan}
              style={{ fontSize: "16px", paddingBottom: "24px" }}
            >
              Pure Nature,
              <br />
              Better Living
            </div>

            {/* 联系方式 - 严格复刻 dongshi 的间距和透明度 */}
            <div
              className={s.contactLine}
              style={{ paddingBottom: "24px", opacity: 0.8 }}
            >
              Company Phone: +1 (514) 971-8238
            </div>
            <div
              className={s.contactLine}
              style={{ paddingBottom: "24px", opacity: 0.8 }}
            >
              Hotline: +1 (514) 291-8063
            </div>
            <div
              className={s.contactLine}
              style={{ paddingBottom: "24px", opacity: 0.8 }}
            >
              Toll-free: 1-800-000-0000
            </div>
            <div
              className={s.contactLine}
              style={{ paddingBottom: "24px", opacity: 0.8 }}
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
                alignItems: "flex-end",
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
          Left: company + legal  |  Right: address
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
