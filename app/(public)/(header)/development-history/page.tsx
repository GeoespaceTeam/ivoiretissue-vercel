"use client";

import { useState } from "react";
import ScrollReveal from "../../../components/ScrollReveal";

// ============================================================
// DATA: Company History Timeline
// ============================================================
const TIMELINE_DATA = [
  {
    year: "2001",
    desc: "Ivoire Tissue was founded, starting the journey of paper manufacturing.",
  },
  {
    year: "2006",
    desc: "Established the Ivoire Tissue brand, launching premium commercial and household series.",
  },
  {
    year: "2007",
    desc: "Became a member of the National Paper Industry Association.",
  },
  {
    year: "2009",
    desc: "Joined the Professional Tissue Paper Committee and Technical Center.",
  },
  {
    year: "2012",
    desc: "Established the sanitary products division to expand product lines.",
  },
  {
    year: "2013",
    desc: "Upgraded the industrial structure and integrated sanitary product lines.",
  },
  {
    year: "2014",
    desc: "Upgraded core brands, expanded overseas markets, established the Foreign Trade Department, and launched the online flagship store.",
  },
  {
    year: "2015",
    desc: "Launched the eco-friendly unbleached series, obtained EU AP and US FDA certifications, and passed the FSC forest management system.",
  },
  {
    year: "2016",
    desc: "Expanded production capacity and achieved omni-channel expansion for tissue paper.",
  },
  {
    year: "2017",
    desc: "Bamboo pulp tissue sold to the UK, Germany, US, Singapore, and Australia. The first year of enterprise innovation and transformation.",
  },
  {
    year: "2018",
    desc: '"Return to the original intention, Rebuild Ivoire." Accelerated innovation and formulated a strategic business plan.',
  },
  {
    year: "2019",
    desc: "Fully implemented the business plan, adjusted the business structure, and built a 3.0 modern enterprise.",
  },
  {
    year: "2020",
    desc: "Stick to the original aspiration and set sail against challenges.",
  },
  {
    year: "2021",
    desc: "Started the first year of IT construction, keeping the original intention to cast the dream.",
  },
  {
    year: "2022",
    desc: "Strategic focus, starting from the heart. Embracing a green future.",
  },
];

export default function DevelopmentHistoryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TIMELINE_DATA.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === TIMELINE_DATA.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <main>
      {/* ════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage:
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture_bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <ScrollReveal direction="up">
          <div style={{ color: "rgb(255, 255, 255)" }}>
            <h1 style={{ fontSize: "34px", margin: 0, letterSpacing: "2px" }}>
              About Ivoire
            </h1>
            <p
              style={{ paddingTop: "30px", fontSize: "26px", fontWeight: 300 }}
            >
              An innovative enterprise integrating production,
              <br /> sales, and brand operations.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════
          2. COMPANY INTRO (Text + Image)
          ════════════════════════════════════════ */}
      <div
        className="content"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        <ScrollReveal direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "60px",
            }}
          >
            {/* Left: Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/regards1.png"
              style={{
                height: "400px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
              alt="Ivoire Tissue Building"
            />

            {/* Right: Text */}
            <div style={{ flex: "1 1 500px" }}>
              <h2 style={{ fontSize: "28px", color: "#111", margin: 0 }}>
                IVOIRE TISSUE PAPER
              </h2>
              <h2
                style={{
                  padding: "10px 0px 20px",
                  fontSize: "24px",
                  color: "#00a896",
                }}
              >
                Quality & Innovation
              </h2>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "rgb(85, 85, 85)",
                  lineHeight: 1.8,
                }}
              >
                Ivoire Tissue was founded with a commitment to excellence. With
                years of professional quality and innovative development, we
                have grown into a comprehensive tissue paper enterprise
                integrating R&D, innovation, production, sales, and service.
                <br />
                <br />
                We focus on eco-friendly and healthy tissue paper. The company
                insists on independent R&D, continuously expanding domestic and
                international markets, perfecting integrated system solutions,
                and establishing a fast-response customized product workflow. By
                combining online and offline channels, we have built an
                integrated platform for tissue customization, sales, and
                service.
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════
          3. TIMELINE CAROUSEL SECTION
          ════════════════════════════════════════ */}
      <ScrollReveal direction="up" delay={200}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            paddingBottom: "100px",
          }}
        >
          {/* Main Slide Track */}
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {TIMELINE_DATA.map((item, index) => (
              <div
                key={index}
                style={{
                  flex: "0 0 100%",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/progress_bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    paddingTop: "40px",
                    height: "400px",
                    maxWidth: "1000px",
                    margin: "0 auto",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <h2 style={{ fontSize: "28px", color: "#111" }}>
                    Development History
                  </h2>
                  <h2
                    style={{
                      padding: "60px 0px 20px",
                      color: "rgb(0, 166, 152)",
                      fontSize: "36px",
                    }}
                  >
                    {item.year}
                  </h2>
                  <p
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      margin: "0 auto",
                      lineHeight: "30px",
                      fontSize: "16px",
                      color: "#333",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "5%",
              top: "200px",
              background: "none",
              border: "none",
              cursor: "pointer",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="60px"
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/arrows_left1.png"
              alt="Prev"
            />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "5%",
              top: "200px",
              background: "none",
              border: "none",
              cursor: "pointer",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="60px"
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/arrows_right1.png"
              alt="Next"
            />
          </button>

          {/* ── Bottom Gradient Timeline Nav ── */}
          <div
            style={{
              maxWidth: "1000px",
              margin: "40px auto 0",
              position: "relative",
            }}
          >
            {/* Gradient Line */}
            <div
              style={{
                position: "absolute",
                top: "15px",
                left: 0,
                right: 0,
                height: "4px",
                background:
                  "linear-gradient(135deg, rgb(204, 255, 250), rgb(0, 192, 177), rgb(204, 255, 250))",
                zIndex: 1,
              }}
            ></div>

            {/* Timeline Dots (Scrollable if too many) */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 2,
                overflowX: "auto",
                scrollbarWidth: "none", // Hide scrollbar Firefox
                msOverflowStyle: "none", // Hide scrollbar IE/Edge
              }}
            >
              {TIMELINE_DATA.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    minWidth: "60px",
                    padding: "0 10px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      activeIndex === index
                        ? "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/progress_line.png" // Active icon
                        : "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/progress_icon.png" // Inactive icon
                    }
                    width={activeIndex === index ? "60px" : "30px"}
                    alt="Timeline Dot"
                    style={{ transition: "all 0.3s ease" }}
                  />
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "14px",
                      fontWeight: activeIndex === index ? "bold" : "normal",
                      color:
                        activeIndex === index ? "rgb(0, 166, 152)" : "#999",
                    }}
                  >
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </main>
  );
}
