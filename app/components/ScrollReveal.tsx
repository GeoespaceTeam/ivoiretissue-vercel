"use client";

// ============================================================
// ScrollReveal.tsx
// Dongshi animation replication:
//   - Elements start opacity:0 + translateX/Y offset
//   - Animate to visible when scrolled into viewport
//   - Repeats animation EVERY TIME element enters viewport
//   - Supports stagger via `delay` prop
//   - CSS-in-JS via inline styles — NO separate CSS file
// ============================================================

import { useRef, useEffect, useState, CSSProperties, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  /** Stagger delay in ms — use multiples of 100 for sequential effects */
  delay?: number;
  /** Animation origin direction */
  direction?: "up" | "left" | "right" | "none";
  /** Animation duration in ms */
  duration?: number;
  /** Pass-through className (for layout classes from globals.css) */
  className?: string;
  /** Pass-through style (merged with animation styles) */
  style?: CSSProperties;
  /** IntersectionObserver threshold — default 0.12 */
  threshold?: number;
}

// dongshi transform values (approximate from HTML)
const TRANSFORMS: Record<string, string> = {
  up: "translateY(30px)",
  left: "translateX(30px)", // slides in from the right
  right: "translateX(-30px)", // slides in from the left
  none: "none",
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  duration = 650,
  className,
  style,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 关键修改：让 visible 状态完全跟随元素是否在可视区域内
        // 进入视野时为 true（播放入场动画），离开视野时为 false（重置状态准备下一次播放）
        setVisible(entry.isIntersecting);
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animStyle: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translate(0, 0)" : TRANSFORMS[direction],
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <div ref={ref} className={className} style={animStyle}>
      {children}
    </div>
  );
}
