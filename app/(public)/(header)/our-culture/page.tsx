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
          2. CONTENT SECTION (100% 还原东实排版)
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
            }}
          >
            {/* Left: Text Block */}
            <div style={{ flex: "1 1 400px", paddingRight: "40px" }}>
              <div
                style={{
                  fontSize: "24px",
                  color: "#111",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                DONSEA Cultural Practice
              </div>

              {CORE_CULTURE.map((item, index) => (
                <div
                  key={index}
                  style={{
                    paddingTop: "10px",
                    fontSize: "16px",
                    color: "#111",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>{item.label}</span>
                  <span style={{ fontWeight: 500, marginLeft: "5px" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div
              style={{
                flex: "0 0 auto",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture.png"
                alt="DONSEA Culture"
                width="600"
                height="300"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          </div>
        </ScrollReveal>

        {/* ── Bottom Section: Department Policies (还原为简单的垂直列表) ── */}
        <ScrollReveal direction="up" delay={200}>
          <div style={{ marginTop: "40px" }}>
            {DEPARTMENT_POLICIES.map((policy, index) => (
              <div key={index} style={{ marginBottom: "15px" }}>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  {policy.dept}:
                </span>
                <div
                  style={{
                    fontWeight: 500,
                    padding: "10px 0px",
                    color: "#555",
                    fontSize: "15px",
                    lineHeight: 1.6,
                  }}
                >
                  {policy.desc}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
