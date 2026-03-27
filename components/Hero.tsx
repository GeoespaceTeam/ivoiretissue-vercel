export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* 视频背景 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-60"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* 文字内容 */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Ivoire Tissue Paper
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-3xl mx-auto drop-shadow-md">
          Redefining Excellence, Sustaining the Future with Sustainable Bamboo.
        </p>
      </div>
    </section>
  );
}
