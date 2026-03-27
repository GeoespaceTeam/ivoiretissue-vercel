import { FaPlayCircle } from "react-icons/fa";

const categories = [
  { title: "BAMBOO PRODUCTS", img: "/thumb-1.jpg" }, // 请确保图片在 public 下
  { title: "VIRGIN PRODUCTS", img: "/thumb-2.jpg" },
  { title: "RECYCLE PRODUCTS", img: "/thumb-3.jpg" },
  { title: "MIXED PRODUCTS", img: "/thumb-4.jpg" },
];

export default function CategoryCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Organizations Choose{" "}
          <span className="text-green-700">GeoEspace</span>
        </h2>
        <p className="text-gray-500 mb-16 text-lg">
          Discover how our clients are leveraging the power of sustainable
          products.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-video shadow-2xl"
            >
              {/* 图片层 */}
              <img
                src={item.img}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* 遮挡层和内容 */}
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-black/20">
                <FaPlayCircle className="text-white text-6xl mb-4 opacity-90 group-hover:scale-110 transition-transform" />
                <h3 className="text-white text-xl font-bold tracking-widest">
                  {item.title}
                </h3>
                <span className="text-white/80 text-sm mt-2 border-b border-white/40 pb-1 group-hover:text-white group-hover:border-white">
                  Watch Now
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
