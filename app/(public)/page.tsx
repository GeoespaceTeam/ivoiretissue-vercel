// import Link from "next/link";
// import HeroCarousel from "../components/HeroCarousel";
// import AnimatedCounter from "../components/AnimatedCounter";
// import ScrollReveal from "../components/ScrollReveal";
// // import PartnerLogos from "../components/PartnerLogos"; // 引入路径根据你的目录调整

// // ============================================================
// // IVOIRE TISSUE — HOME PAGE
// //
// // CSS strategy:
// //   - Hover/pseudo states   → <style> tag at top of JSX
// //   - Layout & spacing      → inline styles (exact dongshi values)
// //   - Shared utilities      → globals.css classes
// //   - Scroll animations     → ScrollReveal component
// //
// // Sections (dongshi order):
// //   1. Hero Carousel   (Banner0_1)
// //   2. Stats Bar       (teal inline strip)
// //   3. About Us        (Feature4_0 — img 58% + stats 42%)
// //   4. Main Markets    (Teams1_0   — 5-col image+title)
// //   5. Core Caps       (Content3_0 — 6-col icon+text)
// // ============================================================

// // ── Hover & pseudo styles that cannot be expressed inline ──
// const CSS = `
//   /* ── Team cards ── */
//   .ivt-team-card {
//     cursor: pointer;
//     overflow: hidden;
//     background: #f5f5f5;
//   }
//   .ivt-team-card img {
//     width: 100%;
//     aspect-ratio: 1 / 1;
//     object-fit: cover;
//     display: block;
//     transition: transform 0.5s ease;
//   }
//   .ivt-team-card:hover img { transform: scale(1.05); }

//   /* ── Capability blocks ── */
//   .ivt-cap-block {
//     text-align: center;
//     padding: 28px 16px;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//   }
//   .ivt-cap-block:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
//   }

//  /* ── Learn More button ── */
//   .ivt-learn-btn {
//     display: inline-block;
//     margin-top: 30px;
//     padding: 10px 28px; /* 👈 从 8px 22px 改大，让按钮变得更饱满 */
//     background: rgb(0, 168, 150);
//     border-color: rgb(0, 168, 150);
//     color: #fff;
//     font-size: 18px; /* 👈 从 14px 直接干到 18px */
//     font-weight: 500; /* 👈 顺便加粗一点点 */
//     border: 1px solid transparent;
//     cursor: pointer;
//     transition: background 0.25s, border-color 0.25s;
//     text-decoration: none;
//   }
//   .ivt-learn-btn:hover {
//     background: #007a6d;
//     border-color: #007a6d;
//     color: #fff;
//   }

//   /* ── Responsive grids ── */
//   @media (max-width: 1024px) {
//     .ivt-teams-grid { grid-template-columns: repeat(3, 1fr) !important; }
//     .ivt-cap-grid   { grid-template-columns: repeat(3, 1fr) !important; }
//   }
//   @media (max-width: 640px) {
//     .ivt-teams-grid { grid-template-columns: repeat(2, 1fr) !important; }
//     .ivt-cap-grid   { grid-template-columns: repeat(2, 1fr) !important; }
//     .ivt-about-row  { flex-direction: column !important; }
//     .ivt-about-left,
//     .ivt-about-right { flex: 0 0 100% !important; max-width: 100% !important; padding-left: 0 !important; }
//     .ivt-about-left img { width: 100% !important; }
//   }
// `;

// export default function HomePage() {
//   return (
//     <>
//       {/* Inject hover/responsive CSS — no separate file needed */}
//       <style dangerouslySetInnerHTML={{ __html: CSS }} />

//       {/* ════════════════════════════════════════════════════
//           1. HERO CAROUSEL  (Banner0_1)
//              80vh, 3 slides, arrows at left/right 100px
//           ════════════════════════════════════════════════════ */}
//       <HeroCarousel />

//       {/* ════════════════════════════════════════════════════
//           2. STATS BAR
//              dongshi exact inline values:
//              bg rgb(0,166,152), each item width:220px,
//              border-left, 3px white accent bar, 32px number
//           ════════════════════════════════════════════════════ */}
//       <section style={{ backgroundColor: "rgb(0, 166, 152)", color: "#fff" }}>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-between", // 改为两端对齐，撑满空间
//             maxWidth: "1600px", // 这里的 1600 让它变 Wide
//             margin: "0 auto",
//             flexWrap: "wrap",
//             padding: "0 40px", // 增加侧边距，防止贴边
//           }}
//         >
//           {STATS.map((stat, i) => (
//             <ScrollReveal key={stat.suffix} delay={i * 120} direction="up">
//               {/* dongshi: exact inline styles from HTML */}
//               <div
//                 style={{
//                   borderLeft: "1px solid rgba(255, 255, 255, 0.52)",
//                   padding: "40px 20px", // 增加上下内边距，让整体看起来更厚实
//                   width: 320, // 显著增加宽度
//                   textAlign: "left",
//                   position: "relative",
//                 }}
//               >
//                 {/* dongshi: 3px white bar — position absolute, left 0, top 43 */}
//                 <div
//                   style={{
//                     width: 3,
//                     height: 36,
//                     backgroundColor: "rgb(255, 255, 255)",
//                     position: "absolute",
//                     left: 0,
//                     top: 43,
//                   }}
//                 />
//                 {/* dongshi: font-size 32px, font-weight 600 */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "baseline",
//                     marginBottom: 12,
//                   }}
//                 >
//                   <span
//                     style={{ fontSize: 56, fontWeight: 800, lineHeight: 1 }}
//                   >
//                     {" "}
//                     {/* 56px 巨型数字 */}
//                     <AnimatedCounter target={stat.number} />
//                   </span>
//                   <span
//                     style={{ fontSize: 22, marginLeft: 8, fontWeight: 600 }}
//                   >
//                     {" "}
//                     {/* 22px 后缀 */}
//                     {stat.suffix}
//                   </span>
//                 </div>
//                 {/* dongshi: opacity 0.8, line-height 26px */}
//                 <div
//                   style={{
//                     color: "rgb(255, 255, 255)",
//                     lineHeight: "1.6", // 适当的行高
//                     opacity: 0.95,
//                     fontSize: 18, // 调到 18px，老板一定能看清了
//                     marginTop: 8,
//                   }}
//                 >
//                   {stat.desc}
//                 </div>
//               </div>
//             </ScrollReveal>
//           ))}
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════
//           3. ABOUT  (Feature4_0 — content6-wrapper)
//              Centered title/desc →
//              Left: image ant-col-md-14 (58.33%), width="80%"
//              Right: ant-col-md-10 (41.67%), stats + button
//           ════════════════════════════════════════════════════ */}
//       <section style={{ background: "#fff" }}>
//         <div className="section-wrapper">
//           {/* Title block */}
//           <ScrollReveal direction="up">
//             <div className="section-title">
//               <h1 style={{ fontSize: "40px", marginBottom: "16px" }}>
//                 About Us
//               </h1>
//             </div>
//             <p
//               className="section-title-desc"
//               style={{ fontSize: "18px", lineHeight: "1.8" }}
//             >
//               {/* Dongshi Paper was founded in 2001. With 21 years of professional
//               quality and 21 years of innovative development, it has now grown
//               into a comprehensive household paper enterprise integrating R&D,
//               innovation, production, sales, and service. */}
//               Established in 2022 in Montreal, Ivoire Tissue Paper is a
//               pioneering Canadian company dedicated to producing high-quality
//               tissue paper using sustainable bamboo resources. We offer
//               eco-friendly alternatives to traditional paper products while
//               ensuring top-notch quality and performance.
//             </p>
//           </ScrollReveal>

//           {/* Two-column row */}
//           <div
//             className="ivt-about-row"
//             style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
//           >
//             {/* ── Left: image — ant-col-md-14 (58.33%) ── */}
//             {/* dongshi: img width="80%" height="100%" */}
//             <ScrollReveal
//               direction="right"
//               className="ivt-about-left"
//               style={{ flex: "0 0 58.33%", maxWidth: "58.33%" }}
//             >
//               {/* eslint-disable-next-line @next/next/no-img-element */}
//               <img
//                 src="/images/about.png"
//                 alt="About Ivoire Tissue"
//                 style={{ width: "80%", height: "auto", display: "block" }}
//               />
//               {/* <img
//                 src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/regards1.png"
//                 alt="DONSEA Paper"
//                 style={{ width: "80%", height: "auto", display: "block" }}
//               /> */}
//             </ScrollReveal>

//             {/* ── Right: stats + button — ant-col-md-10 (41.67%) ── */}
//             <ScrollReveal
//               direction="left"
//               delay={150}
//               className="ivt-about-right"
//               style={{
//                 flex: "0 0 41.67%",
//                 maxWidth: "41.67%",
//                 paddingLeft: 40,
//               }}
//             >
//               {/* dongshi: padding-top: 20px */}
//               <div style={{ paddingTop: 20 }}>
//                 {/* dongshi: "企业总面积 3000㎡" — font-size 30px, weight 600 */}
//                 <div
//                   style={{
//                     fontSize: 40,
//                     fontWeight: 600,
//                     color: "rgb(17, 17, 17)",
//                   }}
//                 >
//                   Factory Area&nbsp;
//                   {/* dongshi: span with color: red → brand teal for Ivoire */}
//                   <span style={{ color: "rgb(0, 168, 150)" }}>2,000 ㎡</span>
//                 </div>

//                 {/* dongshi: "建筑面积" sub-label */}
//                 <div>
//                   <span style={{ fontSize: 20, color: "#666" }}>
//                     Production Facility
//                   </span>

//                   {/* dongshi: divider — height 2px, bg #f3f3f3, margin 30px 0 20px */}
//                   <div
//                     style={{
//                       height: 2,
//                       backgroundColor: "rgb(243, 243, 243)",
//                       margin: "30px 0 20px",
//                     }}
//                   />

//                   {/* dongshi: "120人+" — font-size 30px, weight 600 */}
//                   <div
//                     style={{
//                       fontSize: 40,
//                       color: "rgb(17, 17, 17)",
//                       fontWeight: 600,
//                     }}
//                   >
//                     20+<span style={{ fontSize: 20, fontWeight: 400 }}>+</span>
//                   </div>

//                   {/* dongshi: "企业员工" sub-label */}
//                   <span style={{ fontSize: 20, color: "#666" }}>
//                     Team Members
//                   </span>
//                 </div>

//                 {/* dongshi: "查看更多 >" — teal button */}
//                 <Link href="/about-us" className="ivt-learn-btn">
//                   Learn More &gt;
//                 </Link>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════
//           4. MAIN MARKETS  (Teams1_0 — teams1-wrapper)
//              dongshi: 5 blocks, ant-col-md-4 each
//              Structure: image → h1 title (below image, centered)
//              No overlay, no description — pure dongshi style
//           ════════════════════════════════════════════════════ */}
//       <section style={{ background: "#fafafa" }}>
//         <div className="section-wrapper">
//           <ScrollReveal direction="up">
//             <div className="section-title">
//               <h1 style={{ fontSize: "40px" }}>Main Markets</h1>
//             </div>
//           </ScrollReveal>

//           {/* dongshi: ant-row block-wrapper, 5 × ant-col-md-4 */}
//           <div
//             className="ivt-teams-grid"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(5, 1fr)",
//               gap: 20,
//               marginTop: 8,
//             }}
//           >
//             {MARKETS.map((m, i) => (
//               <ScrollReveal key={m.title} delay={i * 80} direction="up">
//                 <Link
//                   href={m.href}
//                   className="ivt-team-card"
//                   style={{ display: "block" }}
//                 >
//                   {/* dongshi: teams1-image */}
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img src={m.img} alt={m.title} />
//                   {/* dongshi: teams1-title */}
//                   <h1
//                     style={{
//                       textAlign: "center",
//                       padding: "12px 0 6px",
//                       fontSize: 24,
//                       fontWeight: 500,
//                       color: "#111",
//                     }}
//                   >
//                     {m.title}
//                   </h1>
//                 </Link>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ════════════════════════════════════════════════════
//           5. CORE CAPABILITIES  (Content3_0 — content3-wrapper)
//              dongshi: 6 blocks, ant-col-md-4 each
//              Structure: icon image → h2 title (12px bold) →
//              two content lines (12px bold key:value)
//           ════════════════════════════════════════════════════ */}
//       <section style={{ background: "#fff" }}>
//         <div className="section-wrapper">
//           <ScrollReveal direction="up">
//             <div className="section-title">
//               <h1 style={{ fontSize: "40px" }}>Core Capabilities</h1>
//             </div>
//           </ScrollReveal>

//           {/* dongshi: ant-row content3-block-wrapper, 6 × ant-col-md-4 */}
//           <div
//             className="ivt-cap-grid"
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(6, 1fr)",
//               gap: 20,
//               marginTop: 8,
//             }}
//           >
//             {CAPABILITIES.map((cap, i) => (
//               <ScrollReveal key={cap.title} delay={i * 80} direction="up">
//                 <div className="ivt-cap-block">
//                   {/* dongshi: content3-icon — image width 100% */}
//                   {/* 修改了这里的样式，让图标居中并限制大小为原网页的标准尺寸 */}
//                   <div
//                     style={{
//                       marginBottom: 16,
//                       display: "flex",
//                       justifyContent: "center",
//                     }}
//                   >
//                     {/* eslint-disable-next-line @next/next/no-img-element */}
//                     <img
//                       src={cap.img}
//                       alt={cap.title}
//                       style={{
//                         width: "65px",
//                         height: "65px",
//                         display: "block",
//                       }}
//                     />
//                   </div>
//                   {/* dongshi: content3-text */}
//                   <div>
//                     {/* dongshi: content3-title — font-size 12px, font-weight bold, color #111 */}
//                     <h2
//                       style={{
//                         fontSize: 18,
//                         fontWeight: "bold",
//                         color: "rgb(17, 17, 17)",
//                         marginBottom: 6,
//                       }}
//                     >
//                       {cap.title}
//                     </h2>

//                     {/* dongshi: content3-content — two lines, 12px bold */}
//                     <div
//                       style={{
//                         fontSize: 14,
//                         fontWeight: "bold",
//                         color: "rgb(17, 17, 17)",
//                       }}
//                     >
//                       {cap.line1}
//                     </div>
//                     <div
//                       style={{
//                         fontSize: 14,
//                         fontWeight: "bold",
//                         color: "rgb(17, 17, 17)",
//                       }}
//                     >
//                       {cap.line2}
//                     </div>
//                   </div>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* <PartnerLogos /> */}
//     </>
//   );
// }

// // ============================================================
// // DATA
// // ============================================================

// // /* Stats bar — dongshi: 2001成立 / 5000+ / 22年 / 1500城镇 */
// // const STATS = [
// //   {
// //     number: 2022,
// //     suffix: "Est.",
// //     desc: "Founded in Montreal, Canada — a pioneering bamboo tissue paper manufacturer.",
// //   },
// //   {
// //     number: 5000,
// //     suffix: "+",
// //     desc: "Over 5,000 satisfied customers served by our professional team with premium products.",
// //   },
// //   {
// //     number: 3,
// //     suffix: "Plans",
// //     desc: "3 renewable energy power plans driving our commitment to eco-friendly manufacturing.",
// //   },
// //   {
// //     number: 1,
// //     suffix: "Factory",
// //     desc: "State-of-the-art production facility in Saint-Eustache, Quebec, serving North America.",
// //   },
// // ] as const;

// // /* Main Markets — 贴合加拿大本土企业的商业逻辑划分 */
// const MARKETS = [
//   {
//     title: "Canada",
//     // 建议：放一张蒙特利尔或多伦多的城市风景图
//     img: "/images/market-canada.jpg",
//     href: "/foreign-trade",
//   },
//   {
//     title: "United States",
//     // 建议：放一张美国国会大厦或纽约的风景图（原网页也是国会大厦）
//     img: "/images/market-us.jpg",
//     href: "/foreign-trade",
//   },
//   {
//     title: "Western Europe",
//     // 建议：放一张欧洲城堡或标志性建筑
//     img: "/images/market-europe.jpg",
//     href: "/foreign-trade",
//   },
//   {
//     title: "Southeastern Asia",
//     // 替换原版的“东南亚”，亚太地区对加拿大纸业出口更具包容性
//     img: "/images/market-asia.jpg",
//     href: "/foreign-trade",
//   },
//   {
//     title: "South America",
//     // 替换原版的“南美洲”，包含中美洲和南美洲，放一张里约热内卢的图即可
//     img: "/images/market-latam.jpg",
//     href: "/foreign-trade",
//   },
// ] as const;
// // ============================================================
// // DATA
// // ============================================================

// /* Stats bar — 100% 还原东实文案 */
// // const STATS = [
// //   {
// //     number: 2001,
// //     suffix: "Est.", // 对应：成立
// //     desc: "Dongshi is a diversified group company integrating R&D, production, and sales.",
// //   },
// //   {
// //     number: 5000,
// //     suffix: "+",
// //     desc: "Over 5,000 cooperative customers, our professional team provides you with premium products.",
// //   },
// //   {
// //     number: 22,
// //     suffix: "Years", // 对应：年
// //     desc: "22 years of growth spur Dongshi people to provide consumers with higher-quality household paper with a stronger sense of mission and responsibility.",
// //   },
// //   {
// //     number: 1500,
// //     suffix: "Cities", // 对应：城镇
// //     desc: "To meet the growing product demand, our products cover more than 1,500 cities nationwide.",
// //   },
// // ] as const;
// const STATS = [
//   {
//     number: 2022,
//     suffix: "Est.",
//     desc: "Established in Montreal, Canada — a pioneering bamboo tissue paper manufacturer.",
//   },
//   {
//     number: 5000,
//     suffix: "+",
//     desc: "Over 5,000 satisfied customers served by our professional team with premium products.",
//   },
//   {
//     number: 1600,
//     suffix: "GWh",
//     desc: "Annual renewable energy production from our power plants to drive eco-friendly manufacturing.",
//   },
//   {
//     number: 1,
//     suffix: "Unit",
//     desc: "Leading-edge production and distribution hub located in Saint-Eustache, Quebec.",
//   },
// ] as const;

// /* Main Markets — 100% 还原东实的五个市场及图片 */
// // const MARKETS = [
// //   {
// //     title: "Domestic Market", // 国内市场
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market1.png",
// //     href: "/foreign-trade",
// //   },
// //   {
// //     title: "North America", // 北美
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market2.png",
// //     href: "/foreign-trade",
// //   },
// //   {
// //     title: "Western Europe", // 西欧
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market3.png",
// //     href: "/foreign-trade",
// //   },
// //   {
// //     title: "Southeast Asia", // 东南亚
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market4.png",
// //     href: "/foreign-trade",
// //   },
// //   {
// //     title: "South America", // 南美洲
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market5.png",
// //     href: "/foreign-trade",
// //   },
// // ] as const;

// /* Core Capabilities — 1:1 还原东实真实数据 */
// // const CAPABILITIES = [
// //   {
// //     title: "R&D Capability", // 研发能力
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability1.png",
// //     line1: "ODM Service: Yes",
// //     line2: "R&D Staff: 5-10",
// //   },
// //   {
// //     title: "Certifications", // 认证
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability2.png",
// //     line1: "Certificates: 7",
// //     line2: "",
// //   },
// //   {
// //     title: "Trade Capability", // 贸易能力
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability3.png",
// //     line1: "Export Experience: 8 Years",
// //     line2: "Trade Staff: 11-20",
// //   },
// //   {
// //     title: "Production Capability", // 生产能力
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability4.png",
// //     line1: "Production Lines: >10", // 10以上
// //     line2: "Output Value: >$100M", // 超过1亿美元
// //   },
// //   {
// //     title: "ODM Capability", // ODM功能
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability5.png",
// //     line1: "OEM Service: Yes",
// //     line2: "OEM Experience: 21 Years",
// //   },
// //   {
// //     title: "Quality Control", // 质量控制
// //     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability6.png",
// //     line1: "QC Staff: 11-20",
// //     line2: "",
// //   },
// // ] as const;

// //ivoire data
// const CAPABILITIES = [
//   {
//     title: "Eco-Innovation",
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability1.png",
//     line1: "Focus: Bamboo-Fiber",
//     line2: "100% Biodegradable",
//   },
//   {
//     title: "Certifications",
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability2.png",
//     line1: "FSC Certified Source",
//     line2: "ISO Standards",
//   },
//   {
//     title: "Global Logistics",
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability3.png",
//     line1: "Port of Montreal Hub",
//     line2: "Fast NA Delivery",
//   },
//   {
//     title: "Custom Solutions",
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability4.png",
//     line1: "B2B Private Label",
//     line2: "Wholesale Support",
//   },
//   {
//     title: "Green Energy",
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability5.png",
//     line1: "1,600 GWh Annual",
//     line2: "Renewable Powered",
//   },
//   {
//     title: "Community",
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability6.png",
//     line1: "Quebec Local Impact",
//     line2: "Eco-Awareness",
//   },
// ] as const;
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


type Slide = { id: number; type: string; src: string };

const slides = [
  {
    id: 1,
    type: "youtube",
    // 注意：loop=1 在 YouTube 里必须配合 playlist=当前视频ID 才能生效
    src: "https://www.youtube.com/embed/Unop6aekL1M?autoplay=1&mute=1&controls=0&loop=1&playlist=NBseykhGtkI&playsinline=1",
  },
  // {
  //   id: 2,
  //   type: "youtube",
  //   src: "https://www.youtube.com/embed/FkO4kFba1k4?autoplay=1&mute=1&controls=0&loop=1&playlist=FkO4kFba1k4&playsinline=1",
  // },
  // {
  //   id: 3,
  //   type: "youtube",
  //   src: "https://www.youtube.com/embed/Jbw4Ur_6BSQ?autoplay=1&mute=1&controls=0&loop=1&playlist=Jbw4Ur_6BSQ&playsinline=1",
  // },
];
// ============================================================
// 📌 核心 SVG 图标
// ============================================================
import { GiBamboo } from "react-icons/gi"; // 竹子
import { MdFactory } from "react-icons/md"; // 工厂/企业
import { BsShieldFillCheck } from "react-icons/bs"; // 盾牌认证
import { FaShip, FaUsers } from "react-icons/fa"; // 轮船、团队
const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CheckCircle = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// ============================================================
// 📌 页面数据 (Ivoire Tissue)
// ============================================================
// const products = [
//   {
//     title: "Bamboo Toilet Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Toilet-paper-new-1.png",
//     link: "/products/bamboo-toilet-paper",
//   },
//   {
//     title: "Bamboo Kitchen Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Kitchen-Paper-2.png",
//     link: "/products/bamboo-kitchen-paper",
//   },
//   {
//     title: "Bamboo Facial Tissue",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Bamboo-facial-tissue-new-1.png",
//     link: "/products/bamboo-facial-tissue",
//   },
//   {
//     title: "Soft Pack Facial Tissue",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Soft-Pack-Facial-Tissue-1.png",
//     link: "/products/soft-pack-facial-tissue",
//   },
//   {
//     title: "N-Fold Hand Towel",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/N-Fold-1.png",
//     link: "/products/n-fold-hand-towel",
//   },
//   {
//     title: "Hand Paper Towel",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Hand-Paper-Towel-2.png",
//     link: "/products/hand-paper-towel",
//   },
//   {
//     title: "Central Pull Tissue Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/all-1.png",
//     link: "/products/central-pull-tissue-paper",
//   },
//   {
//     title: "Mini Jumbo Toilet Rolls",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Mini-Jumbo-Roll.png",
//     link: "/products/mini-jumbo-toilet-rolls",
//   },
// ];

const products = [
  {
    title: "Bamboo Products",
    img: "/images/bambooproducts.png",
    link: "/products/bamboo",
  },
  {
    title: "Virgin Pulp Products",
    img: "/images/virginproducts.png",
    link: "/products/virgin",
  },
  {
    title: "Recycle Products",
    // img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/N-Fold-1.png",
    img: "/images/recycleproducts.png",
    link: "/products/recycle",
  },
  {
    title: "Mixed Wood Products",
    // img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Hand-Paper-Towel-2.png",
    img: "/images/mixedproducts.png",
    link: "/products/mixed",
  },
];

// const stats = [
//   { num: "4+", label: "Years Experience" },
//   { num: "120+", label: "Employees" },
//   { num: "2,000+", label: "Square Meters" },
//   { num: "1,600+", label: "Tons Monthly Capacity" },
//   { num: "NA", label: "Countries Market" },
// ];

const stats = [
  { num: "4+", label: "Years Experience" },
  { num: "5", label: "Employees" },
  { num: "3,000+", label: "Square Meters" },
  { num: "1,600+", label: "Tons Monthly Capacity" },
  { num: "2", label: "Countries Market" },
];

// const powerIcons = [
//   { img: "10", title: "Grows up to 3 feet a day." },
//   { img: "12", title: "Releases 30% more oxygen." },
//   { img: "13", title: "Uses less land due to density." },
//   { img: "14", title: "Requires 30% less water." },
//   { img: "15", title: "Entirely renewable." },
//   { img: "16", title: "Absorbs 12 tonnes of CO2 per year." },
// ];
const powerIcons = [
  { icon: LuSprout, title: "Grows up to 3 feet a day." },
  { icon: LuWind, title: "Releases 30% more oxygen." },
  { icon: LuScaling, title: "Uses less land due to density." },
  { icon: LuDroplet, title: "Requires 30% less water." },
  { icon: LuRecycle, title: "Entirely renewable." },
  { icon: LuCloud, title: "Absorbs 12 tonnes of CO2 per year." },
];

// const whyChoose = [
//   {
//     icon: "1",
//     title: "Eco-Innovation (Focus: Bamboo-Fiber / 100% Biodegradable)",
//     desc: "Forest – pulp – paper – processing – shipping. Relying on our complete industrial chain...",
//   },
//   {
//     icon: "3",
//     title: "Certifications (FSC Certified Source / ISO Standards)",
//     desc: "New production lines are continuously being built to provide strong delivery guarantee.",
//   },
//   {
//     icon: "5",
//     title: "Global Logistics (Port of Montreal Hub / Fast NA Delivery)",
//     desc: "The root cause of quality problems can be traced back to the order batch.",
//   },
//   {
//     icon: "2",
//     title: "Custom Solutions (B2B Private Label / Wholesale Support)",
//     desc: "We have direct customer contracts with shipping companies, providing stable logistics.",
//   },
//   {
//     icon: "4",
//     title: "Green Energy (1,600 GWh Annual / Renewable Powered)",
//     desc: "Propose systematic solutions to customer needs – professional R&D team.",
//   },
// ];
import {
  LuSprout,
  LuWind,
  LuScaling,
  LuDroplet,
  LuRecycle,
  LuCloud,
} from "react-icons/lu";

const whyChoose = [
  {
    icon: GiBamboo, // 替换原本的 "1" (竹子)
    title: "Eco-Innovation (Focus: Bamboo-Fiber / 100% Biodegradable)",
    desc: "Forest – pulp – paper – processing – shipping. Relying on our complete industrial chain...",
  },
  {
    icon: BsShieldFillCheck, // 替换原本的 "3" (盾牌)
    title: "Certifications (FSC Certified Source / ISO Standards)",
    desc: "New production lines are continuously being built to provide strong delivery guarantee.",
  },
  {
    icon: FaShip, // 替换原本的 "5" (轮船)
    title: "Global Logistics (Port of Montreal Hub / Fast NA Delivery)",
    desc: "The root cause of quality problems can be traced back to the order batch.",
  },
  {
    icon: MdFactory, // 替换原本的 "2" (工厂/建筑)
    title: "Custom Solutions (B2B Private Label / Wholesale Support)",
    desc: "We have direct customer contracts with shipping companies, providing stable logistics.",
  },
  {
    icon: FaUsers, // 替换原本的 "4" (团队)
    title: "Green Energy (1,600 GWh Annual / Renewable Powered)",
    desc: "Propose systematic solutions to customer needs – professional R&D team.",
  },
];

// 把这段代码补在 products 数组附近即可
const exhibitionImages = [
  { src: "https://www.cndonseapaper.com/wp-content/uploads/2025/03/Exhibition-8.jpg", title: "Interclean Beijing In 2021" },
  { src: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Exhibition-new-7.jpg", title: "CIDPEX IN 2024" },
  { src: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Exhibition-new-3.jpg", title: "Tissue World in America" },
];
// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function HomePage() {
  // 👇 插入轮播控制逻辑 👇
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播（仅当 slides 大于 1 时才开启）
  useEffect(() => {
    if (slides.length <= 1) return; // 如果只有一个视频，直接退出，不设定时器

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);
  // 👆 逻辑插入结束 👆

  return (
    <main
      style={{
        paddingTop: "0px",
        width: "100%",
        overflowX: "hidden",
        fontFamily: "Poppins, -apple-system, sans-serif",
      }}
    >
      {/* 🔴 极致防弹 CSS：强行锁定 100% 像素级布局 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * { box-sizing: border-box; }
        .hm-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        
        /* 颜色变量 (从原版提取) */
        :root {
          --c-dark-green: #004e46;
          --c-brand-green: #00a496;
          --c-hover-green: #00dba0;
          --c-light-bg: #f0f8f3;
          --c-text-dark: #323232;
        }

        /* 1. Hero */
        // .hm-hero { background-color: var(--c-dark-green); padding: 120px 20px; text-align: center; color: #fff; }
        // .hm-hero h1 { font-size: 60px; font-weight: 800; margin: 0 0 10px; line-height: 1.2; text-transform: uppercase; }
        // .hm-hero h1 span { color: var(--c-brand-green); }
        // .hm-hero p { font-size: 18px; margin: 0 0 40px; opacity: 0.9; }

        /* 👇 1. Hero 视频轮播专属样式 👇 */
        .hm-hero-carousel { position: relative; height: 90vh; min-height: 600px; width: 100%; overflow: hidden; background: #000; }
        .hm-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.8s ease-in-out; z-index: 1; }
        .hm-slide.active { opacity: 1; z-index: 2; }
        .hm-slide video { width: 100%; height: 100%; object-fit: cover; }
        
        /* 统一的前景遮罩和文字层，确保文字清晰 */
       /* 加上 justify-content: center 让大盒子水平居中 */
.hm-slide-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.4); display: flex; align-items: center; justify-content: center; z-index: 3; }

/* 删掉 padding-left，换成 text-align: center 让内部文字居中 */
.hm-hero-content { position: relative; color: #fff; text-align: center; width: 100%; max-width: 1200px; padding: 0 20px; }
        
        /* 左右切换箭头 */
        .hm-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.3); color: white; border: none; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 20px; transition: 0.3s; display: flex; align-items: center; justify-content: center; }
        .hm-nav-btn:hover { background: var(--c-brand-green); }
        .hm-nav-prev { left: 30px; }
        .hm-nav-next { right: 30px; }
        
        /* 底部指示小圆点 */
        .hm-dots { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; z-index: 10; }
        .hm-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.4); border: 2px solid transparent; cursor: pointer; transition: 0.3s; padding: 0; }
        .hm-dot.active { background: transparent; border-color: var(--c-brand-green); transform: scale(1.3); }
        
        @media (max-width: 768px) {
          .hm-nav-btn { display: none; } /* 手机端隐藏箭头，只留圆点 */
        }
        /* 👆 CSS 替换结束 👆 */
        
        .hm-btn { display: inline-block; background: var(--c-brand-green); color: #fff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 18px; font-weight: 700; text-transform: uppercase; transition: all 0.3s; border: 2px solid var(--c-brand-green); }
        .hm-btn:hover { background: transparent; color: var(--c-brand-green); }

        /* 2. About & Stats */
        .hm-about-section { padding: 80px 0; background: #fff; }
       .hm-about-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 50px; align-items: center; margin-bottom: 60px; }
        .hm-about-vid { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .hm-about-text h2 { font-size: 46px; color: var(--c-dark-green); font-weight: 800; margin: 0 0 20px; text-transform: uppercase; }
        .hm-about-text p { font-size: 18px; color: var(--c-text-dark); line-height: 1.8; margin-bottom: 20px; }
        
        /* 👇 新增：把Logo和按钮包在一起横向排列 👇 */
        /* 👇 修改：改为垂直排列（column），这样Logo在上面，按钮在下面，且整体居中 👇 */
.hm-certs-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 30px; margin-top: 30px; width: 100%; }

/* Logo 保持横向居中排列 */
.hm-certs { display: flex; gap: 25px; align-items: center; justify-content: center; width: 100%; }

/* 👇 新增：专门为这个区块内的 Learn More 按钮设置超大样式 👇 */
.hm-certs-wrap .hm-btn {
    padding: 18px 50px !important; /* 👈 更大的内边距让按钮更丰满 */
    font-size: 20px !important; /* 👈 放大文字 */
    margin: 0 auto; /* 确保自身居中 */
}
        /* 👇 修改：Logo高度从50px飙升到75px 👇 */
        .hm-certs img { height: 70px; object-fit: contain; }
        .hm-certs { display: flex; gap: 20px; align-items: center; }
        .hm-certs img { height: 100px; object-fit: contain; }

        .hm-stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; text-align: center; border-top: 1px solid #eee; padding-top: 50px; }
        .hm-stat-num { font-size: 40px; font-weight: 800; color: var(--c-brand-green); margin-bottom: 5px; }
        .hm-stat-label { font-size: 14px; font-weight: 700; color: var(--c-text-dark); text-transform: uppercase; }

        /* 3. Products (虚线圆圈排版) */
        .hm-products { background-color: var(--c-light-bg); padding: 80px 0; text-align: center; }
        .hm-sec-title { font-size: 42px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 50px; text-transform: uppercase; }
        .hm-prod-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .hm-prod-card { background: #fff; border: 4px dashed var(--c-brand-green); border-radius: 500px; aspect-ratio: 1/1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; cursor: pointer; transition: all 0.3s; text-decoration: none; }
        .hm-prod-card:hover { background: var(--c-brand-green); border-color: #fff; }
        .hm-prod-card img { width: 60%; height: 120px; object-fit: contain; margin-bottom: 20px; transition: transform 0.5s; }
        .hm-prod-card:hover img { transform: scale(1.1); }
        .hm-prod-title { font-size: 18px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 10px; transition: color 0.3s; }
        .hm-prod-card:hover .hm-prod-title { color: #fff; }
        .hm-prod-link { font-size: 16px; font-weight: 700; color: var(--c-brand-green); display: flex; align-items: center; gap: 5px; transition: color 0.3s; }
        .hm-prod-card:hover .hm-prod-link { color: #fff; }

        /* 4. Power of Bamboo */
        .hm-power { background-color: var(--c-dark-green); padding: 80px 0; text-align: center; color: #fff; }
        .hm-power-title { font-size: 42px; font-weight: 800; margin: 0 0 10px; }
        .hm-power-sub { font-size: 18px; margin: 0 0 50px; opacity: 0.9; }
        .hm-power-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
        .hm-power-item { display: flex; flex-direction: column; align-items: center; }
        .hm-power-item img { width: 80px; height: 80px; margin-bottom: 20px; }
        .hm-power-item h5 { font-size: 15px; font-weight: 700; margin: 0; line-height: 1.4; }

        /* 5. OEM / ODM */
        .hm-oem { background: #fff; padding: 80px 0; }
        .hm-oem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hm-oem-text h2 { font-size: 42px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 10px; }
        .hm-oem-text h3 { font-size: 24px; color: var(--c-brand-green); margin: 0 0 20px; }
        .hm-oem-text ul { list-style: none; padding: 0; margin: 0 0 30px; }
        .hm-oem-text li { display: flex; align-items: flex-start; gap: 10px; font-size: 16px; color: var(--c-text-dark); margin-bottom: 15px; line-height: 1.6; font-weight: 500; }
        .hm-oem-text li svg { color: var(--c-brand-green); }
        .hm-oem-img { width: 100%; height: auto; border-radius: 12px; }

        /* 6. Why Choose Us */
        .hm-why { background-color: var(--c-light-bg); padding: 80px 0; }
        .hm-why-grid { display: grid; grid-template-columns: 35% 60%; gap: 5%; align-items: start; }
        .hm-why-tall-img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .hm-why-content h2 { font-size: 42px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 10px; text-transform: uppercase; }
        .hm-why-content p { font-size: 18px; color: var(--c-text-dark); font-weight: 600; margin: 0 0 40px; }
        .hm-why-items { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .hm-why-box { display: flex; flex-direction: column; gap: 15px; }
        .hm-why-box img { width: 60px; border-radius: 12px; }
        .hm-why-box h4 { font-size: 20px; font-weight: 800; color: var(--c-dark-green); margin: 0; }
        .hm-why-box p { font-size: 14px; color: #555; line-height: 1.6; margin: 0; }

        /* 7. Production Flow */
        .hm-flow { background: #fff; padding: 80px 0; text-align: center; }
        .hm-flow img { width: 100%; max-width: 1400px; height: auto; margin-top: 40px; }

        /* 8. Exhibition */
        .hm-exhib { background: #fff; padding: 0 0 80px; text-align: center; }
        .hm-exhib p { max-width: 800px; margin: 0 auto 40px; color: var(--c-text-dark); font-size: 16px; line-height: 1.6; }
        .hm-exhib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; }
        .hm-exhib-card { border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .hm-exhib-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; }
        .hm-exhib-card-title { background: var(--c-dark-green); color: #fff; padding: 15px; font-weight: 700; }

        /* 9. Contact (Bamboo Background + Glassmorphism) */
        .hm-contact { position: relative; padding: 100px 0; background-color: var(--c-dark-green); background-image: url('/images/about-us-faq.png'); background-size: cover; background-position: center; }
        .hm-contact-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.4); }
        .hm-contact-container { position: relative; z-index: 10; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        
        .hm-form { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); padding: 40px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .hm-form h3 { font-size: 32px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 20px; }
        .hm-form label { display: block; font-weight: 700; color: #225C54; margin-bottom: 8px; }
        .hm-input { width: 100%; padding: 15px 25px; border-radius: 30px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; }
        .hm-input:focus { border-color: var(--c-brand-green); box-shadow: 0 0 5px rgba(0,164,150,0.3); }
        .hm-textarea { width: 100%; padding: 15px 25px; border-radius: 20px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; height: 120px; resize: vertical; }
        .hm-submit { background: var(--c-brand-green); color: #fff; border: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s; text-transform: uppercase; width: 100%; }
        .hm-submit:hover { background: var(--c-hover-green); }

        .hm-contact-text h2 { font-size: 56px; font-weight: 800; color: #fff; line-height: 1.2; margin: 0; text-transform: uppercase; }


        /* ── 新增：直连信息卡片样式 ── */
        .ivt-direct-contact { list-style: none; padding: 0; margin: 0; }
        .ivt-direct-contact li { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
        .ivt-icon-circle { background: var(--c-brand-green); color: #fff; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,164,150,0.3); }
        .ivt-icon-circle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .ivt-contact-label { display: block; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .ivt-contact-value { font-size: 20px; font-weight: 700; color: var(--c-dark-green); text-decoration: none; transition: color 0.3s; }
        .ivt-contact-value:hover { color: var(--c-brand-green); }

        /* Responsive */
        @media (max-width: 1024px) {
          .hm-hero h1 { font-size: 40px; }
          .hm-about-grid, .hm-oem-grid, .hm-why-grid, .hm-contact-container { grid-template-columns: 1fr; gap: 40px; }
          .hm-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .hm-prod-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-power-grid { grid-template-columns: repeat(3, 1fr); }
          .hm-exhib-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-contact-text { text-align: center; }
          .hm-contact-text h2 { font-size: 40px; }
        }
        @media (max-width: 640px) {
          .hm-hero h1 { font-size: 32px; }
          .hm-stats-grid, .hm-power-grid, .hm-why-items { grid-template-columns: 1fr; }
          .hm-prod-grid, .hm-exhib-grid { grid-template-columns: 1fr; }
        }
      `,
        }}
      />

      {/* 1. HERO SECTION */}
      {/* 1. HERO VIDEO CAROUSEL SECTION */}
      <section className="hm-hero-carousel">
        {/* 背景视频层：循环渲染你提供的 slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hm-slide ${index === currentSlide ? "active" : ""}`}
          >
            {/* 👇 换成 iframe，并加入 pointer-events: none 防止误触 👇 */}
            <iframe
              src={slide.src}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                // 👇 核心去黑边魔法 👇
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "56.25vw" /* 强行锁定 16:9 比例 (9 / 16 = 0.5625) */,
                minHeight: "100vh",
                minWidth: "177.77vh" /* 强行锁定 16:9 比例 (16 / 9 = 1.7777) */,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none", // 防止鼠标误触暂停
                border: "none",
              }}
            ></iframe>
          </div>
        ))}

        {/* 统一的前景文字层：固定在视频上方 */}
        <div className="hm-slide-overlay">
          <div className="hm-hero-content">
            <h5
              style={{
                fontSize: "22px",
                letterSpacing: "2px",
                marginBottom: "15px",
                color: "#00dba0",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Ivoire Tissue
            </h5>
            <h1
              style={{
                margin: "0 0 15px 0",
                fontSize: "72px",
                fontWeight: 800,
                letterSpacing: "2px",
                textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              BAMBOO TISSUE PAPER <br />
              <span style={{ color: "var(--c-brand-green)" }}>
                MANUFACTURER
              </span>
            </h1>
            <p
              style={{
                margin: "0 0 40px 0",
                fontSize: "28px",
                fontWeight: 500,
                letterSpacing: "1px",
                textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              100% Sustainable Solutions
            </p>
            <Link href="/products" className="hm-btn">
              Explore Our Products
            </Link>
          </div>
        </div>

        {/* 当 slides 大于 1 个时，才渲染左右切换和指示圆点 */}
        {slides.length > 1 && (
          <>
            {/* 左右手动切换按钮 */}
            <button
              className="hm-nav-btn hm-nav-prev"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              &#10094;
            </button>
            <button
              className="hm-nav-btn hm-nav-next"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              &#10095;
            </button>

            {/* 底部小圆点 */}
            <div className="hm-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`hm-dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>
      {/* 2. ABOUT US & STATS */}
      <section className="hm-about-section">
        <div className="hm-container">
          <div className="hm-about-grid">
            <div className="hm-about-vid">
              <iframe
                width="100%"
                height="100%"
                src="https://ivoiretissue.com/wp-content/uploads/2024/03/media_20240331_235304_7521214834847688587.mp4"
                title="Ivoire Tissue"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="hm-about-text">
              <h2>ABOUT IVOIRE TISSUE</h2>
              <p>
                Established in 2022 in Montreal, Ivoire Tissue Paper is a
                pioneering Canadian company dedicated to producing high-quality
                tissue paper using sustainable bamboo resources. By merging
                African entrepreneurial heritage with Canadian technological
                excellence, we offer eco-friendly alternatives to traditional
                paper products.
              </p>
              {/* 👇 把 Logo 和 Button 包在一个弹性盒子里，并排显示，榨干空间 👇 */}
              <div className="hm-certs-wrap">
                <div className="hm-certs">
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/fsc.png"
                    alt="FSC"
                  />
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/iso.png"
                    alt="ISO"
                  />
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/fda.png"
                    alt="FDA"
                  />
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/bsci.png"
                    alt="BSCI"
                  />
                </div>
                <Link
                  href="/about-us"
                  className="hm-btn"
                  style={{
                    padding: "12px 24px",
                    fontSize: "15px",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="hm-stats-grid">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="hm-stat-num">{s.num}</div>
                <div className="hm-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS (虚线大圆圈网格，完美还原截图) */}
      <section className="hm-products">
        <div className="hm-container">
          <h2 className="hm-sec-title">PRODUCTS</h2>
          <div className="hm-prod-grid">
            {products.map((p, i) => (
              <Link href={p.link} key={i} className="hm-prod-card">
                <img src={p.img} alt={p.title} />
                <h4 className="hm-prod-title">{p.title}</h4>
                <span className="hm-prod-link">
                  <SearchIcon /> See More
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE POWER OF BAMBOO */}
      <section className="hm-power">
        <div className="hm-container">
          <h2 className="hm-power-title">The Power of Bamboo</h2>
          <p className="hm-power-sub">
            Bamboo is the largest species of grass, offering unparalleled
            environmental benefits.
          </p>
          {/* <div className="hm-power-grid">
            {powerIcons.map((icon, i) => (
              <div key={i} className="hm-power-item">
                <img
                  src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/icon-${icon.img}.png`}
                  alt={icon.title}
                />
                <h5>{icon.title}</h5>
              </div>
            ))}
          </div> */}
          <div className="hm-power-grid">
            {powerIcons.map((item, i) => {
              const IconComponent = item.icon; // 取出对应的组件
              return (
                <div key={i} className="hm-power-item">
                  {/* 直接渲染 SVG 图标，取代 img 标签 */}
                  <div
                    style={{
                      fontSize: "65px", // 控制图标大小，原来 img 是 80px，这里给 65px 视觉上刚好
                      color: "#33ffcc", // 给个高亮品牌绿，你也可以改成纯白 "#ffffff"
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconComponent strokeWidth={1.5} />{" "}
                    {/* strokeWidth 控制线条粗细，1.5 显得很高级 */}
                  </div>
                  <h5>{item.title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OEM / ODM */}
      <section className="hm-oem">
        <div className="hm-container hm-oem-grid">
          <div className="hm-oem-text">
            <h2>OEM/ODM</h2>
            <h3>Customize Your Need!</h3>
            <ul>
              <li>
                <CheckCircle /> Custom specifications including layers, sheets,
                core, and weight.
              </li>
              <li>
                <CheckCircle /> A variety of embossing for you to choose or
                custom development.
              </li>
              <li>
                <CheckCircle /> Custom packaging based on your design and
                method.
              </li>
              <li>
                <CheckCircle /> Tailored production and shipping arrangements.
              </li>
            </ul>
            <Link
              href="/contact-us"
              className="hm-btn"
              style={{ padding: "12px 30px", fontSize: "14px" }}
            >
              Contact Us
            </Link>
          </div>
          <div>
            <img
              // src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/home-OEM-ODM.png"
              src="/images/product-bamboo.jpg"
              alt="OEM"
              className="hm-oem-img"
            />
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="hm-why">
        <div className="hm-container hm-why-grid">
          <div style={{ height: "100%" }}>
            <img
              // src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/why-1-683x1024.jpg"
              src="/images/ivoire-bamboo.png"
              alt="Bamboo Forest"
              className="hm-why-tall-img"
            />
          </div>
          <div className="hm-why-content">
            <h2>Why Choose Ivoire Tissue</h2>
            <p>Plant and protect the log close to the skin</p>
            {/* <div className="hm-why-items">
              {whyChoose.map((item, i) => (
                <div key={i} className="hm-why-box">
                  <img
                    // src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/Why-Choose-Donsea-${item.icon}.jpg`}
                    src={`/images/icon-${item.icon}.png`}
                    alt="Icon"
                  />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div> */}
            <div className="hm-why-items">
              {whyChoose.map((item, i) => {
                const IconComponent = item.icon; // 取出对应的图标组件
                return (
                  <div key={i} className="hm-why-box">
                    {/* 👇 用 CSS 画出绿色背景框，放入白色图标 👇 */}
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "var(--c-brand-green)", // 使用你的品牌绿
                        borderRadius: "12px", // 保持和原图一致的圆角
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff", // 图标颜色为纯白
                        fontSize: "36px", // 控制图标的大小
                        boxShadow: "0 4px 10px rgba(0, 164, 150, 0.2)", // 加一点微弱的高级阴影
                      }}
                    >
                      <IconComponent />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION FLOW */}
      <section className="hm-flow">
        <div className="hm-container">
          <h2 className="hm-sec-title">Production Flow</h2>
          <img
            // src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Production-Flow.png"
            src="/images/productionFlow.png"
            alt="Production Flow"
          />
        </div>
      </section>

      {/* 8. EXHIBITION */}
      <section className="hm-exhib">
        <div className="hm-container">
          <h2 className="hm-sec-title">Exhibition</h2>
          <p>
            We have experienced and professional personnel in paper making and
            converting. Our company has won international markets with multiple
            OEM businesses for top brands globally.
          </p>
          <div className="hm-exhib-grid">
            {exhibitionImages.map((img, i) => (
              <div key={i} className="hm-exhib-card">
                <img src={img.src} alt={img.title} />
                <div className="hm-exhib-card-title">{img.title}</div>
              </div>
            ))}
          </div>
          <Link
            href="/about-us"
            className="hm-btn"
            style={{ padding: "12px 30px", fontSize: "14px" }}
          >
            About Ivoire Tissue
          </Link>
        </div>
      </section>

      {/* 9. CONTACT (玻璃态表单) */}
      <section className="hm-contact">
        <div className="hm-contact-overlay"></div>
        <div className="hm-container hm-contact-container">
          <div className="hm-form">
            <h3 style={{ marginBottom: "10px" }}>Get In Touch</h3>
            <p
              style={{
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              We value direct communication. To help us provide an accurate
              quote quickly, please include your product of interest, estimated
              order quantity, and any custom OEM/Private Label requirements in
              your email. Our Montreal team will get back to you promptly.
            </p>

            <ul className="ivt-direct-contact">
              {/* Email */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">Email Us</span>
                  {/* 👇 把这里换成你们真实的邮箱 👇 */}
                  <a
                    href="mailto:info@ivoiretissue.com"
                    className="ivt-contact-value"
                  >
                    sales@ivoiretissue.com
                  </a>
                </div>
              </li>

              {/* WhatsApp / Phone */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">WhatsApp / Call</span>
                  {/* 👇 把这里换成你们真实的电话 👇 */}
                  <a href="tel:+1234567890" className="ivt-contact-value">
                    +1 (514) 688-8238
                  </a>
                </div>
              </li>

              {/* Headquarters */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">Headquarters</span>
                  <span
                    className="ivt-contact-value"
                    style={{ cursor: "default" }}
                  >
                    222 Rue Poirier, Saint-Eustache, QC
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hm-contact-text">
            <h2>
              A PIECE OF PAPER,
              <br />A WARM HEART,
              <br />
              MAKE THE WORLD
              <br />
              MORE BEAUTIFUL!
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}