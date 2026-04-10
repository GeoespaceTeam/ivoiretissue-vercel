"use client";

import React, { useEffect, useState } from "react";

export default function FloatingWidget() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // 核心逻辑：监听滚动高度，控制第三个气泡的显隐
  useEffect(() => {
    const handleScroll = () => {
      // 当滚动超过 300px 时显示回到顶部按钮
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 🔴 严格像素级 CSS 注入 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .iv-floating-container {
          position: fixed;
          right: 20px; /* 距离右侧边缘的距离 */
          top: 50%;
          transform: translateY(-50%);
          z-index: 10000;
          display: flex;
          flex-direction: column;
          gap: 20px; /* 🏆 关键：气泡之间的间隔 */
        }

        .iv-float-bubble {
          width: 58px; /* 官方精准尺寸 */
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 0 !important; /* 官方强制直角 */
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        /* WhatsApp 专用绿色 */
        .bubble-whatsapp { background-color: #25D366; }
        .bubble-whatsapp:hover { background-color: #1eb954; transform: scale(1.05); }

        /* Email 品牌主色 */
        .bubble-email { background-color: #00a496; }
        .bubble-email:hover { background-color: #008f82; transform: scale(1.05); }

        /* 回到顶部 品牌主色 */
        .bubble-scroll { 
          background-color: #00a496; 
          visibility: ${showScrollBtn ? "visible" : "hidden"};
          opacity: ${showScrollBtn ? "1" : "0"};
          transform: ${showScrollBtn ? "translateY(0)" : "translateY(20px)"};
        }
        .bubble-scroll:hover { background-color: #008f82; transform: scale(1.05); }

        @media (max-width: 768px) {
          .iv-floating-container { right: 10px; }
          .iv-float-bubble { width: 50px; height: 50px; }
        }
      `,
        }}
      />

      <div className="iv-floating-container">
        {/* 1. WhatsApp 气泡 */}
        <a
          href="https://wa.me/15146888238"
          target="_blank"
          rel="noopener noreferrer"
          className="iv-float-bubble bubble-whatsapp"
          title="WhatsApp"
        >
          <svg width="30" height="30" viewBox="0 0 448 512" fill="white">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        </a>

        {/* 2. Email 气泡 */}
        <a
          href="mailto:sales@ivoiretissue.com"
          className="iv-float-bubble bubble-email"
          title="Email Us"
        >
          <svg width="32" height="32" viewBox="0 0 512 512" fill="white">
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg>
        </a>

        {/* 3. 回到顶部气泡 (智能判断显隐) */}
        <button
          onClick={scrollToTop}
          className="iv-float-bubble bubble-scroll"
          aria-label="Scroll to top"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      </div>
    </>
  );
}
