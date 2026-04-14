"use client";

import React, { useState } from "react";
import Link from "next/link";

// --- 1. 顶部 Hero 右侧的白色 Logo 列表 ---
const heroLogos = [
  {
    alt: "FSC",
    src: "https://www.cndonseapaper.com/wp-content/uploads/2025/03/fdc-3.png",
  },
  {
    alt: "ISO",
    src: "https://www.cndonseapaper.com/wp-content/uploads/2025/03/iso-1.png",
  },
  {
    alt: "FDA",
    src: "https://www.cndonseapaper.com/wp-content/uploads/2025/03/fda-2.png",
  },
  {
    alt: "SGS",
    src: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/SGS.png",
  },
  {
    alt: "BSCI",
    src: "https://www.cndonseapaper.com/wp-content/uploads/2025/03/bsci.png",
  },
];

// --- 2. Tab 切换数据 (已替换为 Ivoire 品牌文案) ---
const tabsData = [
  {
    id: "FSC",
    title: "FSC",
    image:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/03/FSC-Certificate-20250212-Donsea-1.jpg",
    heading: "FSC Certification",
    text: "We strictly use FSC-certified bamboo pulp to make our paper. At Ivoire Tissue, we guarantee that no natural forests are destroyed for our bamboo paper products, ensuring 100% sustainable sourcing.",
    pdfLink: "#", // 替换为真实的 PDF 链接
  },
  {
    id: "PFAS",
    title: "PFAS",
    image:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/03/FSC_C128520_100_Bamboo_Portrait_BlackOnWhite-1-727x1024.jpg", // 原网页占位图
    heading: "PFAS-Free",
    text: "Per- and Polyfluoroalkyl Substances (PFAS) have gained increasing attention worldwide. Understanding our customers' concerns, Ivoire Tissue sends our products to SGS for rigorous testing. We are proud to announce that our products are 100% PFAS-Free.",
    pdfLink: "#",
  },
  {
    id: "BSCI",
    title: "BSCI",
    image:
      "https://www.cndonseapaper.com/wp-content/uploads/2025/03/BSCI证书-24年已审B级-1.jpg",
    heading: "BSCI Compliance",
    text: "With the expansion of our global market, our factory is constantly improving its social responsibility standards. We have successfully achieved the BSCI standard, ensuring ethical and safe working conditions.",
    pdfLink: "#",
  },
];

// --- 3. 瀑布流证书图片 (Gallery) ---
const certGallery = [
  "https://www.cndonseapaper.com/wp-content/uploads/2025/02/iso45001.jpg",
  "https://www.cndonseapaper.com/wp-content/uploads/2025/02/iso14001.jpg",
  "https://www.cndonseapaper.com/wp-content/uploads/2025/02/iso9001.jpg",
  "https://www.cndonseapaper.com/wp-content/uploads/2025/03/FSC-Certificate-20250212-Donsea-1.jpg",
  "https://www.cndonseapaper.com/wp-content/uploads/2025/02/01.png",
  "https://www.cndonseapaper.com/wp-content/uploads/2025/02/1-2-1.jpg",
];

// --- 4. FAQ 数据 (Ivoire 专属) ---
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

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <main
      style={{ backgroundColor: "#fff", fontFamily: "Poppins, sans-serif" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .cert-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        
        :root {
          --c-brand: #00a496;
          --c-brand-dark: #007a6d;
          --c-text-dark: #1A202C;
          --c-text-light: #555;
          --c-bg-gray: #f8f9fa;
        }

        /* 1. Hero Section */
        .cert-hero { 
          position: relative; 
          background-image: url('/images/certification-hero.png'); 
          background-size: cover; 
          background-position: center; 
          padding: 80px 0; 
        }
        .cert-hero-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.72); }
        .cert-hero-grid { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 40px; }
        .cert-hero-title h1 { color: #fff; font-size: 50px; font-weight: 700; margin-bottom: 10px; }
        .cert-hero-title p { color: rgba(255,255,255,0.8); font-size: 16px; }
        .cert-hero-title p a { color: #fff; text-decoration: none; transition: color 0.3s; }
        .cert-hero-title p a:hover { color: var(--c-brand); }
        .cert-hero-logos { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        .cert-hero-logos img { height: 60px; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.9; }

        /* 2. Tabs Section */
        .cert-tabs-section { padding: 80px 0 40px; }
        .cert-tabs-header { display: flex; justify-content: center; gap: 15px; margin-bottom: 50px; flex-wrap: wrap; }
        .cert-tab-btn {
          background: transparent; border: 2px solid #ddd; color: #777; font-size: 18px; font-weight: 700; 
          padding: 12px 40px; border-radius: 4px; cursor: pointer; transition: all 0.3s; font-family: 'Poppins', sans-serif;
        }
        .cert-tab-btn:hover { border-color: var(--c-brand); color: var(--c-brand); }
        .cert-tab-btn.active { border-color: var(--c-brand); color: var(--c-brand); box-shadow: 0 4px 14px rgba(0,164,150,0.15); }
        
        .cert-tab-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; animation: fadeIn 0.5s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        .cert-tab-img img { width: 100%; max-width: 500px; height: auto; display: block; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border-radius: 4px; }
        .cert-tab-text h2 { font-size: 36px; color: var(--c-brand); font-weight: 800; margin-bottom: 25px; }
        .cert-tab-text p { font-size: 18px; color: #555; line-height: 1.8; margin-bottom: 35px; }
        .cert-download-btn { 
          display: inline-block; background: var(--c-brand); color: #fff; text-decoration: none; 
          padding: 14px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; transition: 0.3s; 
        }
        .cert-download-btn:hover { background: var(--c-brand-dark); transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,164,150,0.2); }

        /* 3. Gallery Grid */
        .cert-gallery-section { padding: 40px 0 80px; }
        .cert-gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .cert-gallery-item { border-radius: 8px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.3s; background: #fff; }
        .cert-gallery-item:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .cert-gallery-item img { width: 100%; height: auto; display: block; }

        /* 4. Bottom FAQ & Contact */
        .fac-bottom-section { 
          position: relative; 
          background-image: url('/images/certification-faq.png'); 
          background-size: cover; 
          background-position: center; 
          padding: 100px 20px; 
        }
        .fac-bottom-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.85); }
        .fac-bottom-grid { position: relative; z-index: 2; max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: stretch; }

        /* FAQ 手风琴 (复用自 Factory 页面) */
        .fac-faq-container h2 { color: #fff; font-size: 36px; font-weight: 700; margin-bottom: 30px; }
        .fac-faq-item { margin-bottom: 10px; }
        .fac-faq-header { 
          width: 100%; text-align: left; background: rgba(255,255,255,0.92); color: var(--c-text-dark); 
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
        .fac-form-card h2 { font-size: 32px; color: var(--c-text-dark); font-weight: 800; margin-bottom: 25px; }
        .fac-label { display: block; font-weight: 700; color: #225C54; margin-bottom: 8px; font-size: 15px; }
        .fac-input { width: 100%; padding: 15px 20px; border-radius: 30px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; }
        .fac-input:focus { border-color: var(--c-brand); box-shadow: 0 0 5px rgba(0,164,150,0.3); }
        .fac-textarea { width: 100%; padding: 15px 20px; border-radius: 20px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; height: 120px; resize: vertical; }
        .fac-submit { background: var(--c-brand); color: #fff; border: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s; width: 100%; text-transform: uppercase; }
        .fac-submit:hover { background: var(--c-brand-dark); }
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
        /* 响应式 */
        @media (max-width: 1024px) {
          .cert-tab-content { grid-template-columns: 1fr; gap: 40px; }
          .cert-gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .fac-bottom-grid { grid-template-columns: 1fr; gap: 40px; }
          .cert-hero-grid { flex-direction: column; text-align: center; justify-content: center; }
          .cert-hero-logos { justify-content: center; }
        }
        @media (max-width: 768px) {
          .cert-hero-title h1 { font-size: 40px; }
          .cert-gallery-grid { grid-template-columns: 1fr; }
          .cert-tab-btn { padding: 10px 20px; font-size: 16px; }
          .fac-form-card { padding: 30px 20px; }
        }
      `,
        }}
      />

      {/* 1. Hero Banner */}
      <section className="cert-hero">
        <div className="cert-hero-overlay"></div>
        <div className="cert-container cert-hero-grid">
          <div className="cert-hero-title">
            <h1>Certification</h1>
            <p>
              <Link href="/">Home</Link> / Certification
            </p>
          </div>
          <div className="cert-hero-logos">
            {heroLogos.map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Tabs Section */}
      <section className="cert-tabs-section">
        <div className="cert-container">
          <div className="cert-tabs-header">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                className={`cert-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {activeTabData && (
            <div className="cert-tab-content">
              <div className="cert-tab-img">
                <img src={activeTabData.image} alt={activeTabData.heading} />
              </div>
              <div className="cert-tab-text">
                <h2>{activeTabData.heading}</h2>
                <p>{activeTabData.text}</p>
                <a
                  href={activeTabData.pdfLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-download-btn"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Certificate Gallery */}
      <section className="cert-gallery-section">
        <div className="cert-container cert-gallery-grid">
          {certGallery.map((src, idx) => (
            <div key={idx} className="cert-gallery-item">
              <img src={src} alt={`Ivoire Tissue Certificate ${idx + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom FAQ & Contact (复用 Factory 页面的高品质设计) */}
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
                  <div
                    style={{
                      whiteSpace: "pre-line",
                      paddingTop: activeFaq === index ? "15px" : "0",
                    }}
                  >
                    {faq.a}
                  </div>
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
                  lineHeight: "1.9",
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
