"use client";

import React, { useState } from "react";

// --- 1. 视频数据 (直接抓取自原网页源码的真实 YouTube 链接) ---
const videos = [
  {
    title: "Production Line",
    src: "https://www.youtube.com/embed/Unop6aekL1M",
  },
  {
    title: "Paper Towel Cutting Production Line",
    src: "https://www.youtube.com/embed/FkO4kFba1k4",
  },
  {
    title: "Paper Towel Production And Packaging Line",
    src: "https://www.youtube.com/embed/Jbw4Ur_6BSQ",
  },
  {
    title: "Roll Rubbing Equipment Cutting",
    src: "https://www.youtube.com/embed/-C6KF2j65vg",
  },
  {
    title: "Heat Shrink Film Packaging Line",
    src: "https://www.youtube.com/embed/5YWwLpFFrPg",
  },
  {
    title: "Automatic Line Production",
    src: "https://www.youtube.com/embed/4sL490OAQko",
  },
];

// --- 2. FAQ 数据 (已全面替换为 Ivoire Tissue 官方数据) ---
const faqs = [
  {
    q: "Q1: Do you use 100% virgin bamboo pulp for tissue paper?",
    a: "Yes, Ivoire Tissue uses FSC 100% virgin bamboo pulp, no recycled or wood pulp mixed in our premium lines.",
  },
  {
    q: "Q2: Can you do our private label for the tissue paper products?",
    a: "Yes, Ivoire Tissue can do your private label, including your logo and brand on the package of the products (OEM/ODM).",
  },
  {
    q: "Q3: Is Bamboo toilet paper soft or not?",
    a: "a. 100% virgin bamboo pulp toilet paper is rather soft and highly water-absorbing.\nb. Bamboo is able to take up three times its weight in water.\nc. Bamboo grows without fertilizers or pesticides, ensuring a natural, skin-friendly touch.",
  },
  {
    q: "Q4: Are you a factory or trading company?",
    a: "We are a leading professional manufacturer specializing in eco-friendly bamboo tissue products, including toilet roll paper, facial tissues, pocket tissue, hand towels, and napkin paper.",
  },
  {
    q: "Q5: Where is your factory?",
    a: "Our state-of-the-art manufacturing facility is located at 222 Rue Poirier in Saint-Eustache, Quebec, Canada. All our clients, from home or abroad, are warmly welcome to visit us!",
  },
  {
    q: "Q6: How can I get the samples?",
    a: "We are honored to offer you samples. New clients are expected to pay for the courier cost, while the samples themselves are free for you.",
  },
];

export default function FactoryProductionLinePage() {
  // 手风琴 FAQ 状态控制
  const [activeFaq, setActiveFaq] = useState<number>(0);

  return (
    <main
      style={{
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        paddingBottom: "0",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .fac-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        
        :root {
          --c-brand: #00a496; /* Ivoire 品牌绿 */
          --c-brand-dark: #008075;
          --c-dark-bg: #1A202C;
          --c-gray-bg: #F7FAFC;
        }

        /* 1. 顶部工艺流程图 */
        .fac-hero-img { width: 100%; height: auto; display: block; margin-bottom: 60px; }

        /* 2. 视频展区 */
        .fac-video-section { text-align: center; padding-bottom: 80px; }
        .fac-title { font-size: 40px; font-weight: 700; color: var(--c-dark-bg); margin-bottom: 40px; }
        
        .fac-video-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          background: var(--c-brand); /* 原版设定的背景色 */
          padding: 60px 40px;
          gap: 30px;
        }
        .fac-video-card { background: transparent; }
        .fac-video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; }
        .fac-video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0; }
        .fac-video-title { color: #fff; font-size: 18px; font-weight: 600; margin-top: 15px; text-align: left; }

        /* 3. Workshop 车间介绍区 */
        .fac-workshop-section { background: var(--c-gray-bg); padding: 0; }
        .fac-workshop-grid { display: grid; grid-template-columns: 20% 80%; align-items: center; }
        
        .fac-workshop-left { 
          background: var(--c-brand); 
          height: 100%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          min-height: 400px;
        }
        .fac-workshop-left h2 { 
          color: #fff; font-size: 60px; font-weight: 700; text-transform: uppercase; 
          writing-mode: vertical-lr; transform: rotate(180deg); letter-spacing: 2px;
        }
        
        .fac-workshop-right { padding: 60px; background: #fff; }
        .fac-workshop-right h2 { font-size: 40px; color: var(--c-dark-bg); font-weight: 700; margin-bottom: 20px; }
        .fac-workshop-right p { font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 30px; font-weight: 600; }
        .fac-workshop-right img { width: 100%; height: auto; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

        /* 4. 工厂图片瀑布流 (Gallery) */
        .fac-gallery { padding: 60px 20px; max-width: 1400px; margin: 0 auto; }
        .fac-gallery img { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .fac-gallery img:hover { transform: scale(1.02); }
        
        .fac-gallery-grid-4 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 60px; }
        .fac-gallery-grid-8 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 60px; }
        
        .fac-gallery-split { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: stretch; }
        .fac-gallery-split-left img { height: 100%; min-height: 400px; }
        .fac-gallery-split-right { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

        /* 5. FAQ & Contact (背景深色区域) */
        .fac-bottom-section { 
          position: relative; 
          background-image: url('https://www.cndonseapaper.com/wp-content/uploads/2025/03/bg.jpg'); 
          background-size: cover; 
          background-position: center; 
          padding: 100px 20px; 
        }
        .fac-bottom-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.85); }
        .fac-bottom-grid { position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: stretch; }

        /* FAQ 手风琴 */
        .fac-faq-container h2 { color: #fff; font-size: 36px; font-weight: 700; margin-bottom: 30px; }
        .fac-faq-item { margin-bottom: 10px; }
        .fac-faq-header { 
          width: 100%; text-align: left; background: rgba(255,255,255,0.92); color: var(--c-dark-bg); 
          padding: 18px 20px; font-size: 18px; font-weight: 700; border: none; cursor: pointer; 
          display: flex; justify-content: space-between; align-items: center; transition: 0.3s;
        }
        .fac-faq-header:hover { background: #fff; color: var(--c-brand); }
        .fac-faq-header.active { background: var(--c-brand); color: #fff; }
        .fac-faq-content { 
          background: rgba(0, 164, 150, 0.33); color: #fff; padding: 0 20px; 
          max-height: 0; overflow: hidden; transition: all 0.3s ease-in-out;
          font-size: 15px; line-height: 1.6;
        }
        .fac-faq-content.active { padding: 20px; max-height: 500px; }

        /* 右侧表单 */
        .fac-form-card { background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); padding: 40px; border-radius: 20px; }
        .fac-form-card h2 { font-size: 32px; color: var(--c-dark-bg); font-weight: 800; margin-bottom: 25px; }
        .fac-label { display: block; font-weight: 700; color: #225C54; margin-bottom: 8px; font-size: 15px; }
        .fac-input { width: 100%; padding: 15px 20px; border-radius: 30px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; }
        .fac-input:focus { border-color: var(--c-brand); box-shadow: 0 0 5px rgba(0,164,150,0.3); }
        .fac-textarea { width: 100%; padding: 15px 20px; border-radius: 20px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; height: 120px; resize: vertical; }
        .fac-submit { background: var(--c-brand); color: #fff; border: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s; width: 100%; text-transform: uppercase; }
        .fac-submit:hover { background: var(--c-brand-dark); }

        /* 响应式 */
        @media (max-width: 1024px) {
          .fac-video-grid { grid-template-columns: repeat(2, 1fr); padding: 40px 20px; }
          .fac-gallery-grid-8 { grid-template-columns: repeat(3, 1fr); }
          .fac-gallery-split { grid-template-columns: 1fr; }
          .fac-bottom-grid { grid-template-columns: 1fr; gap: 40px; }
        }
        @media (max-width: 768px) {
          .fac-workshop-grid { grid-template-columns: 1fr; }
          .fac-workshop-left { min-height: auto; padding: 20px; }
          .fac-workshop-left h2 { writing-mode: horizontal-tb; transform: none; font-size: 32px; }
          .fac-workshop-right { padding: 30px 20px; }
          .fac-video-grid { grid-template-columns: 1fr; }
          .fac-gallery-grid-4, .fac-gallery-grid-8 { grid-template-columns: repeat(2, 1fr); }
          .fac-form-card { padding: 30px 20px; }
        }
          /* ── 直连信息卡片专属样式 ── */
.ivt-direct-contact { list-style: none; padding: 0; margin: 0; }
.ivt-direct-contact li { display: flex; align-items: center; gap: 20px; margin-bottom: 25px; }
.ivt-icon-circle { 
  background: var(--c-brand); color: #fff; 
  width: 50px; height: 50px; border-radius: 50%; 
  display: flex; align-items: center; justify-content: center; 
  flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,164,150,0.3); 
}
.ivt-icon-circle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.ivt-contact-label { display: block; font-size: 13px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 2px; }
.ivt-contact-value { font-size: 19px; font-weight: 700; color: #004e46; text-decoration: none; transition: color 0.3s; }
.ivt-contact-value:hover { color: var(--c-brand); }

        @media (max-width: 480px) {
          .fac-gallery-grid-4, .fac-gallery-grid-8, .fac-gallery-split-right { grid-template-columns: 1fr; }
        }
      `,
        }}
      />

      {/* 1. 顶部工艺图 */}
      <img
        src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Production-Flow.png"
        alt="Production Flow"
        className="fac-hero-img"
      />

      {/* 2. 视频区域 */}
      <section className="fac-video-section">
        <h2 className="fac-title">Factory & Production Line</h2>
        <div className="fac-video-grid">
          {videos.map((vid, i) => (
            <div key={i} className="fac-video-card">
              <div className="fac-video-wrapper">
                <iframe
                  src={`${vid.src}?rel=0`}
                  title={vid.title}
                  allowFullScreen
                ></iframe>
              </div>
              <h5 className="fac-video-title">{vid.title}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Workshop 介绍区 (已替换为 Ivoire 真实数据) */}
      <section className="fac-workshop-section">
        <div className="fac-workshop-grid">
          <div className="fac-workshop-left">
            <h2>Workshop</h2>
          </div>
          <div className="fac-workshop-right">
            <h2>Workshop</h2>
            <p>
              <strong>Ivoire Tissue Paper</strong> was established in 2022,
              integrating R&D, production, and sales together. Our
              state-of-the-art plant covers an area of over 2,000 square meters
              in Saint-Eustache, Quebec. Employing a dedicated local and
              international team, we operate advanced production lines with an
              annual capacity capable of satisfying major B2B clients across
              North America.
            </p>
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-1-1.jpg"
              alt="Workshop Overview"
            />
          </div>
        </div>
      </section>

      {/* 4. 图片 Gallery */}
      <section className="fac-gallery">
        {/* 上方 4 图网格 */}
        <div className="fac-gallery-grid-4">
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-5-1.jpg"
            alt="Workshop"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-4-1.jpg"
            alt="Workshop"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-26.jpg"
            alt="Workshop"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-7.jpg"
            alt="Workshop"
          />
        </div>

        {/* 中间 8 图网格 */}
        <div className="fac-gallery-grid-8">
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/02/1-2.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/02/Factory-12.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/02/Factory-1.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-8-1.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-5.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Why-Choose-6.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-21.jpg"
            alt="Workshop detail"
          />
          <img
            src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-22.jpg"
            alt="Workshop detail"
          />
        </div>

        {/* 下方 左右分栏网格 */}
        <div className="fac-gallery-split">
          <div className="fac-gallery-split-left">
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-20.jpg"
              alt="Large Workshop View"
            />
          </div>
          <div className="fac-gallery-split-right">
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/02/1-1.jpg"
              alt="Detail"
            />
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/02/1-4.jpg"
              alt="Detail"
            />
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-23.jpg"
              alt="Detail"
            />
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/Workshop-NEW-25.jpg"
              alt="Detail"
            />
          </div>
        </div>
      </section>

      {/* 5. 底部 FAQ 与 Contact */}
      <section className="fac-bottom-section">
        <div className="fac-bottom-overlay"></div>
        <div className="fac-bottom-grid">
          {/* 左侧：FAQ 手风琴 */}
          <div className="fac-faq-container">
            <h2>FAQ</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="fac-faq-item">
                <button
                  className={`fac-faq-header ${activeFaq === index ? "active" : ""}`}
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span>{faq.q}</span>
                  <span>{activeFaq === index ? "−" : "+"}</span>
                </button>
                <div
                  className={`fac-faq-content ${activeFaq === index ? "active" : ""}`}
                >
                  <div style={{ whiteSpace: "pre-line" }}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 右侧：表单 */}
          <div className="fac-form-container">
            <div className="fac-form-card">
              <h2 style={{ marginBottom: "30px" }}>Get In Touch</h2>
              <p
                style={{
                  color: "#555",
                  fontSize: "24px",
                  lineHeight: "1.8",
                  marginBottom: "35px",
                }}
              >
                We value direct communication. To help us provide an accurate
                quote quickly, please include your product requirements in your
                inquiry. Our Montreal team will get back to you promptly.
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
                      href="mailto:sales@ivoiretissue.com"
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
                    <a href="tel:+15146888238" className="ivt-contact-value">
                      +1 (514) 688-8238
                    </a>
                  </div>
                </li>

                {/* Headquarters */}
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
                      style={{ cursor: "default" }}
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
    </main>
  );
}
