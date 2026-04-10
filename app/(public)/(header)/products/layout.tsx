import React from "react";
import CategorySidebar from "@/app/components/CategorySidebar";
import CategoryBanner from "@/app/components/CategoryBanner";
import "./products.css";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{ width: "100%", backgroundColor: "#fff", overflowX: "hidden" }}
    >
      {/* 👇 1. 极限压缩：完全干掉这中间的任何间距 👇 */}
      <div style={{ margin: "0", padding: "0" }}>
        <CategoryBanner />
      </div>

      {/* 👇 2. 核心调整：紧贴 Banner，去除上下留白 👇 */}
      <div
        style={{
          display: "flex",
          gap: "20px", // 左右栏的间距（稍微缩小一点让内容更饱满）
          maxWidth: "1500px", // 扩大容器宽度，充分利用大屏幕
          width: "96%",
          margin: "5px auto 60px auto", // 顶部只留 20px 的微小缝隙，让它“几乎紧贴”
          alignItems: "flex-start", // 确保左侧栏固定在顶部
        }}
      >
        {/* 左侧：分类导航 */}
        <aside style={{ flex: "0 0 350px", position: "sticky", top: "100px" }}>
          <CategorySidebar />
        </aside>

        {/* 右侧：产品网格 */}
        <section style={{ flex: 1, minWidth: 0, margin: "0", padding: "0" }}>
          {children}
        </section>
      </div>
    </main>
  );
}
