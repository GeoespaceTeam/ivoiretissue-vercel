"use client";

import ScrollReveal from "../../../components/ScrollReveal"; // 请确保路径指向你的 ScrollReveal 组件位置

export default function ContactUsPage() {
  return (
    <main>
      {/* ════════════════════════════════════════
          1. HERO BANNER
          ════════════════════════════════════════ */}
      <div
        style={{
          height: 580,
          backgroundImage: 'url("/images/contact_bg.png")', // 记得在 public/images 放一张 contact_bg.png
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // 原网页是 100% 580px，用 cover 响应式更好看
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {/* 如果 banner 上需要写字，可以放在这个空 div 里 */}
        <div></div>
      </div>
      {/* --- FAQ SECTION (New from Business Logic) --- */}
      <ScrollReveal direction="up">
        <div style={{ marginBottom: "80px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: 400,
              color: "#111",
              marginBottom: "40px",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "30px",
            }}
          >
            {[
              {
                q: "Where is Ivoire Tissue located?",
                a: "Our main manufacturing facility is located at 222 Rue Poirier, Saint-Eustache, QC, just 45km from Montreal.",
              },
              {
                q: "Do you offer private label (OEM) services?",
                a: "Yes, we specialize in customized bamboo tissue products for hotels, restaurants, and corporate clients.",
              },
              {
                q: "What are your shipping areas?",
                a: "We primarily serve the Quebec and Ontario markets, with capabilities to ship across North America.",
              },
              {
                q: "Why choose bamboo over wood pulp?",
                a: "Bamboo is highly renewable, growing 60 times faster than trees, and offers superior natural softness and strength.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                style={{ padding: "20px", borderBottom: "1px solid #eee" }}
              >
                <h4
                  style={{
                    color: "#00a698",
                    fontSize: "16px",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  Q: {faq.q}
                </h4>
                <p style={{ color: "#666", fontSize: "15px", lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
      {/* ════════════════════════════════════════
          2. CONTACT INFORMATION CONTENT
          ════════════════════════════════════════ */}
      <div
        className="content"
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <ScrollReveal direction="up">
          <h2
            style={{
              textAlign: "center",
              paddingBottom: 40,
              fontSize: "48px",

              color: "#111",
            }}
          >
            Contact Information
          </h2>
        </ScrollReveal>

        {/* --- Block 1: Phone --- */}
        <ScrollReveal delay={100} direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(250, 250, 250)",
              borderRadius: 6,
              padding: "20px 60px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgb(131, 131, 131)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 56, color: "#00a896" }}>
              <PhoneIcon />
            </span>
            <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
              {/* 对齐原版双热线 */}
              <div>General Inquiry: +1 (514) 971-8238</div>
              <div>Sales & Support: +1 (514) 291-8063</div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- Block 2: Address --- */}
        <ScrollReveal delay={200} direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(250, 250, 250)",
              borderRadius: 6,
              padding: "20px 60px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgb(131, 131, 131)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 56, color: "#00a896" }}>
              <BankIcon />
            </span>
            <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
              <div>
                Address: 222 Rue Poirier, #30, St-Eustache, QC J7R 6B1, Canada
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- Block 3: Email --- */}
        <ScrollReveal delay={300} direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(250, 250, 250)",
              borderRadius: 6,
              padding: "20px 60px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgb(131, 131, 131)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 56, color: "#00a896" }}>
              <MailIcon />
            </span>
            <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
              <div>
                Email:{" "}
                <a
                  href="mailto:sales@ivoiretissue.com"
                  style={{ color: "rgb(0, 167, 152)", textDecoration: "none" }}
                >
                  sales@ivoiretissue.com
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- Block 4: Website --- */}
        <ScrollReveal delay={400} direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(250, 250, 250)",
              borderRadius: 6,
              padding: "20px 60px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgb(131, 131, 131)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 56, color: "#00a896" }}>
              <GlobalIcon />
            </span>
            <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
              <div>
                Official Website:{" "}
                <a
                  href="https://ivoiretissue.com"
                  style={{
                    color: "rgb(0, 167, 152)",
                    textDecoration: "none",
                    paddingLeft: 5,
                  }}
                >
                  https://ivoiretissue.com
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* --- Block 5: Operating Hours (New from Original) --- */}
        <ScrollReveal delay={500} direction="up">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(250, 250, 250)",
              borderRadius: 6,
              padding: "20px 60px",
              fontSize: 20,
              fontWeight: 500,
              color: "rgb(131, 131, 131)",
              marginBottom: 20,
            }}
          >
            <span style={{ fontSize: 56, color: "#00a896" }}>
              {/* 这里借用一个时钟图标，我直接用简单的 SVG 帮你写好 */}
              <svg
                viewBox="0 0 1024 1024"
                width="1em"
                height="1em"
                fill="currentColor"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l167.4 121.3c3.6 2.6 8.6 1.8 11.2-1.8l28.6-39c2.6-3.6 1.8-8.6-1.8-11.2z"></path>
              </svg>
            </span>
            <div style={{ paddingLeft: 40, lineHeight: 1.8 }}>
              <div style={{ fontWeight: 700, color: "#333" }}>
                Operating Hours:
              </div>
              <div>Monday - Friday: 8:30 AM - 5:00 PM</div>
              <div>Saturday - Sunday: Closed</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}

// ============================================================
// SVG ICONS (Extracted from Dongshi HTML)
// ============================================================

function PhoneIcon() {
  return (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path>
    </svg>
  );
}

function BankIcon() {
  return (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"></path>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
    </svg>
  );
}

function GlobalIcon() {
  return (
    <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
      <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0010-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 003.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 00-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 01887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 01-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 01115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 01540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 00540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 01-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 00-81.5 55.9A373.86 373.86 0 01137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 01-107.6 69.2z"></path>
    </svg>
  );
}
