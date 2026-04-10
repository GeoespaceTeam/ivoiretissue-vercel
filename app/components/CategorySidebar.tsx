"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { label: "BAMBOO PRODUCTS", href: "/products/bamboo" },
  { label: "VIRGIN PRODUCTS", href: "/products/virgin" },
  { label: "RECYCLE PRODUCTS", href: "/products/recycle" },
  { label: "MIXED PRODUCTS", href: "/products/mixed" },
];

export default function CategorySidebar() {
  const pathname = usePathname();

  return (
    <aside className="iv-category-sidebar">
      {/* 🔴 强力覆盖样式：精调字体、行距、摆放位置和高级互动效果 🔴 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .iv-category-sidebar {
          padding: 20px 40px 20px 10px; /* 顶部留白，右侧留出40px防止贴太近右边图片 */
        }
        .iv-sidebar-title {
          font-size:34px;       /* 标题字体放大 */
          font-weight: 800;      /* 加粗更醒目 */
          color: #222;
          margin-bottom: 30px;   /* 把标题和下面列表的距离拉开 */
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .iv-category-menu {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .iv-menu-item {
          border-bottom: 1px solid #f0f0f0; /* 每行下面加个极淡的浅灰色分割线，拉满质感 */
        }
        .iv-menu-link {
          display: block;
          padding: 24px 0;       /* 👈 核心：上下直接撑开 24px！行距瞬间变大，占满 350px 空间 */
          font-size: 20px;       /* 字体放大 (原来太小了) */
          font-weight: 500;
          color: #666;           /* 默认灰色，不抢焦点 */
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .iv-menu-link:hover {
          color: #00a496;        /* 悬停变成 Ivoire 品牌绿 */
          padding-left: 8px;     /* 👈 悬停时文字微微向右滑动一点点，超级高级 */
        }
        .iv-menu-link.active {
          color: #00a496;
          font-weight: 700;      /* 当前选中的分类加粗并变绿 */
        }
      `,
        }}
      />

      <h5 className="iv-sidebar-title">CATEGORIES</h5>
      <ul className="iv-category-menu">
        {categories.map((cat) => {
          const isActive = pathname === cat.href;
          return (
            <li key={cat.href} className="iv-menu-item">
              <Link
                href={cat.href}
                className={`iv-menu-link ${isActive ? "active" : ""}`}
              >
                {cat.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
