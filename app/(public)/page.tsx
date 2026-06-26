
"use client";
import ScrollReveal from "../components/ScrollReveal";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslation } from "../lib/useTranslation";

import {
  LuSprout,
  LuWind,
  LuScaling,
  LuDroplet,
  LuRecycle,
  LuCloud,
} from "react-icons/lu";

type Slide = { id: number; type: string; src: string };

const slides = [
  {
    id: 1,
    type: "youtube",
    // 注意：loop=1 在 YouTube 里必须配合 playlist=当前视频ID 才能生效
    src: "https://www.youtube.com/embed/Unop6aekL1M?autoplay=1&mute=1&controls=0&loop=1&playlist=NBseykhGtkI&playsinline=1",
  },
  // {
  //   id: 2,
  //   type: "youtube",
  //   src: "https://www.youtube.com/embed/FkO4kFba1k4?autoplay=1&mute=1&controls=0&loop=1&playlist=FkO4kFba1k4&playsinline=1",
  // },
  // {
  //   id: 3,
  //   type: "youtube",
  //   src: "https://www.youtube.com/embed/Jbw4Ur_6BSQ?autoplay=1&mute=1&controls=0&loop=1&playlist=Jbw4Ur_6BSQ&playsinline=1",
  // },
];
// ============================================================
// 📌 核心 SVG 图标
// ============================================================
import { GiBamboo } from "react-icons/gi"; // 竹子
import { MdFactory } from "react-icons/md"; // 工厂/企业
import { BsShieldFillCheck } from "react-icons/bs"; // 盾牌认证
import { FaShip, FaUsers } from "react-icons/fa"; // 轮船、团队
const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CheckCircle = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// ============================================================
// 📌 页面数据 (Ivoire Tissue)
// ============================================================
// const products = [
//   {
//     title: "Bamboo Toilet Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Toilet-paper-new-1.png",
//     link: "/products/bamboo-toilet-paper",
//   },
//   {
//     title: "Bamboo Kitchen Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Kitchen-Paper-2.png",
//     link: "/products/bamboo-kitchen-paper",
//   },
//   {
//     title: "Bamboo Facial Tissue",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Bamboo-facial-tissue-new-1.png",
//     link: "/products/bamboo-facial-tissue",
//   },
//   {
//     title: "Soft Pack Facial Tissue",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Soft-Pack-Facial-Tissue-1.png",
//     link: "/products/soft-pack-facial-tissue",
//   },
//   {
//     title: "N-Fold Hand Towel",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/N-Fold-1.png",
//     link: "/products/n-fold-hand-towel",
//   },
//   {
//     title: "Hand Paper Towel",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Hand-Paper-Towel-2.png",
//     link: "/products/hand-paper-towel",
//   },
//   {
//     title: "Central Pull Tissue Paper",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/all-1.png",
//     link: "/products/central-pull-tissue-paper",
//   },
//   {
//     title: "Mini Jumbo Toilet Rolls",
//     img: "https://www.cndonseapaper.com/wp-content/uploads/2025/04/Mini-Jumbo-Roll.png",
//     link: "/products/mini-jumbo-toilet-rolls",
//   },
// ];


// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default function HomePage() {
  const { t } = useTranslation();

 const products = [
   {
     title: t("homeProduct1Title"),
     img: "/images/bambooproducts.png",
     link: "/products/bamboo",
   },
   {
     title: t("homeProduct2Title"),
     img: "/images/virginproducts.png",
     link: "/products/virgin",
   },
   {
     title: t("homeProduct3Title"),
     img: "/images/recycleproducts.png",
     link: "/products/recycle",
   },
   {
     title: t("homeProduct4Title"),
     img: "/images/mixedproducts.png",
     link: "/products/mixed",
   },
 ];


 const stats = [
   { num: "4+", label: t("homeStat1Label") },
   { num: "5", label: t("homeStat2Label") },
   { num: "3,000+", label: t("homeStat3Label") },
   { num: "1,600+", label: t("homeStat4Label") },
   { num: "2", label: t("homeStat5Label") },
 ];

 
const powerIcons = [
  { icon: LuSprout, title: t("homeBambooPower1") },
  { icon: LuWind, title: t("homeBambooPower2") },
  { icon: LuScaling, title: t("homeBambooPower3") },
  { icon: LuDroplet, title: t("homeBambooPower4") },
  { icon: LuRecycle, title: t("homeBambooPower5") },
  { icon: LuCloud, title: t("homeBambooPower6") },
];

  

  const whyChoose = [
    {
      icon: GiBamboo,
      title: t("homeWhy1Title"),
      sub: t("homeWhy1Sub"),
      desc: t("homeWhy1Desc"),
    },
    {
      icon: BsShieldFillCheck,
      title: t("homeWhy2Title"),
      sub: t("homeWhy2Sub"),
      desc: t("homeWhy2Desc"),
    },
    {
      icon: FaShip,
      title: t("homeWhy3Title"),
      sub: t("homeWhy3Sub"),
      desc: t("homeWhy3Desc"),
    },
    {
      icon: MdFactory,
      title: t("homeWhy4Title"),
      sub: t("homeWhy4Sub"),
      desc: t("homeWhy4Desc"),
    },
    {
      icon: FaUsers,
      title: t("homeWhy5Title"),
      sub: t("homeWhy5Sub"),
      desc: t("homeWhy5Desc"),
    },
  ];

  // 把这段代码补在 products 数组附近即可
 const exhibitionImages = [
   {
     src: "/images/exhibition/1.jpg",
     title: t("homeExhibition1Title"),
   },
   {
     src: "/images/exhibition/2.jpg",
     title: t("homeExhibition2Title"),
   },
   {
     src: "/images/exhibition/4.jpg",
     title: t("homeExhibition3Title"),
   },
 ];
  // 👇 插入轮播控制逻辑 👇
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播（仅当 slides 大于 1 时才开启）
  useEffect(() => {
    if (slides.length <= 1) return; // 如果只有一个视频，直接退出，不设定时器

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);
  // 👆 逻辑插入结束 👆

  return (
    <main
      style={{
        paddingTop: "0px",
        width: "100%",
        overflowX: "hidden",
        fontFamily: "Poppins, -apple-system, sans-serif",
      }}
    >
      {/* 🔴 极致防弹 CSS：强行锁定 100% 像素级布局 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * { box-sizing: border-box; }
        .hm-container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        
        /* 颜色变量 (从原版提取) */
        :root {
          --c-dark-green: #004e46;
          --c-brand-green: #00a496;
          --c-hover-green: #00dba0;
          --c-light-bg: #f0f8f3;
          --c-text-dark: #323232;
        }

        /* 1. Hero */
        // .hm-hero { background-color: var(--c-dark-green); padding: 120px 20px; text-align: center; color: #fff; }
        // .hm-hero h1 { font-size: 60px; font-weight: 800; margin: 0 0 10px; line-height: 1.2; text-transform: uppercase; }
        // .hm-hero h1 span { color: var(--c-brand-green); }
        // .hm-hero p { font-size: 18px; margin: 0 0 40px; opacity: 0.9; }

        /* 👇 1. Hero 视频轮播专属样式 👇 */
        .hm-hero-carousel { position: relative; height: 90vh; min-height: 600px; width: 100%; overflow: hidden; background: #000; }
        .hm-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.8s ease-in-out; z-index: 1; }
        .hm-slide.active { opacity: 1; z-index: 2; }
        .hm-slide video { width: 100%; height: 100%; object-fit: cover; }
        
        /* 统一的前景遮罩和文字层，确保文字清晰 */
       /* 加上 justify-content: center 让大盒子水平居中 */
/* 找到这一行 */
.hm-slide-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.15); display: flex; align-items: center; justify-content: center; z-index: 3; }
/* 删掉 padding-left，换成 text-align: center 让内部文字居中 */
.hm-hero-content { position: relative; color: #fff; text-align: center; width: 100%; max-width: 1200px; padding: 0 20px; }
        
        /* 左右切换箭头 */
        .hm-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.3); color: white; border: none; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; z-index: 10; font-size: 20px; transition: 0.3s; display: flex; align-items: center; justify-content: center; }
        .hm-nav-btn:hover { background: var(--c-brand-green); }
        .hm-nav-prev { left: 30px; }
        .hm-nav-next { right: 30px; }
        
        /* 底部指示小圆点 */
        .hm-dots { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; gap: 12px; z-index: 10; }
        .hm-dot { width: 12px; height: 12px; border-radius: 50%; background: rgba(255,255,255,0.4); border: 2px solid transparent; cursor: pointer; transition: 0.3s; padding: 0; }
        .hm-dot.active { background: transparent; border-color: var(--c-brand-green); transform: scale(1.3); }
        
        @media (max-width: 768px) {
          .hm-nav-btn { display: none; } /* 手机端隐藏箭头，只留圆点 */
        }
        /* 👆 CSS 替换结束 👆 */
        
        .hm-btn { display: inline-block; background: var(--c-brand-green); color: #fff; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 18px; font-weight: 700; text-transform: uppercase; transition: all 0.3s; border: 2px solid var(--c-brand-green); }
        .hm-btn:hover { background: transparent; color: var(--c-brand-green); }

        /* 2. About & Stats */
        .hm-about-section { padding: 80px 0; background: #fff; }
       .hm-about-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 50px; align-items: center; margin-bottom: 60px; }
        .hm-about-vid { width: 100%; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .hm-about-text h2 { font-size: 46px; color: var(--c-dark-green); font-weight: 800; margin: 0 0 20px; text-transform: uppercase; }
        .hm-about-text p { font-size: 18px; color: var(--c-text-dark); line-height: 1.8; margin-bottom: 20px; }
        
        /* 👇 新增：把Logo和按钮包在一起横向排列 👇 */
        /* 👇 修改：改为垂直排列（column），这样Logo在上面，按钮在下面，且整体居中 👇 */
.hm-certs-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 30px; margin-top: 30px; width: 100%; }

/* Logo 保持横向居中排列 */
.hm-certs { display: flex; gap: 25px; align-items: center; justify-content: center; width: 100%; }

/* 👇 新增：专门为这个区块内的 Learn More 按钮设置超大样式 👇 */
.hm-certs-wrap .hm-btn {
    padding: 18px 50px !important; /* 👈 更大的内边距让按钮更丰满 */
    font-size: 20px !important; /* 👈 放大文字 */
    margin: 0 auto; /* 确保自身居中 */
}
        /* 👇 修改：Logo高度从50px飙升到75px 👇 */
        .hm-certs img { height: 70px; object-fit: contain; }
        .hm-certs { display: flex; gap: 20px; align-items: center; }
        .hm-certs img { height: 100px; object-fit: contain; }

        .hm-stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; text-align: center; border-top: 1px solid #eee; padding-top: 50px; }
        .hm-stat-num { font-size: 40px; font-weight: 800; color: var(--c-brand-green); margin-bottom: 5px; }
        .hm-stat-label { font-size: 14px; font-weight: 700; color: var(--c-text-dark); text-transform: uppercase; }

        /* 3. Products (虚线圆圈排版) */
        .hm-products { background-color: var(--c-light-bg); padding: 80px 0; text-align: center; }
        .hm-sec-title { font-size: 42px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 50px; text-transform: uppercase; }
        .hm-prod-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .hm-prod-card { background: #fff; border: 4px dashed var(--c-brand-green); border-radius: 500px; aspect-ratio: 1/1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; cursor: pointer; transition: all 0.3s; text-decoration: none; }
        .hm-prod-card:hover { background: var(--c-brand-green); border-color: #fff; }
        .hm-prod-card img { width: 60%; height: 120px; object-fit: contain; margin-bottom: 20px; transition: transform 0.5s; }
        .hm-prod-card:hover img { transform: scale(1.1); }
        .hm-prod-title { font-size: 18px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 10px; transition: color 0.3s; }
        .hm-prod-card:hover .hm-prod-title { color: #fff; }
        .hm-prod-link { font-size: 16px; font-weight: 700; color: var(--c-brand-green); display: flex; align-items: center; gap: 5px; transition: color 0.3s; }
        .hm-prod-card:hover .hm-prod-link { color: #fff; }

        /* 4. Power of Bamboo */
        .hm-power { background-color: var(--c-dark-green); padding: 80px 0; text-align: center; color: #fff; }
        .hm-power-title { font-size: 42px; font-weight: 800; margin: 0 0 10px; }
        .hm-power-sub { font-size: 18px; margin: 0 0 50px; opacity: 0.9; }
        .hm-power-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
        .hm-power-item { display: flex; flex-direction: column; align-items: center; }
        .hm-power-item img { width: 80px; height: 80px; margin-bottom: 20px; }
        .hm-power-item h5 { font-size: 15px; font-weight: 700; margin: 0; line-height: 1.4; }

        /* 5. OEM / ODM */
        .hm-oem { background: #fff; padding: 80px 0; }
        .hm-oem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hm-oem-text h2 { font-size: 42px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 10px; }
        .hm-oem-text h3 { font-size: 24px; color: var(--c-brand-green); margin: 0 0 20px; }
        .hm-oem-text ul { list-style: none; padding: 0; margin: 0 0 30px; }
        .hm-oem-text li { display: flex; align-items: flex-start; gap: 10px; font-size: 16px; color: var(--c-text-dark); margin-bottom: 15px; line-height: 1.6; font-weight: 500; }
        .hm-oem-text li svg { color: var(--c-brand-green); }
        .hm-oem-img { width: 100%; height: auto; border-radius: 12px; }

        /* 6. Why Choose Us */
        .hm-why { background-color: var(--c-light-bg); padding: 80px 0; }
        .hm-why-grid { display: grid; grid-template-columns: 35% 60%; gap: 5%; align-items: start; }
        .hm-why-tall-img { width: 100%; height: 100%; object-fit: cover; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .hm-why-content h2 { font-size: 42px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 10px; text-transform: uppercase; }
        .hm-why-content p { font-size: 18px; color: var(--c-text-dark); font-weight: 600; margin: 0 0 40px; }
        .hm-why-items { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .hm-why-box { display: flex; flex-direction: column; gap: 15px; }
        .hm-why-box img { width: 60px; border-radius: 12px; }
      .hm-why-box h4 { 
  font-size: 20px; 
  font-weight: 800; 
  color: var(--c-dark-green); 
  margin: 0; 
  /* 强制单行且不折行 */
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  display: block;
}

/* 新增副标题样式 */
.hm-why-sub {
  font-size: 15px; /* 稍微比标题小一点，更显高级 */
  font-weight: 600;
  color: var(--c-brand-green);
  display: block;
  margin-top: 2px;
  /* 同样强制单行 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
        .hm-why-box p { font-size: 14px; color: #555; line-height: 1.6; margin: 0; }

        /* 7. Production Flow */
        .hm-flow { background: #fff; padding: 80px 0; text-align: center; }
        .hm-flow img { width: 100%; max-width: 1400px; height: auto; margin-top: 40px; }

        /* 8. Exhibition */
        .hm-exhib { background: #fff; padding: 0 0 80px; text-align: center; }
        .hm-exhib p { max-width: 800px; margin: 0 auto 40px; color: var(--c-text-dark); font-size: 16px; line-height: 1.6; }
        .hm-exhib-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-bottom: 40px; }
        .hm-exhib-card { border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .hm-exhib-card img { width: 100%; aspect-ratio: 4/3; object-fit: cover; }
        .hm-exhib-card-title { background: var(--c-dark-green); color: #fff; padding: 15px; font-weight: 700; }

        /* 9. Contact (Bamboo Background + Glassmorphism) */
        .hm-contact { position: relative; padding: 100px 0; background-color: var(--c-dark-green); background-image: url('/images/about-us-faq.png'); background-size: cover; background-position: center; }
        .hm-contact-overlay { position: absolute; inset: 0; background: rgba(0, 48, 43, 0.4); }
        .hm-contact-container { position: relative; z-index: 10; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        
        .hm-form { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px); padding: 40px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .hm-form h3 { font-size: 32px; font-weight: 800; color: var(--c-dark-green); margin: 0 0 20px; }
        .hm-form label { display: block; font-weight: 700; color: #225C54; margin-bottom: 8px; }
        .hm-input { width: 100%; padding: 15px 25px; border-radius: 30px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; }
        .hm-input:focus { border-color: var(--c-brand-green); box-shadow: 0 0 5px rgba(0,164,150,0.3); }
        .hm-textarea { width: 100%; padding: 15px 25px; border-radius: 20px; border: 1px solid #a0aec0; margin-bottom: 20px; font-size: 15px; outline: none; height: 120px; resize: vertical; }
        .hm-submit { background: var(--c-brand-green); color: #fff; border: none; padding: 15px 40px; border-radius: 50px; font-size: 16px; font-weight: 700; cursor: pointer; transition: 0.3s; text-transform: uppercase; width: 100%; }
        .hm-submit:hover { background: var(--c-hover-green); }

        .hm-contact-text h2 { font-size: 56px; font-weight: 800; color: #fff; line-height: 1.2; margin: 0; text-transform: uppercase; }


        /* ── 新增：直连信息卡片样式 ── */
        .ivt-direct-contact { list-style: none; padding: 0; margin: 0; }
        .ivt-direct-contact li { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
        .ivt-icon-circle { background: var(--c-brand-green); color: #fff; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 10px rgba(0,164,150,0.3); }
        .ivt-icon-circle svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .ivt-contact-label { display: block; font-size: 14px; color: #666; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
        .ivt-contact-value { font-size: 20px; font-weight: 700; color: var(--c-dark-green); text-decoration: none; transition: color 0.3s; }
        .ivt-contact-value:hover { color: var(--c-brand-green); }

        /* Responsive */
        @media (max-width: 1024px) {
          .hm-hero h1 { font-size: 40px; }
          .hm-about-grid, .hm-oem-grid, .hm-why-grid, .hm-contact-container { grid-template-columns: 1fr; gap: 40px; }
          .hm-stats-grid { grid-template-columns: repeat(3, 1fr); }
          .hm-prod-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-power-grid { grid-template-columns: repeat(3, 1fr); }
          .hm-exhib-grid { grid-template-columns: repeat(2, 1fr); }
          .hm-contact-text { text-align: center; }
          .hm-contact-text h2 { font-size: 40px; }
        }
        @media (max-width: 640px) {
          .hm-hero h1 { font-size: 32px; }
          .hm-stats-grid, .hm-power-grid, .hm-why-items { grid-template-columns: 1fr; }
          .hm-prod-grid, .hm-exhib-grid { grid-template-columns: 1fr; }
        }
      `,
        }}
      />

      {/* 1. HERO SECTION */}
      {/* 1. HERO VIDEO CAROUSEL SECTION */}
      <section className="hm-hero-carousel">
        {/* 背景视频层：循环渲染你提供的 slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hm-slide ${index === currentSlide ? "active" : ""}`}
          >
            {/* 👇 换成 iframe，并加入 pointer-events: none 防止误触 👇 */}
            <iframe
              src={slide.src}
              title={`{t("homeYoutubeTitle")} ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                // 👇 核心去黑边魔法 👇
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100vw",
                height: "56.25vw" /* 强行锁定 16:9 比例 (9 / 16 = 0.5625) */,
                minHeight: "100vh",
                minWidth: "177.77vh" /* 强行锁定 16:9 比例 (16 / 9 = 1.7777) */,
                transform: "translate(-50%, -50%)",
                pointerEvents: "none", // 防止鼠标误触暂停
                border: "none",
                filter: "brightness(1.3)",
              }}
            ></iframe>
          </div>
        ))}

        {/* 统一的前景文字层：固定在视频上方 */}
        <div className="hm-slide-overlay">
          <div className="hm-hero-content">
            <h5
              style={{
                fontSize: "22px",
                letterSpacing: "2px",
                marginBottom: "15px",
                color: "#00dba0",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              {t("homeHeroBrand")}
            </h5>
            <h1
              style={{
                margin: "0 0 15px 0",
                fontSize: "72px",
                fontWeight: 800,
                letterSpacing: "2px",
                textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
              }}
            >
              {t("homeHeroTitle1")} <br />
              <span style={{ color: "var(--c-brand-green)" }}>
                {t("homeHeroTitle2")}
              </span>
            </h1>
            <p
              style={{
                margin: "0 0 40px 0",
                fontSize: "28px",
                fontWeight: 500,
                letterSpacing: "1px",
                textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              {t("homeHeroSubtitle")}
            </p>
            <Link href="/products" className="hm-btn">
              {t("homeHeroButton")}
            </Link>
          </div>
        </div>

        {/* 当 slides 大于 1 个时，才渲染左右切换和指示圆点 */}
        {slides.length > 1 && (
          <>
            {/* 左右手动切换按钮 */}
            <button
              className="hm-nav-btn hm-nav-prev"
              onClick={prevSlide}
              aria-label={t("homeSlidePrev")}
            >
              &#10094;
            </button>
            <button
              className="hm-nav-btn hm-nav-next"
              onClick={nextSlide}
              aria-label={t("homeSlideNext")}
            >
              &#10095;
            </button>

            {/* 底部小圆点 */}
            <div className="hm-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`hm-dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`${t("homeSlideGoTo")} ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>
      {/* 2. ABOUT US & STATS */}
      <section className="hm-about-section">
        <div className="hm-container">
          <div className="hm-about-grid">
            <div className="hm-about-vid">
              <div className="hm-about-vid">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/abNreLOQmF0"
                  title={t("homeYoutubeTitle")}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="hm-about-text">
              <h2>{t("homeAboutTitle")}</h2>
              <p>{t("homeAboutDesc")}</p>
              {/* 👇 把 Logo 和 Button 包在一个弹性盒子里，并排显示，榨干空间 👇 */}
              <div className="hm-certs-wrap">
                <div className="hm-certs">
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/fsc.png"
                    alt="FSC"
                  />
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/iso.png"
                    alt="ISO"
                  />
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/fda.png"
                    alt="FDA"
                  />
                  <img
                    src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/bsci.png"
                    alt="BSCI"
                  />
                </div>
                <Link
                  href="/about-us"
                  className="hm-btn"
                  style={{
                    padding: "12px 24px",
                    fontSize: "15px",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  {t("homeAboutButton")}
                </Link>
              </div>
            </div>
          </div>

          <div className="hm-stats-grid">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="hm-stat-num">{s.num}</div>
                <div className="hm-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS (虚线大圆圈网格，完美还原截图) */}
      <section className="hm-products">
        <div className="hm-container">
          <h2 className="hm-sec-title"> {t("homeProductsTitle")}</h2>
          <div className="hm-prod-grid">
            {products.map((p, i) => (
              <Link href={p.link} key={i} className="hm-prod-card">
                <img src={p.img} alt={p.title} />
                <h4 className="hm-prod-title">{p.title}</h4>
                <span className="hm-prod-link">
                  <SearchIcon /> {t("homeProductsSeeMore")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE POWER OF BAMBOO */}
      <section className="hm-power">
        <div className="hm-container">
          <h2 className="hm-power-title"> {t("homeBambooPowerTitle")}</h2>
          <p className="hm-power-sub">{t("homeBambooPowerDesc")}</p>
          {/* <div className="hm-power-grid">
            {powerIcons.map((icon, i) => (
              <div key={i} className="hm-power-item">
                <img
                  src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/icon-${icon.img}.png`}
                  alt={icon.title}
                />
                <h5>{icon.title}</h5>
              </div>
            ))}
          </div> */}
          <div className="hm-power-grid">
            {powerIcons.map((item, i) => {
              const IconComponent = item.icon; // 取出对应的组件
              return (
                <div key={i} className="hm-power-item">
                  {/* 直接渲染 SVG 图标，取代 img 标签 */}
                  <div
                    style={{
                      fontSize: "65px", // 控制图标大小，原来 img 是 80px，这里给 65px 视觉上刚好
                      color: "#33ffcc", // 给个高亮品牌绿，你也可以改成纯白 "#ffffff"
                      marginBottom: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconComponent strokeWidth={1.5} />{" "}
                    {/* strokeWidth 控制线条粗细，1.5 显得很高级 */}
                  </div>
                  <h5>{item.title}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OEM / ODM */}
      <section className="hm-oem">
        <div className="hm-container hm-oem-grid">
          <div className="hm-oem-text">
            <h2> {t("homeOemTitle")}</h2>
            <h3> {t("homeOemSubtitle")}</h3>
            <ul>
              <li>
                <CheckCircle /> {t("homeOemPoint1")}
              </li>
              <li>
                <CheckCircle /> {t("homeOemPoint2")}
              </li>
              <li>
                <CheckCircle /> {t("homeOemPoint3")}
              </li>
              <li>
                <CheckCircle /> {t("homeOemPoint4")}
              </li>
            </ul>
            <Link
              href="/contact-us"
              className="hm-btn"
              style={{ padding: "12px 30px", fontSize: "14px" }}
            >
              {t("homeOemButton")}
            </Link>
          </div>
          <div>
            <img
              // src="https://www.cndonseapaper.com/wp-content/uploads/2025/04/home-OEM-ODM.png"
              // src="/images/product-bamboo.jpg"
              src="/images/pandabox/1.jpg"
              alt={t("homeOemImageAlt")}
              className="hm-oem-img"
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
    NEW SECTION: PRODUCT GALLERY (Pandabox Series)
    ════════════════════════════════════════════════════ */}
      <section style={{ padding: "80px 0", background: "#f8f9f9" }}>
        <div className="hm-container">
          <ScrollReveal direction="up">
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "800",
                  color: "var(--c-dark-green)",
                  textTransform: "uppercase",
                }}
              >
                {t("homeGalleryTitle")}
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "30px", // 👈 增加间距，避免边缘相撞
              padding: "0 10px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
              <ScrollReveal key={num} delay={i * 80} direction="up">
                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "#fff",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                    padding: "15px", // 👈 给卡片加内边距，让图片不贴边
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "translateY(-8px)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                    <img
                      src={`/images/pandabox/${num}.jpg`}
                      alt={`{t("homeProductAltPrefix")} ${num}`}
                      style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                  {/* 👈 添加标题区域 */}
                  <div
                    style={{ padding: "20px 5px 10px", textAlign: "center" }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        color: "var(--c-text-dark)",
                        fontWeight: "600",
                      }}
                    >
                      {t("homeGalleryItemPrefix")}
                      {num}
                    </h4>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      {/* 6. WHY CHOOSE US */}
      <section className="hm-why">
        <div className="hm-container hm-why-grid">
          <div style={{ height: "100%" }}>
            <img
              // src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/why-1-683x1024.jpg"
              src="/images/newsImg/3.jpg"
              alt={t("homeBambooForestAlt")}
              className="hm-why-tall-img"
            />
          </div>
          <div className="hm-why-content">
            <h2>{t("homeWhyTitle")}</h2>
            <p>{t("homeWhySubtitle")}</p>
            {/* <div className="hm-why-items">
              {whyChoose.map((item, i) => (
                <div key={i} className="hm-why-box">
                  <img
                    // src={`https://www.cndonseapaper.com/wp-content/uploads/2025/03/Why-Choose-Donsea-${item.icon}.jpg`}
                    src={`/images/icon-${item.icon}.png`}
                    alt="Icon"
                  />
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div> */}
            <div className="hm-why-items">
              {whyChoose.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="hm-why-box">
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "var(--c-brand-green)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        fontSize: "36px",
                        boxShadow: "0 4px 10px rgba(0, 164, 150, 0.2)",
                      }}
                    >
                      <IconComponent />
                    </div>

                    {/* 修改后的标题区域 */}
                    <div style={{ width: "100%", overflow: "hidden" }}>
                      <h4>{item.title}</h4>
                      <span className="hm-why-sub">{item.sub}</span>
                    </div>

                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCTION FLOW */}
      <section className="hm-flow">
        <div className="hm-container">
          <h2 className="hm-sec-title">{t("homeProductionFlowTitle")}</h2>
          <img
            // src="https://www.cndonseapaper.com/wp-content/uploads/2025/03/Production-Flow.png"
            src="/images/productionFlow.png"
            alt={t("homeProductionFlowAlt")}
          />
        </div>
      </section>

      {/* 8. EXHIBITION */}
      <section className="hm-exhib">
        <div className="hm-container">
          <h2 className="hm-sec-title">{t("homeExhibitionTitle")}</h2>
          <p>{t("homeExhibitionDesc")}</p>
          <div className="hm-exhib-grid">
            {exhibitionImages.map((img, i) => (
              <div key={i} className="hm-exhib-card">
                <img src={img.src} alt={img.title} />
                <div className="hm-exhib-card-title">{img.title}</div>
              </div>
            ))}
          </div>
          <Link
            href="/about-us"
            className="hm-btn"
            style={{ padding: "12px 30px", fontSize: "14px" }}
          >
            {t("homeExhibitionButton")}
          </Link>
        </div>
      </section>

      {/* 9. CONTACT (玻璃态表单) */}
      <section className="hm-contact">
        <div className="hm-contact-overlay"></div>
        <div className="hm-container hm-contact-container">
          <div className="hm-form">
            <h3 style={{ marginBottom: "10px" }}>{t("homeContactTitle")}</h3>
            <p
              style={{
                color: "#555",
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "40px",
              }}
            >
              {t("homeContactDesc")}
            </p>

            <ul className="ivt-direct-contact">
              {/* Email */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">
                    {t("homeContactEmailLabel")}
                  </span>
                  {/* 👇 把这里换成你们真实的邮箱 👇 */}
                  <a
                    href="mailto:info@ivoiretissue.com"
                    className="ivt-contact-value"
                  >
                    sales@ivoiretissue.com
                  </a>
                </div>
              </li>

              {/* WhatsApp / Phone */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">
                    {t("homeContactPhoneLabel")}
                  </span>
                  {/* 👇 把这里换成你们真实的电话 👇 */}
                  <a href="tel:+1234567890" className="ivt-contact-value">
                    +1 (514) 688-8238
                  </a>
                </div>
              </li>

              {/* Headquarters */}
              <li>
                <div className="ivt-icon-circle">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <span className="ivt-contact-label">
                    {t("homeContactAddressLabel")}
                  </span>
                  <span
                    className="ivt-contact-value"
                    style={{ cursor: "default" }}
                  >
                    222 Rue Poirier, Saint-Eustache, QC
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="hm-contact-text">
            <h2>
              {t("homeContactSlogan1")}
              <br />
              {t("homeContactSlogan2")}
              <br />
              {t("homeContactSlogan3")}
              <br />
              {t("homeContactSlogan4")}
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}