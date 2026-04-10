// // import { redirect } from "next/navigation";

// // export default function ProductsIndexPage() {
// //   // 自动重定向到竹子产品分类
// //   redirect("/products/bamboo");
// // }

// "use client";

// import React from "react";
// import Link from "next/link";

// // ============================================================
// // 📌 核心图标 (精准还原放大镜)
// // ============================================================
// const SearchIcon = () => (
//   <svg
//     width="18"
//     height="18"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <circle cx="11" cy="11" r="8"></circle>
//     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//   </svg>
// );

// // ============================================================
// // 📌 产品数据 (全站统一)
// // ============================================================
// const products = [
//   {
//     title: "Bamboo Toilet Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Toilet-paper-new-1-1.png",
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
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Central-Pull-Tissue-Paper.png",
//     link: "/products/central-pull-tissue-paper",
//   },
//   {
//     title: "Mini Jumbo Toilet Rolls",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Mini-Jumbo-Roll.png",
//     link: "/products/mini-jumbo-toilet-rolls",
//   },
// ];

// // ============================================================
// // 🚀 PAGE COMPONENT
// // ============================================================
// export default function ProductsPage() {
//   return (
//     <main
//       style={{
//         width: "100%",
//         overflowX: "hidden",
//         backgroundColor: "#fff",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* 🔴 原生 CSS 注入：确保虚线圆圈和背景效果不走样 */}
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         .pd-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }

//         /* 1. Hero Banner */
//         .pd-hero {
//           height: 450px;
//           background: url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/banner-product-1-1.jpg') 82% 50%/cover no-repeat;
//           display: flex;
//           align-items: center;
//           color: #fff;
//         }
//         .pd-hero h1 { font-size: 56px; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; }
//         .pd-hero p { font-size: 36px; font-weight: 400; }

//         /* 2. 产品网格区域 */
//         .pd-grid-section {
//           padding: 100px 0;
//           background: #F7FAFC url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/bg-icon-2.png') center/cover no-repeat fixed;
//           text-align: center;
//         }
//         .pd-title { font-size: 40px; font-weight: 700; color: #08394a; text-transform: uppercase; margin-bottom: 20px; }
//         .pd-desc { max-width: 900px; margin: 0 auto 60px; color: #666; line-height: 1.6; }

//         .pd-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr); /* 严格对齐源码的 3 列布局 */
//           gap: 60px;
//         }

//         /* 🏆 核心：虚线圆圈卡片 */
//         .pd-card {
//           background: #fff;
//           border: 4px dashed #00a496;
//           border-radius: 500px;
//           aspect-ratio: 1/1;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 40px;
//           text-decoration: none;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           cursor: pointer;
//         }
//         .pd-card:hover {
//           background-color: #00a496;
//           border-color: #fff;
//           transform: translateY(-10px);
//         }

//         .pd-card img {
//           width: 70%;
//           height: auto;
//           margin-bottom: 25px;
//           transition: transform 0.5s ease;
//           border-radius: 200px;
//         }
//         .pd-card:hover img { transform: scale(1.1); }

//         .pd-item-title {
//           font-size: 22px;
//           font-weight: 700;
//           color: #08394a;
//           margin-bottom: 15px;
//           transition: color 0.3s;
//         }
//         .pd-card:hover .pd-item-title { color: #fff; }

//         .pd-more-link {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           color: #00a496;
//           font-weight: 700;
//           font-size: 16px;
//           transition: color 0.3s;
//         }
//         .pd-card:hover .pd-more-link { color: #fff; }

//         @media (max-width: 1024px) {
//           .pd-grid { grid-template-columns: repeat(2, 1fr); }
//           .pd-hero h1 { font-size: 40px; }
//           .pd-hero p { font-size: 24px; }
//         }
//         @media (max-width: 640px) {
//           .pd-grid { grid-template-columns: 1fr; }
//           .pd-hero { text-align: center; }
//           .pd-card { padding: 30px; }
//         }
//       `,
//         }}
//       />

//       {/* 1. HERO BANNER */}
//       <section className="pd-hero">
//         <div className="pd-container">
//           <h1>Sustainable Materials</h1>
//           <p>Our paper is made with 100% bamboo.</p>
//         </div>
//       </section>

//       {/* 2. PRODUCT LIST SECTION */}
//       <section className="pd-grid-section">
//         <div className="pd-container">
//           <h2 className="pd-title">All Paper Tissue</h2>
//           <p className="pd-desc">
//             Ivoire Tissue Paper integrates R&D, production, and sales together.
//             Main Products: Bamboo Toilet Paper, Bamboo Kitchen Towels, Bamboo
//             Facial Tissue, Commercial Hand Paper Towels, Mini Jumbo Rolls, and
//             more.
//           </p>

//           <div className="pd-grid">
//             {products.map((item, index) => (
//               <Link href={item.link} key={index} className="pd-card">
//                 <img src={item.img} alt={item.title} />
//                 <h4 className="pd-item-title">{item.title}</h4>
//                 <span className="pd-more-link">
//                   <SearchIcon /> See More
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

"use client";
import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "Bamboo Toilet Paper",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Toilet-paper-new-1-1.png",
    link: "/products/bamboo",
  },
  {
    title: "Bamboo Kitchen Paper",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Kitchen-Paper-2.png",
    link: "/products/bamboo",
  },
  {
    title: "Bamboo Facial Tissue",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Bamboo-facial-tissue-new-1.png",
    link: "/products/bamboo",
  },
  {
    title: "Soft Pack Facial Tissue",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Soft-Pack-Facial-Tissue-1.png",
    link: "/products/virgin",
  },
  {
    title: "N-Fold Hand Towel",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/N-Fold-1.png",
    link: "/products/recycle",
  },
  {
    title: "Hand Paper Towel",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Hand-Paper-Towel-2.png",
    link: "/products/mixed",
  },
  {
    title: "Central Pull Tissue",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Central-Pull-Tissue-Paper.png",
    link: "/products/bamboo",
  },
  {
    title: "Mini Jumbo Rolls",
    img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Mini-Jumbo-Roll.png",
    link: "/products/bamboo",
  },
];

export default function ProductsPage() {
  return (
    <main
      style={{
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        paddingTop: "0px",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .pd-hero { height: 400px; background: url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/banner-product-1-1.jpg') center/cover; display: flex; align-items: center; color: #fff; }
        .pd-grid-section { padding: 20px 0; background: #F7FAFC url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/bg-icon-2.png') center/cover no-repeat fixed; }
        .pd-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 96%; margin: 0 auto; padding: 0 20px; }
        .pd-card { background: #fff; border: 3px dashed #00a496; border-radius: 500px; aspect-ratio: 1/1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px 15px; text-decoration: none; transition: 0.3s; }
        .pd-card:hover { background: #00a496; border-color: #fff; transform: translateY(-5px); }
        .pd-card img { width: 58%; margin-bottom: 15px; }
        .pd-card h4 { color: #08394a; font-size: 17px; text-align: center; word-wrap: break-word; /* 强制长单词换行 */}
        .pd-card:hover h4 { color: #fff; }
        @media (max-width: 1024px) { .pd-grid { grid-template-columns: repeat(2, 1fr); } }
      `,
        }}
      />
      <section className="pd-hero">
        <div style={{ paddingLeft: "8%" }}>
          <h1
            style={{
              margin: "0 0 15px 0",
              fontSize: "72px" /* 👈 从 46px 暴增到 72px */,
              fontWeight: 800 /* 👈 加超粗体 */,
              letterSpacing: "2px" /* 👈 稍微拉开字间距，更大气 */,
              textShadow:
                "2px 2px 10px rgba(0,0,0,0.4)" /* 👈 加点阴影，防止背景图太亮看不清字 */,
            }}
          >
            Our Products
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "28px" /* 👈 从 20px 放大到 28px */,
              fontWeight: 500,
              letterSpacing: "1px",
              textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
            }}
          >
            100% Sustainable Solutions
          </p>
        </div>
      </section>
      <section className="pd-grid-section">
        <div className="pd-grid">
          {categories.map((cat, i) => (
            <Link key={i} href={cat.link} className="pd-card">
              <img src={cat.img} alt={cat.title} />
              <h4>{cat.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}