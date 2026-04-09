"use client";

import ScrollReveal from "../../../components/ScrollReveal";

// ============================================================
// DATA: Brand Ideas
// ============================================================
// const BRAND_IDEAS = [
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea.png", // 建议替换为 /images/idea.png
//     text: "Peace in the present, Love is action",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea1.png",
//     text: "Love family, Love life",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea2.png",
//     text: "Love is all around us",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea3.png",
//     text: "Customize love, Spread love",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea4.png",
//     text: "Great eco-love starts with a single piece of paper",
//   },
// ];

// const BRAND_IDEAS = [
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea.png",
//     text: "From Africa to Canada: A legacy of entrepreneurship and resilience.",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea1.png",
//     text: "100% Tree-Free: Protecting our forests through sustainable bamboo resources.",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea2.png",
//     text: "Family-Owned Values: Ensuring safety and quality in every roll we produce.",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea3.png",
//     text: "Green Manufacturing: Powered by over 1,600 GWh of renewable energy annually.",
//   },
//   {
//     img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea4.png",
//     text: "Community Impact: Growing together with our partners and local regions.",
//   },
// ];

const BRAND_IDEAS = [
  {
    // 环保/竹浆主题图
    img: "https://ivoiretissue.com/wp-content/uploads/2024/03/bamboo-1-scaled.jpeg",
    text: "Promote Bamboo Paper: Encouraging innovative ideas to replace traditional wood pulp for a better world.",
  },
  {
    // 仓库/安全管理图
    img: "https://ivoiretissue.com/wp-content/uploads/2024/04/image-for-employee-image-scaled.jpeg",
    text: "Guarantee Safety & Welfare: Cultivating a secure environment where everyone is inspired to save trees.",
  },
  {
    // 产品线/追求卓越
    img: "https://ivoiretissue.com/wp-content/uploads/2024/03/shutterstock_2273970603-scaled.jpg",
    text: "Strive for Excellence: Constantly seeking perfection and inviting employees to go beyond their limits.",
  },
  {
    // 诚信/品牌标识相关
    img: "https://ivoiretissue.com/wp-content/uploads/2024/03/Mar-1024x697.png",
    text: "Guide with Integrity: Nurturing growth and sustainability through trust, transparency, and respect.",
  },
  {
    // 团队/专业演变
    img: "https://ivoiretissue.com/wp-content/uploads/2024/04/image-for-employee-image-scaled.jpeg",
    text: "Professional Evolution: Providing an environment conducive to personal development and industry leadership.",
  },
];

export default function IvoireFamilyPage() {
  return (
    <main id="company_idea">
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
      >
        <ScrollReveal direction="up">
          <h1
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#ffffff", // 1. 强制设为纯白色
              margin: 0,
              // 2. 增强阴影：使用 0.5 透明度，让白色字母的轮廓在亮色背景下依然清晰
              textShadow: "0px 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            BUILDING THE FUTURE OF
            <br />
            PAPER CONVERTING
          </h1>
        </ScrollReveal>
      </div>
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
        {/* --- Top Intro (Text + Image) --- */}
        <ScrollReveal direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap", // 保证小屏幕下不会直接挤爆
              gap: "40px",
              marginBottom: "80px",
            }}
          >
            <div style={{ flex: "1 1 500px", paddingRight: "40px" }}>
              <h2
                style={{
                  fontSize: "40px",
                  color: "#111",
                  marginBottom: "20px",
                  lineHeight: 1.2,
                }}
              >
                Bamboo Instead of Wood,
                <br />
                Protecting Our Future.
              </h2>
              <p
                style={{
                  fontWeight: 500,
                  color: "rgb(34, 34, 33)",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                Bamboo is one of the most vital plants on Earth. It takes 60
                years for a large tree to reach 20 meters, but{" "}
                <strong>only 60 days</strong> for a bamboo shoot to reach the
                same height.
              </p>
              <p
                style={{
                  fontWeight: 500,
                  color: "rgb(34, 34, 33)",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  fontSize: "18px",
                  marginTop: "15px",
                }}
              >
                By embracing bamboo's rapid renewability, Ivoire Tissue Paper
                offers top-notch quality while preserving our forest systems and
                creating a sustainable environment for future generations.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ivoiretissue.com/wp-content/uploads/2024/03/shutterstock_1692502573-scaled.jpg"
              alt="Ivoire Production Facility"
              style={{
                flex: "0 0 auto",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </div>
        </ScrollReveal>

        {/* --- Bottom Concept List (Icons + Arrows + Text) --- */}
        <div style={{ padding: "0 5%" }}>
          {BRAND_IDEAS.map((idea, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="left">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start", // 改为靠左对齐
                  marginTop: "60px",
                  width: "100%", // 占满宽度
                }}
              >
                {/* --- 左侧 Logo 区域：固定宽度，防止文字把 Logo 挤扁 --- */}
                <div style={{ flex: "0 0 180px", textAlign: "center" }}>
                  <img
                    src={idea.img}
                    style={{ width: "100%", height: "auto" }}
                    alt="Idea Icon"
                  />
                </div>

                {/* --- 中间箭头区域：固定宽度，不参与挤压 --- */}
                <span
                  style={{
                    flex: "0 0 auto",
                    margin: "0 60px", // 调整这个值控制 Logo 到文字的距离
                    color: "rgb(200, 200, 200)",
                    fontSize: "48px",
                  }}
                >
                  <SwapRightIcon />
                </span>

                {/* --- 右侧文字区域：核心修改，flex: 1 保证它形成一个独立的文字块 --- */}
                <p
                  style={{
                    flex: 1, // 自动占据右侧剩余所有空间
                    fontSize: "24px",

                    color: "#333",
                    margin: 0,
                    textAlign: "left", // 文字在自己的区域内左对齐
                    lineHeight: "1.4", // 增加行高，换行后更美观
                  }}
                >
                  {idea.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}

// ============================================================
// SVG ICONS
// ============================================================
function SwapRightIcon() {
  return (
    <svg
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z"></path>
    </svg>
  );
}
