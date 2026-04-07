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
            <h2 style={{ fontSize: "32px", color: "#111", margin: "0 0 10px" }}>
              Foreign Trade History
            </h2>
            <p style={{ fontWeight: 500, color: "#666", fontSize: "16px" }}>
              Development history of international business
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {/* Initial Stage */}
          <ScrollReveal direction="up" delay={100}>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#111",
                  margin: 0,
                }}
              >
                Initial Stage
              </h3>
              <p
                style={{
                  color: "#00a896",
                  fontWeight: 600,
                  marginBottom: "15px",
                }}
              >
                2014 - 2018
              </p>
              <p style={{ fontWeight: 500, color: "#444", lineHeight: 1.8 }}>
                In 2014, our Foreign Trade Department was officially
                established, launching international paper trade on B2B
                platforms. In that first year, we expanded into the European
                market, successfully securing our first international
                partnerships and laying a solid foundation for global export.
              </p>
            </div>
          </ScrollReveal>

          {/* Progressive Stage */}
          <ScrollReveal direction="up" delay={200}>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#111",
                  margin: 0,
                }}
              >
                Progressive Stage
              </h3>
              <p
                style={{
                  color: "#00a896",
                  fontWeight: 600,
                  marginBottom: "15px",
                }}
              >
                2019
              </p>
              <p style={{ fontWeight: 500, color: "#444", lineHeight: 1.8 }}>
                In 2019, with the deepening awareness of environmental
                protection at home and abroad, bamboo pulp paper made from
                renewable bamboo became highly favored. Growing together with
                our clients, our major accounts expanded rapidly, achieving
                significant transaction milestones and reaching dozens of
                international clients.
              </p>
            </div>
          </ScrollReveal>

          {/* Expansion Stage */}
          <ScrollReveal direction="up" delay={300}>
            <div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#111",
                  margin: 0,
                }}
              >
                Expansion Stage
              </h3>
              <p
                style={{
                  color: "#00a896",
                  fontWeight: 600,
                  marginBottom: "15px",
                }}
              >
                2020 - Present
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
                From 2020 to 2022, the foreign trade team was upgraded,
                expanding new customer resources. Major clients continued to
                grow, production capacity was increased, and we generated
                immense customer value, achieving outstanding export volumes.
              </p>
              <p style={{ fontWeight: 500, color: "#444", lineHeight: 1.8 }}>
                Ivoire Tissue currently operates state-of-the-art manufacturing
                facilities covering over 35,000 square meters. We are committed
                to customer and social service, constantly producing
                high-quality products, and driving company development through
                collaborative innovation. We have won the international market
                by providing exceptional OEM/ODM business for numerous global
                brands.
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
                fontSize: "32px",
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
              fontSize: "32px",
              color: "#111",
              margin: "0 0 10px",
            }}
          >
            Main International Markets
          </h2>
          <p
            style={{
              fontWeight: 500,
              color: "#666",
              textAlign: "center",
              paddingBottom: "50px",
            }}
          >
            Global export distribution
          </p>
          <div style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/maps.png"
              style={{ maxWidth: "100%", height: "auto" }}
              alt="Global Markets"
            />
          </div>
        </ScrollReveal>

        {/* Shipping Partners */}
        <div style={{ paddingTop: "100px" }}>
          <ScrollReveal direction="up">
            <h2
              style={{
                textAlign: "center",
                fontSize: "32px",
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
              }}
            >
              Efficient global logistics network
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} direction="up">
            {/* Block 1 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "18px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  Shipping Lines
                </h4>
                <span style={{ color: "#666", fontSize: "14px" }}>
                  Global Partners
                </span>
              </div>
              <div
                style={{
                  flex: 1,
                  fontWeight: 500,
                  color: "#333",
                  fontSize: "16px",
                  minWidth: "250px",
                }}
              >
                MSK, CMA, MSC, HMM, ONE, PIL, YML, OCL, SNL, APL
              </div>
            </div>

            {/* Block 2 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "18px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  River-Sea Intermodal
                </h4>
                <span style={{ color: "#666", fontSize: "14px" }}>
                  Combined Transport
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/teamwork_icon.png"
                alt=""
                width="40"
                style={{ margin: "0 40px 0 0" }}
              />
              <div
                style={{
                  flex: 1,
                  lineHeight: "30px",
                  color: "#333",
                  minWidth: "250px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  Montreal - Global Ports - The World
                </div>
                <div style={{ fontSize: "14px", color: "#666" }}>
                  Seamless waterway to ocean transit
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                padding: "30px 40px",
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                marginBottom: "20px",
              }}
            >
              <div style={{ width: "200px" }}>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "18px",
                    margin: 0,
                    color: "#111",
                  }}
                >
                  Rail-Sea Intermodal
                </h4>
                <span style={{ color: "#666", fontSize: "14px" }}>
                  Combined Transport
                </span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://ds-1305104220.cos.ap-chongqing.myqcloud.com/dongshi_pc/teamwork_icon1.png"
                alt=""
                width="40"
                style={{ margin: "0 40px 0 0" }}
              />
              <div
                style={{
                  flex: 1,
                  lineHeight: "30px",
                  color: "#333",
                  minWidth: "250px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  North American Rail - Seaports - The World
                </div>
                <div style={{ fontSize: "14px", color: "#666" }}>
                  Fast and reliable freight corridors
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
            <h2 style={{ fontSize: "32px", color: "#111", margin: "0 0 10px" }}>
              Production Workflow
            </h2>
            <p
              style={{ fontWeight: 500, color: "#666", paddingBottom: "50px" }}
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
              fontSize: "32px",
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
                    width: 25,
                    height: 25,
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
                      fontSize: "18px",
                      color: "#111",
                    }}
                  >
                    Toilet Paper
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
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
                    width: 25,
                    height: 25,
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
                      fontSize: "18px",
                      color: "#111",
                    }}
                  >
                    Kitchen Paper
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
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
                    width: 25,
                    height: 25,
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
                      fontSize: "18px",
                      color: "#111",
                    }}
                  >
                    Facial Tissue
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
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
                      fontSize: "18px",
                      color: "#111",
                    }}
                  >
                    Mini Jumbo Roll
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    Commercial Bath Tissue
                  </div>
                </div>
                <div
                  style={{
                    width: 25,
                    height: 25,
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
                      fontSize: "18px",
                      color: "#111",
                    }}
                  >
                    Paper Napkin
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    Square Napkin / Wallet Tissue
                  </div>
                </div>
                <div
                  style={{
                    width: 25,
                    height: 25,
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
                      fontSize: "18px",
                      color: "#111",
                    }}
                  >
                    Hand Towel
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#7c8796",
                      fontWeight: 500,
                    }}
                  >
                    N-Fold / Roll Hand Towel
                  </div>
                </div>
                <div
                  style={{
                    width: 25,
                    height: 25,
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
                fontSize: "32px",
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
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  Toilet Paper
                </span>
                <div
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#7c8796",
                    margin: "10px 0",
                  }}
                >
                  Dissolves easily / Eco-friendly / Zero plastic options
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
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
                    fontSize: "14px",
                    color: "#7c8796",
                    margin: "10px 0",
                  }}
                >
                  High Absorption for water/oil
                </div>
                <span
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
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
                  fontSize: "24px",
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
                  fontSize: "14px",
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
                  fontSize: "24px",
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
                  fontSize: "14px",
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
                  fontSize: "24px",
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
                  fontSize: "14px",
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
