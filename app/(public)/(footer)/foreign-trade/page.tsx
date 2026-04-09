"use client";

import ScrollReveal from "../../../components/ScrollReveal";

export default function ForeignTradePage() {
  return (
    <main>
      {/* ════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage:
            'url("https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/culture_bg.png")', // 建议后期替换
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
          2. DEVELOPMENT HISTORY OF FOREIGN TRADE
          ════════════════════════════════════════ */}
      <div
        className="content"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}
      >
        <ScrollReveal direction="up">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "40px", color: "#111", margin: "0 0 10px" }}>
              Development history of foreign trade
            </h2>
            {/* 原版这里没有副标题，或者为空，我们保持简洁 */}
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* Initial Stage */}
          <ScrollReveal direction="up" delay={100}>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#111",
                  margin: 0,
                }}
              >
                Initial Stage
              </h3>
              {/* ⚠️ 这里去掉了你的绿色，换成了东实原版的灰色副标题 */}
              <p
                style={{
                  color: "rgb(101, 101, 101)",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "15px",
                  textTransform: "lowercase",
                }}
              >
                initial stage
              </p>
              {/* 采用了原版 HTML 里的英文 */}
              <p
                style={{
                  fontWeight: 500,
                  color: "#444",
                  fontSize: "18px",
                  lineHeight: 1.8,
                }}
              >
                In 2014, the Foreign Trade Department was established, expanded
                the European market, with 9 million transactions and 22
                customers.
              </p>
            </div>
          </ScrollReveal>

          {/* Progressive Stage */}
          <ScrollReveal direction="up" delay={200}>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#111",
                  margin: 0,
                }}
              >
                Progressive Stage
              </h3>
              <p
                style={{
                  color: "rgb(101, 101, 101)",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "15px",
                }}
              >
                Progressive stage
              </p>
              <p
                style={{
                  fontWeight: 500,
                  color: "#444",
                  fontSize: "18px",
                  lineHeight: 1.8,
                }}
              >
                In 2019, with the in-depth awareness of environmental protection
                at home and abroad, bamboo pulp paper with renewable bamboo as
                raw material is very popular. During the years of growing
                together with customers, major customers have grown rapidly,
                with 30 million transactions and 28 customers.
              </p>
            </div>
          </ScrollReveal>

          {/* Expansion Stage */}
          <ScrollReveal direction="up" delay={300}>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "32px",
                  color: "#111",
                  margin: 0,
                }}
              >
                Expansion Stage
              </h3>
              <p
                style={{
                  color: "rgb(101, 101, 101)",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "15px",
                }}
              >
                expansion stage
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/expand.png"
                  alt="Expand 1"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/expand1.png"
                  alt="Expand 2"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </div>
              <p
                style={{
                  fontWeight: 500,
                  color: "#444",
                  lineHeight: 1.8,
                  marginBottom: "15px",
                }}
              >
                From 2020 to 2022, the foreign trade team will be upgraded, new
                customer resources will be expanded, major customers will
                continue to grow, planned production capacity will be increased,
                customer value will be created, and 100 million yuan of
                transactions will be achieved, with 35 customers.
              </p>
              {/* ⚠️ 换成了东实的渝北、永川工厂真实数据 */}
              <p
                style={{
                  fontWeight: 500,
                  color: "#444",
                  fontSize: "18px",
                  lineHeight: 1.8,
                }}
              >
                The company currently has two factories, Yubei Donsea and
                Yongchuan ECO, covering an area of 35,200 square meters, with
                about 260 employees, with a monthly output of 2,380 tons and a
                monthly output of about 2.38 million US dollars. We are
                committed to customer and social services, constantly producing
                high-quality products, and cooperating and innovating to promote
                the company's development, and have won the international market
                with the OEM business of many OEM brands.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ════════════════════════════════════════
          3. PRODUCTION WORKSHOP
          ════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#fafafa", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal direction="up">
            <h2
              style={{
                textAlign: "center",
                fontSize: "40px",
                color: "#111",
                margin: "0 0 10px",
              }}
            >
              Production Workshop Display
            </h2>
            <p
              style={{
                fontWeight: 500,
                color: "#666",
                textAlign: "center",
                paddingBottom: "50px",
                fontSize: "18px",
              }}
            >
              Advanced manufacturing & quality control
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "20px",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/production.png"
                alt="Production 1"
                style={{ width: "100%", borderRadius: "4px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/production1.png"
                alt="Production 2"
                style={{ width: "100%", borderRadius: "4px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/production2.png"
                alt="Production 3"
                style={{ width: "100%", borderRadius: "4px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/production3.png"
                alt="Production 4"
                style={{ width: "100%", borderRadius: "4px" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
      {/* ════════════════════════════════════════
          4. MAIN MARKETS & SHIPPING
          ════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        {/* Main Markets */}
        <ScrollReveal direction="up">
          <h2
            style={{
              textAlign: "center",
              fontSize: "40px",
              color: "#111",
              margin: "0 0 10px",
            }}
          >
            Main International Markets
          </h2>
          <div style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/maps.png"
              style={{ maxWidth: "100%", height: "auto", padding: "50px 0" }}
              alt="Global Markets"
            />
          </div>
          <h3
            style={{
              fontWeight: 700,
              textAlign: "center",
              color: "#111",
              fontSize: "22px",
              marginTop: "20px",
            }}
          >
            Our foreign trade customers have covered 20 countries including the
            United States, Canada, Australia, the United Kingdom, and Germany.
          </h3>
        </ScrollReveal>

        {/* Shipping Partners */}
        <div style={{ paddingTop: "100px" }}>
          <ScrollReveal direction="up">
            <h2
              style={{
                textAlign: "center",
                fontSize: "40px",
                color: "#111",
                margin: "0 0 10px",
              }}
            >
              Shipping Partners
            </h2>
            <p
              style={{
                fontWeight: 500,
                color: "#666",
                textAlign: "center",
                paddingBottom: "50px",
                fontSize: "18px",
              }}
            >
              Our latest works {/* ⚠️ 原版就是这句奇怪的英文，尊重原版保留 */}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            {/* Block 1: Corporate Name */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 80px", // 加大了 padding 匹配原版
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  Corporate Name
                </h4>
                <span style={{ color: "rgb(101, 101, 101)", fontWeight: 500, fontSize: "16px" }}> {/* 👈 4 个 Block 都要加上 16px */}
                  corporate name
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  fontWeight: 500,
                  color: "#333",
                  fontSize: "18px",
                  paddingLeft: "60px",
                }}
              >
                MSK、CMA、MSC、HMM、ONE、PIL、YML、OCL、SNL、APL
              </div>
            </div>

            {/* Block 2: River-sea combined */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 80px",
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  River Sea Intermodal
                </h4>
                <span style={{ color: "rgb(101, 101, 101)", fontWeight: 500, fontSize: "16px" }}> {/* 👈 4 个 Block 都要加上 16px */}
                  River sea combined transportation
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/teamwork_icon.png"
                alt=""
                width="40"
                style={{ margin: "0 40px" }}
              />
              <div
                style={{
                  flex: 1,
                  lineHeight: "30px",
                  color: "#333",
                  fontSize: "18px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  Chongqing - Shanghai Port - the world
                </div>
              </div>
            </div>

            {/* Block 3: Railway-sea combined */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 80px",
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  Railway Sea Intermodal
                </h4>
                <span style={{ color: "rgb(101, 101, 101)", fontWeight: 500, fontSize: "16px" }}> {/* 👈 4 个 Block 都要加上 16px */}
                  Railway sea combined transportation
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/teamwork_icon1.png"
                alt=""
                width="40"
                style={{ margin: "0 40px" }}
              />
              <div
                style={{
                  flex: 1,
                  lineHeight: "30px",
                  color: "#333",
                  fontSize: "18px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-block", paddingRight: "30px" }}
                  >
                    Chongqing Xinjiang Europe
                  </span>
                  Chongqing Central Asia Europe
                </div>
                <div style={{ fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-block", paddingRight: "30px" }}
                  >
                    Yu Yong
                  </span>
                  Chongqing Ningbo the world
                </div>
                <div style={{ fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-block", paddingRight: "30px" }}
                  >
                    Yuguixin
                  </span>
                  Chongqing Qinzhou the world
                </div>
              </div>
            </div>

            {/* Block 4: Land-sea combined */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 80px",
                backgroundColor: "#fafafa",
                borderRadius: "6px",
                marginBottom: "16px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "22px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  Land Sea Intermodal
                </h4>
                <span style={{ color: "rgb(101, 101, 101)", fontWeight: 500, fontSize: "16px" }}> {/* 👈 4 个 Block 都要加上 16px */}
                  Land sea combined transport
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/teamwork_icon2.png" // 这里你的原版代码可能漏了icon2，我按规律补上
                alt=""
                width="40"
                style={{ margin: "0 40px" }}
              />
              <div
                style={{
                  flex: 1,
                  lineHeight: "30px",
                  color: "#333",
                  fontSize: "18px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-block", paddingRight: "30px" }}
                  >
                    ASEAN shuttle bus
                  </span>
                  Chongqing Yunnan Vietnam Laos Bangkok
                </div>
                <div style={{ fontWeight: "bold" }}>
                  <span
                    style={{ display: "inline-block", paddingRight: "30px" }}
                  >
                    Central Asia shuttle
                  </span>
                  Chongqing - Horgos - Central Asia
                </div>
                <div style={{ fontWeight: "bold" }}>
                  India Pakistan cross border highway Chongqing Pakistan cross
                  border highway
                </div>
                <div style={{ fontWeight: "bold" }}>
                  Far east cross border highway Chongqing Mongolia Russia Far
                  East Highway
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ════════════════════════════════════════
          5. PRODUCTION WORKFLOW
          ════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#fafafa", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <ScrollReveal direction="up">
            <h2 style={{ fontSize: "40px", color: "#111", margin: "0 0 10px" }}>
              Production Workflow
            </h2>
            <p
              style={{ fontWeight: 500, color: "#666", paddingBottom: "50px",fontSize: "18px" }}
            >
              Strict quality control process
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100} direction="up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/flow-path.png"
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Workflow"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* ════════════════════════════════════════
          6. PRODUCT CATEGORIES (Dot Layout)
          ════════════════════════════════════════ */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        <ScrollReveal direction="up">
          <h2
            style={{
              textAlign: "center",
              fontSize: "40px",
              color: "#111",
              margin: "0 0 10px",
            }}
          >
            Product Categories
          </h2>
          <p
            style={{
              fontWeight: 500,
              color: "#666",
              textAlign: "center",
              paddingBottom: "50px",
              fontSize: "18px",
            }}
          >
            Comprehensive paper solutions
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100} direction="up">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "50px",
            }}
          >
            {/* Left List */}
            <div
              style={{
                flex: "1 1 250px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    marginRight: 15,
                    flexShrink: 0,
                  }}
                ></div>
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#111",
                    }}
                  >
                    Toilet Paper
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    White / Natural Bamboo Roll
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#ffc000",
                    marginRight: 15,
                    flexShrink: 0,
                  }}
                ></div>
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#111",
                    }}
                  >
                    Kitchen Paper
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    Kitchen Roll / V-Fold Kitchen Towel
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#91969b",
                    marginRight: 15,
                    flexShrink: 0,
                  }}
                ></div>
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#111",
                    }}
                  >
                    Facial Tissue
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    Soft Pack / Box Tissue / Pocket Tissue
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Image */}
            <div style={{ flex: "0 0 auto", textAlign: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/kind_icon.png"
                style={{ maxWidth: "100%", width: "300px" }}
                alt="Category"
              />
            </div>

            {/* Right List */}
            <div
              style={{
                flex: "1 1 250px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  textAlign: "right",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#111",
                    }}
                  >
                    Mini Jumbo Roll
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    Commercial Bath Tissue
                  </div>
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    marginLeft: 15,
                    flexShrink: 0,
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  textAlign: "right",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#111",
                    }}
                  >
                    Paper Napkin
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    Square Napkin / Wallet Tissue
                  </div>
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#ffc000",
                    marginLeft: 15,
                    flexShrink: 0,
                  }}
                ></div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  textAlign: "right",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                      color: "#111",
                    }}
                  >
                    Hand Towel
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    N-Fold / Roll Hand Towel
                  </div>
                </div>
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#91969b",
                    marginLeft: 15,
                    flexShrink: 0,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ════════════════════════════════════════
          7. PRODUCT SHOWCASE (Galleries)
          ════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#fafafa", padding: "80px 20px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <ScrollReveal direction="up">
            <h2
              style={{
                textAlign: "center",
                fontSize: "40px",
                color: "#111",
                margin: "0 0 10px",
              }}
            >
              Product Showcase
            </h2>
            <p
              style={{
                fontWeight: 500,
                color: "#666",
                textAlign: "center",
                paddingBottom: "50px",
                fontSize: "18px",
              }}
            >
              Premium series display
            </p>
          </ScrollReveal>

          {/* Group 1: Toilet Paper */}
          <ScrollReveal delay={100} direction="up">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "40px",
              }}
            >
              <div
                style={{
                  flex: "1 1 300px",
                  paddingRight: "20px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  Toilet Paper
                </span>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#7c8796",
                    margin: "10px 0",
                  }}
                >
                  Dissolves easily / Eco-friendly / Zero plastic options
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#7c8796",
                  }}
                >
                  Health and Safety / Soft & Comfortable
                </span>
              </div>
              <div style={{ flex: "2 1 600px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product1.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt="Toilet Paper"
                />
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                paddingBottom: "70px",
                borderBottom: "1px solid #ddd",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product2.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product3.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product4.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product5.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
          </ScrollReveal>

          {/* Group 2: Kitchen Paper */}
          <ScrollReveal delay={100} direction="up">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "70px 0 40px",
              }}
            >
              <div
                style={{
                  flex: "1 1 300px",
                  paddingRight: "20px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  Kitchen Paper
                </span>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#7c8796",
                    margin: "10px 0",
                  }}
                >
                  High Absorption for water/oil
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "18px",
                    color: "#7c8796",
                  }}
                >
                  Convenient for home cleaning
                </span>
              </div>
              <div style={{ flex: "2 1 600px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product6.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt="Kitchen Paper"
                />
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                paddingBottom: "70px",
                borderBottom: "1px solid #ddd",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product7.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product8.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product9.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product10.png"
                alt=""
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </div>
          </ScrollReveal>

          {/* Group 3: Facial Tissue & Hand Towel Mix */}
          <ScrollReveal delay={100} direction="up">
            <div style={{ margin: "70px 0 40px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#111",
                  display: "block",
                }}
              >
                Facial Tissue
              </span>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#7c8796",
                  margin: "10px 0",
                }}
              >
                Skin-friendly / Silk soft
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product11.png"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginTop: "20px",
                }}
                alt="Facial Tissue"
              />
            </div>

            <div style={{ margin: "70px 0 40px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#111",
                  display: "block",
                }}
              >
                Hand Towel
              </span>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#7c8796",
                  margin: "10px 0",
                }}
              >
                High Absorption / Convenient and hygienic
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product12.png"
                    style={{ width: "100%", borderRadius: "8px" }}
                    alt=""
                  />
                  <div
                    style={{
                      fontWeight: "bold",
                      marginTop: "15px",
                      color: "#111",
                      fontSize: "20px",
                    }}
                  >
                    Mini Jumbo Roll
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product13.png"
                    style={{ width: "100%", borderRadius: "8px" }}
                    alt=""
                  />
                  <div
                    style={{
                      fontWeight: "bold",
                      marginTop: "15px",
                      color: "#111",
                      fontSize: "20px",
                    }}
                  >
                    Center Pull Bath Tissue
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product14.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product15.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
              </div>
            </div>

            <div style={{ margin: "70px 0 40px" }}>
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#111",
                  display: "block",
                }}
              >
                Pocket Tissue
              </span>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "18px",
                  color: "#7c8796",
                  margin: "10px 0",
                }}
              >
                Compact & Portable / Standard & Mini Packs
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product16.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product17.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product18.png"
                  style={{ width: "100%", borderRadius: "8px" }}
                  alt=""
                />
              </div>
            </div>

            <div style={{ margin: "70px 0 40px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/product19.png"
                style={{ width: "100%", borderRadius: "8px" }}
                alt="Soft Pack Tissue"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
