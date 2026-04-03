import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// 模拟数据库数据保持不变...
const productsDatabase = {
  bamboo: [
    {
      id: "1",
      title: "V-fold hand Paper Towel",
      img: "/images/placeholder.jpg",
    },
    { id: "2", title: "Hand Paper Towel", img: "/images/placeholder.jpg" },
    { id: "3", title: "Lunch Napkins", img: "/images/placeholder.jpg" },
    { id: "4", title: "V-fold Kitchen Paper", img: "/images/placeholder.jpg" },
    { id: "5", title: "Ample Kitchen Roll", img: "/images/placeholder.jpg" },
    {
      id: "6",
      title: "Plastic Free Kitchen Paper Towel",
      img: "/images/placeholder.jpg",
    },
    {
      id: "7",
      title: "Commercial Facial Tissue",
      img: "/images/placeholder.jpg",
    },
    {
      id: "8",
      title: "Ultra Soft Facial Tissue",
      img: "/images/placeholder.jpg",
    },
    {
      id: "9",
      title: "Ultra Soft Toilet Paper",
      img: "/images/placeholder.jpg",
    },
    {
      id: "10",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/placeholder.jpg",
    },
  ],
  virgin: [
    { id: "11", title: "Virgin Tissue Box", img: "/images/placeholder.jpg" },
  ],
  recycle: [
    { id: "12", title: "Recycled Napkins", img: "/images/placeholder.jpg" },
  ],
  mixed: [
    { id: "13", title: "Mixed Paper Roll", img: "/images/placeholder.jpg" },
  ],
};

// 修复点 1：将 params 的类型定义为 Promise，并在函数前加 async
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  // 修复点 2：使用 await 解构 params
  const { category } = await params;

  // 如果输入的分类不合法，返回 404
  if (!Object.keys(productsDatabase).includes(category)) {
    notFound();
  }

  // @ts-ignore
  const products = productsDatabase[category];

  return (
    <div className="product-grid">
      {products.map((product: any) => (
        <Link
          key={product.id}
          href={`/products/${category}/${product.id}`}
          className="product-card"
        >
          <div className="product-image-wrapper">
            <Image
              src={product.img}
              alt={product.title}
              width={600}
              height={500}
              className="product-image"
            />
          </div>
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
