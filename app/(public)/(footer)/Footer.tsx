// "use client";

// import Link from "next/link";
// import ScrollReveal from "../../components/ScrollReveal";
// import s from "./Footer.module.css";

// // ============================================================
// // FOOTER — pixel-perfect dongshi footer1 replication
// // ============================================================

// export default function Footer() {
//   return (
//     <footer className={s.footer}>
//       {/* ════════════════════════════════════════
//           MAIN SECTION
//           强制均分为 6 列的 Grid 布局
//           ════════════════════════════════════════ */}
//       <div
//         className={s.main}
//         style={{
//           display: "grid",
//           // 核心修改：使用 minmax(0, 1fr) 绝对锁定 6 份均分，防止长文字破坏网格
//           gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
//           maxWidth: "1200px", // 保持 1200px 居中好看
//           margin: "0 auto",
//           gap: "20px",
//           width: "100%",
//           padding: "60px 20px",
//         }}
//       >
//         {/* Col 1 — 关于我们 → About Us */}
//         <ScrollReveal delay={0}>
//           <div className={s.navCol}>
//             <h2>About Us</h2>
//             <Link href="/about-us">Company Profile</Link>
//             <Link href="/development-history">Development History</Link>
//             <Link href="/our-culture">Our Culture</Link>
//             <Link href="/certifications">Certifications</Link>
//           </div>
//         </ScrollReveal>

//         {/* Col 2 — 东实家族 → Ivoire Family */}
//         <ScrollReveal delay={100}>
//           <div className={s.navCol}>
//             <h2>IVOIRE Family</h2>
//             <Link href="/brand-concept">Brand Concept</Link>
//             <Link href="/theme-customization">Theme Customization</Link>
//           </div>
//         </ScrollReveal>

//         {/* Col 3 — 东实外贸 → Foreign Trade */}
//         <ScrollReveal delay={200}>
//           <div className={s.navCol}>
//             <h2>IVOIRE Foreign Trade</h2>
//             <Link href="/foreign-trade">Foreign Trade Details</Link>
//           </div>
//         </ScrollReveal>

//         {/* Col 4 — 线上商城 → Online Store */}
//         <ScrollReveal delay={300}>
//           <div className={s.navCol}>
//             <h2>Our Products</h2>
//             <Link href="/products/bamboo">Bamboo Products</Link>
//             <Link href="/products/virgin">Virgin Products</Link>
//             <Link href="/products/recycle">Recycle Products</Link>
//             <Link href="/products/mixed">Mixed Products</Link>
//           </div>
//         </ScrollReveal>

//         {/* Col 5 — 东实国际 → International */}
//         <ScrollReveal delay={400}>
//           <div className={s.navCol}>
//             <h2>Quick Access</h2>
//             {/* <Link href="/career">Working at Ivoire</Link> */}
//             {/* <Link href="/career">Open Positions</Link> */}
//             <Link href="/career">Open Positions</Link>
//           </div>
//         </ScrollReveal>

//         {/* Col 6 — ── Contact column (left-aligned) ── */}
//         <ScrollReveal delay={500} direction="left">
//           <div
//             className={s.contactCol}
//             style={{ textAlign: "left", color: "#fff" }} // 改为左对齐
//           >
//             {/* Slogan */}
//             <div
//               className={s.slogan}
//               style={{
//                 fontSize: "16px",
//                 paddingBottom: "24px",
//                 whiteSpace: "nowrap",
//                 fontWeight: "bold",
//               }}
//             >
//               Pure Nature, Better Living {/* 删掉了换行符，保证一行 */}
//             </div>

//             {/* 联系方式：加上 whiteSpace: "nowrap" 杜绝换行，并精简前缀 */}
//             {/* 第一个号码 */}
//             <div
//               className={s.contactLine}
//               style={{
//                 paddingBottom: "12px",
//                 opacity: 0.8,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Tel: +1 (514) 971-8238
//             </div>

//             {/* 第二个号码 (Hotline) */}
//             <div
//               className={s.contactLine}
//               style={{
//                 paddingBottom: "12px",
//                 opacity: 0.8,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Hotline: +1 (514) 291-8063
//             </div>

//             {/* 把原来的重复号码位置改为营业时间 */}
//             <div
//               className={s.contactLine}
//               style={{
//                 paddingBottom: "12px",
//                 opacity: 0.8,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Hours: Mon - Fri 8:30AM - 5:00PM
//             </div>

//             {/* 邮箱保持不变 */}
//             <div
//               className={s.contactLine}
//               style={{
//                 paddingBottom: "24px",
//                 opacity: 0.8,
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Email:{" "}
//               <a
//                 href="mailto:sales@ivoiretissue.com"
//                 style={{ color: "inherit", textDecoration: "none" }}
//               >
//                 sales@ivoiretissue.com
//               </a>
//             </div>
//             {/* QR Code */}
//             <div
//               className={s.qrBlock}
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//               }}
//             >
//               <img
//                 src="/images/qr-code.png"
//                 alt="QR Code"
//                 width={130} /* 👈 从 100 放大到 130，等比拉伸 */
//                 height={130} /* 👈 从 100 放大到 130 */
//                 style={{ display: "block" }}
//               />
//               <div
//                 className={s.qrLabel}
//                 style={{
//                   paddingTop: "8px",
//                   opacity: 0.8,
//                   fontSize: "20px",
//                 }} /* 👈 字体从 14px 放大到 16px，间距稍微加点 */
//               >
//                 Follow us
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>
//       </div>

//       {/* ════════════════════════════════════════
//           COPYRIGHT BAR — darker teal strip
//           ════════════════════════════════════════ */}
//       <div className={s.copyrightWrapper}>
//         <div
//           className={s.copyrightInner}
//           style={{
//             display: "flex",
//             justifyContent: "space-between", // 确保左右撑开
//             alignItems: "center", // 垂直居中
//             flexWrap: "wrap", // 关键：宽度不够时自动换行，不至于挤出屏幕
//             fontSize: "14px", // 稍微调小一点点（16改14），防止在平板电脑上就早早换行
//             maxWidth: "1200px",
//             margin: "0 auto",
//             padding: "20px 24px",
//             gap: "15px", // 换行后的上下间距
//           }}
//         >
//           {/* Left — 对应目标网站左下角版权信息 */}
//           <span>
//             © 2026 Ivoire Tissue Paper Inc. All Rights Reserved.&nbsp;·&nbsp;
//             <Link href="/policy" style={{ color: "#fff", opacity: 0.8 }}>
//               Privacy Policy
//             </Link>{" "}
//             |
//             <Link href="/terms-of-use" style={{ color: "#fff", opacity: 0.8 }}>
//               {" "}
//               Terms of Use
//             </Link>{" "}
//             {/* | */}
//             {/* <Link
//               href="/certifications"
//               style={{ color: "#fff", opacity: 0.8 }}
//             >
//               {" "}
//               FSC Certifications
//             </Link> */}
//           </span>

//           {/* Right — 对应目标网站右下角地址 */}
//           <span>
//             Address: 222 Rue Poirier, #30, St-Eustache, QC J7R 6B1, Canada
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";

// ============================================================
// SVG ICONS
// ============================================================
const ChevronRight = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
  </svg>
);

const MapMarkerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 384 512" fill="currentColor">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

// 👇 新增以下这 4 个社交图标 👇
const FacebookIcon = () => (
  <svg viewBox="0 0 320 512" width="20" height="20" fill="currentColor">
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 576 512" width="20" height="20" fill="currentColor">
    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
  </svg>
);
// 👆 新增结束 👆

// ============================================================
// COMPONENT
// ============================================================
export default function Footer() {
  return (
    <footer className="iv-footer">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .iv-footer {
          background-color: rgb(0, 166, 152); /* 原版精准底色 */
          color: #ffffff;
          padding: 70px 20px 30px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        }

        .iv-footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          /* 完美复刻的四列宽度比例 */
          grid-template-columns: 1.2fr 1fr 1.2fr 1.5fr; 
          gap: 50px;
        }

        /* --- Headings --- */
        .iv-footer-col h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 25px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* --- Column 1: Logo & Certs --- */
        .iv-footer-logo img {
          width: 240px; /* 原版比较大 */
          height: auto;
          margin-bottom: 30px;
          display: block;
        }
        .iv-footer-certs {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        .iv-footer-certs img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        /* --- Lists (Links & Contact) --- */
        .iv-footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .iv-footer-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          font-size: 15px;
          line-height: 1.5;
        }
        .iv-footer-list li svg {
          flex-shrink: 0;
          margin-top: 3px; /* 微调图标与文字第一行对齐 */
        }
        .iv-footer-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .iv-footer-link:hover {
          color: #33ffcc; /* 原版高亮绿 */
          text-decoration: underline;
        }

        /* --- Column 4: About --- */
        .iv-footer-about {
          font-size: 15px;
          line-height: 1.8;
          opacity: 0.95;
        }

        /* --- Bottom Copyright --- */
        .iv-footer-bottom {
          max-width: 1400px;
          margin: 60px auto 0;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          opacity: 0.9;
          flex-wrap: wrap;
          gap: 15px;
        }

/* 👇 新增：社交媒体和底部法律链接的样式 👇 */
        .iv-social-icons {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        .iv-social-icons a {
          color: #fff;
          transition: transform 0.3s ease, color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .iv-social-icons a:hover {
          color: #33ffcc;
          transform: translateY(-3px);
        }
        .iv-footer-legal-links {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }
        .iv-footer-legal-links a {
          color: #fff;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .iv-footer-legal-links a:hover {
          color: #33ffcc;
          text-decoration: underline;
        }
        /* 👆 新增样式结束 👆 */

       
        /* --- Responsive Design --- */
        @media (max-width: 1024px) {
          .iv-footer-container {
            grid-template-columns: 1fr 1fr;
            row-gap: 40px;
          }
        }
        @media (max-width: 640px) {
          .iv-footer-container {
            grid-template-columns: 1fr;
          }
          .iv-footer-logo img { width: 200px; }
        }
        `,
        }}
      />

      <div className="iv-footer-container">
        {/* Column 1: Logo & Certifications */}
        <div className="iv-footer-col">
          <Link href="/" className="iv-footer-logo">
            {/* ⚠️ 提示：因为底色是绿色，Logo 必须是白色/反白版本的 PNG！ */}
            <Image
              src="/images/logo.png"
              alt="Ivoire Tissue Logo"
              width={240}
              height={60}
            />
          </Link>
          <div className="iv-footer-certs">
            {/* 使用原版 URL 占位 */}
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/fdc-3.png"
              alt="FSC"
            />
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/iso-1.png"
              alt="ISO"
            />
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/fda-2.png"
              alt="FDA"
            />
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/bsci.png"
              alt="BSCI"
            />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="iv-footer-col">
          <h3>QUICK LINKS</h3>
          <ul className="iv-footer-list">
            <li>
              <ChevronRight />
              <Link href="/about-us" className="iv-footer-link">
                About us
              </Link>
            </li>
            <li>
              <ChevronRight />
              <Link href="/products" className="iv-footer-link">
                Products
              </Link>
            </li>
            <li>
              <ChevronRight />
              <Link href="/why-bamboo" className="iv-footer-link">
                Why Bamboo
              </Link>
            </li>
            <li>
              <ChevronRight />
              <Link href="/services/faq" className="iv-footer-link">
                FAQ
              </Link>
            </li>
            <li>
              <ChevronRight />
              <Link href="/contact-us" className="iv-footer-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="iv-footer-col">
          <h3>CONTACT US</h3>
          <ul className="iv-footer-list">
            <li>
              <PhoneIcon />
              {/* 修复：显示双电话 */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <span>Sales: +1 (514) 971-8238</span>
                {/* <span>Sales: +1 (514) 291-8063</span> */}
              </div>
            </li>
            <li>
              <EmailIcon />
              <a
                href="mailto:sales@ivoiretissue.com"
                className="iv-footer-link"
              >
                sales@ivoiretissue.com
              </a>
            </li>
            <li>
              <MapMarkerIcon />
              <span>
                222 Rue Poirier, #30, Saint-Eustache, QC J7R 6B1, Canada
              </span>
            </li>
          </ul>
          {/* 👇 新增：在这里插入社交媒体图标 👇 */}
          <div className="iv-social-icons">
            <a
              href="https://www.facebook.com/ivoiretissue/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <XTwitterIcon />
            </a> */}
            <a
              href="https://www.youtube.com/@ivoiretissue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/ivoiretissue/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
          {/* 👆 新增结束 👆 */}
        </div>
        {/* Column 4: About Us */}
        <div className="iv-footer-col">
          <h3>ABOUT US</h3>
          <p className="iv-footer-about">
            Ivoire Tissue is a pioneering Canadian company dedicated to
            producing high-quality tissue paper using sustainable bamboo
            resources. Established in Montreal, we offer eco-friendly
            alternatives to traditional paper products while ensuring top-notch
            quality and performance. OEM & ODM are warmly welcome.
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="iv-footer-bottom">
        <p>Ivoire Tissue Paper™️ | Copyright © 2026. All Rights Reserved.</p>
        {/* 👇 新增：右侧的隐私政策和使用条款 👇 */}
        <div className="iv-footer-legal-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-use">Terms of Use</Link>
        </div>
        {/* 👆 新增结束 👆 */}
      </div>
    </footer>
  );
}