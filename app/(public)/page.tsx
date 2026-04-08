import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedCounter from "../components/AnimatedCounter";
import ScrollReveal from "../components/ScrollReveal";

// ============================================================
// IVOIRE TISSUE — HOME PAGE
//
// CSS strategy:
//   - Hover/pseudo states   → <style> tag at top of JSX
//   - Layout & spacing      → inline styles (exact dongshi values)
//   - Shared utilities      → globals.css classes
//   - Scroll animations     → ScrollReveal component
//
// Sections (dongshi order):
//   1. Hero Carousel   (Banner0_1)
//   2. Stats Bar       (teal inline strip)
//   3. About Us        (Feature4_0 — img 58% + stats 42%)
//   4. Main Markets    (Teams1_0   — 5-col image+title)
//   5. Core Caps       (Content3_0 — 6-col icon+text)
// ============================================================

// ── Hover & pseudo styles that cannot be expressed inline ──
const CSS = `
  /* ── Team cards ── */
  .ivt-team-card {
    cursor: pointer;
    overflow: hidden;
    background: #f5f5f5;
  }
  .ivt-team-card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  .ivt-team-card:hover img { transform: scale(1.05); }

  /* ── Capability blocks ── */
  .ivt-cap-block {
    text-align: center;
    padding: 28px 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .ivt-cap-block:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.10);
  }

  /* ── Learn More button ── */
  .ivt-learn-btn {
    display: inline-block;
    margin-top: 30px;
    padding: 8px 22px;
    background: rgb(0, 168, 150);
    border-color: rgb(0, 168, 150);
    color: #fff;
    font-size: 14px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: background 0.25s, border-color 0.25s;
    text-decoration: none;
  }
  .ivt-learn-btn:hover {
    background: #007a6d;
    border-color: #007a6d;
    color: #fff;
  }

  /* ── Responsive grids ── */
  @media (max-width: 1024px) {
    .ivt-teams-grid { grid-template-columns: repeat(3, 1fr) !important; }
    .ivt-cap-grid   { grid-template-columns: repeat(3, 1fr) !important; }
  }
  @media (max-width: 640px) {
    .ivt-teams-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .ivt-cap-grid   { grid-template-columns: repeat(2, 1fr) !important; }
    .ivt-about-row  { flex-direction: column !important; }
    .ivt-about-left,
    .ivt-about-right { flex: 0 0 100% !important; max-width: 100% !important; padding-left: 0 !important; }
    .ivt-about-left img { width: 100% !important; }
  }
`;

export default function HomePage() {
  return (
    <>
      {/* Inject hover/responsive CSS — no separate file needed */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* ════════════════════════════════════════════════════
          1. HERO CAROUSEL  (Banner0_1)
             80vh, 3 slides, arrows at left/right 100px
          ════════════════════════════════════════════════════ */}
      <HeroCarousel />

      {/* ════════════════════════════════════════════════════
          2. STATS BAR
             dongshi exact inline values:
             bg rgb(0,166,152), each item width:220px,
             border-left, 3px white accent bar, 32px number
          ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "rgb(0, 166, 152)", color: "#fff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: 1200,
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.suffix} delay={i * 120} direction="up">
              {/* dongshi: exact inline styles from HTML */}
              <div
                style={{
                  borderLeft: "1px solid rgba(255, 255, 255, 0.52)",
                  padding: "30px 40px 30px 20px",
                  width: 220,
                  textAlign: "left",
                  position: "relative",
                }}
              >
                {/* dongshi: 3px white bar — position absolute, left 0, top 43 */}
                <div
                  style={{
                    width: 3,
                    height: 24,
                    backgroundColor: "rgb(255, 255, 255)",
                    position: "absolute",
                    left: 0,
                    top: 43,
                  }}
                />
                {/* dongshi: font-size 32px, font-weight 600 */}
                <div>
                  <AnimatedCounter target={stat.number} />
                  <span style={{ fontSize: 14, marginLeft: 4 }}>
                    {stat.suffix}
                  </span>
                </div>
                {/* dongshi: opacity 0.8, line-height 26px */}
                <div
                  style={{
                    color: "rgb(255, 255, 255)",
                    lineHeight: "26px",
                    opacity: 0.8,
                    fontSize: 13,
                    marginTop: 4,
                  }}
                >
                  {stat.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. ABOUT  (Feature4_0 — content6-wrapper)
             Centered title/desc →
             Left: image ant-col-md-14 (58.33%), width="80%"
             Right: ant-col-md-10 (41.67%), stats + button
          ════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div className="section-wrapper">
          {/* Title block */}
          <ScrollReveal direction="up">
            <div className="section-title">
              <h1>About Us</h1>
            </div>
            <p className="section-title-desc">
              Dongshi Paper was founded in 2001. With 21 years of professional
              quality and 21 years of innovative development, it has now grown
              into a comprehensive household paper enterprise integrating R&D,
              innovation, production, sales, and service.
            </p>
          </ScrollReveal>

          {/* Two-column row */}
          <div
            className="ivt-about-row"
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            {/* ── Left: image — ant-col-md-14 (58.33%) ── */}
            {/* dongshi: img width="80%" height="100%" */}
            <ScrollReveal
              direction="right"
              className="ivt-about-left"
              style={{ flex: "0 0 58.33%", maxWidth: "58.33%" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                src="/images/about.png"
                alt="About Ivoire Tissue"
                style={{ width: "80%", height: "auto", display: "block" }}
              /> */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/regards1.png"
                alt="DONSEA Paper"
                style={{ width: "80%", height: "auto", display: "block" }}
              />
            </ScrollReveal>

            {/* ── Right: stats + button — ant-col-md-10 (41.67%) ── */}
            <ScrollReveal
              direction="left"
              delay={150}
              className="ivt-about-right"
              style={{
                flex: "0 0 41.67%",
                maxWidth: "41.67%",
                paddingLeft: 40,
              }}
            >
              {/* dongshi: padding-top: 20px */}
              <div style={{ paddingTop: 20 }}>
                {/* dongshi: "企业总面积 3000㎡" — font-size 30px, weight 600 */}
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 600,
                    color: "rgb(17, 17, 17)",
                  }}
                >
                  Factory Area&nbsp;
                  {/* dongshi: span with color: red → brand teal for Ivoire */}
                  <span style={{ color: "rgb(0, 168, 150)" }}>3,000 ㎡</span>
                </div>

                {/* dongshi: "建筑面积" sub-label */}
                <div>
                  <span style={{ fontSize: 14, color: "#666" }}>
                    Production Facility
                  </span>

                  {/* dongshi: divider — height 2px, bg #f3f3f3, margin 30px 0 20px */}
                  <div
                    style={{
                      height: 2,
                      backgroundColor: "rgb(243, 243, 243)",
                      margin: "30px 0 20px",
                    }}
                  />

                  {/* dongshi: "120人+" — font-size 30px, weight 600 */}
                  <div
                    style={{
                      fontSize: 30,
                      color: "rgb(17, 17, 17)",
                      fontWeight: 600,
                    }}
                  >
                    120+<span style={{ fontSize: 18, fontWeight: 400 }}>+</span>
                  </div>

                  {/* dongshi: "企业员工" sub-label */}
                  <span style={{ fontSize: 14, color: "#666" }}>
                    Team Members
                  </span>
                </div>

                {/* dongshi: "查看更多 >" — teal button */}
                <Link href="/about-us" className="ivt-learn-btn">
                  Learn More &gt;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. MAIN MARKETS  (Teams1_0 — teams1-wrapper)
             dongshi: 5 blocks, ant-col-md-4 each
             Structure: image → h1 title (below image, centered)
             No overlay, no description — pure dongshi style
          ════════════════════════════════════════════════════ */}
      <section style={{ background: "#fafafa" }}>
        <div className="section-wrapper">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h1>Main Markets</h1>
            </div>
          </ScrollReveal>

          {/* dongshi: ant-row block-wrapper, 5 × ant-col-md-4 */}
          <div
            className="ivt-teams-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 20,
              marginTop: 8,
            }}
          >
            {MARKETS.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 80} direction="up">
                <Link
                  href={m.href}
                  className="ivt-team-card"
                  style={{ display: "block" }}
                >
                  {/* dongshi: teams1-image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.img} alt={m.title} />
                  {/* dongshi: teams1-title */}
                  <h1
                    style={{
                      textAlign: "center",
                      padding: "12px 0 6px",
                      fontSize: 16,
                      fontWeight: 500,
                      color: "#111",
                    }}
                  >
                    {m.title}
                  </h1>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. CORE CAPABILITIES  (Content3_0 — content3-wrapper)
             dongshi: 6 blocks, ant-col-md-4 each
             Structure: icon image → h2 title (12px bold) →
             two content lines (12px bold key:value)
          ════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div className="section-wrapper">
          <ScrollReveal direction="up">
            <div className="section-title">
              <h1>Core Capabilities</h1>
            </div>
          </ScrollReveal>

          {/* dongshi: ant-row content3-block-wrapper, 6 × ant-col-md-4 */}
          <div
            className="ivt-cap-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 20,
              marginTop: 8,
            }}
          >
            {CAPABILITIES.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 80} direction="up">
                <div className="ivt-cap-block">
                  {/* dongshi: content3-icon — image width 100% */}
                  {/* 修改了这里的样式，让图标居中并限制大小为原网页的标准尺寸 */}
                  <div
                    style={{
                      marginBottom: 16,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cap.img}
                      alt={cap.title}
                      style={{
                        width: "65px",
                        height: "65px",
                        display: "block",
                      }}
                    />
                  </div>
                  {/* dongshi: content3-text */}
                  <div>
                    {/* dongshi: content3-title — font-size 12px, font-weight bold, color #111 */}
                    <h2
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgb(17, 17, 17)",
                        marginBottom: 6,
                      }}
                    >
                      {cap.title}
                    </h2>

                    {/* dongshi: content3-content — two lines, 12px bold */}
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgb(17, 17, 17)",
                      }}
                    >
                      {cap.line1}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        color: "rgb(17, 17, 17)",
                      }}
                    >
                      {cap.line2}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================================
// DATA
// ============================================================

// /* Stats bar — dongshi: 2001成立 / 5000+ / 22年 / 1500城镇 */
// const STATS = [
//   {
//     number: 2022,
//     suffix: "Est.",
//     desc: "Founded in Montreal, Canada — a pioneering bamboo tissue paper manufacturer.",
//   },
//   {
//     number: 5000,
//     suffix: "+",
//     desc: "Over 5,000 satisfied customers served by our professional team with premium products.",
//   },
//   {
//     number: 3,
//     suffix: "Plans",
//     desc: "3 renewable energy power plans driving our commitment to eco-friendly manufacturing.",
//   },
//   {
//     number: 1,
//     suffix: "Factory",
//     desc: "State-of-the-art production facility in Saint-Eustache, Quebec, serving North America.",
//   },
// ] as const;

// /* Main Markets — 贴合加拿大本土企业的商业逻辑划分 */
// const MARKETS = [
//   {
//     title: "Domestic",
//     // 建议：放一张蒙特利尔或多伦多的城市风景图
//     img: "/images/market-canada.jpg", 
//     href: "/foreign-trade",
//   },
//   {
//     title: "North America",
//     // 建议：放一张美国国会大厦或纽约的风景图（原网页也是国会大厦）
//     img: "/images/market-us.jpg", 
//     href: "/foreign-trade",
//   },
//   {
//     title: "Western Europe",
//     // 建议：放一张欧洲城堡或标志性建筑
//     img: "/images/market-europe.jpg", 
//     href: "/foreign-trade",
//   },
//   {
//     title: "Southeastern Asia",
//     // 替换原版的“东南亚”，亚太地区对加拿大纸业出口更具包容性
//     img: "/images/market-asia.jpg", 
//     href: "/foreign-trade",
//   },
//   {
//     title: "South America",
//     // 替换原版的“南美洲”，包含中美洲和南美洲，放一张里约热内卢的图即可
//     img: "/images/market-latam.jpg", 
//     href: "/foreign-trade",
//   },
// ] as const;
// ============================================================
// DATA
// ============================================================

/* Stats bar — 100% 还原东实文案 */
const STATS = [
  {
    number: 2001,
    suffix: "Est.", // 对应：成立
    desc: "Dongshi is a diversified group company integrating R&D, production, and sales.",
  },
  {
    number: 5000,
    suffix: "+",
    desc: "Over 5,000 cooperative customers, our professional team provides you with premium products.",
  },
  {
    number: 22,
    suffix: "Years", // 对应：年
    desc: "22 years of growth spur Dongshi people to provide consumers with higher-quality household paper with a stronger sense of mission and responsibility.",
  },
  {
    number: 1500,
    suffix: "Cities", // 对应：城镇
    desc: "To meet the growing product demand, our products cover more than 1,500 cities nationwide.",
  },
] as const;

/* Main Markets — 100% 还原东实的五个市场及图片 */
const MARKETS = [
  {
    title: "Domestic Market", // 国内市场
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market1.png", 
    href: "/foreign-trade",
  },
  {
    title: "North America", // 北美
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market2.png", 
    href: "/foreign-trade",
  },
  {
    title: "Western Europe", // 西欧
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market3.png", 
    href: "/foreign-trade",
  },
  {
    title: "Southeast Asia", // 东南亚
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market4.png", 
    href: "/foreign-trade",
  },
  {
    title: "South America", // 南美洲
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/market5.png", 
    href: "/foreign-trade",
  },
] as const;

/* Core Capabilities — 1:1 还原东实真实数据 */
const CAPABILITIES = [
  {
    title: "R&D Capability", // 研发能力
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability1.png",
    line1: "ODM Service: Yes",
    line2: "R&D Staff: 5-10",
  },
  {
    title: "Certifications", // 认证
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability2.png",
    line1: "Certificates: 7",
    line2: "",
  },
  {
    title: "Trade Capability", // 贸易能力
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability3.png",
    line1: "Export Experience: 8 Years",
    line2: "Trade Staff: 11-20",
  },
  {
    title: "Production Capability", // 生产能力
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability4.png",
    line1: "Production Lines: >10", // 10以上
    line2: "Output Value: >$100M", // 超过1亿美元
  },
  {
    title: "ODM Capability", // ODM功能
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability5.png",
    line1: "OEM Service: Yes",
    line2: "OEM Experience: 21 Years",
  },
  {
    title: "Quality Control", // 质量控制
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/ability6.png",
    line1: "QC Staff: 11-20",
    line2: "",
  },
] as const;