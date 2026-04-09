"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

// ============================================================
// DEVELOPMENT HISTORY PAGE
// app/(public)/(header)/development-history/page.tsx
//
// Timeline nav approach:
//   - Each item is ITEM_WIDTH=260px wide (60px icon + 2×100px margin)
//   - Active item is always centered via translateX:
//       offset = containerWidth/2 - activeIndex*ITEM_WIDTH - ITEM_WIDTH/2
//   - overflow:hidden with paddingBottom:90px → dots visible, no scrollbar
//   - Gradient line is a separate absolute div spanning full width
// ============================================================

const ITEM_WIDTH = 260; // 60px content + 100px left margin + 100px right margin

const TIMELINE_DATA = [
  {
    year: "2001",
    desc: "Founder Ms. Jiao Cuiyun established Yunteng Paper in Longxing Industrial Park, Yubei District, Chongqing.",
  },
  {
    year: "2006",
    desc: 'Established Dongshi Paper, and in the same year created the "Baiyian" and "Lanrui" series of commercial and household brands.',
  },
  {
    year: "2007",
    desc: "Became a member unit of the China Paper Association for household paper.",
  },
  {
    year: "2009",
    desc: "Became a member of the China Tissue Paper Professional Committee and Sinolight Group Tissue Paper Technical Center.",
  },
  {
    year: "2012",
    desc: "Established Chongqing Anbeimei Sanitary Products Co., Ltd. and created the Anbeimei brand.",
  },
  {
    year: "2013",
    desc: "Integrated Anbeimei Sanitary Products Company and upgraded the industrial structure.",
  },
  {
    year: "2014",
    desc: "Upgraded the three major brands of Baiyian, Anbeimei, and Lanrui, expanded overseas markets, established the Foreign Trade Department, and launched the Dongshi Tmall flagship store.",
  },
  {
    year: "2015",
    desc: "Launched the natural color eco-friendly paper series, obtained EU AP and US FDA product certifications, and passed the FSC forest management system.",
  },
  {
    year: "2016",
    desc: "Established Yikang Paper, expanded production capacity, and achieved omni-channel expansion for tissue paper.",
  },
  {
    year: "2017",
    desc: "Bamboo pulp tissue paper was sold to the UK, Germany, US, Singapore, and Australia. It was also the first year of DONSEA's innovation and enterprise transformation.",
  },
  {
    year: "2018",
    desc: '"Return to the original intention, Rebuild DONSEA." Accelerated innovation and formulated the "2019 DONSEA Business Plan".',
  },
  {
    year: "2019",
    desc: 'Fully implemented and improved the "2019 DONSEA Business Plan", adjusted the business structure, and built a 3.0 enterprise.',
  },
  {
    year: "2020",
    desc: "Stick to the original aspiration and set sail against challenges.",
  },
  {
    year: "2021",
    desc: "Started the first year of IT construction, keeping the original intention to cast the dream.",
  },
  { year: "2022", desc: "Strategic focus, starting from the heart." },
];

// ── CharReveal: dongshi .texty.top per-character animation ──
function CharReveal({
  text,
  style,
  as: Tag = "span",
  baseDelay = 0,
  charDelay = 40,
}: {
  text: string;
  style?: React.CSSProperties;
  as?: React.ElementType;
  baseDelay?: number;
  charDelay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag ref={ref} style={style}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate(0px, 0px)" : "translateY(-20px)",
            transition: `opacity 0.4s ease ${baseDelay + i * charDelay}ms, transform 0.4s ease ${baseDelay + i * charDelay}ms`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}

// ── FadeReveal: block-level fade + slide ──
function FadeReveal({
  children,
  delay = 0,
  style,
}: {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0px, 0px)" : "translate(0px, 30px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ============================================================
// PAGE
// ============================================================
export default function DevelopmentHistoryPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  // For centering active dot
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // translateX so active item sits at container center
  const offset = containerWidth / 2 - activeIndex * ITEM_WIDTH - ITEM_WIDTH / 2;

  const handlePrev = () =>
    setActiveIndex((p) => (p === 0 ? TIMELINE_DATA.length - 1 : p - 1));
  const handleNext = () =>
    setActiveIndex((p) => (p === TIMELINE_DATA.length - 1 ? 0 : p + 1));

  return (
    <main>
      {/* ════════════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage:
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture_bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 580px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ color: "rgb(255, 255, 255)" }}>
          <CharReveal
            text="About DONSEA"
            as="h1"
            style={{
              color: "rgb(255, 255, 255)",
              fontSize: "48px",
              margin: 0,
              letterSpacing: "2px",
            }}
            charDelay={50}
          />
          <CharReveal
            text="An innovative enterprise integrating production, sales, and brand operations."
            as="p"
            style={{
              paddingTop: "30px",
              fontSize: "32px" /* 👈 从 26px 放大到 32px */,
              fontWeight: 300 /* 👈 字重从 300 提高到 400，防止在大屏太细 */,
            }}
            baseDelay={300}
            charDelay={30}
          />
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          2. COMPANY INTRO
          ════════════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        <FadeReveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "wrap",
              gap: "60px",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/regards1.png"
              style={{
                height: "400px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
              alt="DONSEA Paper Building"
            />
            <div style={{ flex: "1 1 500px" }}>
              <h2 style={{ fontSize: "36px", color: "#111", margin: 0 }}>
                DONSEA PAPER
              </h2>
              <h2
                style={{
                  padding: "10px 0px 24px",
                  fontSize: "28px",
                  color: "#00a896",
                }}
              >
                Dongshi Paper
              </h2>
              <CharReveal
                as="div"
                text={
                  "Dongshi Paper was founded in 2001. With 21 years of professional quality and innovative development, it has now grown into a comprehensive tissue paper enterprise integrating R&D, innovation, production, sales, and service.\n" +
                  "Dongshi Paper focuses on eco-friendly and healthy tissue paper. The company insists on independent R&D, continuously expanding domestic and international markets, perfecting integrated system solutions, and establishing a fast-response customized product workflow. By combining online and offline channels, we have built an integrated platform for tissue customization, sales, and service."
                }
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "rgb(85, 85, 85)",
                  lineHeight: 1.8,
                }}
                charDelay={8}
                baseDelay={200}
              />
            </div>
          </div>
        </FadeReveal>
      </div>

      {/* ════════════════════════════════════════════════
          3. TIMELINE CAROUSEL
          ════════════════════════════════════════════════ */}
      <FadeReveal delay={200}>
        {/* ── Slide area: overflow:hidden so only active slide shows ── */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s ease-in-out",
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} style={{ flex: "0 0 100%", width: "100%" }}>
                {/* dongshi: exact bg + dimensions */}
                <div
                  style={{
                    backgroundImage:
                      'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/progress_bg.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 400px",
                    paddingTop: "40px",
                    height: "400px",
                    width: "1000px",
                    margin: "0px auto",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <h2 style={{ fontSize: "28px", color: "#111" }}>
                    Development History
                  </h2>
                  {/* dongshi: padding 80px 0 20px, teal, font-size 26px */}
                  <h2
                    style={{
                      padding: "70px 0px 20px",
                      color: "rgb(0, 166, 152)",
                      fontSize: "36px",
                    }}
                  >
                    {item.year}
                  </h2>
                  <p
                    style={{
                      width: "650px",
                      margin: "0px auto",
                      lineHeight: "1.8",
                      fontSize: "20px",
                      color: "#333",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Left arrow — dongshi: absolute left 100px, top 42% */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              left: "100px",
              top: "42%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
              padding: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="60px"
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/arrows_left1.png"
              alt="Prev"
            />
          </button>

          {/* Right arrow — dongshi: absolute right 100px, top 42% */}
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              right: "100px",
              top: "42%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              zIndex: 10,
              padding: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="60px"
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/arrows_right1.png"
              alt="Next"
            />
          </button>
        </div>
        {/* ↑ end slide overflow:hidden */}

        {/* ════════════════════════════════════════════════
            TIMELINE NAV
            Structure:
              [position:relative wrapper]
                [gradient line — absolute, full width]
                [dots container — overflow:hidden + paddingBottom:90px]
                  [dots flex row — translateX to center active]
        ════════════════════════════════════════════════ */}
        <div
          style={{
            position: "relative",
            marginTop: "40px",
            marginBottom: "100px",
          }}
        >
          {/* Gradient line — dongshi: border-image gradient, 4px thick */}
          {/* Absolute so it spans full width regardless of dots transform */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "15px" /* center on the inactive dot (30px/2 = 15px) */,
              height: "4px",
              background:
                "linear-gradient(135deg, rgb(204, 255, 250), rgb(0, 192, 177), rgb(204, 255, 250))",
              zIndex: 0,
            }}
          />

          {/* Dots overflow container
              overflow:hidden clips left/right (no scrollbar)
              paddingBottom:90px = keeps active icon (60px) + label (20px) + gap (10px) visible
              because overflow:hidden clips at the padding edge, not the content edge */}
          <div
            ref={containerRef}
            style={{
              overflow: "hidden",
              paddingBottom: "90px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Sliding flex row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                transition: "transform 0.5s ease",
                transform: `translateX(${offset}px)`,
                willChange: "transform",
              }}
            >
              {TIMELINE_DATA.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    flex: "0 0 auto",
                    width: `${ITEM_WIDTH}px`,
                    textAlign: "center",
                    cursor: "pointer",
                    padding: "0 100px" /* matches dongshi margin: 0px 100px */,
                  }}
                >
                  {/* dongshi: active=progress_line 60px, inactive=progress_icon 30px */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={
                      activeIndex === index
                        ? "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/progress_line.png"
                        : "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/progress_icon.png"
                    }
                    width={activeIndex === index ? 60 : 30}
                    alt={item.year}
                    style={{
                      transition: "all 0.3s ease",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                  <div
                    style={{
                      marginTop: "12px",
                      fontSize: "20px",
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
      </FadeReveal>
    </main>
  );
}
