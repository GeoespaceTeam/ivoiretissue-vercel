import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryCards />

      {/* 补充一个关于我们的小 Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 italic text-green-800">
            "Sustaining the Future"
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Ivoire Tissue Paper is a pioneering Canadian company dedicated to
            producing high-quality tissue paper using sustainable bamboo
            resources.
          </p>
        </div>
      </section>
    </>
  );
}
