"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./Header.module.css";

// ============================================================
// NAV — exact dongshi structure (6 items):
//
//   东实 item0  关于我们  (submenu) → About Us
//   东实 item1  东实家族  (submenu) → Ivoire Family
//   东实 item2  东实外贸  (link)    → Foreign Trade
//   东实 item3  线上商城  (link)    → Online Store
//   东实 item4  东实国际  (link)    → International  ← external
//   东实 item5  联系我们  (link)    → Contact Us
// ============================================================
const navItems = [
  // item0 — 关于我们 (submenu)
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Company Profile", href: "/about-us" },
      { label: "Development History", href: "/development-history" },
      { label: "Our Culture", href: "/our-culture" },
      { label: "Certifications", href: "/certifications" }, // 之前是 /about-us#certificate
    ],
  },

  // item1 — 东实家族 (submenu)
  {
    label: "Ivoire Family",
    href: "/brand-concept", // 点击主菜单默认去品牌理念
    children: [
      { label: "Brand Concept", href: "/brand-concept" }, // 独立页面 1
      { label: "Theme Customization", href: "/theme-customization" }, // 独立页面 2
    ],
  },

  // item2 — 东实外贸 (plain link)
  { label: "Foreign Trade", href: "/customer-zone" },

  // item3 — 线上商城 (plain link)
  // 目标网页的 header 里这只是一个点击跳转的单链接，不像 footer 拆了3个
  { label: "Online Store", href: "/store" },

  // item4 — 东实国际 (external link)
  { label: "International", href: "https://ivoiretissue.com", external: true },

  // item5 — 联系我们 (plain link)
  { label: "Contact Us", href: "/contact-us" },
] as const;
// ============================================================
// COMPONENT
// ============================================================
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileSub = (label: string) =>
    setExpandedMobile((prev) => (prev === label ? null : label));

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedMobile(null);
  };

  return (
    <>
      {/* ── Desktop header ── */}
      <header className={`${s.siteHeader} ${scrolled ? s.scrolled : ""}`}>
        <div className={s.inner}>
          {/* Logo — dongshi: header0-logo */}
          <div className={s.logo}>
            <Link href="/" onClick={closeMobile}>
              <Image
                src="/images/logo.png"
                alt="Ivoire Tissue Paper"
                width={160}
                height={42}
                priority
                style={{ width: "auto", height: "42px" }}
              />
            </Link>
          </div>

          {/* Desktop nav — dongshi: header0-menu, ant-menu-horizontal */}
          <nav aria-label="Primary navigation">
            <ul className={s.desktopNav}>
              {navItems.map((item) =>
                "children" in item ? (
                  /* Submenu item (item0, item1) */
                  <li key={item.label}>
                    <span className={s.navTrigger}>
                      {item.label}
                      <span className={s.arrow} aria-hidden>
                        ▾
                      </span>
                    </span>
                    <ul className={s.dropdown}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : "external" in item ? (
                  /* External link (item4) */
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  /* Plain link (item2, item3, item5) */
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={s.toggle}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              style={
                mobileOpen
                  ? { transform: "rotate(45deg) translate(5px, 5px)" }
                  : undefined
              }
            />
            <span style={mobileOpen ? { opacity: 0 } : undefined} />
            <span
              style={
                mobileOpen
                  ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                  : undefined
              }
            />
          </button>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`${s.overlay} ${mobileOpen ? s.open : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className={s.mobileNav}>
          {navItems.map((item) =>
            "children" in item ? (
              <li key={item.label}>
                <button
                  className={s.mobileTrigger}
                  onClick={() => toggleMobileSub(item.label)}
                  aria-expanded={expandedMobile === item.label}
                >
                  <span>{item.label}</span>
                  <span>{expandedMobile === item.label ? "−" : "+"}</span>
                </button>
                {expandedMobile === item.label && (
                  <div className={s.mobileSubMenu}>
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={closeMobile}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={item.label}>
                {"external" in item ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} onClick={closeMobile}>
                    {item.label}
                  </Link>
                )}
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
}
