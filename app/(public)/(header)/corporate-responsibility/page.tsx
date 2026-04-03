"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./corporate.css"; // 建议为其单独建一个 CSS 文件

// ============================================================
// CORPORATE RESPONSIBILITY PAGE
// Route: /corporate-responsibility
// ============================================================
// TODO: 需要在 public/ 目录下准备以下资源:
// /public/images/bg-environment.jpg (原竹子背景)
// /public/images/bg-health.jpg      (原健康安全背景)
// /public/images/bg-community.jpg   (原社区背景)
// /public/images/gallery-1.jpg      (画廊图1 - 卡车装货)
// /public/images/gallery-2.jpg      (画廊图2 - 获奖团队)
// /public/images/gallery-3.jpg      (画廊图3 - 抽纸巾的女人)
// /public/images/gallery-4.jpg      (画廊图4 - 团队合影)
// ============================================================

export default function CorporateResponsibilityPage() {
  // 定义三个 Tab 的状态：'environment' | 'health' | 'community'
  const [activeTab, setActiveTab] = useState("environment");

  // 根据 activeTab 动态决定背景图
  const getBackgroundImage = () => {
    switch (activeTab) {
      case "environment":
        return "url('/images/bg-environment.jpg')";
      case "health":
        return "url('/images/bg-health.jpg')";
      case "community":
        return "url('/images/bg-community.jpg')";
      default:
        return "url('/images/bg-environment.jpg')";
    }
  };

  return (
    <div className="corporate-page">
      {/* 动态 Hero 背景区 */}
      <section
        className="dynamic-hero-section"
        style={{ backgroundImage: getBackgroundImage() }}
      >
        <div className="hero-overlay"></div>
      </section>

      {/* 选项卡容器 */}
      <section className="tabs-container container">
        {/* Tab 按钮区 */}
        <div className="tabs-header" role="tablist">
          <button
            className={`tab-btn ${activeTab === "environment" ? "active" : ""}`}
            onClick={() => setActiveTab("environment")}
          >
            Environmental Stewardship
          </button>
          <button
            className={`tab-btn ${activeTab === "health" ? "active" : ""}`}
            onClick={() => setActiveTab("health")}
          >
            Health & Safety
          </button>
          <button
            className={`tab-btn ${activeTab === "community" ? "active" : ""}`}
            onClick={() => setActiveTab("community")}
          >
            In the Community
          </button>
        </div>

        {/* Tab 内容区 */}
        <div className="tabs-content">
          {/* ================= ENVIRONMENT TAB ================= */}
          {activeTab === "environment" && (
            <div className="tab-pane fade-in">
              <div className="content-block">
                <h2>
                  Environmental
                  <br />
                  Stewardship
                </h2>
                <p className="intro-text">
                  Practicing environmental stewardship not only benefits the
                  planet but also offers personal rewards in terms of health,
                  well-being, financial savings, community engagement, and a
                  sense of ethical responsibility.
                </p>
              </div>

              <div className="content-block">
                <h2>Dedicated by Nature</h2>
                <ul className="text-list">
                  <li>
                    Over 3 years of dedicated efforts to reduce environmental
                    impact and promote sustainability.
                  </li>
                  <li>
                    Increased renewable energy production to over 1,600 GWh
                    annually.
                  </li>
                  <li>
                    Transitioned to 100% bamboo packaging and tissue products,
                    reducing reliance on conventional paper.
                  </li>
                  <li>
                    Implemented measures to significantly reduce greenhouse gas
                    emissions across all facilities.
                  </li>
                  <li>
                    Actively explored alternative materials to further enhance
                    sustainability practices.
                  </li>
                  <li>
                    Committed to continuous improvement initiatives to minimize
                    environmental footprint.
                  </li>
                  <li>
                    Demonstrated leadership and innovation in environmental
                    stewardship.
                  </li>
                </ul>
              </div>

              {/* YouTube Video */}
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="split-block">
                <div className="policy-block">
                  <h2>Corporate Policies</h2>
                  <p>
                    Ivoire Tissue Paper company contributes to the economic
                    development of the regions where it operates and exemplifies
                    its dedication to environmental protection, sustainable
                    fiber procurement, and robust business relationships with
                    Canada’s First Nations.
                  </p>
                  <a href="#" className="download-link">
                    <span className="icon">⬇</span> Environmental Policy ( PDF )
                  </a>
                </div>
                <div className="nature-list-block">
                  <h2>Dedicated by Nature</h2>
                  <p>
                    Sustainable organizations endeavor to harmonize the triple
                    bottom line of social impact, environmental stewardship, and
                    financial prosperity to attain enduring success and
                    resilience. At the corporate level, we have set five
                    overarching sustainability objectives aimed at enhancing our
                    sustainability performance for the year 2023.
                  </p>
                  <ul className="check-list">
                    <li>
                      <span>✔</span> Water Conservation
                    </li>
                    <li>
                      <span>✔</span> Energy Reduction
                    </li>
                    <li>
                      <span>✔</span> Greenhouse Gas Reduction
                    </li>
                    <li>
                      <span>✔</span> Environmental Incident Prevention
                    </li>
                    <li>
                      <span>✔</span> Safe and Healthy Workplace
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ================= HEALTH & SAFETY TAB ================= */}
          {activeTab === "health" && (
            <div className="tab-pane fade-in">
              <div className="content-block text-center">
                <h2>Health & Safety</h2>
                <p className="intro-text">
                  Protecting our people, communities and the environment has
                  always been part of our core values. That’s why we are
                  committed to reducing our impact in every way possible.
                </p>
                <div className="separator"></div>
              </div>

              <div className="content-block">
                <h2>Dedicated by Nature</h2>
                <p>
                  To underscore the safety and welfare of our employees, Ivoire
                  Tissue Paper is committed to bolstering our health and safety
                  culture through the revitalization of our governance
                  procedures, spearheaded by our Occupational Health and Safety
                  (OHS) Steering Committee. Our primary goal is to guarantee
                  that each employee returns home safely every day, emphasizing
                  the paramount importance of workplace health and safety
                  throughout our organization.
                </p>
              </div>

              <div className="content-block">
                <h2>Health & Safety Centres of Excellence</h2>
                {/* Image Gallery */}
                <div className="image-gallery">
                  <div className="gallery-item">
                    {/* 请取消注释并准备好图片 */}
                    {/* <Image src="/images/gallery-1.jpg" alt="Distribution warehouse" layout="fill" objectFit="cover" /> */}
                    <div className="placeholder-img">Gallery Image 1</div>
                  </div>
                  <div className="gallery-item">
                    {/* <Image src="/images/gallery-2.jpg" alt="Team award" layout="fill" objectFit="cover" /> */}
                    <div className="placeholder-img">Gallery Image 2</div>
                  </div>
                  <div className="gallery-item">
                    {/* <Image src="/images/gallery-3.jpg" alt="Tissue box" layout="fill" objectFit="cover" /> */}
                    <div className="placeholder-img">Gallery Image 3</div>
                  </div>
                  <div className="gallery-item">
                    {/* <Image src="/images/gallery-4.jpg" alt="Team presentation" layout="fill" objectFit="cover" /> */}
                    <div className="placeholder-img">Gallery Image 4</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= COMMUNITY TAB ================= */}
          {activeTab === "community" && (
            <div className="tab-pane fade-in">
              <div className="content-block text-center">
                <h2>In the Community</h2>
                <p className="intro-text">
                  Protecting our people, communities and the environment has
                  always been part of our core values. That’s why we are
                  committed to reducing our impact in every way possible.
                </p>
                <div className="separator"></div>
              </div>

              <div className="content-block">
                <h2>Dedicated by Nature</h2>
                <p>
                  Each year, we produce more than 1,600 GWh of green energy from
                  renewable sources; we recycle thousands of tonnes of paper and
                  paperboard; we manufacture 100% recycled packaging and tissue
                  products; we strive to reduce greenhouse gas emissions at all
                  our plants; we find alternatives to using fossil fuels; and we
                  make every effort to improve our environmental footprint. See
                  the progress we’ve made over the last 10 years to reduce our
                  impact on the environment.
                </p>
              </div>

              {/* YouTube Video */}
              <div className="video-wrapper">
                <iframe
                  src="https://www.youtube.com/embed/XHOmBV4js_E?controls=1&rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
