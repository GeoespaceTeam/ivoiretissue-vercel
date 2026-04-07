"use client";

import ScrollReveal from "../../../components/ScrollReveal";

// ============================================================
// DATA: Corporate Culture & Department Policies
// ============================================================
const CORE_CULTURE = [
  {
    label: "Mission:",
    text: "Provide premium, innovative, and exclusive services while highlighting customer value.",
  },
  {
    label: "Vision:",
    text: "To be a sincere and loving enterprise that employees are proud of, customers are satisfied with, and society respects.",
  },
  {
    label: "Values:",
    text: "Integrity, Dedication, Innovation, Responsibility, Compassion, and Excellence.",
  },
];

const DEPARTMENT_POLICIES = [
  {
    dept: "Innovation Committee Policy",
    desc: "Problem-oriented, systematic planning, and management practice. Continuously implement PDCA to enhance individual innovative thinking and the management literacy of the core team.",
  },
  {
    dept: "Marketing Dept Policy",
    desc: "Build a community business model based on mutual understanding and trust. Leverage resources and innovate services to meet customer needs, achieving quantifiable business growth and brand reputation.",
  },
  {
    dept: "Foreign Trade Dept Policy",
    desc: "Build a community business model based on mutual understanding and trust globally. Leverage resources and innovate services to meet customer needs, achieving quantifiable global business growth.",
  },
  {
    dept: "Supply Chain Dept Policy",
    desc: "Inspire company-wide participation in continuous improvement. Focus on 3S, eliminate waste, and build a rapid response system to achieve small-batch, diversified, and just-in-time fulfillment.",
  },
  {
    dept: "Enterprise Management Dept Policy",
    desc: "Continuously drive changes in organizational functions, processes, and value management. Activate individuals and the organization to achieve a collaborative and mutually beneficial growth atmosphere.",
  },
  {
    dept: "Finance Dept Policy",
    desc: "Provide accurate data support for business management through standardized financial operations, ensuring the sustainable and healthy development of the company (Timely, Accurate, Firm, Friendly).",
  },
  {
    dept: "Quality & R&D Dept Policy",
    desc: "Understand new technologies, processes, and materials in the industry. Combine market demands with internal and external intelligence to transform business opportunities into product value, relying on the ISO9001 system for stable quality.",
  },
  {
    dept: "Logistics Dept Policy",
    desc: "Through 3S on-site and data management, empower the delivery process, create service value, and enhance customer satisfaction.",
  },
];

export default function OurCulturePage() {
  return (
    <main>
      {/* ════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage:
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture_bg.png")', // 建议后续替换为本地图片 /images/culture_bg.png
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></div>

      {/* ════════════════════════════════════════
          2. CONTENT SECTION
          ════════════════════════════════════════ */}
      <div
        className="content"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        {/* ── Top Section: Core Culture (Text Left, Image Right) ── */}
        <ScrollReveal direction="up">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "40px",
              marginBottom: "80px",
            }}
          >
            {/* Left: Text Block */}
            <div style={{ flex: "1 1 500px" }}>
              <h2
                style={{
                  fontSize: "32px",
                  color: "#111",
                  marginBottom: "30px",
                }}
              >
                Our Culture & Practices
              </h2>

              {CORE_CULTURE.map((item, index) => (
                <div
                  key={index}
                  style={{ paddingTop: "15px", fontSize: "16px" }}
                >
                  <span
                    style={{
                      color: "#00a896",
                      fontWeight: "bold",
                      marginRight: "8px",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{ fontWeight: 500, color: "#333", lineHeight: 1.6 }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div style={{ flex: "0 0 auto", textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture.png"
                alt="Our Culture"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Bottom Section: Department Policies ── */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "40px",
            borderTop: "1px solid #eaeaea",
          }}
        >
          <ScrollReveal direction="up">
            <h3
              style={{
                fontSize: "28px",
                color: "#111",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Department Guidelines
            </h3>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              // 响应式网格布局：屏幕够宽就并排，不够宽就自动折行
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
            }}
          >
            {DEPARTMENT_POLICIES.map((policy, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "30px",
                    borderRadius: "8px",
                    height: "100%",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.02)",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      color: "#00a896",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginBottom: "12px",
                    }}
                  >
                    {policy.dept}
                  </span>
                  <div
                    style={{
                      fontWeight: 500,
                      color: "#555",
                      lineHeight: 1.6,
                      fontSize: "15px",
                    }}
                  >
                    {policy.desc}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
