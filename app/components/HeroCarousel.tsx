"use client";

import { useState, useEffect, useCallback } from "react";
import s from "./HeroCarousel.module.css";

// ============================================================
// HERO CAROUSEL — dongshi Banner0_1 replication
//
// Dongshi structure:
//   - 80vh height, no margin-top (layout handles pt-[64px])
//   - Slides: full-width images (or videos for Ivoire Tissue)
//   - Left arrow:  position absolute, left: 100px,  top: 50%
//   - Right arrow: position absolute, right: 100px, top: 50%
//   - Dots: bottom center, slick-dots style
//   - Auto-advance every 5s
//
// Slide type supports both "image" and "video":
//   { type: "image", src: "/images/banner1.jpg" }
//   { type: "video", src: "/videos/hero-1.mov"  }
// ============================================================

type Slide =
  | { id: number; type: "image"; src: string; alt?: string }
  | { id: number; type: "video"; src: string };

// TODO: Replace with actual assets in /public/
// Use images to match dongshi exactly, or videos for Ivoire Tissue content
const slides: Slide[] = [
  { id: 1, type: "video", src: "/videos/hero-1.mov" },
  { id: 2, type: "video", src: "/videos/hero-2.mov" },
  { id: 3, type: "video", src: "/videos/hero-3.mov" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance — dongshi: slick autoplay
  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className={s.heroSection} style={{ position: "relative" }}>
      {/* ── Slides ── */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`${s.slide} ${index === current ? s.active : ""}`}
          aria-hidden={index !== current}
        >
          {slide.type === "video" ? (
            <video autoPlay muted loop playsInline src={slide.src} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={slide.alt ?? `Slide ${slide.id}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
      ))}

      {/* ── Left arrow (100% 还原东实的 Base64 专属图片与绝对定位) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="data:image/png;base64,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"
        alt="Prev"
        onClick={goPrev}
        style={{
          position: "absolute",
          left: "100px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
      />

      {/* ── Right arrow (100% 还原东实的 Base64 专属图片与绝对定位) ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="data:image/png;base64,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"
        alt="Next"
        onClick={goNext}
        style={{
          position: "absolute",
          right: "100px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 10,
        }}
      />

      {/* ── Dots (完全复原 slick-dots 进度条排列) ── */}
      <ul
        style={{
          position: "absolute",
          bottom: "30px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
          margin: 0,
          zIndex: 10,
        }}
        role="tablist"
      >
        {slides.map((_, index) => (
          <li key={index} style={{ margin: "0 5px" }} role="presentation">
            <button
              onClick={() => setCurrent(index)}
              style={{
                width: "30px", // 变成条状进度点
                height: "4px",
                padding: 0,
                border: "none",
                borderRadius: "2px",
                backgroundColor:
                  index === current ? "#fff" : "rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: 0, // 隐藏里面的数字
                display: "block",
              }}
              role="tab"
              aria-selected={index === current}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
