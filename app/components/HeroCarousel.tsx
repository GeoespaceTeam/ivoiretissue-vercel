"use client";

import { useState, useEffect, useCallback } from "react";

// TODO: 替换成实际的banner图片/视频路径，放在 public/ 下
// 原站视频CDN:
// https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview-2.mp4
// https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview.mp4
// https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview-1.mp4
const slides = [
  { id: 1, type: "video" as const, src: "/videos/hero-1.mov" },
  { id: 2, type: "video" as const, src: "/videos/hero-2.mov" },
  { id: 3, type: "video" as const, src: "/videos/hero-3.mov" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          {slide.type === "video" ? (
            <video autoPlay muted loop playsInline src={slide.src} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={slide.src} alt="Ivoire Tissue Paper" />
          )}
        </div>
      ))}

      <div className="hero-arrows">
        <button className="hero-arrow" onClick={goPrev} aria-label="Previous">
          ‹
        </button>
        <button className="hero-arrow" onClick={goNext} aria-label="Next">
          ›
        </button>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? "active" : ""}`}
            onClick={() => { setCurrent(index); }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
