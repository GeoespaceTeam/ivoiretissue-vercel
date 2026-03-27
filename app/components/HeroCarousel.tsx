"use client";

import { useState, useEffect, useCallback } from "react";

// TODO: 替换成你的实际视频路径，放在 public/videos/ 下
const slides = [
  { id: 1, video: "/videos/hero-1.mp4" },
  { id: 2, video: "/videos/hero-2.mp4" },
  { id: 3, video: "/videos/hero-3.mp4" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goNext();
          return 0;
        }
        return prev + 2; // ~5 seconds per slide (100/2 * 100ms)
      });
    }, 100);

    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === current ? "active" : ""}`}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            src={slide.video}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Ivoire Tissue Paper</h1>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <div className="hero-arrows">
        <button className="hero-arrow" onClick={goPrev} aria-label="Previous slide">
          ‹
        </button>
        <button className="hero-arrow" onClick={goNext} aria-label="Next slide">
          ›
        </button>
      </div>

      {/* Progress bar */}
      <div className="hero-progress">
        <div
          className="hero-progress-bar"
          style={{ width: `${((current + progress / 100) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
