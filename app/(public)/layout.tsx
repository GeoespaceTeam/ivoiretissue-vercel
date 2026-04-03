import Header from "./(header)/Header"; // 请确保路径正确
import Footer from "./(footer)/Footer"; // 请确保路径正确

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // flex 垂直布局，min-h-screen 保证最小高度占满屏幕
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* 1. flex-1: 像弹簧一样把剩余空间全部撑满，硬生生把 Footer 挤到最底下
        2. w-full: 宽度 100%
        3. pt-[64px] (或 mt-[64px]): 把内容往下推 64px，完美避开 fixed 的 Header 遮挡 
      */}
      <main className="flex-1 w-full pt-[64px]">{children}</main>

      <Footer />
    </div>
  );
}
