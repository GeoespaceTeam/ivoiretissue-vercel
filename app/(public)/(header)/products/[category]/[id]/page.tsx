import Image from "next/image";
import { notFound } from "next/navigation";
import { productsDatabase } from "@/app/lib/productsDatabase";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;

  // 1. 获取对应分类下的商品列表
  const categoryData = productsDatabase[category];
  if (!categoryData) notFound();

  // 2. 在分类中找到具体的商品
  const product = categoryData.find((p: any) => p.id === id);
  if (!product) notFound();

  return (
    <div className="bg-white min-h-screen">
      {/* 分类标签显示 */}
      <div className="container mx-auto px-4 pt-10">
        <div className="flex items-center gap-2 text-[#00a859] font-bold">
          <span className="text-sm tracking-widest uppercase">
            🏷️ {category} PRODUCTS
          </span>
        </div>
      </div>

      {/* 第一部分：产品核心展示 */}
      <section className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-12">
        {/* 左侧大图 */}
        <div className="flex-1">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src={product.img}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 右侧信息 */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {product.title}
          </h1>

          <ul className="space-y-4 mb-10">
            {product.features.map((feature: string, index: number) => (
              <li
                key={index}
                className="flex items-start gap-2 text-gray-600 text-lg"
              >
                <span className="text-[#00a859] font-bold">•</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 max-w-md">
            <p className="text-gray-500 mb-4 text-sm font-medium">
              For product pricing, customization, or other inquiries:
            </p>
            <button className="bg-[#00a859] text-white px-10 py-3 rounded-md font-bold hover:bg-green-700 transition-colors">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* 第二部分：详细参数表格 (Description) */}
      <section className="container mx-auto px-4 py-16 border-t border-gray-100">
        <div className="inline-block border-b-4 border-[#00a859] pb-2 mb-8 text-xl font-bold text-gray-800">
          Description
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              {Object.entries(product.specs).map(([key, value]: any) => (
                <tr
                  key={key}
                  className="border-b last:border-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-bold text-gray-700 bg-gray-50/50 w-1/4 border-r border-gray-200">
                    {key}
                  </td>
                  <td className="p-4 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 第三部分：关于我们与工厂展示 (About Section) */}
      <section className="bg-gray-50 py-20 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            About Ivoiretissue
          </h2>
          <p className="text-gray-600 leading-relaxed mb-16 max-w-4xl text-lg">
            Ivoire Tissue Paper is a Canadian family company founded on 12
            December 2022 in Montreal, Québec (Canada). Ivoire Tissue was
            preoccupied with the environment and given climate change and the
            destruction of our forest systems, Ivoire Tissue has decided to help
            protect our planet by providing solutions such as the use of bamboo
            paper products to replace traditional paper products.
          </p>

          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Our Factory
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* 这里的图片需要你确保在 public/images 下有 factory-1.jpg ... factory-8.jpg */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md group"
              >
                <Image
                  src={`/images/factory-${num}.jpg`}
                  alt={`Factory display ${num}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
