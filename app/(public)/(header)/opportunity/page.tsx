import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Opportunity – Ivoiretissue",
  description:
    "Working at Ivoire Tissue - Let's build the future of paper converting together.",
};

export default function OpportunityPage() {
  return (
    <div className="bg-white w-full pb-0">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 pb-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            WORKING AT IVOIRE TISSUE
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
            LET&apos;S BUILD THE FUTURE OF <br />
            <span className="text-[#00a698]">PAPER CONVERTING</span> TOGETHER.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Our employer values reflect an inviting and exciting culture in an
            environment <br className="hidden md:block" />
            conducive to personal and professional development.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Guided by respected and renowned industry leaders, a role on our
            team will inspire <br className="hidden md:block" />
            anyone who wants to grow and excel.
          </p>
        </div>
      </section>

      {/* ================= ACCENT BAR ================= */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm md:text-base font-semibold text-gray-600 tracking-[0.2em] uppercase">
            APPRECIATION • DEVELOPMENT • EVOLUTION • ACHIEVEMENT •
            ACKNOWLEDGMENT
          </p>
        </div>
      </section>

      {/* ================= VIDEO SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer bg-gray-200">
          <Image
            src="https://ivoiretissue.com/wp-content/uploads/2024/03/shutterstock_1692502573-scaled.jpg"
            alt="Video Overlay"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            {/* 播放按钮 */}
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-8 h-8 text-[#00a698] ml-1"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WE ALWAYS AIM TO SECTION ================= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-900 mb-16">
            WE ALWAYS AIM TO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Item 1 */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="https://ivoiretissue.com/wp-content/uploads/2024/03/Sunset-Converting-Innovation.svg"
                  alt="Promote Bamboo"
                  fill
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase">
                PROMOTE BAMBOO PAPER <br />
                <span className="text-sm font-medium text-gray-500">
                  USING FOR BETTER WORLD
                </span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We actively encourage innovative ideas to meet industry
                challenges.
              </p>
            </div>

            {/* Item 2 */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="https://ivoiretissue.com/wp-content/uploads/2024/03/svgexport-6.svg"
                  alt="Guarantee Safety"
                  fill
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase">
                GUARANTEE AND ADVANCE <br />
                <span className="text-sm font-medium text-gray-500">
                  THE SAFETY AND WELFARE.
                </span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to cultivating a secure working environment
                where everyone feels valued, integrated, and inspired to save
                trees and build a better world with bamboo...
              </p>
            </div>

            {/* Item 3 */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="https://ivoiretissue.com/wp-content/uploads/2024/03/svgexport-7.svg"
                  alt="Strive for excellence"
                  fill
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase">
                STRIVE FOR <br />
                <span className="text-sm font-medium text-gray-500">
                  EXCELLENCE
                </span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We constantly strive for perfection in everything we do,
                inviting every employee to go beyond his or her limits.
              </p>
            </div>

            {/* Item 4 */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="https://ivoiretissue.com/wp-content/uploads/2024/03/svgexport-8.svg"
                  alt="Integrity and respect"
                  fill
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 uppercase">
                GUIDE WITH <br />
                <span className="text-sm font-medium text-gray-500">
                  INTEGRITY AND RESPECT
                </span>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cultivating integrity as the foundation of our actions, we
                foster an environment of trust and transparency, nurturing
                growth and sustainability...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FACILITIES & CAROUSEL ================= */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Operating in cutting-edge{" "}
            <span className="text-[#00a698]">bamboo-centric</span> facilities
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our plant boasts state-of-the-art production lines, designed with a
            focus on sustainability through the use of bamboo products, ensuring
            the preservation of trees and the environment. This eco-friendly
            infrastructure not only fosters high-value-added tasks but also
            promotes efficiency and drives innovation.
          </p>
        </div>

        {/* 图片滑动区域 (使用原生 CSS Scroll Snap 实现平滑轮播效果) */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-6 max-w-7xl mx-auto">
            {[
              "https://ivoiretissue.com/wp-content/uploads/2024/04/image-for-employee-image-scaled.jpeg",
              "https://ivoiretissue.com/wp-content/uploads/2024/03/shutterstock_2273970603-scaled.jpg",
              "https://ivoiretissue.com/wp-content/uploads/2024/03/shutterstock_1692502573-scaled.jpg",
            ].map((src, idx) => (
              <div
                key={idx}
                className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[800px] h-[300px] md:h-[500px] relative snap-center rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Facility ${idx}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS SECTION ================= */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">
            WE <span className="text-[#00a698]">OFFER BENEFITS</span> THAT MAKE
            A REAL DIFFERENCE <br className="hidden md:block" />
            TO EVERY EMPLOYEE&apos;S CAREER
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
                <svg
                  className="w-10 h-10 fill-current text-[#00a698]"
                  viewBox="0 0 77 140"
                >
                  <path d="M51.8 126.9c0-11-8.5-19.6-19-19.6-6.6 0-12.4 3.4-15.6 8.5C14.7 112 13 108.5 13 104.7c0-8.8 7.2-16 16-16h9.8c6.6 0 12-5.4 12-12s-5.4-12-12-12H34.4v-14.7h-18v14.7h-4.3c-10.6 0-19.2 8.6-19.2 19.2 0 10.3 7.8 18.7 17.8 19.3 3 .2 5.9 1.6 7.9 3.8 2 2.2 3.1 5.1 3.1 8.2 0 6.4-5.2 11.6-11.6 11.6H0v15h19.2v14.8h17.8v-14.8c11-1.1 19.6-10.2 19.6-21.5zM22.8 66h16c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1h-16v-10.2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">
                Highly competitive remuneration
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
                <svg
                  className="w-10 h-10 fill-current text-[#00a698]"
                  viewBox="0 0 162 162"
                >
                  <path d="M81 146.5c-36.2 0-65.5-29.3-65.5-65.5S44.8 15.5 81 15.5 146.5 44.8 146.5 81 117.2 146.5 81 146.5zm0-121.2C50.2 25.3 25.3 50.2 25.3 81S50.2 136.7 81 136.7 136.7 111.8 136.7 81 111.8 25.3 81 25.3zM71.4 100.8V48.4h9.8v48.4l31.7 31.7-6.9 6.9-34.6-34.6z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">No shift rotation</h3>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
                <svg
                  className="w-10 h-10 fill-current text-[#00a698]"
                  viewBox="0 0 174 160"
                >
                  <path d="M87 21.7c4.2 0 7.2-4.5 7.2-10.9S91.2 0 87 0s-7.2 4.5-7.2 10.9 3 10.8 7.2 10.8zm0 50.8c-7.9 0-14.5-11.6-14.5-25.4 0-13.8 6.6-25.4 14.5-25.4s14.5 11.6 14.5 25.4c0 13.8-6.6 25.4-14.5 25.4zM65.3 72.5v-3.6c0-35.1 9.7-45.3 12-47.2H87c-4.9 5.9-8 15-8 25.4 0 10.4 3.1 19.5 8 25.4H65.3zM58 68.8v10.9H43.5c-8 0-14.5 6.5-14.5 14.5v14.5H-21.7c-4 0-7.2-3.2-7.2-7.2V68.8c0-28.9 9.6-43.3 12.6-47.2h84.2c4.6 7 9.8 20.8 9.8 47.2H58zm-21.7 34.8v-9.4c0-4 3.2-7.2 7.2-7.2h9.4v16.6H36.3z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">State-of-the-art facilities</h3>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5">
                <svg
                  className="w-10 h-10 fill-current text-[#00a698]"
                  viewBox="0 0 197 196"
                >
                  <path d="M86.5 13.2c-1.8 0-3.3-1.5-3.3-3.3V3.3c0-1.8 1.5-3.3 3.3-3.3s3.3 1.5 3.3 3.3v6.6c0 1.8-1.5 3.3-3.3 3.3zm-28.2 8.1c-1.2 0-2.3-.6-2.9-1.6l-3.3-5.7c-.9-1.6-.3-3.6 1.3-4.5 1.6-.9 3.6-.3 4.5 1.3l3.3 5.7c.9 1.6.3 3.6-1.3 4.5-.5.2-1.1.3-1.6.3zM114.7 21.3c-1.8 0-3.3-1.5-3.3-3.3 0-.6.2-1.1.5-1.6l3.3-5.7c.9-1.6 2.9-2.2 4.5-1.3 1.6.9 2.2 2.9 1.3 4.5l-3.3 5.7c-.6 1.1-1.7 1.7-3 1.7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg">
                Online rewards with your contribution
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-snug">
            TAKE <span className="text-[#00a698]">YOUR CAREER</span> TO NEW
            HEIGHTS WITH THE BEST IN THE BUSINESS.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            THIS IS <span className="text-[#00a698]">WHERE</span> YOUR CAREER
            TAKES OFF!
          </h2>
          <div className="pt-8">
            <Link
              href="/career"
              className="inline-block bg-[#00a698] hover:bg-[#008f83] text-white font-semibold py-4 px-10 rounded-sm transition-colors duration-300 text-sm tracking-wide uppercase shadow-md"
            >
              See Job Offers
            </Link>
          </div>
        </div>
      </section>

      {/* ================= GOOGLE MAPS SECTION ================= */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://maps.google.com/maps?q=222%20Rue%20Poirier,%20%2330,%20Saint-Eustache,%20J7R%206B1&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Ivoire Tissue Location"
        ></iframe>
      </section>

      {/* Tailwind 自定义隐藏滚动条的类 (可以放在 globals.css, 这里为了方便内联) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </div>
  );
}
