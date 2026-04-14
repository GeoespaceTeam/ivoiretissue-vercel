"use client";

import React from "react";
import ScrollReveal from "../../../components/ScrollReveal"; // 确保路径正确

// ============================================================
// DATA: Corporate Policies & Privacy
// All text is from the original ivoiretissue.com site.
// ============================================================
const POLICIES = [
  {
    title: "Privacy Policy",
    icon: <PrivacyIcon />, // 自定义 SVG 图标
    content: (
      <>
        <p>
          Welcome to the Ivoire Tissue website at{" "}
          <a
            href="https://www.ivoiretissue.com"
            style={{
              color: "#00a698",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            https://www.ivoiretissue.com
          </a>
          . Ivoire Tissue takes your privacy and the security of your Personal
          Information very seriously. We have provided and will continue to
          provide a secure environment and this strict Privacy Policy (the
          “Policy”) that describes the limited ways your information is used and
          the limited access to such information.
        </p>
        {/* Data Officer Card - Dongshi Style */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "8px",
            border: "1px solid #eee",
            marginTop: "30px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
          }}
        >
          <p
            style={{
              fontWeight: 700,
              color: "#111",
              marginBottom: "15px",
              fontSize: "16px",
            }}
          >
            Person in charge of the Protection of Personal Information:
          </p>
          <div style={{ fontSize: "15px", color: "#666", lineHeight: 1.8 }}>
            <p>
              <strong>Department:</strong> Ivoire Tissue Administration
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:sales@ivoiretissue.comm"
                style={{ color: "#00a698", textDecoration: "none" }}
              >
                sales@ivoiretissue.comm
              </a>
            </p>
            <p>
              <strong>Address:</strong> 222 Rue Poirier, Saint-Eustache, Québec
              Canada, J7R 6B1
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "Environmental Policy",
    icon: <LeafIcon />,
    content:
      "Ivoire Tissue Paper is committed to minimizing its environmental footprint by prioritizing sustainable practices throughout its operations. This includes sourcing raw materials responsibly, reducing energy consumption, minimizing waste generation, and implementing recycling initiatives. The company pledges to continually improve its environmental performance and comply with all relevant environmental regulations.",
  },
  {
    title: "Quality Assurance",
    icon: <BadgeIcon />,
    content:
      "We maintain stringent quality control measures to ensure that all its products meet or exceed industry standards and customer expectations. This involves rigorous testing of raw materials, regular inspections of manufacturing processes, and thorough quality checks of finished products. We are dedicated to delivering consistently high-quality paper products that are reliable, safe, and satisfactory.",
  },
  {
    title: "Ethical Sourcing",
    icon: <HandshakeIcon />,
    content:
      "We are committed to ethical sourcing practices and upholding the rights and well-being of workers throughout its supply chain. The company only partners with suppliers who adhere to fair labor standards, ensure safe working conditions, and respect human rights. We conduct regular audits of its suppliers to ensure compliance with these ethical standards.",
  },
  {
    title: "Health & Safety",
    icon: <ShieldIcon />,
    content:
      "Ivoire Tissue Paper prioritizes the health and safety of its employees, customers, and the public. The company maintains a safe working environment by identifying and mitigating potential hazards, providing comprehensive training on safety procedures, and promoting a culture of accountability and responsibility.",
  },
  {
    title: "Community Engagement",
    icon: <GlobeIcon />,
    content:
      "We are committed to being a responsible corporate citizen and actively engages with the communities in which it operates. The company supports local initiatives, contributes to charitable causes, and participates in community events to build positive relationships with stakeholders.",
  },
];

export default function PolicyPage() {
  return (
    <main style={{ backgroundColor: "#fff" }}>
      {/* ════════════════════════════════════════
          1. HERO BANNER - Dongshi Style (Deep Teal)
          ════════════════════════════════════════ */}
      <div
        style={{
          height: "480px",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://ivoiretissue.com/wp-content/uploads/2024/03/bamboo-1-scaled.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <ScrollReveal direction="up">
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 700,
              letterSpacing: "2px",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Corporate Policies
          </h1>
          <p
            style={{
              fontSize: "18px",
              marginTop: "20px",
              maxWidth: "700px",
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Our commitment to transparency, sustainability, quality, and ethical
            business practices.
          </p>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════
          2. CONTENT GRID - Dongshi Style
          ════════════════════════════════════════ */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "100px 20px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "40px",
          }}
        >
          {POLICIES.map((policy, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div
                style={{
                  padding: "50px",
                  backgroundColor: "#fbfbfb",
                  borderRadius: "8px",
                  border: "1px solid #eee",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00a698";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#eee";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon & Title Row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "30px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "40px",
                      color: "#00a698",
                      marginRight: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {policy.icon}
                  </span>
                  <h2
                    style={{
                      fontSize: "26px",
                      margin: 0,
                      color: "#111",
                      fontWeight: 700,
                      lineHeight: 1.2,
                    }}
                  >
                    {policy.title}
                  </h2>
                </div>

                {/* Content */}
                <div
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: 1.8,
                    flexGrow: 1,
                  }}
                >
                  {typeof policy.content === "string" ? (
                    <p style={{ margin: 0 }}>{policy.content}</p>
                  ) : (
                    policy.content
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 3. FOOTER STATEMENT */}
      <div
        style={{
          backgroundColor: "#f4f7f6",
          padding: "60px 20px",
          textAlign: "center",
          borderTop: "1px solid #eee",
        }}
      >
        <p style={{ color: "#999", margin: 0, fontSize: "14px" }}>
          Last updated: April 2026. These policies reflect Ivoire Tissue Paper’s
          ongoing commitment to corporate responsibility.
        </p>
      </div>
    </main>
  );
}

// ============================================================
// SVG ICONS (Dongshi-Style Icons)
// ============================================================
function PrivacyIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
      <path d="M704 416H320c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V448c0-17.7-14.3-32-32-32zM512 640c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM576 416h-128v-96c0-35.3 28.7-64 64-64s64 28.7 64 64v96z" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M666.3 331c-3.1-2.9-7.2-4.5-11.5-4.5H512v128h128c18.5 0 33.6-16.1 33.6-36 0-14.9-8.4-27.9-20.9-34.1l13.6-53.4zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM690 611c-15.7 45.4-35.8 84.1-59.3 115.4 3.7 1.5 7.4 3 11.2 4.6 39.7 16.8 75.8 40 107.6 69.2a394.7 394.7 0 01-59.5 41.8C654 800.2 633.8 786.3 613 770.6c-22.1 27.4-40.3 57.6-54.2 90.2 4.1 1.7 8.2 3.3 12.3 5-13.8 32.7-32 62.8-54.2 90.2a444.1 444.1 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H137c3-40.9 12.6-80.6 28.5-118.3 13.8-32.6 32-62.8 54.2-90.2C194.8 521 176.4 507.1 157 491.2c-29.3-15.6-56.6-34.4-81.5-55.9 29.3-15.6 56.6-34.4 81.5-55.9a373.9 373.9 0 013.3-3.7c1.4-1.5 2.8-3.1 4.1-4.7C160.2 338.4 150.6 298.8 137 261.1 121.2 223.4 111.6 183.8 137 146.1c11.6-46.9 18.8-98.4 20.7-152.6h20.7c11.6 46.9 18.8 98.4 20.7 152.6 1.9 54.2 9.1 105.7 20.7 152.6 29.3 15.6 56.6 34.4 81.5 55.9a373.9 373.9 0 013.3 3.7c1.4 1.5 2.8 3.1 4.1 4.7z" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 408c0 117.9-82.9 235.5-178.4 331S448.6 1010 330.7 1029.5c-14.8 2.5-30-2.5-40.8-13.2L184.9 821.9 295.7 711l119.8 120 .9.9 21.6-8c105.6-39 213.1-127.1 285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8zM512 796.7L240.9 599.5 512 396.7 783.1 599.5 512 796.7z" />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 408H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zm-37.6 91.5l-106.4-106.4c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-141 198.3C606 818 474.6 888.4 342.1 910.4c-37.6 6.3-76.3-6.3-103.4-33.3L132.3 770.6c-13-13-20.3-30.4-20.3-48.8s7.2-35.8 20.3-48.8L246.8 558.3c13-13 30.5-20.3 48.9-20.3s35.8 7.2 48.9 20.3l89.7 89.6a405.46 405.46 0 01127.3-86.4 405.46 405.46 0 01127.3 86.4l89.7-89.6z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 408c0 117.9-82.9 235.5-178.4 331S448.6 1010 330.7 1029.5c-14.8 2.5-30-2.5-40.8-13.2L184.9 821.9 295.7 711l119.8 120 .9.9 21.6-8A481.29 481.29 0 00711 295.7l21.6 8 120.7 120.8 110.9-110.8 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8zM512 887C306.6 887 140 720.4 140 515S306.6 143 512 143s372 166.6 372 372-166.6 372-372 372z" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM512 887C306.6 887 140 720.4 140 515S306.6 143 512 143s372 166.6 372 372-166.6 372-372 372zm270.9-468H241.1L512 221.7 782.9 419zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z" />
    </svg>
  );
}
