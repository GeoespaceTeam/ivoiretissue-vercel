// "use client";
// import React, { use,useState } from "react"; // 👈 1. 引入 React 的 use 钩子
// import { notFound } from "next/navigation";
// import { productsDatabase } from "@/app/lib/productsDatabase";
// import Link from "next/link";

// export default function ProductDetailPage({
//   // 👈 2. 把 async 删掉！
//   params,
// }: {
//   params: Promise<{ category: string; id: string }>;
// }) {
//   const { category, id } = use(params); // 👈 3. 把 await 换成 use()
//   const categoryData = productsDatabase[category];
//   const product = categoryData?.find((p: any) => p.id === id);
//   const [isModalOpen, setIsModalOpen] = useState(false); // 控制弹窗显示
//   if (!product) notFound();
//   // 弹窗提示函数 sd

//   return (
//     <main
//       style={{ backgroundColor: "#fff", fontFamily: "Poppins, sans-serif" }}
//     >
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .detail-hero { background: #1A202C url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/banner-5.jpg') center/cover no-repeat fixed; padding: 100px 0; color: #fff; position: relative; }
//         .detail-hero-overlay { position: absolute; inset: 0; background: #00302b; opacity: 0.4; }
//         .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; position: relative; z-index: 2; }
//         .specs-table { width: 100%; border-collapse: collapse; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); }
//         .specs-table td { padding: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
//         .specs-table td:first-child { font-weight: 700; background: rgba(255,255,255,0.05); width: 35%; }
//         .feature-list { list-style: none; padding: 0; margin-top: 30px; }
//         .feature-list li { display: flex; gap: 10px; margin-bottom: 10px; color: #fff; }
//         /* 1. 增强底部四个图标的显眼度 */
//         .icon-grid {
//           display: grid;
//           grid-template-columns: repeat(4, 1fr);
//           gap: 20px;
//           margin-top: 50px;
//           position: relative;
//           z-index: 2;
//         }
//         .icon-box {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//           color: #fff;
//         }
//         .icon-wrapper {
//           width: 80px;
//           height: 80px;
//           background: rgba(255, 255, 255, 0.9); /* 白色半透明背景 */
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//           transition: transform 0.3s ease;
//         }
//         .icon-box:hover .icon-wrapper { transform: translateY(-5px); }
//         .icon-wrapper img { width: 45px !important; height: 45px !important; }
//         .icon-box span { font-weight: 700; text-shadow: 1px 1px 3px rgba(0,0,0,0.5); }

//         /* 2. 新增购买按钮样式 */
//         .buy-btn {
//           margin-top: 25px;
//           background: #ffb400; /* 亮眼的金黄色，吸引点击 */
//           color: #00302b;
//           border: none;
//           padding: 15px 40px;
//           font-size: 18px;
//           font-weight: 800;
//           border-radius: 50px;
//           cursor: pointer;
//           text-transform: uppercase;
//           transition: all 0.3s;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.3);
//         }
//         .buy-btn:hover { background: #fff; transform: scale(1.05); }

//         /* ── Modal 整体背景（带模糊效果） ── */
//         .modal-overlay {
//           position: fixed; inset: 0;
//           background: rgba(0, 0, 0, 0.7);
//           backdrop-filter: blur(5px);
//           display: flex; align-items: center; justify-content: center;
//           z-index: 9999;
//         }
//         /* ── Modal 核心卡片 ── */
//         .modal-card {
//           background: #fff; padding: 40px; border-radius: 20px;
//           max-width: 450px; width: 90%; text-align: center;
//           box-shadow: 0 20px 50px rgba(0,0,0,0.3);
//           animation: modalScale 0.3s ease-out;
//         }
//         @keyframes modalScale {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         .modal-card h3 { color: #004e46; font-size: 24px; margin-bottom: 15px; }
//         .modal-card p { color: #666; line-height: 1.6; margin-bottom: 25px; }
//         .modal-close-btn {
//           background: #00a496; color: #fff; border: none;
//           padding: 12px 35px; border-radius: 50px; font-weight: 700;
//           cursor: pointer; transition: 0.3s;
//         }
//         .modal-close-btn:hover { background: #008075; transform: translateY(-2px); }
//       `,
//         }}
//       />

//       <section className="detail-hero">
//         <div className="detail-hero-overlay"></div>
//         <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
//           <div className="grid-2">
//             {/* 左侧：图片 + 挪过来的特性列表 */}
//             <div>
//               <img
//                 src={product.img}
//                 alt={product.title}
//                 style={{
//                   width: "100%",
//                   borderRadius: "12px",
//                   background: "#fff",
//                   boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//                 }}
//               />
//               {/* 特性列表现在在这里，填补空白 */}
//               <div
//                 style={{
//                   marginTop: "30px",
//                   background: "rgba(0,0,0,0.2)",
//                   padding: "20px",
//                   borderRadius: "12px",
//                 }}
//               >
//                 <h3
//                   style={{
//                     color: "#00dba0",
//                     marginBottom: "15px",
//                     fontSize: "20px",
//                   }}
//                 >
//                   Core Features
//                 </h3>
//                 <ul className="feature-list" style={{ marginTop: 0 }}>
//                   {product.features.map((f: string, i: number) => (
//                     <li
//                       key={i}
//                       style={{ fontSize: "16px", marginBottom: "8px" }}
//                     >
//                       <span style={{ color: "#00dba0" }}>✔</span> {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* 右侧：标题 + 规格表 + 购买按钮 */}
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//               }}
//             >
//               <h1
//                 style={{
//                   fontSize: "42px",
//                   fontWeight: 800,
//                   marginBottom: "25px",
//                   textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 {product.title}
//               </h1>

//               <table className="specs-table">
//                 <tbody>
//                   {Object.entries(product.specs).map(([k, v]: any) => (
//                     <tr key={k}>
//                       <td>{k}</td>
//                       <td>{v}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               {/* 新增购买按钮 */}
//               <button className="buy-btn" onClick={() => setIsModalOpen(true)}>
//                 Buy Now / Inquiry
//               </button>
//             </div>
//           </div>

//           {/* 底部四个图标：现在更显眼了 */}
//           <div className="icon-grid">
//             {[
//               { img: "icon-1-1.png", label: "Sheets" },
//               { img: "icon-1-2.png", label: "Layers" },
//               { img: "icon-1-3.png", label: "Packing" },
//               { img: "icon-1-4.png", label: "Material" },
//             ].map((item, idx) => (
//               <div className="icon-box" key={idx}>
//                 <div className="icon-wrapper">
//                   <img
//                     src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/${item.img}`}
//                     alt={item.label}
//                   />
//                 </div>
//                 <span>{item.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 底部工厂展示 */}
//       <section style={{ padding: "80px 0", textAlign: "center" }}>
//         <h2 style={{ color: "#004e46", marginBottom: "40px" }}>
//           Our Production Excellence
//         </h2>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(4, 1fr)",
//             gap: "10px",
//             padding: "0 20px",
//           }}
//         >
//           <img
//             src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-3.jpg"
//             style={{ width: "100%" }}
//           />
//           <img
//             src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-1.jpg"
//             style={{ width: "100%" }}
//           />
//           <img
//             src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-4.jpg"
//             style={{ width: "100%" }}
//           />
//           <img
//             src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-2.jpg"
//             style={{ width: "100%" }}
//           />
//         </div>
//       </section>
//       {/* ── 漂亮的 Modal 弹窗 ── */}
//       {isModalOpen && (
//         <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
//           <div className="modal-card" onClick={(e) => e.stopPropagation()}>
//             <div style={{ fontSize: "50px", marginBottom: "20px" }}>🚧</div>
//             <h3>Coming Soon!</h3>
//             <p>
//               Our online store is currently under construction to provide you
//               with a better shopping experience.
//               <br />
//               <br />
//               In the meantime, please contact us through the{" "}
//               <strong>Inquiry form</strong> or <strong>WhatsApp</strong> for
//               orders!
//             </p>
//             <button
//               className="modal-close-btn"
//               onClick={() => setIsModalOpen(false)}
//             >
//               Got it!
//             </button>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

"use client";
import React, { use, useState } from "react";
import { notFound } from "next/navigation";
import { productsDatabase } from "@/app/lib/productsDatabase";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = use(params);
  const categoryData = productsDatabase[category];
  const product = categoryData?.find((p: any) => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) notFound();

  // 💡 如果数据库里还没加 terms，我们先给个默认占位，防止报错。
  // 你之后在 database 里给每个产品配上专属的 terms 即可。
  const tradeTerms = product.terms || [
    { label: "Samples", value: "Provided for free (customer pays freight)." },
    {
      label: "Customize",
      value:
        "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized.",
    },
    {
      label: "MOQ",
      value: "40HQ container (Customized) / No limit (Standard).",
    },
    {
      label: "Lead Time",
      value: "25 work days (Customized) / 7-10 days (Standard).",
    },
  ];

  return (
    <main
      style={{ backgroundColor: "#f4f7f6", fontFamily: "Poppins, sans-serif" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* ── 1. Hero 视觉区 (精简数据，主打冲击力) ── */
        .detail-hero { 
          background: #1A202C url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/banner-5.jpg') center/cover no-repeat; 
          padding: 80px 0 160px; /* 底部留出巨大空间给悬浮卡片 */
          color: #fff; 
          position: relative; 
        }
        .detail-hero-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.7); }
        .hero-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        
        .hero-img-wrap img { width: 100%; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.4); background: #fff; }
        
        .hero-info h1 { font-size: 48px; font-weight: 800; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); line-height: 1.2; }
        
        /* 顶部图标区域改版 */
        .hero-icons { display: flex; gap: 20px; margin-bottom: 40px; }
        .hero-icon-item { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 50px; border: 1px solid rgba(255,255,255,0.2); }
        .hero-icon-item img { width: 24px; height: 24px; filter: brightness(0) invert(1); }
        .hero-icon-item span { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        .buy-btn {
          background: #ffb400; color: #00302b; border: none; padding: 18px 50px; 
          font-size: 18px; font-weight: 800; border-radius: 50px; cursor: pointer; 
          text-transform: uppercase; transition: all 0.3s; box-shadow: 0 10px 25px rgba(255, 180, 0, 0.4);
        }
        .buy-btn:hover { background: #fff; transform: translateY(-3px); box-shadow: 0 15px 35px rgba(255, 255, 255, 0.4); }

        /* ── 2. 数据悬浮大卡片 (解决密集数据排版) ── */
        .data-card-wrapper {
          max-width: 1200px; margin: -100px auto 80px; padding: 0 20px; position: relative; z-index: 10;
        }
        .data-card {
          background: #fff; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          padding: 50px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px;
        }
        
        .section-subtitle { color: #00a496; font-size: 22px; font-weight: 800; margin-bottom: 25px; text-transform: uppercase; display: flex; align-items: center; gap: 10px;}
        
        /* 左侧：Specs 表格 + Features */
        .clean-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
        .clean-table tr { border-bottom: 1px solid #eee; }
        .clean-table td { padding: 16px 12px; font-size: 15px; color: #444; }
        .clean-table td:first-child { font-weight: 700; color: #111; width: 35%; background: #fcfcfc; }
        
        .feature-list { list-style: none; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .feature-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 15px; color: #555; font-weight: 500; }
        .check-icon { color: #00a496; font-weight: bold; }

        /* 右侧：B2B Trade Info 卡片化 */
        .trade-terms-container { display: flex; flex-direction: column; gap: 20px; }
        .trade-term-box {
          background: #f8faf9; border-left: 4px solid #00a496; padding: 20px; border-radius: 0 8px 8px 0;
          transition: transform 0.3s;
        }
        .trade-term-box:hover { transform: translateX(5px); background: #f0f6f5; }
        .trade-term-title { font-size: 13px; color: #888; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; letter-spacing: 1px;}
        .trade-term-desc { font-size: 16px; color: #222; font-weight: 600; line-height: 1.5; }

        /* ── Modal 整体背景 ── */
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(5px); 
          display: flex; align-items: center; justify-content: center; z-index: 9999;
        }
        .modal-card {
          background: #fff; padding: 40px; border-radius: 20px; max-width: 450px; width: 90%; text-align: center; 
          box-shadow: 0 20px 50px rgba(0,0,0,0.3); animation: modalScale 0.3s ease-out;
        }
        @keyframes modalScale { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .modal-card h3 { color: #004e46; font-size: 24px; margin-bottom: 15px; }
        .modal-card p { color: #666; line-height: 1.6; margin-bottom: 25px; }
        .modal-close-btn {
          background: #00a496; color: #fff; border: none; padding: 12px 35px; border-radius: 50px; font-weight: 700;
          cursor: pointer; transition: 0.3s;
        }
        .modal-close-btn:hover { background: #008075; transform: translateY(-2px); }

        /* Responsive */
        @media(max-width: 1024px) {
          .hero-grid, .data-card { grid-template-columns: 1fr; gap: 40px; }
          .hero-img-wrap { max-width: 600px; margin: 0 auto; }
          .data-card { padding: 30px; }
        }
        @media(max-width: 640px) {
          .hero-info h1 { font-size: 36px; }
          .hero-icons { flex-direction: column; gap: 10px; }
          .feature-list { grid-template-columns: 1fr; }
        }
      `,
        }}
      />

      {/* 1. HERO 视觉区 */}
      <section className="detail-hero">
        <div className="detail-hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-grid">
            {/* 左：大图 */}
            <div className="hero-img-wrap">
              <img src={product.img} alt={product.title} />
            </div>

            {/* 右：标题 + 核心标识 + 按钮 */}
            <div className="hero-info">
              <span
                style={{
                  color: "#00dba0",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "15px",
                }}
              >
                Premium Tissue Series
              </span>
              <h1>{product.title}</h1>

              {/* 四个图标移到这里，增强第一眼印象 */}
              <div className="hero-icons">
                <div className="hero-icon-item">
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/icon-1-1.png"
                    alt="Sheets"
                  />
                  <span>{product.specs.Sheets || "Custom"}</span>
                </div>
                <div className="hero-icon-item">
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/icon-1-2.png"
                    alt="Layers"
                  />
                  <span>{product.specs.Layer || "Multi-ply"}</span>
                </div>
                <div className="hero-icon-item">
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/icon-1-4.png"
                    alt="Material"
                  />
                  <span>Eco-Friendly</span>
                </div>
              </div>

              <button className="buy-btn" onClick={() => setIsModalOpen(true)}>
                Get A Quote Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 数据悬浮大卡片 */}
      <section className="data-card-wrapper">
        <div className="data-card">
          {/* 左侧：物理规格与特征 */}
          <div>
            <h3 className="section-subtitle">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              Technical Specifications
            </h3>

            <table className="clean-table">
              <tbody>
                {Object.entries(product.specs).map(([k, v]: any) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="section-subtitle" style={{ marginTop: "40px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              Core Features
            </h3>
            <ul className="feature-list">
              {product.features.map((f: string, i: number) => (
                <li key={i}>
                  <span className="check-icon">✔</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* 右侧：B2B 商业条款 */}
          <div>
            <h3 className="section-subtitle">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              Trade & Purchase Info
            </h3>
            <div className="trade-terms-container">
              {tradeTerms.map((term: any, idx: number) => (
                <div key={idx} className="trade-term-box">
                  <div className="trade-term-title">{term.label}</div>
                  <div className="trade-term-desc">{term.value}</div>
                </div>
              ))}
            </div>

            {/* 提示块 */}
            <div
              style={{
                marginTop: "30px",
                padding: "15px",
                background: "#fffaf0",
                border: "1px dashed #eeddcc",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#666",
              }}
            >
              <strong>Note:</strong> Pricing depends on order volume and
              customization level. Please contact our team for a precise
              quotation.
            </div>
          </div>
        </div>
      </section>

      {/* 3. 底部工厂展示 (保留原样) */}
      <section style={{ padding: "0 0 80px 0", textAlign: "center" }}>
        <h2
          style={{
            color: "#004e46",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: 800,
          }}
        >
          Our Production Excellence
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
            padding: "0 20px",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-3.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-1.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-4.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Factory-2.jpg"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </div>
      </section>

      {/* ── 漂亮的 Modal 弹窗 ── */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div style={{ fontSize: "50px", marginBottom: "20px" }}>🚧</div>
            <h3>Coming Soon!</h3>
            <p>
              Our online store is currently under construction.
              <br />
              <br />
              Please contact us through the <strong>Contact Us</strong> page or{" "}
              <strong>WhatsApp</strong> for orders!
            </p>
            <button
              className="modal-close-btn"
              onClick={() => setIsModalOpen(false)}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}