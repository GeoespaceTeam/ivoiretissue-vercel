"use client";

import React, { useState } from "react";
import {
  LuSprout,
  LuWind,
  LuScaling,
  LuDroplet,
  LuRecycle,
  LuCloud,
} from "react-icons/lu";
// ============================================================
// 📌 精准 SVG 图标
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
    style={{ flexShrink: 0, marginTop: "4px" }}
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
    stroke={isOpen ? "#ffffff" : "#444444"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transform: isOpen ? "rotate(180deg)" : "rotate(0)",
      transition: "0.3s",
    }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function WhyBambooPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // const powerIcons = [
  //   { id: "10", title: "Grows up to 3 feet a day." },
  //   { id: "12", title: "Releases 30% more oxygen." },
  //   { id: "13", title: "Uses less land due to density." },
  //   { id: "14", title: "Requires 30% less water." },
  //   { id: "15", title: "Entirely renewable." },
  //   { id: "16", title: "Absorbs 12 tonnes of CO2 per year." },
  // ];
const powerIcons = [
  { id: "1", icon: LuSprout, title: "Grows up to 3 feet a day." },
  { id: "2", icon: LuWind, title: "Releases 30% more oxygen." },
  { id: "3", icon: LuScaling, title: "Uses less land due to density." },
  { id: "4", icon: LuDroplet, title: "Requires 30% less water." },
  { id: "5", icon: LuRecycle, title: "Entirely renewable." },
  { id: "6", icon: LuCloud, title: "Absorbs 12 tonnes of CO2 per year." },
];
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
      q: "Q3: Is Bamboo toilet paper soft or not ?",
      a: "a. 100% virgin bamboo pulp toilet paper is rather soft and water-absorbing.\nb. Bamboo is highly water absorbent, able to take up three times its weight in water.\nc. Bamboo grows without fertilizers or pesticides , as a result, plantations can easily be kept organic.",
    },
  ];

  return (
    <main
      style={{
        width: "100%",
        overflowX: "hidden",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* 🔴 核心内联 CSS - 捕获 Why Bamboo 独特的样式基因 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .wb-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        
        /* 1. Hero Banner - 带有特定背景图和 4:1 比例感 */
        .wb-hero {
          position: relative;
          height: 450px;
          background: url('/images/why-bamboo-hero.png') center/cover no-repeat;
          display: flex;
          align-items: center;
          color: #fff;
        }
        .wb-hero h1 { font-size: 50px; font-weight: 700; text-transform: uppercase; margin-bottom: 10px; }
        .wb-hero p { font-size: 24px; font-weight: 400; max-width: 600px; }

        /* 2. Advantage Section - 带有水印 boo-bg-4.png */
        .wb-advantage {
          padding: 100px 0;
          // background: #ecfdf5 url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/boo-bg-4.png') 44% 66% no-repeat fixed;
        }
        .wb-adv-grid { display: grid; grid-template-columns: 45% 55%; gap: 60px; align-items: start; }
        .wb-adv-title { font-size: 40px; font-weight: 700; color: #004e46; margin-bottom: 30px; }
        
        .wb-icon-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px; }
        .wb-icon-item { text-align: center; }
        .wb-icon-item img { width: 100px; height: 100px; margin: 0 auto 15px; }
        .wb-icon-item h5 { font-size: 16px; font-weight: 700; color: #004e46; line-height: 1.4; }

        /* 3. 特色绿色大卡片 - 这里的 border-radius 是灵魂 */
        .wb-green-card {
          background-color: #00a496;
          background-image: url('https://www.cndonseapaper.com/wp-content/uploads/2025/04/bg-icon-1.png');
          background-size: cover;
          border-top-left-radius: 100px;
          border-bottom-right-radius: 100px;
          padding: 80px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          color: #fff;
          margin: 100px 0;
        }
        .wb-green-card h2 { font-size: 36px; font-weight: 700; margin-bottom: 30px; line-height: 1.2; }
        .wb-list-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 20px; font-size: 17px; }
        .wb-list-item svg { stroke: #fff; }
        .wb-img-square { width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 20px; }

        /* 4. FAQ Section */
        .wb-faq-section {
          position: relative; padding: 100px 0;
          background: url('/images/why-bamboo-faq.png') center/cover no-repeat;
        }
        .wb-overlay { position: absolute; inset: 0; background: #00302b; opacity: 0.35; z-index: 1; }
        .wb-faq-grid { position: relative; z-index: 10; display: grid; grid-template-columns: 60% 40%; gap: 60px; }
        
        .faq-box { background: rgba(255,255,255,0.92); margin-bottom: 12px; border-radius: 4px; overflow: hidden; }
        .faq-box.active { background: #00a496; }
        .faq-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 700; width: 100%; border: none; text-align: left; background: none; }
        .faq-content { padding: 30px; background: rgba(0,164,150,0.33); color: #fff; line-height: 1.8; }

        .form-card { background: rgba(255,255,255,0.65); padding: 40px; border-radius: 30px; box-shadow: 0 20px 50px rgba(0,0,0,0.1); }
        .input-style { width: 100%; padding: 18px 25px; border-radius: 30px; border: 1px solid #a0aec0; margin-bottom: 20px; outline: none; background: #fff; }

        @media (max-width: 1024px) {
          .wb-adv-grid, .wb-green-card, .wb-faq-grid { grid-template-columns: 1fr; gap: 40px; }
          .wb-green-card { border-radius: 30px; padding: 40px 20px; }
          .wb-hero h1 { font-size: 36px; }
          .wb-icon-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `,
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="wb-hero">
        <div className="wb-container">
          <h1>Why Bamboo</h1>
          <p>
            Premium, clean household paper products made from sustainably
            sourced bamboo.
          </p>
        </div>
      </section>

      {/* 2. ADVANTAGE SECTION */}
      <section className="wb-advantage">
        <div className="wb-container">
          <div className="wb-adv-grid">
            {/* 左侧：文字列表 */}
            <div>
              <h2 className="wb-adv-title">
                The advantage of using bamboo tissue
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div className="flex gap-3 text-[17px] text-[#333] items-start leading-relaxed">
                  <CheckCircle />{" "}
                  <span>
                    Bamboo is the fastest growing plant on the planet,{" "}
                    <strong>growing up to 3.5 feet per day.</strong>
                  </span>
                </div>
                <div className="flex gap-3 text-[17px] text-[#333] items-start leading-relaxed">
                  <CheckCircle />{" "}
                  <span>
                    Bamboo stores 3x more carbon than trees and produces{" "}
                    <strong>35% more oxygen.</strong>
                  </span>
                </div>
                <div className="flex gap-3 text-[17px] text-[#333] items-start leading-relaxed">
                  <CheckCircle />{" "}
                  <span>
                    Pulping bamboo requires <strong>30% less water</strong> than
                    pulping trees.
                  </span>
                </div>
                <div className="flex gap-3 text-[17px] text-[#333] items-start leading-relaxed">
                  <CheckCircle />{" "}
                  <span>
                    The more bamboo is harvested, the faster it grows, making it
                    100% sustainable.
                  </span>
                </div>
              </div>
            </div>

            {/* 右侧：图标网格 */}
            {/* <div className="wb-icon-grid">
              {powerIcons.map((icon) => (
                <div key={icon.id} className="wb-icon-item">
                  <img
                    src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/icon-${icon.id}.png`}
                    alt={icon.title}
                  />
                  <h5>{icon.title}</h5>
                </div>
              ))}
            </div> */}
            {/* 右侧：图标网格 */}
            <div className="wb-icon-grid">
              {powerIcons.map((item) => {
                const IconComponent = item.icon; // 提取组件
                return (
                  <div key={item.id} className="wb-icon-item">
                    {/* 用 div 替代 img，保持 100x100 的占位，内部绝对居中 */}
                    <div
                      style={{
                        width: "100px",
                        height: "100px",
                        margin: "0 auto 15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#00a496", // 使用品牌主题绿
                        fontSize: "65px", // 图标实际大小
                      }}
                    >
                      <IconComponent strokeWidth={1.5} />
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY BAMBOO TOILET PAPER (绿色大卡片) */}
      <section className="wb-container">
        <div className="wb-green-card">
          <div>
            <h2>
              Why Bamboo <br />
              Toilet Paper?
            </h2>
            <div className="wb-list-item">
              <CheckCircle />{" "}
              <span>
                From environmental protection perspective, bamboo paper is the
                better quality and healthier choice.
              </span>
            </div>
            <div className="wb-list-item">
              <CheckCircle />{" "}
              <span>
                Using bamboo instead of trees reduces deforestation
                significantly—over 330 million trees are cut annually.
              </span>
            </div>
            <div className="wb-list-item">
              <CheckCircle />{" "}
              <span>
                Bamboo is highly renewable and productive, making it the best
                substitute for trees in the paper industry.
              </span>
            </div>
          </div>
          <div>
            <img
              src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/WHY-BAMBOO.jpg"
              alt="Bamboo Product"
              className="wb-img-square"
            />
          </div>
        </div>
      </section>

      {/* 4. FAQ & FORM (复用官方背景图逻辑) */}
      <section className="wb-faq-section">
        <div className="wb-overlay"></div>
        <div className="wb-container">
          <div className="wb-faq-grid">
            {/* FAQ Accordion */}
            <div style={{ marginTop: "-40px" }}>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "45px",
                  fontWeight: 700,
                  marginBottom: "40px",
                }}
              >
                FAQ
              </h2>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-box ${openIndex === index ? "active" : ""}`}
                >
                  <button
                    className="faq-header"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span
                      style={{
                        color: openIndex === index ? "#fff" : "#1A202C",
                        fontSize: "18px",
                      }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown isOpen={openIndex === index} />
                  </button>
                  {openIndex === index && (
                    <div className="faq-content">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Submit Request */}
            <div className="form-card">
              <h2
                style={{
                  color: "#004e46",
                  fontSize: "32px",
                  marginBottom: "30px",
                }}
              >
                Submit A Request
              </h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  className="input-style"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="input-style"
                  placeholder="Your Email"
                />
                <textarea
                  className="input-style"
                  style={{ height: "120px", borderRadius: "20px" }}
                  placeholder="Message"
                ></textarea>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    style={{
                      background: "#00a496",
                      color: "#fff",
                      border: "none",
                      padding: "15px 50px",
                      borderRadius: "50px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
