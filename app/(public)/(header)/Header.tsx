"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Our Company", href: "/about-us" },
      { label: "Corporate Responsibility", href: "/corporate-responsibility" },
    ],
  },
  {
    label: "Our Products",
    href: "/products",
    children: [
      { label: "Bamboo Products", href: "/products/bamboo" },
      { label: "Virgin Products", href: "/products/virgin" },
      { label: "Recycle Products", href: "/products/recycle" },
      { label: "Mixed Products", href: "/products/mixed" },
    ],
  },
  { label: "Customer Zone", href: "/customer-zone" },
  {
    label: "Career",
    href: "#",
    children: [
      { label: "Working at Ivoire Tissue", href: "/opportunity" },
      { label: "Open Positions", href: "/career" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen, searchOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            {/* TODO: 替换成你的logo图片路径 */}
            <Image
              src="/images/logo.png"
              alt="Ivoire Tissue Paper"
              width={160}
              height={55}
              priority
              style={{ height: 55, width: "auto" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav>
            <ul className="main-nav">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    {item.label}
                    {item.children && (
                      <span className="dropdown-arrow">▾</span>
                    )}
                  </Link>
                  {item.children && (
                    <ul className="nav-dropdown">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link href={child.href}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <select className="lang-select" defaultValue="en">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="zh-CN">Chinese</option>
            </select>

            <button
              className="search-toggle"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu Toggle"
            >
              <span
                style={
                  mobileOpen
                    ? { transform: "rotate(45deg) translate(5px, 5px)" }
                    : {}
                }
              />
              <span style={mobileOpen ? { opacity: 0 } : {}} />
              <span
                style={
                  mobileOpen
                    ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                    : {}
                }
              />
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <div className={`search-overlay ${searchOpen ? "active" : ""}`}>
        <button
          className="search-close"
          onClick={() => setSearchOpen(false)}
          aria-label="Close search"
        >
          ✕
        </button>
        <input
          type="text"
          placeholder="Search..."
          autoFocus={searchOpen}
          onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
        />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}>
        <ul className="mobile-nav">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <a
                    onClick={() =>
                      setMobileSubOpen(
                        mobileSubOpen === item.label ? null : item.label
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {item.label}{" "}
                    <span style={{ float: "right" }}>
                      {mobileSubOpen === item.label ? "−" : "+"}
                    </span>
                  </a>
                  {mobileSubOpen === item.label && (
                    <ul className="sub-menu">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
