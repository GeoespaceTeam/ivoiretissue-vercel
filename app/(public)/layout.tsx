import Header from "./(header)/Header";
import Footer from "./(footer)/Footer";

// ============================================================
// PUBLIC LAYOUT
// Header is solid white (always), 64px tall, fixed.
// main has pt-[64px] to push content below the header.
// ============================================================
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* pt-[64px]: push content below the fixed 64px header */}
      <main className="flex-1 w-full pt-[64px]">{children}</main>

      <Footer />
    </div>
  );
}
