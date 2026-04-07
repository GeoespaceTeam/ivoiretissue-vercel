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
    <section className={s.heroSection}>
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
            <img src={slide.src} alt={slide.alt ?? `Slide ${slide.id}`} />
          )}
        </div>
      ))}

      {/* ── Left arrow ── */}
      {/* dongshi: position absolute, left: 100px, top: 50% */}
      <button
        className={s.arrowLeft}
        onClick={goPrev}
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* ── Right arrow ── */}
      {/* dongshi: position absolute, right: 100px, top: 50% */}
      <button className={s.arrowRight} onClick={goNext} aria-label="Next slide">
        ›
      </button>

      {/* ── Dots ── */}
      {/* dongshi: slick-dots-bottom, display: block */}
      <ul className={s.dots} role="tablist" aria-label="Carousel navigation">
        {slides.map((_, index) => (
          <li key={index} role="presentation">
            <button
              className={`${s.dot} ${index === current ? s.active : ""}`}
              onClick={() => setCurrent(index)}
              role="tab"
              aria-selected={index === current}
              aria-label={`Go to slide ${index + 1}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
