"use client";

import ScrollReveal from "../../../components/ScrollReveal";

// ============================================================
// DATA: Corporate Culture & Department Policies
// ============================================================
// const CORE_CULTURE = [
//   {
//     label: "Mission:",
//     text: "Provide premium, innovative, and exclusive services while highlighting customer value.",
//   },
//   {
//     label: "Vision:",
//     text: "To be a sincere and loving enterprise that employees are proud of, customers are satisfied with, and society respects.",
//   },
//   {
//     label: "Values:",
//     text: "Integrity, Dedication, Innovation, Responsibility, Compassion, and Excellence.",
//   },
// ];

// const DEPARTMENT_POLICIES = [
//   {
//     dept: "Innovation Committee Policy",
//     desc: "Problem-oriented, systematic planning, and management practice. Continuously implement PDCA to enhance individual innovative thinking and the management literacy of the core team.",
//   },
//   {
//     dept: "Marketing Dept Policy",
//     desc: "Build a community business model based on mutual understanding and trust. Leverage resources and innovate services to meet customer needs, achieving quantifiable business growth and brand reputation.",
//   },
//   {
//     dept: "Foreign Trade Dept Policy",
//     desc: "Build a community business model based on mutual understanding and trust globally. Leverage resources and innovate services to meet customer needs, achieving quantifiable global business growth.",
//   },
//   {
//     dept: "Supply Chain Dept Policy",
//     desc: "Inspire company-wide participation in continuous improvement. Focus on 3S, eliminate waste, and build a rapid response system to achieve small-batch, diversified, and just-in-time fulfillment.",
//   },
//   {
//     dept: "Enterprise Management Dept Policy",
//     desc: "Continuously drive changes in organizational functions, processes, and value management. Activate individuals and the organization to achieve a collaborative and mutually beneficial growth atmosphere.",
//   },
//   {
//     dept: "Finance Dept Policy",
//     desc: "Provide accurate data support for business management through standardized financial operations, ensuring the sustainable and healthy development of the company (Timely, Accurate, Firm, Friendly).",
//   },
//   {
//     dept: "Quality & R&D Dept Policy",
//     desc: "Understand new technologies, processes, and materials in the industry. Combine market demands with internal and external intelligence to transform business opportunities into product value, relying on the ISO9001 system for stable quality.",
//   },
//   {
//     dept: "Logistics Dept Policy",
//     desc: "Through 3S on-site and data management, empower the delivery process, create service value, and enhance customer satisfaction.",
//   },
// ];


// ============================================================
// DATA: Corporate Culture & Department Policies (Ivoire Tissue Edition)
// ============================================================
const CORE_CULTURE = [
  {
    label: "Mission:",
    text: "To lead North America's transition to sustainable hygiene solutions by providing premium, eco-friendly bamboo tissue products that protect our forests.",
  },
  {
    label: "Vision:",
    text: "To become the premier choice for sustainable tissue products in Canada, built on the heritage of African entrepreneurship and Canadian technological excellence.",
  },
  {
    label: "Values:",
    text: "Sustainability, Innovation, Integrity, Cultural Resilience, and Excellence in Quality.",
  },
];

const DEPARTMENT_POLICIES = [
  {
    dept: "Sustainability & Innovation Policy",
    desc: "Ivoire Tissue is dedicated to the 'Zero-Deforestation' goal. We continuously optimize our 100% bamboo-fiber processing technology to ensure every roll of tissue sets a new standard for environmental impact and softness.",
  },
  {
    dept: "Manufacturing & Quality Control",
    desc: "Our Saint-Eustache facility operates under strict ISO guidelines. We combine automated precision with rigorous human oversight to ensure that every product leaving our plant exceeds customer expectations for strength and purity.",
  },
  {
    dept: "B2B & Distribution Policy",
    desc: "Building lasting partnerships with Canadian retailers and businesses through transparency and reliability. We leverage our Montreal-adjacent hub to provide just-in-time delivery and flexible wholesale solutions.",
  },
  {
    dept: "Supply Chain & Ethical Sourcing",
    desc: "We participate in continuous improvement across our global supply chain. From FSC-certified bamboo forests to local logistics, we eliminate waste and ensure every partner adheres to our strict ethical labor standards.",
  },
  {
    dept: "Enterprise & Value Management",
    desc: "Fostering a workplace that celebrates diversity and African-Canadian heritage. We activate individual potential within our team to create a collaborative, mutually beneficial growth atmosphere in Quebec.",
  },
  {
    dept: "Finance & Sustainability Investment",
    desc: "Ensuring long-term healthy development by reinvesting in renewable energy and green manufacturing. We provide accurate data support to maintain a 'Firm, Transparent, and Friendly' financial operation.",
  },
  {
    dept: "Community & Ecological Impact",
    desc: "Empowering the Saint-Eustache and Greater Montreal communities through ecological awareness and sustainable local jobs, transforming environmental responsibility into community value.",
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
                  fontSize: "40px",
                  color: "#111",
                  fontWeight: "bold",
                  marginBottom: "24px",
                }}
              >
                Ivoire Cultural Practice
              </div>

              {CORE_CULTURE.map((item, index) => (
                <div
                  key={index}
                  style={{
                    paddingTop: "12px",
                    fontSize: "18px",
                    color: "#111",
                    lineHeight: 1.8,
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
                // src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture.png"
                src="/images/ourculturebg.png"
                alt="Ivoire Culture"
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
          <div style={{ marginTop: "60px" }}>
            {" "}
            {/* 👈 距离上面的图文再拉开一点，从 40px 到 60px */}
            {DEPARTMENT_POLICIES.map((policy, index) => (
              <div key={index} style={{ marginBottom: "24px" }}>
                {" "}
                {/* 👈 每一项之间的间距从 15px 加大到 24px */}
                <span
                  style={{
                    fontSize: "22px" /* 👈 部门名称从 16px 放大到 22px */,
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
                    fontSize: "18px" /* 👈 方针描述从 15px 放大到 18px */,
                    lineHeight: 1.8 /* 👈 行高调到 1.8 */,
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
