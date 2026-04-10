import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// 模拟数据库数据保持不变...
const productsDatabase = {
  bamboo: [
    {
      id: "1",
      title: "V-fold hand Paper Towel",
      img: "/images/v-fold-hand-paper-towel.jpg",
    },
    {
      id: "2",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
    },
    {
      id: "3",
      title: "Lunch Napkins",
      img: "/images/lunch-napkins.jpg",
    },
    {
      id: "4",
      title: "V-fold Kitchen Paper",
      img: "/images/v-fold-kitchen-paper.jpg",
    },
    {
      id: "5",
      title: "Ample Kitchen Roll",
      img: "/images/ample-kitchen-roll.jpg",
    },
    {
      id: "6",
      title: "Plastic Free Kitchen Paper Towel",
      img: "/images/plastic-free-kitchen-paper-towel.jpg",
    },
    {
      id: "7",
      title: "Commercial Facial Tissue",
      img: "/images/commercial-facial-tissue.jpg",
    },
    {
      id: "8",
      title: "Ultra Soft Facial Tissue",
      img: "/images/ultra-soft-facial-tissue.jpg",
    },
    {
      id: "9",
      title: "Ultra Soft Toilet Paper",
      img: "/images/ultra-soft-toilet-paper.jpg",
    },
    {
      id: "10",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
    },
    // 👇 这是从第二页挪过来的两个新商品 👇
    { id: "29", title: "Toilet Paper", img: "/images/toilet-paper.jpg" },
    {
      id: "30",
      title: "Bamboo Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
    },
  ],
  virgin: [
    {
      id: "11",
      title: "V-fold hand Paper Towel",
      img: "/images/v-fold-hand-paper-towel.jpg",
    },
    {
      id: "12",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel-1.jpg",
    }, // 名字重复1
    {
      id: "13",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
    }, // 名字重复2
    { id: "14", title: "Lunch Napkins", img: "/images/lunch-napkins.jpg" },
    {
      id: "15",
      title: "Plastic Free Kitchen Paper Towel",
      img: "/images/plastic-free-kitchen-paper-towel.jpg",
    },
    {
      id: "16",
      title: "Ultra Soft Facial Tissue",
      img: "/images/ultra-soft-facial-tissue.jpg",
    },
    {
      id: "17",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
    },
    {
      id: "18",
      title: "Virgin Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
    },
  ],
  recycle: [
    {
      id: "19",
      title: "V-fold hand Paper Towel",
      img: "/images/v-fold-hand-paper-towel.jpg",
    },
    {
      id: "20",
      title: "Ample Kitchen Roll",
      img: "/images/ample-kitchen-roll.jpg",
    },
    {
      id: "21",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
    },
    {
      id: "22",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
    },
    {
      id: "23",
      title: "Recycle Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
    },
  ],
  mixed: [
    {
      id: "24",
      title: "V-fold hand Paper Towel",
      img: "/images/v-fold-hand-paper-towel.jpg",
    },
    {
      id: "25",
      title: "Ample Kitchen Roll",
      img: "/images/ample-kitchen-roll.jpg",
    },
    {
      id: "26",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
    },
    {
      id: "27",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
    },
    {
      id: "28",
      title: "Mixed Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
    },
  ],
};
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!Object.keys(productsDatabase).includes(category)) {
    notFound();
  }

  // @ts-ignore
  const products = productsDatabase[category];

  return (
    <>
      {/* 👇 插入这段 style 代码，强行让右侧一行排 4 个，缩小间隙 👇 */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .product-grid {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 20px !important;
          width: 100% !important;
          margin-top: 0px !important;    /* 👈 强行干掉顶部的外部空隙 */
          padding-top: 0px !important;   /* 👈 强行干掉顶部的内部空隙 */
          margin-bottom: 0px !important; /* 👈 强行干掉底部的外部空隙 */
        }
          /* 👇 修改：调整底部信息区域的内边距和垂直居中 👇 */
        .product-info {
          padding: 20px 24px; /* 👈 左右 padding 加大到 24px，让文字远离左侧边缘 */
          text-align: left;   /* 👈 确保文字左对齐 */
          background: #fff;
          display: flex;
          align-items: center; /* 👈 核心：让文字在 Y轴（垂直方向）绝对居中 */
          flex-grow: 1;        /* 👈 核心：让白色区域自动撑满底部，配合居中使用 */
        }

        /* 👇 修改：放大字体并优化行高 👇 */
        .product-title {
          font-size: 18px;     /* 👈 字体从 15px 放大到 18px */
          font-weight: 600;
          color: #333;
          margin: 0;
          line-height: 1.4;    /* 👈 稍微拉开一点行高，长名字换行时更好看 */
          transition: color 0.3s;
        }
        @media (max-width: 1200px) { .product-grid { grid-template-columns: repeat(3, 1fr) !important; } }
      `,
        }}
      />
      {/* 👆 插入结束 👆 */}
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
    </>
  );
}