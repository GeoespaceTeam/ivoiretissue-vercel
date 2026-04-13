"use client";

import React, { useState } from "react";

// ============================================================
// 📌 精准 SVG 图标
// ============================================================
const ChevronDown = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={isOpen ? "#ffffff" : "#444444"}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
      transition: "0.3s",
    }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// ============================================================
// 📌 FAQ 数据
// ============================================================
const faqs = [
  {
    q: "Q1: Do you use 100% virgin bamboo pulp for tissue paper ?",
    a: "Yes, Ivoire Tissue use FSC 100% virgin bamboo pulp , no recycled or wood pulp .",
  },
  {
    q: "Q2: Can you do our private label for the tissue paper products ?",
    a: "Yes, Ivoire Tissue can do your private label , your logo , your brand on the package of the products .",
  },
  {
    q: "Q3: Is Bamboo a tree or the grass ?",
    a: "Bamboo is actually grass , not tree. And Bamboo is highly renewable resources , evergreen plant & fastly growing.",
  },
  {
    q: "Q4: Is Bamboo toilet paper soft or not ?",
    a: "a. 100% virgin bamboo pulp toilet paper is rather soft and water-absorbing.\nb. Bamboo is highly water absorbent, able to take up three times its weight in water.\nc. Bamboo grows without fertilizers or pesticides , as a result, plantations can easily be kept organic.",
  },
  {
    q: "Q5: Is bamboo more Eco-friendly for making paper , comparing with wood ? Why ?",
    a: "Yes, Bamboo is highly renewable , growing fast . And bamboo is the fastest growing canopy for the re-geening of degraded lands and releases 35% more oxygen than equivalent timber stands.",
  },
  {
    q: "Q6: Will bamboo tissue paper production impact the habitat of panda ?",
    a: "No, the bamboo we use for making tissue paper is different specifices from the bamboo for panda, and we use the bamboo from our own bamboo forest.",
  },
  {
    q: "Q7: Are u a factory or trading company ?",
    a: "We are a leading professional manufacture who specialize in producing all kinds of tissue products for more than 24 years.",
  },
  {
    q: "Q8: Where is your factory ?",
    a: "Our factory is located in Saint-Eustache, Quebec, Canada. All our clients, from home or abroad, are warmly welcome to visit us!",
  },
  {
    q: "Q9: How can I get the samples",
    a: "1, We are honored to offer you samples. New clients are expected to pay for the courier cost, the samples are free for you.",
  },
];

// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function FAQPage() {
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
      {/* 🔴 原生 CSS 注入：根据你发的源代码精准锁定 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .container { max-width: 1500px; margin: 0 auto; padding: 0 1.5rem; }
        
        /* 核心背景区域：包裹了 FAQ 和表单 */
        .faq-outer-section {
          position: relative;
          padding: 100px 0;
          background: url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/bg.jpg') center/cover no-repeat fixed;
        }
        .faq-overlay {
          position: absolute;
          inset: 0;
          background-color: #00302b;
          opacity: 0.35;
          z-index: 1;
        }
        .faq-main-grid {
          position: relative;
          z-index: 2;
          display: grid;
          /* 👇 将 60% 40% 改为 1.5fr 1fr，完美解决截断问题 👇 */
          grid-template-columns: 1.5fr 1fr; 
          gap: 60px;
          align-items: start;
        }
        /* 手风琴样式修复 */
        .faq-title { font-size: 50px; font-weight: 700; color: #ffffff; margin-bottom: 40px; text-transform: uppercase; }
        .faq-item { margin-bottom: 10px; border-radius: 4px; overflow: hidden; }
        .faq-btn {
          width: 100%;
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          font-weight: 700;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          background: rgba(255,255,255,0.92);
          color: #1A202C;
        }
        .faq-btn.active {
          background: #00a496;
          color: #ffffff;
        }
        .faq-content {
          padding: 30px;
          background: rgba(0,164,150,0.33);
          color: #ffffff;
          line-height: 1.8;
          font-size: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        /* 表单样式修复 */
        .form-card {
          background-color: rgba(255, 255, 255, 0.61);
          padding: 50px;
          border-radius: 30px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }
        .form-card h2 { font-size: 32px; font-weight: 700; color: #004e46; margin-bottom: 30px; }
        .input-group { margin-bottom: 20px; }
        .input-group label { display: block; font-weight: 700; color: #225C54; margin-bottom: 10px; }
        .input-field {
          width: 100%;
          padding: 20px !important;
          border-radius: 30px !important;
          border: 1px solid #a0aec0 !important;
          background: #fff;
          font-size: 16px;
          outline: none;
        }
        .submit-btn {
          width: 100%;
          background: #00A496;
          color: #fff;
          padding: 15px 40px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          margin-top: 10px;
        }
        .submit-btn:hover { background: #00dba0; }

        /* 新增直连卡片样式 */
        .ivt-direct-contact { list-style: none; padding: 0; margin: 0; }
        .ivt-direct-contact li { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
        .ivt-icon-circle { background: #00a496; color: #fff; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,164,150,0.3); }
        .ivt-icon-circle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .ivt-contact-label { display: block; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .ivt-contact-value { font-size: 20px; font-weight: 700; color: #004e46; text-decoration: none; transition: color 0.3s; word-break: break-word; }
        .ivt-contact-value:hover { color: #00a496; }
        
        @media (max-width: 1024px) {
          .faq-main-grid { grid-template-columns: 1fr; }
          .faq-outer-section { padding: 60px 0; background-attachment: scroll; }
          .faq-title { font-size: 36px; text-align: center; }
        }
      `,
        }}
      />

      {/* 1. FAQ & FORM SECTION (带有完整背景图和遮罩) */}
      <section className="faq-outer-section">
        <div className="faq-overlay"></div>
        <div className="container">
          <div className="faq-main-grid">
            {/* 左侧：FAQ Accordion */}
            <div>
              <h1 className="faq-title">FAQ</h1>
              <div className="faq-list">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div key={index} className="faq-item">
                      <button
                        className={`faq-btn ${isOpen ? "active" : ""}`}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span>{faq.q}</span>
                        <ChevronDown isOpen={isOpen} />
                      </button>
                      {isOpen && (
                        <div className="faq-content">
                          <p style={{ margin: 0, whiteSpace: "pre-line" }}>
                            {faq.a}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 右侧：联系卡片 + 底部图片填充空隙 */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
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
                    product of interest, estimated order quantity, and any
                    custom OEM requirements
                  </strong>{" "}
                  in your email. Our Montreal team will get back to you
                  promptly.
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
                        info@ivoiretissue.com
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
                        +1 (514) 971-8238
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

              {/* 👇 新增的图片区块，填补右侧下方空白 👇 */}
              <div
                style={{
                  width: "100%",
                  borderRadius: "30px",
                  overflow: "hidden",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="/images/about.png" /* 👈 记得换成你想要的图，比如你们的工厂图或者竹林图 */
                  alt="Ivoire Tissue Environment"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GOOGLE MAP (核心修复：直接使用圣厄斯塔什经纬度) */}
      <section
        style={{ width: "100%", height: "500px", backgroundColor: "#eee" }}
      >
        {/* 这里的坐标已设为 Saint-Eustache 附近 */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11162.77884483321!2d-73.8967923!3d45.5606497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc924376c6c7b5d%3A0x7948a67bf5c9!2s222%20Rue%20Poirier%2C%20Saint-Eustache%2C%20QC%20J7R%206B1!5e0!3m2!1sen!2sca!4v1712165432123!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ivoire Tissue Location Map"
        ></iframe>
      </section>
    </main>
  );
}
