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
    title: "Essential Business Series", // 原文是“低端商务”，英文用 Essential 更符合商业礼仪
    subtitle: "Love is all around us",
    desc: "More flexible, unbleached, and fluorescent-free.",
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
    desc: "Eco-friendly, Technology, Fashion.", // 去掉了原网页测试遗留的“备份”二字
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
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/banner2.png")', // 建议后期替换为 /images/banner2.png
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
          // 判断奇偶行，决定图片在左边还是右边
          const isImageLeft = index % 2 === 0;

          return (
            <ScrollReveal
              key={index}
              delay={100}
              // 图片在左，文字从右滑入；图片在右，文字从左滑入
              direction={isImageLeft ? "left" : "right"}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // 如果是偶数行则反转排列，同时利用 wrap 保证小屏幕下垂直折叠
                  flexDirection: isImageLeft ? "row" : "row-reverse",
                  flexWrap: "wrap",
                  marginBottom: "80px",
                  gap: "40px",
                }}
              >
                {/* ── Image Box ── */}
                <div
                  style={{
                    flex: "1 1 400px",
                    textAlign: isImageLeft ? "left" : "right",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      display: "inline-block",
                    }}
                  />
                </div>

                {/* ── Text Box ── */}
                <div
                  style={{
                    flex: "1 1 400px",
                    color: "rgb(109, 109, 109)",
                    fontSize: "16px",
                    // 确保短内容在反转时也能对齐好看
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
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
                  {/* 品牌青色小横条 */}
                  <div
                    style={{
                      height: "3px",
                      width: "70px",
                      backgroundColor: "rgb(0, 166, 152)",
                      margin: "15px 0",
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
