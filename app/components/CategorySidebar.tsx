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
    <aside className="products-sidebar">
      <h5 className="sidebar-title">CATEGORIES</h5>
      <ul className="category-menu">
        {categories.map((cat) => {
          const isActive = pathname === cat.href;
          return (
            <li key={cat.href} className="menu-item">
              <Link
                href={cat.href}
                className={`menu-link ${isActive ? "active" : ""}`}
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
