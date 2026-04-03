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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner">
          <div className="header-logo">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Ivoire Tissue Paper"
                width={160}
                height={42}
                priority
                style={{ height: 42, width: "auto" }}
              />
            </Link>
          </div>

          <nav>
            <ul className="main-nav">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <div className="nav-trigger">
                        {item.label}
                        <span className="nav-arrow">▾</span>
                      </div>
                      <ul className="nav-dropdown">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link href={child.href}>{child.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu Toggle"
          >
            <span style={mobileOpen ? { transform: "rotate(45deg) translate(5px, 5px)" } : {}} />
            <span style={mobileOpen ? { opacity: 0 } : {}} />
            <span style={mobileOpen ? { transform: "rotate(-45deg) translate(5px, -5px)" } : {}} />
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}>
        <ul className="mobile-nav">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <div
                    className="mobile-nav-trigger"
                    onClick={() =>
                      setMobileSubOpen(mobileSubOpen === item.label ? null : item.label)
                    }
                  >
                    <span>{item.label}</span>
                    <span>{mobileSubOpen === item.label ? "−" : "+"}</span>
                  </div>
                  {mobileSubOpen === item.label && (
                    <div className="mobile-sub-menu">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} onClick={() => setMobileOpen(false)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
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
