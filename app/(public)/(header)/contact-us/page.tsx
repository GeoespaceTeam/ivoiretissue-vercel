// "use client";

// import ScrollReveal from "../../../components/ScrollReveal"; // 请确保路径指向你的 ScrollReveal 组件位置

// export default function ContactUsPage() {
//   return (
//     <main>
//       {/* ════════════════════════════════════════
//           1. HERO BANNER
//           ════════════════════════════════════════ */}
//       <div
//         style={{
//           height: 580,
//           backgroundImage: 'url("/images/contact_bg.png")', // 记得在 public/images 放一张 contact_bg.png
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover", // 原网页是 100% 580px，用 cover 响应式更好看
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//         }}
//       >
//         {/* 如果 banner 上需要写字，可以放在这个空 div 里 */}
//         <div></div>
//       </div>
//       {/* --- FAQ SECTION (New from Business Logic) --- */}
//       <ScrollReveal direction="up">
//         <div style={{ marginBottom: "80px" }}>
//           <h2
//             style={{
//               textAlign: "center",
//               fontSize: "32px",
//               fontWeight: 400,
//               color: "#111",
//               marginBottom: "40px",
//             }}
//           >
//             Frequently Asked Questions
//           </h2>
//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "1fr 1fr",
//               gap: "30px",
//             }}
//           >
//             {[
//               {
//                 q: "Where is Ivoire Tissue located?",
//                 a: "Our main manufacturing facility is located at 222 Rue Poirier, Saint-Eustache, QC, just 45km from Montreal.",
//               },
//               {
//                 q: "Do you offer private label (OEM) services?",
//                 a: "Yes, we specialize in customized bamboo tissue products for hotels, restaurants, and corporate clients.",
//               },
//               {
//                 q: "What are your shipping areas?",
//                 a: "We primarily serve the Quebec and Ontario markets, with capabilities to ship across North America.",
//               },
//               {
//                 q: "Why choose bamboo over wood pulp?",
//                 a: "Bamboo is highly renewable, growing 60 times faster than trees, and offers superior natural softness and strength.",
//               },
//             ].map((faq, i) => (
//               <div
//                 key={i}
//                 style={{ padding: "20px", borderBottom: "1px solid #eee" }}
//               >
//                 <h4
//                   style={{
//                     color: "#00a698",
//                     fontSize: "16px",
//                     fontWeight: 700,
//                     marginBottom: "10px",
//                   }}
//                 >
//                   Q: {faq.q}
//                 </h4>
//                 <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6 }}>
//                   {faq.a}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </ScrollReveal>
//       {/* ════════════════════════════════════════
//           2. CONTACT INFORMATION CONTENT
//           ════════════════════════════════════════ */}
//       <div
//         className="content"
//         style={{
//           maxWidth: 1000,
//           margin: "0 auto",
//           padding: "60px 20px",
//         }}
//       >
//         <ScrollReveal direction="up">
//           <h2
//             style={{
//               textAlign: "center",
//               paddingBottom: 40,
//               fontSize: "48px",

//               color: "#111",
//             }}
//           >
//             Contact Information
//           </h2>
//         </ScrollReveal>

//         {/* --- Block 1: Phone --- */}
//         <ScrollReveal delay={100} direction="up">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "rgb(250, 250, 250)",
//               borderRadius: 6,
//               padding: "20px 60px",
//               fontSize: 20,
//               fontWeight: 500,
//               color: "rgb(131, 131, 131)",
//               marginBottom: 20,
//             }}
//           >
//             <span style={{ fontSize: 56, color: "#00a896" }}>
//               <PhoneIcon />
//             </span>
//             <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
//               {/* 对齐原版双热线 */}
//               <div>General Inquiry: +1 (514) 971-8238</div>
//               <div>Sales & Support: +1 (514) 291-8063</div>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* --- Block 2: Address --- */}
//         <ScrollReveal delay={200} direction="up">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "rgb(250, 250, 250)",
//               borderRadius: 6,
//               padding: "20px 60px",
//               fontSize: 20,
//               fontWeight: 500,
//               color: "rgb(131, 131, 131)",
//               marginBottom: 20,
//             }}
//           >
//             <span style={{ fontSize: 56, color: "#00a896" }}>
//               <BankIcon />
//             </span>
//             <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
//               <div>
//                 Address: 222 Rue Poirier, #30, St-Eustache, QC J7R 6B1, Canada
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* --- Block 3: Email --- */}
//         <ScrollReveal delay={300} direction="up">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "rgb(250, 250, 250)",
//               borderRadius: 6,
//               padding: "20px 60px",
//               fontSize: 20,
//               fontWeight: 500,
//               color: "rgb(131, 131, 131)",
//               marginBottom: 20,
//             }}
//           >
//             <span style={{ fontSize: 56, color: "#00a896" }}>
//               <MailIcon />
//             </span>
//             <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
//               <div>
//                 Email:{" "}
//                 <a
//                   href="mailto:sales@ivoiretissue.com"
//                   style={{ color: "rgb(0, 167, 152)", textDecoration: "none" }}
//                 >
//                   sales@ivoiretissue.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* --- Block 4: Website --- */}
//         <ScrollReveal delay={400} direction="up">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "rgb(250, 250, 250)",
//               borderRadius: 6,
//               padding: "20px 60px",
//               fontSize: 20,
//               fontWeight: 500,
//               color: "rgb(131, 131, 131)",
//               marginBottom: 20,
//             }}
//           >
//             <span style={{ fontSize: 56, color: "#00a896" }}>
//               <GlobalIcon />
//             </span>
//             <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
//               <div>
//                 Official Website:{" "}
//                 <a
//                   href="https://ivoiretissue.com"
//                   style={{
//                     color: "rgb(0, 167, 152)",
//                     textDecoration: "none",
//                     paddingLeft: 5,
//                   }}
//                 >
//                   https://ivoiretissue.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* --- Block 5: Operating Hours (New from Original) --- */}
//         <ScrollReveal delay={500} direction="up">
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               backgroundColor: "rgb(250, 250, 250)",
//               borderRadius: 6,
//               padding: "20px 60px",
//               fontSize: 20,
//               fontWeight: 500,
//               color: "rgb(131, 131, 131)",
//               marginBottom: 20,
//             }}
//           >
//             <span style={{ fontSize: 56, color: "#00a896" }}>
//               {/* 这里借用一个时钟图标，我直接用简单的 SVG 帮你写好 */}
//               <svg
//                 viewBox="0 0 1024 1024"
//                 width="1em"
//                 height="1em"
//                 fill="currentColor"
//               >
//                 <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
//                 <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l167.4 121.3c3.6 2.6 8.6 1.8 11.2-1.8l28.6-39c2.6-3.6 1.8-8.6-1.8-11.2z"></path>
//               </svg>
//             </span>
//             <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
//               <div style={{ fontWeight: 700, color: "#333" }}>
//                 Operating Hours:
//               </div>
//               <div>Monday - Friday: 8:30 AM - 5:00 PM</div>
//               <div>Saturday - Sunday: Closed</div>
//             </div>
//           </div>
//         </ScrollReveal>
//       </div>
//     </main>
//   );
// }

// // ============================================================
// // SVG ICONS (Extracted from Dongshi HTML)
// // ============================================================

// function PhoneIcon() {
//   return (
//     <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
//       <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
//     </svg>
//   );
// }

// function BankIcon() {
//   return (
//     <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
//       <path d="M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"></path>
//     </svg>
//   );
// }

// function MailIcon() {
//   return (
//     <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
//       <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
//     </svg>
//   );
// }

// function GlobalIcon() {
//   return (
//     <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
//       <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z"></path>
//     </svg>
//   );
// }

"use client";

import React from "react";

// ============================================================
// 📌 精准 SVG 图标 (根据 CSS 变量 #00dba0 设色)
// ============================================================
const PhoneIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00dba0"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00dba0"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#00dba0"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function ContactUsPage() {
  return (
    <main
      style={{
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* 🔴 样式强行注入：这次我完全模拟了 kb-row-layout 的嵌套逻辑 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .cu-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        
        /* 1. 核心修复：这个外层包裹了文字和图片，背景图必须在这里！ */
        .cu-outer-wrap { 
          position: relative; 
          padding: 80px 0; 
          background-image: url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/contact-bg-1.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* 视差效果 */
        }
        .cu-overlay {
          position: absolute;
          inset: 0;
          background-color: #00776c;
          opacity: 0.60;
          z-index: 1;
        }

        /* 顶部两列布局 */
        .cu-top-grid { 
          position: relative; 
          z-index: 2; 
          display: grid; 
          grid-template-columns: 35% 65%; 
          align-items: center; 
          gap: 40px; 
          margin-bottom: 60px;
        }
        .cu-banner-tag { font-size: 16px; font-weight: 700; color: #ffffff; text-transform: uppercase; margin-bottom: 15px; display: block; }
        .cu-banner-desc { font-size: 20px; font-weight: 700; color: #ffffff; line-height: 1.6; }

        /* 内容与表单的排版 */
        .cu-main-content { 
          position: relative; 
          z-index: 2; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 60px; 
          align-items: start; 
        }

        .cu-info-col h1 { font-size: 50px; font-weight: 700; color: #ffffff; margin-bottom: 40px; line-height: 1.2; }
        .cu-contact-item { display: flex; align-items: flex-start; gap: 15px; margin-bottom: 25px; font-size: 18px; color: #ffffff; font-weight: 500; }
        .cu-contact-item a { color: inherit; text-decoration: none; transition: 0.3s; }
        .cu-contact-item a:hover { color: #00dba0; }
        .cu-divider { width: 100%; height: 2px; background: rgba(255,255,255,0.2); margin: 40px 0; }

        /* 表单卡片 - 还原自原版 CSS */
        .cu-form-card { 
          background-color: rgba(255, 255, 255, 0.75); 
          backdrop-filter: blur(10px);
          padding: 50px; 
          border-radius: 10px; 
          box-shadow: 20px 20px 80px 0px rgba(0, 0, 0, 0.1); 
        }
        .cu-form-card h2 { font-size: 32px; font-weight: 700; color: #004e46; margin-bottom: 30px; }
        .cu-label { display: block; font-weight: 700; color: #225C54; margin-bottom: 8px; font-size: 15px; }
        .cu-input { 
          width: 100%; padding: 18px 25px !important; border-radius: 30px !important; 
          border: 1px solid #a0aec0 !important; margin-bottom: 25px; 
          font-size: 16px; outline: none; background: #fff;
        }
        .cu-submit-btn { 
          width: 100%; background: #00A496; color: #fff; border: none; 
          padding: 16px; border-radius: 50px; font-weight: 700; 
          font-size: 17px; cursor: pointer; transition: 0.3s; 
          text-transform: uppercase;
        }
        .cu-submit-btn:hover { background: #00dba0; }
/* 新增直连卡片样式 */
        .ivt-direct-contact { list-style: none; padding: 0; margin: 0; }
        .ivt-direct-contact li { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
        .ivt-icon-circle { background: #00a496; color: #fff; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,164,150,0.3); }
        .ivt-icon-circle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .ivt-contact-label { display: block; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .ivt-contact-value { font-size: 20px; font-weight: 700; color: #004e46; text-decoration: none; transition: color 0.3s; word-break: break-word; }
        .ivt-contact-value:hover { color: #00a496; }
        @media (max-width: 1024px) {
          .cu-top-grid, .cu-main-content { grid-template-columns: 1fr; }
          .cu-outer-wrap { background-attachment: scroll; }
          .cu-info-col h1 { font-size: 40px; text-align: center; }
          .cu-contact-item { justify-content: center; }
        }
      `,
        }}
      />

      {/* 这个外层 div 承载了整个区域的背景图和遮罩 */}
      <section className="cu-outer-wrap">
        <div className="cu-overlay"></div>

        <div className="cu-container">
          {/* 1. 顶部 Banner 区域 (文字 + 产品图) */}
          <div className="cu-top-grid">
            <div>
              <span className="cu-banner-tag">CONTACT US</span>
              <p className="cu-banner-desc">
                Ivoire Tissue Paper focuses on environmental protection and
                health. We utilize sustainable bamboo to provide you with paper
                products that meet all areas of hygiene.
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <img
                // src="https://www.cndonseapaper.com/wp-content/uploads/2025/02/all-products-1-1024x406.png"
                src="/images/contact-us-hero.png"
                alt="Ivoire Products"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* 2. 信息与表单区域 (现在也在背景图覆盖范围内了) */}
          <div className="cu-main-content">
            {/* 左侧：联系详情 */}
            <div className="cu-info-col">
              <h1>Contact us</h1>
              <ul className="cu-contact-list">
                {/* 1. 修复：双热线 */}
                <li className="cu-contact-item">
                  <div style={{ marginTop: "4px" }}>
                    <PhoneIcon />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span>
                      Sales & Support:{" "}
                      <a href="tel:+15149718238">+1 (514) 971-8238</a>
                    </span>
                    {/* <span>
                      Sales & Support:{" "}
                      <a href="tel:+15142918063">+1 (514) 291-8063</a>
                    </span> */}
                  </div>
                </li>
                <li className="cu-contact-item">
                  <MailIcon />
                  <span>
                    Email:{" "}
                    <a href="mailto:sales@ivoiretissue.com">
                      sales@ivoiretissue.com
                    </a>
                  </span>
                </li>
                <li
                  className="cu-contact-item"
                  style={{ alignItems: "flex-start" }}
                >
                  <div style={{ marginTop: "4px" }}>
                    <MapPinIcon />
                  </div>
                  <span>
                    Address: 222 Rue Poirier, #30, Saint-Eustache, QC J7R 6B1,
                    Canada
                  </span>
                </li>

                {/* 2. 修复：增加营业时间 */}
                <li
                  className="cu-contact-item"
                  style={{ alignItems: "flex-start" }}
                >
                  <div style={{ marginTop: "4px" }}>
                    {/* 时钟图标 */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#00dba0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: 700, color: "#fff" }}>
                      Operating Hours:
                    </span>
                    <span>Monday - Friday: 8:30 AM - 5:00 PM</span>
                    <span>Saturday - Sunday: Closed</span>
                  </div>
                </li>
              </ul>
              <div className="cu-divider"></div>
            </div>

            {/* 右侧：表单卡片 */}
            {/* 右侧：直连信息卡片 (替换旧 Form) */}
            <div
              className="cu-form-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  color: "#004e46",
                  fontSize: "32px",
                  marginBottom: "15px",
                  fontWeight: 800,
                }}
              >
                Get In Touch
              </h2>
              <p
                style={{
                  color: "#444",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  margin: "0 0 35px 0",
                }}
              >
                We value direct communication. To help us provide an accurate
                quote quickly, please include your{" "}
                <strong>
                  product of interest, estimated order quantity, and any custom
                  OEM requirements
                </strong>{" "}
                in your email. Our Montreal team will get back to you promptly.
              </p>

              <ul className="ivt-direct-contact">
                <li>
                  <div className="ivt-icon-circle">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="ivt-contact-label">Email Us</span>
                    <a
                      href="mailto:info@ivoiretissue.com"
                      className="ivt-contact-value"
                    >
                      sales@ivoiretissue.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="ivt-icon-circle">
                    <svg viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="ivt-contact-label">WhatsApp / Call</span>
                    <a href="tel:+15149718238" className="ivt-contact-value">
                      +1 (514) 688-8238
                    </a>
                  </div>
                </li>
                <li style={{ marginBottom: 0 }}>
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
                      style={{ cursor: "default", fontSize: "18px" }}
                    >
                      222 Rue Poirier, Saint-Eustache, QC
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 核心修复：GOOGLE MAP (圣厄斯塔什工厂位置) */}
      <section
        style={{ width: "100%", height: "500px", backgroundColor: "#eee" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.972323204936!2d-73.9168943!3d45.5809703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc93b9f8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2s222%20Rue%20Poirier%2C%20Saint-Eustache%2C%20QC%20J7R%206B1%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ivoire Tissue Montreal Location"
        ></iframe>
      </section>
    </main>
  );
}