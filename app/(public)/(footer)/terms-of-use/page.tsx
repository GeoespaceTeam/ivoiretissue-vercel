"use client";

import React from "react";
import ScrollReveal from "../../../components/ScrollReveal";

const TERMS_DATA = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Ivoire Tissue website (https://www.ivoiretissue.com), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
  },
  {
    id: "license",
    title: "2. Use License",
    content: (
      <ul
        style={{
          paddingLeft: "20px",
          listStyleType: "disc",
          display: "grid", // 开启 grid 布局
          gap: "10px", // 使用 gap 代替 spaceY
        }}
      >
        <li>
          Permission is granted to temporarily download one copy of the
          materials on Ivoire Tissue's website for personal, non-commercial
          transitory viewing only.
        </li>
        <li>
          You may not modify or copy the materials, use them for any commercial
          purpose, or attempt to decompile any software contained on the
          website.
        </li>
        <li>
          This license shall automatically terminate if you violate any of these
          restrictions.
        </li>
      </ul>
    ),
  },
  {
    id: "disclaimer",
    title: "3. Disclaimer",
    content:
      "The materials on Ivoire Tissue's website are provided on an 'as is' basis. Ivoire Tissue makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, or fitness for a particular purpose.",
  },
  {
    id: "limitations",
    title: "4. Limitations of Liability",
    content:
      "In no event shall Ivoire Tissue or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website, even if Ivoire Tissue has been notified of the possibility of such damage.",
  },
  {
    id: "intellectual",
    title: "5. Intellectual Property",
    content:
      "All content, including but not limited to text, images, logos, patents, and trademarks displayed on this website, is the exclusive property of Ivoire Tissue Corporation. Unauthorized use of any brand assets or content is strictly prohibited.",
  },
  {
    id: "governing-law",
    title: "6. Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of the Province of Quebec and the federal laws of Canada. You irrevocably submit to the exclusive jurisdiction of the courts in Montreal, Quebec.",
  },
];

export default function TermsOfUsePage() {
  return (
    <main style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      {/* 1. Header Banner - 区别于 Policy 的深色，这里用简约的浅灰色调，强调专业感 */}
      <section
        style={{
          backgroundColor: "#f8f9fa",
          padding: "100px 20px",
          borderBottom: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <ScrollReveal direction="up">
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "#111",
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Terms of Use
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              marginTop: "15px",
              maxWidth: "600px",
              margin: "15px auto 0",
            }}
          >
            Please read these terms carefully before using our website and
            services.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. Main Content - 侧边导航 + 纯净正文排版 */}
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 20px" }}
      >
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          {/* 左侧悬浮导航 - 做出差异度 */}
          <aside style={{ flex: "0 0 250px" }} className="hidden md:block">
            <div
              style={{
                position: "sticky",
                top: "100px",
                borderLeft: "2px solid #eee",
                paddingLeft: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#999",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                Navigation
              </p>
              {TERMS_DATA.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{
                    display: "block",
                    padding: "8px 0",
                    color: "#555",
                    textDecoration: "none",
                    fontSize: "14px",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00a698")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </aside>

          {/* 右侧正文区域 */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            {TERMS_DATA.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 50}>
                <section
                  id={item.id}
                  style={{ marginBottom: "60px", scrollMarginTop: "120px" }}
                >
                  <h2
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "#111",
                      marginBottom: "20px",
                    }}
                  >
                    {item.title}
                  </h2>
                  <div
                    style={{ fontSize: "16px", color: "#444", lineHeight: 1.8 }}
                  >
                    {item.content}
                  </div>
                </section>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* 3. 底部帮助区 */}
      <section
        style={{
          backgroundColor: "#111",
          padding: "60px 20px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <ScrollReveal direction="up">
          <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>
            Questions about our terms?
          </h3>
          <p style={{ opacity: 0.7, marginBottom: "25px" }}>
            Our legal team is here to help you understand your rights.
          </p>
          <a
            href="mailto:admin@ivoiretissue.com"
            style={{
              color: "#00a698",
              fontWeight: 700,
              fontSize: "18px",
              textDecoration: "none",
              borderBottom: "1px solid #00a698",
            }}
          >
            admin@ivoiretissue.com
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
