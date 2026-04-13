// import type { Metadata } from "next";
// import ContentSection from "@/app/components/ContentSection";
// // 如果你有单独的 CSS 文件，可以在这里引入，例如：
// // import "./about.css";

// export const metadata: Metadata = {
//   title: "About Us – Ivoiretissue",
//   description:
//     "Learn about the history, mission, and location of Ivoire Tissue Paper.",
// };

// export default function AboutUsPage() {
//   return (
//     <div className="about-page">
//       {/* 页面主标题区 */}
//       <section className="page-header">
//         <div className="container">
//           <h1>Ivoire Tissue</h1>
//         </div>
//       </section>

//       {/* 1. Our History */}
//       <ContentSection
//         id="history"
//         title="Our History"
//         imageSrc="/images/about-history.jpg" // 准备好图片后取消注释
//       >
//         <p>
//           <strong>Ivoire Tissue Paper</strong> is a family-owned Canadian
//           enterprise born from a vision of resilience and sustainability. Our
//           story began with our founders,
//           <strong>Yves Andoh</strong> (Chairman) and{" "}
//           <strong>Cynthia Kadjo</strong> (VP), who brought their passionate
//           entrepreneurial spirit from Africa to the heart of Quebec.
//         </p>
//         <p>
//           Founded on December 12, 2022, in Montreal, Ivoire Tissue was
//           established to address the urgent challenges of climate change and
//           deforestation. By merging African entrepreneurial heritage with
//           Canadian technological excellence, the founders chose to specialize in
//           100% bamboo-based products—a rapidly renewable alternative to
//           traditional wood pulp. To turn this dream into reality, they
//           established our primary manufacturing facility in{" "}
//           <strong>Saint-Eustache</strong>, strategically located just 45km from
//           Montreal, marking the beginning of a new era in eco-friendly paper
//           production.
//         </p>
//       </ContentSection>

//       {/* 2. Our Mission - 使用 reverse={true} 让图文反转，增加视觉层次感 */}
//       <ContentSection
//         id="mission"
//         title="Our Mission"
//         reverse={true}
//         imageSrc="/images/about-mission.jpg"
//       >
//         <p>
//           Ivoire Tissue Paper is dedicated to promoting sustainability,
//           innovation, and quality in the paper industry. By utilizing bamboo as
//           a renewable resource, the company aims to reduce environmental impact
//           while providing high-quality alternatives to traditional paper
//           products.
//         </p>
//         <p>
//           By offering high-quality alternatives to traditional paper products,
//           Ivoire Tissue Paper aims to inspire positive change within the paper
//           industry and encourage more sustainable practices among consumers and
//           businesses alike. Through their dedication to sustainability,
//           innovation, and quality, they strive to make a meaningful contribution
//           to environmental conservation and create a brighter future for
//           generations to coefficient harvesting without causing deforestation or
//           habitat destruction.
//         </p>
//       </ContentSection>

//       {/* 3. Our Location - id 必须为 "vision" 以匹配 Header/Footer 中的锚点链接 */}
//       <ContentSection
//         id="vision"
//         title="Our Location"
//         imageSrc="/images/about-location.jpg"
//       >
//         <p>
//           Located at 222 Rue Poirier in Saint-Eustache, Quebec, Canada, Ivoire
//           Tissue Paper specializes in the manufacturing of premium bamboo-based
//           paper products. Situated in the heart of Saint-Eustache, our facility
//           combines state-of-the-art production technology with a commitment to
//           environmental sustainability.
//         </p>
//         <p>
//           At Ivoire Tissue Paper, we pride ourselves on using bamboo—a rapidly
//           renewable resource—as the primary material for our paper products.
//           Bamboo’s exceptional strength and eco-friendly properties make it an
//           ideal alternative to traditional paper sources. Our production
//           processes prioritize efficiency and sustainability, minimizing
//           environmental impact without compromising product quality.
//         </p>
//         <p>
//           Our location in Saint-Eustache offers strategic advantages, with
//           proximity to major transportation routes facilitating efficient
//           distribution throughout Quebec and beyond. Surrounded by the natural
//           beauty of Quebec’s landscape, our company embodies the spirit of
//           responsible manufacturing in harmony with nature.
//         </p>
//         <p>
//           Visit us at 222 Rue Poirier to explore our range of bamboo tissue
//           papers, napkins, and other sustainable paper solutions. Experience the
//           difference of Ivoire Tissue Paper—where quality, innovation, and
//           environmental consciousness converge.
//         </p>
//       </ContentSection>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";

// ============================================================
// 📌 精准图标 (统一使用官方品牌绿 #00a496)
// ============================================================
const CheckCircle = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="#00a496"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke={isOpen ? "#fff" : "#323232"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "transform 0.3s",
    }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// ============================================================
// 📌 数据源
// ============================================================
const advantageData = [
  {
    id: "01",
    title: "Stable Industrial Supply Chain",
    icon: "1",
    imgSrc:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-1.jpg",
    desc: [
      "Forest – Pulp – Paper – Processing – Shipping",
      "Relying on our complete industrial chain, we provide high-quality competitive prices and a stable supply.",
    ],
  },
  {
    id: "02",
    title: "Construction of New Lines",
    icon: "2",
    imgSrc:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-4.jpg",
    desc: [
      "New production lines are continuously being built to provide strong delivery guarantee. Total production lines: 20.",
    ],
  },
  {
    id: "03",
    title: "Quality Traceability",
    icon: "3",
    imgSrc:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-8.jpg",
    desc: [
      "The root cause of quality problems can be traced back to the order batch.",
      "Quality is guaranteed and continuously optimized.",
    ],
  },
  {
    id: "04",
    title: "Cooperate With Shipping Companies",
    icon: "4",
    imgSrc:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-2.jpg",
    desc: [
      "Direct contracts with shipping companies eliminate middle agents, providing stable logistics prices.",
    ],
  },
  {
    id: "05",
    title: "Professional Service",
    icon: "5",
    imgSrc:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-3.jpg",
    desc: [
      "Systematic solutions, professional R&D team, timely response and expert communication services.",
    ],
  },
];

const faqs = [
  {
    q: "Q1: Do you use 100% virgin bamboo pulp for tissue paper?",
    a: "Yes, Ivoire Tissue uses FSC certified 100% virgin bamboo pulp. No wood or recycled pulp is used.",
  },
  {
    q: "Q2: Can you do our private label for the products?",
    a: "Yes, we offer professional OEM & ODM services to customize packaging with your own brand.",
  },
  {
    q: "Q3: Is Bamboo toilet paper soft?",
    a: "Absolutely. 100% virgin bamboo pulp is naturally soft, highly absorbent, and eco-friendly.",
  },
  {
    q: "Q4: Where is your factory located?",
    a: "Our facility is located in Saint-Eustache, Quebec, Canada. All clients are welcome to visit us!",
  },
];

// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function AboutUsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main
      style={{
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* 🔴 核心内联 CSS：根据你发的源代码进行像素级对齐 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .container { max-width: 1500px; margin: 0 auto; padding: 0 1.5rem; }
        
        /* 1. Hero Section - 30/70 比例还原 */
        .au-hero { 
          background: #f0f8f3 url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/boo-bg-3.png') 50% 25% no-repeat; 
          background-size: cover; 
          padding: 60px 0; 
        }
        .au-hero-grid { 
          display: grid; 
          grid-template-columns: 32% 68%; 
          align-items: center; 
        }
        .au-hero-text h1 { font-size: 50px; font-weight: 700; color: #004e46; margin: 0 0 20px; }
        .au-hero-text p { font-size: 16px; color: #323232; line-height: 1.6; padding-right: 20px; }
        .au-hero-img img { width: 100%; height: auto; border-radius: 8px; }

        /* 2. Profile Section - 视频与文字平衡 */
        .au-profile { padding: 100px 0; background: #fff; }
        .au-profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .au-video-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 45px rgba(0,0,0,0.08); }
        .au-profile-text h2 { font-size: 40px; font-weight: 700; color: #004e46; margin-bottom: 30px; }
        .au-profile-text p { color: #575757; font-size: 16px; line-height: 1.8; margin-bottom: 20px; }

        /* 3. Why Choose Us - Zig-Zag 布局还原 */
        .au-why { background: #f0f8f3 url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/未标题-3-1.png') center/cover no-repeat; padding: 100px 0; }
        .au-why-header { text-align: center; margin-bottom: 80px; }
        .au-why-header h2 { font-size: 45px; color: #111; font-weight: 700; text-transform: uppercase; }
        .au-why-header p { font-size: 22px; color: #323232; font-weight: 600; margin-top: 10px; }
        
        .au-why-item { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; margin-bottom: 120px; }
        .au-why-item.reverse { direction: rtl; }
        .au-why-item.reverse .item-text-box { direction: ltr; }
        .img-overlay-box { position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .img-label { position: absolute; bottom: 20px; width: 100%; text-align: center; color: #fff; font-size: 28px; font-weight: 800; z-index: 5; }
        .item-icon { width: 70px; height: 70px; border-radius: 20px; margin-bottom: 25px; }
        .item-text-box h3 { font-size: 32px; font-weight: 700; color: #004e46; margin-bottom: 25px; }

        /* 4. FAQ & Form - 使用 bg.jpg 统一背景 */
        .au-faq-section { 
          position: relative; padding: 120px 0; 
          background: url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/bg.jpg') center/cover no-repeat fixed; 
        }
        .au-faq-overlay { position: absolute; inset: 0; background: #00302b; opacity: 0.35; z-index: 1; }
        .au-faq-grid { position: relative; z-index: 2; display: grid; grid-template-columns: 1.5fr 1fr; gap: 60px; align-items: start; }
        
        .faq-item { background: rgba(255,255,255,0.92); margin-bottom: 10px; border-radius: 4px; overflow: hidden; }
        .faq-item.active { background: #00a496; }
        .faq-header { width: 100%; padding: 22px 25px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; border: none; background: none; text-align: left; font-weight: 700; font-size: 18px; }
        .faq-content { padding: 30px; background: rgba(0,164,150,0.33); color: #fff; line-height: 1.8; font-size: 16px; }

        .form-card { background: rgba(255, 255, 255, 0.65); padding: 50px; border-radius: 30px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
        /* 新增直连卡片样式 */
        .ivt-direct-contact { list-style: none; padding: 0; margin: 0; }
        .ivt-direct-contact li { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
        .ivt-icon-circle { background: #00a496; color: #fff; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,164,150,0.3); }
        .ivt-icon-circle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .ivt-contact-label { display: block; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .ivt-contact-value { font-size: 20px; font-weight: 700; color: #004e46; text-decoration: none; transition: color 0.3s; word-break: break-word; }
        .ivt-contact-value:hover { color: #00a496; }
        .input-style { width: 100%; padding: 20px; border-radius: 30px; border: 1px solid #a0aec0; margin-bottom: 20px; outline: none; background: #fff; font-size: 16px; }
        .submit-btn { width: 100%; background: #00a496; color: #fff; border: none; padding: 15px; border-radius: 50px; font-weight: 700; font-size: 18px; cursor: pointer; transition: 0.3s; }
        .submit-btn:hover { background: #00dba0; }

        @media (max-width: 1024px) {
          .au-hero-grid, .au-profile-grid, .au-why-item, .au-faq-grid { grid-template-columns: 1fr; gap: 40px; }
          .au-hero-text, .au-why-header { text-align: center; }
          .au-why-item { direction: ltr!important; }
        }
      `,
        }}
      />

      {/* 1. HERO BANNER (32/68 分栏还原) */}
      <section className="au-hero">
        <div className="container au-hero-grid">
          <div className="au-hero-text">
            <h1>About us</h1>
            <p>
              Propose systematic solutions to customer needs – professional
              management personnel – professional R&D team – professional
              project management – timely response and communication services.
            </p>
          </div>
          <div className="au-hero-img">
            <img
              // src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/外贸部团队照-1-1024x380.png"
              src="/images/contact-us-hero.png"
              alt="Ivoire Team"
            />
          </div>
        </div>
      </section>

      {/* 2. COMPANY PROFILE */}
      <section className="au-profile">
        <div className="container au-profile-grid">
          <div className="au-video-wrap">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Cw_H_hXJ3SA?feature=oembed"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="au-profile-text">
            <h2>Company Profile</h2>
            <p>
              <strong>Ivoire Tissue Paper</strong> was established in 2022, with
              more than 4 years of professional quality and innovative
              development, integrating R&D, production, and sales together.
              Ivoire tissue has grown into a comprehensive enterprise engaged in
              premium bamboo tissue products.
            </p>
            <p>
              Ivoire Tissue covers an area of 3,000 square meters, employing 5
              people. We are a professional bamboo paper manufacturer, dedicated
              to producing high-grade products including bamboo toilet paper,
              facial tissue, and paper towels.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Zig-Zag 排版还原) */}
      <section className="au-why">
        <div className="container">
          <div className="au-why-header">
            <h2>Why Choose Ivoire Tissue</h2>
            <p>Plant and protect the log close to the skin</p>
          </div>

          {advantageData.map((item, index) => (
            <div
              key={item.id}
              className={`au-why-item ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="img-overlay-box">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  style={{ width: "100%", display: "block" }}
                />
                <div className="img-label">-- {item.id} --</div>
              </div>
              <div className="item-text-box">
                <img
                  // src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/Why-Choose-Donsea-${item.icon}.jpg`}
                  src={`/images/icon-${item.icon}.png`}
                  alt="icon"
                  className="item-icon"
                />
                <h3>{item.title}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                  }}
                >
                  {item.desc.map((d, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "start",
                        color: "#444",
                        fontSize: "17px",
                      }}
                    >
                      <CheckCircle /> <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAQ & FORM (圣厄斯塔什定位地图在下方) */}
      <section className="au-faq-section">
        <div className="au-faq-overlay"></div>
        <div className="container au-faq-grid">
          {/* FAQ */}
          <div style={{ marginTop: "-40px" }}>
            <h2
              style={{
                color: "#fff",
                fontSize: "40px",
                fontWeight: 700,
                marginBottom: "35px",
              }}
            >
              FAQ
            </h2>
            {faqs.map((faq, index) => {
              const isActive = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-item ${isActive ? "active" : ""}`}
                >
                  <button
                    className="faq-header"
                    onClick={() => setOpenIndex(isActive ? null : index)}
                  >
                    <span style={{ color: isActive ? "#fff" : "#1A202C" }}>
                      {faq.q}
                    </span>
                    <ChevronDown isOpen={isActive} />
                  </button>
                  {isActive && <div className="faq-content">{faq.a}</div>}
                </div>
              );
            })}
          </div>

          {/* Form */}
          {/* 直连信息卡片 (替换旧 Form) */}
          <div
            className="form-card"
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
                  <a
                    href="mailto:info@ivoiretissue.com"
                    className="ivt-contact-value"
                  >
                    sales@ivoiretissue.com
                  </a>
                </div>
              </li>

              {/* Phone / WhatsApp */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">WhatsApp / Call</span>
                  <a href="tel:+1234567890" className="ivt-contact-value">
                    +1 (514) 688-8238
                  </a>
                </div>
              </li>

              {/* Location */}
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
      </section>

      {/* 5. GOOGLE MAP (蒙特利尔圣厄斯塔什工厂地址) */}
      <section
        style={{ width: "100%", height: "500px", backgroundColor: "#eee" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.4735547437346!2d-73.9238864234394!3d45.56094037107535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9254091a92e3d%3A0x6a0c649936959b8!2s222%20Rue%20Poirier%2C%20Saint-Eustache%2C%20QC%20J7R%206B1!5e0!3m2!1sen!2sca!4v1712711000000!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Ivoire Tissue Map"
        ></iframe>
      </section>
    </main>
  );
}