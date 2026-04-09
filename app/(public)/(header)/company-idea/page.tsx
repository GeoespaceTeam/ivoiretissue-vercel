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

const BRAND_IDEAS = [
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea.png",
    text: "From Africa to Canada: A legacy of entrepreneurship and resilience.",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea1.png",
    text: "100% Tree-Free: Protecting our forests through sustainable bamboo resources.",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea2.png",
    text: "Family-Owned Values: Ensuring safety and quality in every roll we produce.",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea3.png",
    text: "Green Manufacturing: Powered by over 1,600 GWh of renewable energy annually.",
  },
  {
    img: "https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/idea4.png",
    text: "Community Impact: Growing together with our partners and local regions.",
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
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/banner2.png")', // 建议替换为 /images/banner2.png
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
              {/* <h2
                style={{
                  fontSize: "40px",
                  color: "#111",
                  marginBottom: "20px",
                }}
              >
                Bamboo Instead of Wood, Eco-Friendly
              </h2> */}
              <h2
                style={{
                  fontSize: "40px",
                  color: "#111",
                  marginBottom: "20px",
                }}
              >
                Redefining Excellence, Sustaining the Future.
              </h2>
              {/* <p
                style={{
                  fontWeight: 500,
                  color: "rgb(34, 34, 33)",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                Bamboo is one of the most vital plants on Earth, growing at an
                incredible speed. It takes 60 years for a large tree to reach 20
                meters, but only 60 days for a bamboo shoot to reach the same
                height. By embracing bamboo, we preserve a green and sustainable
                environment for future generations.
              </p> */}
              <p
                style={{
                  fontWeight: 500,
                  color: "rgb(34, 34, 33)",
                  opacity: 0.8,
                  lineHeight: 1.8,
                  fontSize: "18px",
                }}
              >
                Established in 2022 in Montreal, Ivoire Tissue Paper was founded
                with a vision to offer eco-friendly alternatives to traditional
                paper products. By utilizing bamboo, a rapidly renewable
                resource, we minimize our environmental footprint while ensuring
                top-notch quality and performance for our customers.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/customization3.png"
              alt="Eco-Friendly Concept"
              style={{ flex: "0 0 auto", maxWidth: "100%", height: "auto" }}
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
