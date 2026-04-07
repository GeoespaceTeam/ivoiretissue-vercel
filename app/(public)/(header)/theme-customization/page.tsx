"use client";

import ScrollReveal from "../../../components/ScrollReveal";

// ============================================================
// DATA: Theme Customization Series
// ============================================================
const CUSTOMIZATION_SERIES = [
  {
    title: "Premium Business Series",
    subtitle: "Peace in the present, Love is action",
    desc: "Classic flexible ratio, softer and more skin-friendly.",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/customization.png",
  },
  {
    title: "Eco-Bamboo Series",
    subtitle: "Great eco-love starts with a single piece of paper",
    desc: "100% virgin bamboo pulp, safe and non-irritating, unbleached, pure bamboo natural color is safer.",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/customization1.png",
  },
  {
    title: "Essential Business Series",
    subtitle: "Love is all around us",
    desc: "More flexible, unbleached and fluorescent-free.",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/customization2.png",
  },
  {
    title: "Home & Family Series",
    subtitle: "Love family, Love life",
    desc: "Unique ultra-soft technology increases tissue softness, safe for sensitive skin to use with peace of mind.",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/customization3.png",
  },
  {
    title: "Ivoire Tissue — Custom Solutions",
    subtitle: "Customize love, Spread love",
    desc: "Eco-friendly, Technology, Fashion.",
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/customization4.png",
  },
];

export default function ThemeCustomizationPage() {
  return (
    <main>
      {/* ════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage:
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/banner2.png")',
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
          2. CONTENT SECTION (Alternating Layout)
          ════════════════════════════════════════ */}
      <div
        className="content"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "80px 20px",
        }}
      >
        {CUSTOMIZATION_SERIES.map((item, index) => {
          // 目标网页的规律是：偶数索引（0,2,4）图片在左，文字在右；奇数索引（1,3）文字在左，图片在右
          const isImageLeft = index % 2 === 0;

          return (
            <ScrollReveal
              key={index}
              delay={100}
              direction={isImageLeft ? "left" : "right"}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // 利用 React 的 flex-direction 完美还原原网页写死的左右交错 DOM
                  flexDirection: isImageLeft ? "row" : "row-reverse",
                  flexWrap: "wrap",
                  marginBottom: "64px",
                  gap: "40px",
                }}
              >
                {/* ── 侧边图片 ── */}
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ maxWidth: "100%", height: "auto", flex: "0 0 auto" }}
                />

                {/* ── 侧边文字区 ── */}
                <div
                  style={{
                    color: "rgb(109, 109, 109)",
                    fontSize: "16px",
                    flex: "1 1 400px",
                    // 为了完美复刻原网页，不强制靠左/靠右，统一使用左对齐
                    textAlign: "left",
                  }}
                >
                  <h2
                    style={{
                      color: "rgb(0, 166, 152)",
                      margin: 0,
                      fontSize: "28px",
                    }}
                  >
                    {item.title}
                  </h2>
                  <div
                    style={{
                      fontWeight: 600,
                      paddingTop: "6px",
                      color: "#333",
                    }}
                  >
                    {item.subtitle}
                  </div>
                  {/* 青色分隔线：高度 3px, 宽度 70px */}
                  <div
                    style={{
                      height: "3px",
                      width: "70px",
                      backgroundColor: "rgb(0, 166, 152)",
                      margin: "10px 0px 20px",
                    }}
                  ></div>
                  <span style={{ fontWeight: 500, lineHeight: 1.6 }}>
                    {item.desc}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </main>
  );
}
