

"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { newsDatabase } from "@/app/lib/newsDatabase";
import { useTranslation } from "@/app/lib/useTranslation";

// 搜索索引（静态页 + 新闻页 + 大类页）
// const staticPages = [
//   { title: "Home", url: "/", type: "Page" },
//   { title: "About Ivoiretissue", url: "/about-us", type: "Page" },
//   {
//     title: "Factory & Production Line",
//     url: "/about-us/factory-production-line",
//     type: "Page",
//   },
//   // { title: "Certification", url: "/about-us/certification", type: "Page" },
//   { title: "Why Bamboo", url: "/why-bamboo", type: "Page" },
//   { title: "FAQ", url: "/services/faq", type: "Page" },
//   { title: "Contact Us", url: "/contact-us", type: "Page" },
//   { title: "Careers", url: "/career", type: "Page" }, // 👈 新增这行
//   { title: "All Products", url: "/products", type: "Category" },
//   { title: "Bamboo Products", url: "/products/bamboo", type: "Category" },
//   { title: "Virgin Pulp Products", url: "/products/virgin", type: "Category" },
//   { title: "Recycled Products", url: "/products/recycle", type: "Category" },
//   { title: "Mixed Wood Products", url: "/products/mixed", type: "Category" },
// ];

export default function Header() {
  const { t, locale, setLocale } = useTranslation();

  const toggleLanguage = () => {
    setLocale(locale === "fr" ? "en" : "fr");
  }

  const router = useRouter();
  const pathname = usePathname();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenus, setExpandedMobileMenus] = useState<
    Record<string, boolean>
  >({});
  const staticPages = useMemo(
    () => [
      { title: t("headerHome"), url: "/", type: t("headerSearchTypePage") },
      {
        title: t("headerAboutIvoire"),
        url: "/about-us",
        type: t("headerSearchTypePage"),
      },
      {
        title: t("headerFactoryProduction"),
        url: "/about-us/factory-production-line",
        type: t("headerSearchTypePage"),
      },
      {
        title: t("headerWhyBamboo"),
        url: "/why-bamboo",
        type: t("headerSearchTypePage"),
      },
      {
        title: t("headerFaq"),
        url: "/services/faq",
        type: t("headerSearchTypePage"),
      },
      {
        title: t("headerContactUs"),
        url: "/contact-us",
        type: t("headerSearchTypePage"),
      },
      {
        title: t("headerCareers"),
        url: "/career",
        type: t("headerSearchTypePage"),
      },
      {
        title: t("headerViewAllProducts"),
        url: "/products",
        type: t("headerSearchTypeCategory"),
      },
      {
        title: t("headerBambooProducts"),
        url: "/products/bamboo",
        type: t("headerSearchTypeCategory"),
      },
      {
        title: t("headerVirginProducts"),
        url: "/products/virgin",
        type: t("headerSearchTypeCategory"),
      },
      {
        title: t("headerRecycledProducts"),
        url: "/products/recycle",
        type: t("headerSearchTypeCategory"),
      },
      {
        title: t("headerMixedProducts"),
        url: "/products/mixed",
        type: t("headerSearchTypeCategory"),
      },
    ],
    [t],
  );

  const searchIndex = useMemo(() => {
    const newsItems = Object.keys(newsDatabase).map((id) => ({
      title: newsDatabase[id].title,
      url: `/news/${id}`,
      type: t("headerSearchTypeNews"),
    }));
    return [...staticPages, ...newsItems];
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchIndex
      .filter((item) => item.title.toLowerCase().includes(query))
      .slice(0, 8);
  }, [searchQuery, searchIndex]);

  const closeAll = () => {
    setIsSearchOpen(false);
    setIsMobileMenuOpen(false);
    setSearchQuery("");
  };

  useEffect(() => {
    closeAll();
  }, [pathname]);

  useEffect(() => {
    if (isSearchOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSearchOpen, isMobileMenuOpen]);

  const toggleMobileMenu = (menu: string) => {
    setExpandedMobileMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --global-palette1: #00a496; 
          --global-palette2: #008075; 
          --global-palette3: #1A202C; 
          --global-palette4: #2D3748; 
          --global-palette8: #f8f9fa; 
          --global-palette9: #ffffff; 
          --global-content-width: 1440px;
          --global-content-edge-padding: 20px;
          --global-primary-nav-font-family: 'Poppins', sans-serif;
        }
        #masthead { position: sticky; top: 0; z-index: 1100; background: #fff; width: 100%; }
        .site-main-header-wrap .site-header-row-container-inner { background: var(--global-palette1); transition: all 0.3s; }
        .site-main-header-inner-wrap { min-height: 80px; display: flex; align-items: center; justify-content: space-between; }
        .site-container { max-width: var(--global-content-width); margin: 0 auto; padding: 0 var(--global-content-edge-padding); width: 100%; }
        .site-header-row { display: flex; justify-content: space-between; width: 100%; }
        .site-header-section { display: flex; align-items: center; }
        .site-branding img {
  width: 240px;      /* 这里设置你想要的放大后的宽度 */
  height: 60px;      /* 这里设置为与 Header 高度匹配的值 (稍微小一点留点边距) */
  display: block;
  object-fit: contain; /* 改为 contain，保持完整，或者用 cover 进行裁剪 */
  object-position: center;
}
        .kadence-svg-iconset svg { height: 1em; width: 1em; fill: currentColor; }

        .main-navigation .primary-menu-container > ul { display: flex; list-style: none; margin: 0; padding: 0; align-items: center; height: 100%; }
        .main-navigation .primary-menu-container > ul > li { position: relative; height: 100%; display: flex; align-items: center; }
        .main-navigation .primary-menu-container > ul > li > a { 
          padding: 0 1em; color: var(--global-palette9); font-weight: 700; font-size: 16px; 
          font-family: var(--global-primary-nav-font-family); text-transform: uppercase; text-decoration: none;
          display: flex; align-items: center; height: 100%; transition: all 0.2s;
        }
        .main-navigation .primary-menu-container > ul > li > a:hover { color: var(--global-palette9); }
        .nav-drop-title-wrap { display: flex; align-items: center; gap: 4px; }

        .header-navigation ul ul.sub-menu { 
          position: absolute; top: 100%; left: 0; background: #fff; box-shadow: 0 2px 13px rgba(0,0,0,0.1); 
          list-style: none; margin: 0; padding: 0; min-width: 240px; 
          opacity: 0; visibility: hidden; transform: translateY(10px); transition: all 0.2s ease; z-index: 1000;
        }
        .header-navigation ul li:hover > ul.sub-menu { opacity: 1; visibility: visible; transform: translateY(0); }
        .header-navigation ul ul li { border-bottom: 1px solid #f1f1f1; }
        .header-navigation ul ul li:last-child { border-bottom: none; }
        .header-navigation ul ul li a { 
          display: block; padding: 12px 20px; color: var(--global-palette3); 
          font-weight: 400; text-transform: capitalize; text-decoration: none; transition: 0.2s;
        }
        .header-navigation ul ul li a:hover { background: var(--global-palette1); color: #fff; }

        .search-toggle-open, .menu-toggle-open { background: transparent; border: none; color: var(--global-palette9); cursor: pointer; padding: 0.5em; font-size: 20px; }
        .search-toggle-open:hover, .menu-toggle-open:hover { color: var(--global-palette2); }
        .header-mobile-divider { border-right: 1px solid rgba(255,255,255,0.3); height: 24px; margin: 0 10px; }

        .popup-drawer { position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 100000; opacity: 0; visibility: hidden; transition: all 0.3s ease; }
        .popup-drawer.active { opacity: 1; visibility: visible; }
        .popup-drawer .drawer-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.6); cursor: pointer; }
        
        #search-drawer .drawer-inner { 
          position: absolute; inset: 0; background: rgba(9,12,16,0.97); display: flex; flex-direction: column; 
          transform: translateY(-20px); transition: transform 0.3s ease;
        }
        #search-drawer.active .drawer-inner { transform: translateY(0); }
        #search-drawer .drawer-header { display: flex; justify-content: flex-end; padding: 20px; }
        #search-drawer .search-toggle-close { background: transparent; border: none; color: #fff; font-size: 32px; cursor: pointer; }
        #search-drawer .drawer-content { display: flex; justify-content: center; align-items: center; flex: 1; padding: 20px; }
        #search-drawer form { width: 100%; max-width: 800px; display: flex; align-items: center; border-bottom: 2px solid #555; position: relative; }
        #search-drawer input[type="search"] { flex: 1; background: transparent; border: none; color: #fff; font-size: 28px; padding: 15px 0; outline: none; }
        #search-drawer input[type="search"]::placeholder { color: #888; }
        #search-drawer .search-submit { background: transparent; border: none; color: #fff; cursor: pointer; font-size: 24px; }

        .live-search-results {
          position: absolute; top: 100%; left: 0; right: 0; background: #fff; border-radius: 8px; 
          margin-top: 15px; box-shadow: 0 15px 35px rgba(0,0,0,0.3); overflow: hidden; z-index: 101; text-align: left;
        }
        .live-search-item {
          display: flex; justify-content: space-between; align-items: center;
          padding: 16px 20px; border-bottom: 1px solid #f1f1f1; text-decoration: none; color: #333; transition: background 0.2s;
        }
        .live-search-item:last-child { border-bottom: none; }
        .live-search-item:hover { background: #f9f9f9; color: var(--global-palette1); }
        .live-search-title { font-size: 16px; font-weight: 500; }
        .live-search-type { font-size: 12px; color: #666; background: #eee; padding: 4px 10px; border-radius: 12px; }
        .no-results { padding: 20px; text-align: center; color: #888; font-size: 16px; }

        #mobile-drawer .drawer-inner { 
          position: absolute; top: 0; bottom: 0; right: 0; width: 100%; max-width: 400px; 
          background: #090c10; color: #fff; transform: translateX(100%); transition: transform 0.3s cubic-bezier(0.77, 0.2, 0.05, 1);
          display: flex; flex-direction: column; overflow-y: auto;
        }
        #mobile-drawer.active .drawer-inner { transform: translateX(0); }
        #mobile-drawer .drawer-header { display: flex; justify-content: flex-end; padding: 20px; }
        #mobile-drawer .menu-toggle-close { background: transparent; border: none; color: #fff; width: 24px; height: 24px; position: relative; cursor: pointer; }
        #mobile-drawer .toggle-close-bar { position: absolute; width: 100%; height: 2px; background: currentColor; top: 50%; left: 0; }
        #mobile-drawer .toggle-close-bar:first-child { transform: translateY(-50%) rotate(45deg); }
        #mobile-drawer .toggle-close-bar:last-child { transform: translateY(-50%) rotate(-45deg); }
        
        .mobile-navigation ul { list-style: none; padding: 0; margin: 0; }
        .mobile-navigation > div > ul > li { border-bottom: 1px solid rgba(255,255,255,0.1); }
        .mobile-navigation a { display: block; padding: 15px 20px; color: #fff; text-decoration: none; font-size: 16px; transition: 0.2s; }
        .mobile-navigation a:hover { background: var(--global-palette1); }
        .drawer-nav-drop-wrap { display: flex; justify-content: space-between; align-items: center; }
        .drawer-nav-drop-wrap a { flex: 1; }
        .drawer-sub-toggle { background: transparent; border: none; color: #fff; border-left: 1px solid rgba(255,255,255,0.1); padding: 0 20px; cursor: pointer; height: 100%; }
        .mobile-navigation ul.sub-menu { background: rgba(255,255,255,0.05); display: none; }
        .mobile-navigation ul.sub-menu.active { display: block; }
        .mobile-navigation ul.sub-menu a { padding-left: 40px; font-size: 14px; color: #ccc; }
        .mobile-navigation ul.sub-menu a:hover { color: #fff; }

        #main-header { display: none; }
        #mobile-header { display: block; }
        @media screen and (min-width: 1025px) {
          #main-header { display: block; }
          #mobile-header { display: none; }
        }

        .language-toggle {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.65);
  color: #ffffff;
  cursor: pointer;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.5px;
  line-height: 1;
  transition: all 0.2s ease;
}

.language-toggle:hover {
  background: #ffffff;
  color: var(--global-palette1);
}

.mobile-language-toggle {
  padding: 7px 10px;
  font-size: 12px;
}
      `,
        }}
      />

      <header id="masthead" className="site-header" role="banner">
        {/* =======================
            1. Desktop Header
        ======================== */}
        <div
          id="main-header"
          className="site-header-wrap child-is-fixed"
          style={{ height: "80px" }}
        >
          <div className="site-header-inner-wrap kadence-sticky-header item-is-fixed item-at-start">
            <div className="site-header-upper-wrap">
              <div className="site-main-header-wrap site-header-row-container site-header-focus-item">
                <div className="site-header-row-container-inner">
                  <div className="site-container">
                    <div className="site-main-header-inner-wrap site-header-row">
                      {/* Logo */}
                      <div className="site-header-main-section-left site-header-section">
                        <div className="site-header-item">
                          <div className="site-branding">
                            <Link className="brand has-logo-image" href="/">
                              <img
                                width="240"
                                height="60"
                                src="/images/logo.png"
                                alt="Ivoiretissue Co., Ltd."
                                style={{
                                  width: "240px", // 保持你想要的宽度
                                  height: "60px", // 保持高度
                                  objectFit: "cover", // 保持裁剪
                                  position: "relative", // 启用定位
                                  top: "10px", // 👈 这个数值就是向下移动的距离，你可以试着改成 20px, 30px 等
                                  display: "block",
                                }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>

                      {/* Desktop Navigation & Search */}
                      <div className="site-header-main-section-right site-header-section">
                        <div className="site-header-item">
                          <nav className="main-navigation header-navigation">
                            <div className="primary-menu-container header-menu-container">
                              <ul id="primary-menu" className="menu">
                                <li>
                                  <Link href="/">{t("headerHome")}</Link>
                                </li>

                                {/* 💡 修改点：PRODUCTS 下拉菜单精简为四个数据材质大类 */}
                                <li className="menu-item-has-children">
                                  <Link href="/products">
                                    <span className="nav-drop-title-wrap">
                                      PRODUCTS
                                      <span className="kadence-svg-iconset svg-baseline">
                                        <svg
                                          viewBox="0 0 24 24"
                                          width="24"
                                          height="24"
                                        >
                                          <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="/products/bamboo">
                                        {t("headerBambooProducts")}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products/virgin">
                                        {t("headerVirginProducts")}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products/recycle">
                                        {t("headerRecycledProducts")}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products/mixed">
                                        {t("headerMixedProducts")}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/products">
                                        {t("headerViewAllProducts")}
                                      </Link>
                                    </li>
                                  </ul>
                                </li>

                                <li className="menu-item-has-children">
                                  <Link href="/about-us">
                                    <span className="nav-drop-title-wrap">
                                      {t("headerAboutUs")}
                                      <span className="kadence-svg-iconset svg-baseline">
                                        <svg
                                          viewBox="0 0 24 24"
                                          width="24"
                                          height="24"
                                        >
                                          <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                                        </svg>
                                      </span>
                                    </span>
                                  </Link>
                                  <ul className="sub-menu">
                                    <li>
                                      <Link href="/about-us">
                                        {t("headerAboutIvoire")}
                                      </Link>
                                    </li>
                                    <li>
                                      <Link href="/about-us/factory-production-line">
                                        {t("headerFactoryProduction")}
                                      </Link>
                                    </li>
                                    {/* <li>
                                      <Link href="/about-us/certification">
                                        Certification
                                      </Link>
                                    </li> */}
                                  </ul>
                                </li>

                                <li>
                                  <Link href="/why-bamboo">
                                    {t("headerWhyBamboo")}
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/news">{t("headerNews")}</Link>
                                </li>
                                <li>
                                  <Link href="/services/faq">
                                    {t("headerFaq")}
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/career">
                                    {t("headerCareers")}
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/contact-us">
                                    {t("headerContactUs")}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </nav>
                        </div>
                        <div className="site-header-item">
                          <button
                            type="button"
                            className="language-toggle"
                            onClick={toggleLanguage}
                            aria-label={
                              locale === "fr"
                                ? "Switch to English"
                                : "Passer au français"
                            }
                          >
                            {locale === "fr" ? "EN" : "FR"}
                          </button>
                        </div>
                        <div className="site-header-item">
                          <button
                            className="search-toggle-open"
                            onClick={() => setIsSearchOpen(true)}
                            aria-label={t("headerOpenSearch")}
                          >
                            <span className="kadence-svg-iconset">
                              <svg viewBox="0 0 24 24" width="24" height="24">
                                <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =======================
            2. Mobile Header
        ======================== */}
        <div id="mobile-header" className="site-mobile-header-wrap">
          <div className="site-header-inner-wrap">
            <div
              className="site-main-header-wrap site-header-row-container-inner"
              style={{ background: "var(--global-palette1)" }}
            >
              <div className="site-container">
                <div className="site-main-header-inner-wrap site-header-row">
                  <div className="site-header-main-section-left site-header-section">
                    <div className="site-branding">
                      <Link className="brand has-logo-image" href="/">
                        <img
                          width="160"
                          height="42"
                          src="/images/logo.png"
                          alt="Ivoiretissue Co., Ltd."
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="site-header-main-section-right site-header-section">
                    <div className="site-header-item">
                      <button
                        type="button"
                        className="language-toggle"
                        onClick={toggleLanguage}
                        aria-label={
                          locale === "fr"
                            ? "Switch to English"
                            : "Passer au français"
                        }
                      >
                        {locale === "fr" ? "EN" : "FR"}
                      </button>
                    </div>
                    <div className="site-header-item">
                      <button
                        className="search-toggle-open"
                        onClick={() => setIsSearchOpen(true)}
                      >
                        <span className="kadence-svg-iconset">
                          <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="header-mobile-divider"></div>
                    <div className="site-header-item">
                      <button
                        className="menu-toggle-open"
                        onClick={() => setIsMobileMenuOpen(true)}
                      >
                        <span className="kadence-svg-iconset">
                          <svg viewBox="0 0 24 28" width="24" height="28">
                            <path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =======================
          3. Mobile Menu Drawer
      ======================== */}
      <div
        id="mobile-drawer"
        className={`popup-drawer ${isMobileMenuOpen ? "active" : ""}`}
      >
        <div className="drawer-overlay" onClick={closeAll}></div>
        <div className="drawer-inner">
          <div className="drawer-header">
            <button className="menu-toggle-close" onClick={closeAll}>
              <span className="toggle-close-bar"></span>
              <span className="toggle-close-bar"></span>
            </button>
          </div>
          <div className="drawer-content">
            <nav className="mobile-navigation">
              <ul>
                <li>
                  <Link href="/">{t("headerHome")}</Link>
                </li>

                {/* 💡 修改点：手机端同步改为四大类别 */}
                <li>
                  <div className="drawer-nav-drop-wrap">
                    <Link href="/products">{t("headerProducts")}</Link>
                    <button
                      className="drawer-sub-toggle"
                      onClick={() => toggleMobileMenu("products")}
                    >
                      <span className="kadence-svg-iconset">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <ul
                    className={`sub-menu ${expandedMobileMenus["products"] ? "active" : ""}`}
                  >
                    <li>
                      <Link href="/products/bamboo">
                        {t("headerBambooProducts")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/virgin">
                        {t("headerVirginProducts")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/recycle">
                        {t("headerRecycledProducts")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/mixed">
                        {t("headerMixedProducts")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/products">{t("headerViewAllProducts")}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="drawer-nav-drop-wrap">
                    <Link href="/about-us">{t("headerAboutUs")}</Link>
                    <button
                      className="drawer-sub-toggle"
                      onClick={() => toggleMobileMenu("about")}
                    >
                      <span className="kadence-svg-iconset">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <ul
                    className={`sub-menu ${expandedMobileMenus["about"] ? "active" : ""}`}
                  >
                    <li>
                      <Link href="/about-us">{t("headerAboutIvoire")}</Link>
                    </li>
                    <li>
                      <Link href="/about-us/factory-production-line">
                        {t("headerFactoryProduction")}
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/about-us/certification">Certification</Link>
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link href="/why-bamboo">{t("headerWhyBamboo")}</Link>
                </li>
                <li>
                  <Link href="/news">{t("headerNews")}</Link>
                </li>
                <li>
                  <Link href="/services/faq">{t("headerFaq")}</Link>
                </li>
                <li>
                  <Link href="/career">{t("headerCareers")}</Link>
                </li>
                <li>
                  <Link href="/contact-us">{t("headerContactUs")}</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* =======================
          4. Fullscreen Search Drawer (Live Search)
      ======================== */}
      <div
        id="search-drawer"
        className={`popup-drawer popup-drawer-layout-fullwidth ${isSearchOpen ? "active" : ""}`}
      >
        <div className="drawer-overlay" onClick={closeAll}></div>
        <div className="drawer-inner">
          <div className="drawer-header">
            <button
              className="search-toggle-close"
              onClick={closeAll}
              aria-label={t("headerCloseSearch")}
            >
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="currentColor"
              >
                <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
              </svg>
            </button>
          </div>

          <div className="drawer-content">
            <div
              style={{ width: "100%", maxWidth: "800px", position: "relative" }}
            >
              <form
                role="search"
                action="/search"
                style={{
                  display: "flex",
                  width: "100%",
                  borderBottom: "2px solid #555",
                }}
              >
                <label style={{ flex: 1 }}>
                  <span
                    className="screen-reader-text"
                    style={{ display: "none" }}
                  >
                    {t("headerSearchFor")}
                  </span>
                  <input
                    type="search"
                    className="search-field"
                    placeholder={t("headerSearchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus={isSearchOpen}
                  />
                  <input type="hidden" name="s" value={searchQuery} />
                </label>
                <button
                  type="submit"
                  className="search-submit"
                  aria-label={t("headerSubmitSearch")}
                >
                  <span className="kadence-search-icon-wrap">
                    <svg
                      viewBox="0 0 26 28"
                      width="26"
                      height="28"
                      fill="currentColor"
                    >
                      <path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM26 26c0 1.094-0.906 2-2 2-0.531 0-1.047-0.219-1.406-0.594l-5.359-5.344c-1.828 1.266-4.016 1.937-6.234 1.937-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-0.672 4.406-1.937 6.234l5.359 5.359c0.359 0.359 0.578 0.875 0.578 1.406z"></path>
                    </svg>
                  </span>
                </button>
              </form>

              {searchQuery.trim().length > 0 && (
                <div className="live-search-results">
                  {searchResults.length > 0 ? (
                    searchResults.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url}
                        className="live-search-item"
                        onClick={closeAll}
                      >
                        <span className="live-search-title">{item.title}</span>
                        <span className="live-search-type">{item.type}</span>
                      </Link>
                    ))
                  ) : (
                    <div className="no-results">
                      {t("headerNoResultsPrefix")} "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}