"use client";

import ScrollReveal from "../../../components/ScrollReveal";

// ============================================================
// DATA: Certifications, Trademarks, Patents
// ============================================================
const CERTIFICATES = [
  {
    name: "ISO9001",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/certificate.png",
  },
  {
    name: "ISO18001",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/certificate.png",
  },
  {
    name: "ISO14001",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/certificate.png",
  },
  {
    name: "FSC Forest System",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/certificate.png",
  },
];

const TRADEMARKS = [
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/brand1.png",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/brand2.png",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/brand3.png",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/brand4.png",
  },
];

const PATENTS = [
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/patent1.png",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/patent2.png",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/patent3.png",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/patent4.png",
  },
];

export default function CertificationsPage() {
  return (
    <main>
      {/* ════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage:
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture_bg.png")', // 建议后期替换为你们自己的背景图
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
        {/* ── 权威认证 (Authoritative Certifications) ── */}
        <div style={{ marginBottom: "100px" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", paddingBottom: "50px" }}>
              <h2
                style={{
                  fontSize: "32px",
                  color: "#111",
                  marginBottom: "16px",
                }}
              >
                Authoritative Certifications
              </h2>
              <p style={{ fontWeight: 500, color: "#666", fontSize: "16px" }}>
                FSC Forest Certification, Virgin Bamboo Pulp Certification, True
                Natural Color
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "40px",
                justifyItems: "center",
              }}
            >
              {CERTIFICATES.map((cert, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.img}
                    width="200"
                    alt={cert.name}
                    style={{ display: "block", marginBottom: "16px" }}
                  />
                  <p style={{ fontWeight: 600, color: "#333", margin: 0 }}>
                    {cert.name}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── 企业商标 (Corporate Trademarks) ── */}
        <div style={{ marginBottom: "100px" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", paddingBottom: "50px" }}>
              <h2 style={{ fontSize: "32px", color: "#111", margin: 0 }}>
                Registered Trademarks
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "40px",
                justifyItems: "center",
              }}
            >
              {TRADEMARKS.map((brand, i) => (
                <div key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.img}
                    width="200"
                    alt={`Trademark ${i + 1}`}
                    style={{ display: "block" }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── 企业专利 (Corporate Patents) ── */}
        <div style={{ marginBottom: "40px" }}>
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", paddingBottom: "50px" }}>
              <h2 style={{ fontSize: "32px", color: "#111", margin: 0 }}>
                Corporate Patents
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "40px",
                justifyItems: "center",
              }}
            >
              {PATENTS.map((patent, i) => (
                <div key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={patent.img}
                    width="200"
                    alt={`Patent ${i + 1}`}
                    style={{ display: "block" }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
