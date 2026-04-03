import React from "react";
import CategorySidebar from "@/app/components/CategorySidebar";
import "./products.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="products-layout-container">
      {/* 顶部防遮挡占位 */}
      <div className="products-header-spacer"></div>

      <div className="container split-layout-products">
        {/* 左侧：分类导航 */}
        <CategorySidebar />

        {/* 右侧：产品网格 (children 会自动渲染 [category]/page.tsx 的内容) */}
        <main className="products-main-content">{children}</main>
      </div>
    </div>
  );
}
