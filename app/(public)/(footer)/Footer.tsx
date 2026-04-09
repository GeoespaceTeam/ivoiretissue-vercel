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
            <h2>IVOIRE Family</h2>
            <Link href="/brand-concept">Brand Concept</Link>
            <Link href="/theme-customization">Theme Customization</Link>
          </div>
        </ScrollReveal>

        {/* Col 3 — 东实外贸 → Foreign Trade */}
        <ScrollReveal delay={200}>
          <div className={s.navCol}>
            <h2>IVOIRE Foreign Trade</h2>
            <Link href="/foreign-trade">Foreign Trade Details</Link>
          </div>
        </ScrollReveal>

        {/* Col 4 — 线上商城 → Online Store */}
        <ScrollReveal delay={300}>
          <div className={s.navCol}>
            <h2>Our Products</h2>
            <Link href="/products/bamboo">Bamboo Products</Link>
            <Link href="/products/virgin">Virgin Products</Link>
            <Link href="/products/recycle">Recycle Products</Link>
            <Link href="/products/mixed">Mixed Products</Link>
          </div>
        </ScrollReveal>

        {/* Col 5 — 东实国际 → International */}
        <ScrollReveal delay={400}>
          <div className={s.navCol}>
            <h2>Quick Access</h2>
            {/* <Link href="/career">Working at Ivoire</Link> */}
            {/* <Link href="/career">Open Positions</Link> */}
            <Link href="/career">Open Positions</Link>
          </div>
        </ScrollReveal>

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
            {/* 第一个号码 */}
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "12px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Tel: +1 (514) 971-8238
            </div>

            {/* 第二个号码 (Hotline) */}
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "12px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Hotline: +1 (514) 291-8063
            </div>

            {/* 把原来的重复号码位置改为营业时间 */}
            <div
              className={s.contactLine}
              style={{
                paddingBottom: "12px",
                opacity: 0.8,
                whiteSpace: "nowrap",
              }}
            >
              Hours: Mon - Fri 8:30AM - 5:00PM
            </div>

            {/* 邮箱保持不变 */}
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
                alignItems: "flex-start",
              }}
            >
              <img
                src="/images/qr-code.png"
                alt="QR Code"
                width={130} /* 👈 从 100 放大到 130，等比拉伸 */
                height={130} /* 👈 从 100 放大到 130 */
                style={{ display: "block" }}
              />
              <div
                className={s.qrLabel}
                style={{
                  paddingTop: "8px",
                  opacity: 0.8,
                  fontSize: "20px",
                }} /* 👈 字体从 14px 放大到 16px，间距稍微加点 */
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
            justifyContent: "space-between", // 确保左右撑开
            alignItems: "center", // 垂直居中
            flexWrap: "wrap", // 关键：宽度不够时自动换行，不至于挤出屏幕
            fontSize: "14px", // 稍微调小一点点（16改14），防止在平板电脑上就早早换行
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 24px",
            gap: "15px", // 换行后的上下间距
          }}
        >
          {/* Left — 对应目标网站左下角版权信息 */}
          <span>
            © 2026 Ivoire Tissue Paper Inc. All Rights Reserved.&nbsp;·&nbsp;
            <Link href="/policy" style={{ color: "#fff", opacity: 0.8 }}>
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms-of-use" style={{ color: "#fff", opacity: 0.8 }}>
              {" "}
              Terms of Use
            </Link>{" "}
            {/* | */}
            {/* <Link
              href="/certifications"
              style={{ color: "#fff", opacity: 0.8 }}
            >
              {" "}
              FSC Certifications
            </Link> */}
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
