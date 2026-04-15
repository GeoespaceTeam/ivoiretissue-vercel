import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ============================================================
// 📌 核心产品数据库 - 唯一版本（合并了基础字段与 B2B 详细参数）
// ============================================================
export const productsDatabase: Record<string, any[]> = {
  bamboo: [
    {
      id: "1",
      title: "V-fold hand Paper Towel",
      img: "/images/v-fold-hand-paper-towel.jpg",
      features: [
        "Disposable hand drying paper, strong and tear resistant",
        "Biodegradable paper tissue",
        "High water absorbent",
      ],
      specs: {
        Product: "V-FOLD HAND PAPER TOWEL",
        Material: "Virgin pulp",
        GSM: "42gsm",
        Layer: "1ply",
        "Sheet size": "220*225mm",
        Sheets: "200sheets",
        Embossed: "Embossed",
        Fold: "V-fold",
        Weight: "420g/PACK",
        "Tissue color": "White",
        Feature: "Strong water absorption",
        Packing: "Packaging one: 20packs/carton",
        Certifications: "We have FSC, BSI, SGS.",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized for you." },
        { label: "MOQ", value: "Customized: 40HQ container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "2",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
      features: [
        "Disposable hand drying paper, strong and tear resistant",
        "Biodegradable paper tissue",
        "High water absorbent",
      ],
      specs: {
        Product: "HAND PAPER TOWEL",
        Material: "Virgin pulp",
        GSM: "21gsm",
        Layer: "2ply",
        "Sheet size": "200*225mm",
        Sheets: "800 sheets (180m)",
        Core: "42mm",
        Embossed: "Embossed",
        Weight: "1.4kg/roll",
        "Tissue color": "White",
        Feature: "Dissolvable",
        Packing: "Packaging one: 8 rolls/carton",
        Certifications: "We have FSC, BSI, SGS.",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized for you." },
        { label: "MOQ", value: "Customized: 40HQ container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "3",
      title: "Lunch Napkins",
      img: "/images/lunch-napkins.jpg",
      features: [
        "Color pattern print for parties and holiday decoration",
        "High oil absorption and clean surface",
        "OEM services with custom logo printing",
      ],
      specs: {
        Product: "LUNCH NAPKINS",
        Material: "Virgin wood pulp",
        GSM: "17gsm",
        Layer: "2ply",
        "Sheet size": "230*230mm",
        Sheets: "6 sheets",
        Fold: "1/4 fold",
        Embossed: "Embossed",
        Weight: "90g/pack",
        "Tissue color": "Unbleached / White",
        Feature: "Oil absorption, clean",
        Packing: "50 sheets/pack, 72 packs/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "Provided for free (customer pays freight)." },
        { label: "Customize", value: "Material, GSM, Layer, Logo, and sizes (230mm to 400mm)." },
        { label: "MOQ", value: "Customized: 70,000 pieces. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "4",
      title: "V-fold Kitchen Paper",
      img: "/images/v-fold-kitchen-paper.jpg",
      features: [
        "100% Virgin bamboo fiber, clean and healthy",
        "Strong water & oil absorption, washable for dishes",
        "Biodegradable, supporting OEM & ODM customization",
      ],
      specs: {
        Product: "V-FOLD KITCHEN PAPER",
        Material: "Virgin bamboo pulp",
        GSM: "26gsm",
        Layer: "2ply",
        "Sheet size": "220*270mm",
        Sheets: "50 sheets",
        Embossed: "Panda embossed",
        Weight: "160g/roll",
        "Tissue color": "Unbleached",
        Feature: "Strong water & oil absorption",
        Packing: "Individual wraps, 12 packs/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 20ft container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "5",
      title: "Ample Kitchen Roll",
      img: "/images/ample-kitchen-roll.jpg",
      features: [
        "100% Sustainable fiber for a clean and healthy kitchen",
        "Superior water & oil absorption, washable for multiple uses",
        "Biodegradable material with support for OEM & ODM",
      ],
      specs: {
        Product: "AMPLE KITCHEN ROLL",
        Material: "Virgin wood pulp",
        GSM: "21gsm",
        Layer: "2ply",
        "Sheet size": "220*225mm",
        Sheets: "75 sheets",
        Embossed: "Dot embossed",
        Core: "45mm",
        Weight: "175g/roll",
        "Tissue color": "White",
        Feature: "Strong water & oil absorption",
        Packing: "Individual wraps, 8 rolls/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized for you." },
        { label: "MOQ", value: "Customized: 20ft container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "6",
      title: "Plastic Free Kitchen Paper Towel",
      img: "/images/plastic-free-kitchen-paper-towel.jpg",
      features: [
        "100% Plastic-free and biodegradable bamboo kitchen paper",
        "Excellent water absorbent & oil cleaning for a healthy kitchen",
        "Highly durable and washable for dishes, supports OEM & ODM",
      ],
      specs: {
        Product: "Plastic Free Kitchen Paper Towel",
        Material: "Virgin bamboo pulp",
        GSM: "24.5 gsm",
        Layer: "2ply",
        "Sheet size": "220*225mm",
        Sheets: "100 sheets",
        Embossed: "Dot embossed",
        Core: "45mm",
        Weight: "260g/roll",
        "Tissue color": "White",
        Feature: "Plastic free",
        Packing: "Individual wraps, 8 rolls/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 10,000 rolls. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "7",
      title: "Commercial Facial Tissue",
      img: "/images/commercial-facial-tissue.jpg",
      features: [
        "Portable facial tissue, ultra-soft for baby care and daily use",
        "Sensitive skin friendly with a silky touch",
        "FSC approved biodegradable bamboo tissue",
      ],
      specs: {
        Product: "COMMERCIAL FACIAL TISSUE",
        Material: "Virgin bamboo pulp",
        GSM: "15gsm",
        Layer: "2ply",
        "Sheet size": "200*204mm",
        Sheets: "80 sheets (160 pieces)",
        Embossed: "Side embossed",
        Packaging: "Matte plastic film",
        Weight: "100g/pack",
        "Tissue color": "Unbleached",
        Feature: "COMMERCIAL",
        Packing: "120 packs/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 20ft container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "8",
      title: "Ultra Soft Facial Tissue",
      img: "/images/ultra-soft-facial-tissue.jpg",
      features: [
        "Ultra-soft 3-ply facial tissue, ideal for baby care",
        "Sensitive skin friendly with a silky touch",
        "Biodegradable and high water absorbent",
      ],
      specs: {
        Product: "ULTRA SOFT FACIAL TISSUE",
        Material: "Virgin wood pulp",
        GSM: "12.5gsm",
        Layer: "3ply",
        "Sheet size": "188*190mm (4’*4.8’)",
        Sheets: "190 sheets (570 pieces)",
        Embossed: "Side embossed",
        Packaging: "Matte plastic film",
        Weight: "260g/pack",
        "Tissue color": "White",
        Feature: "Super soft",
        Packing: "12 packs/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 20ft container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "9",
      title: "Ultra Soft Toilet Paper",
      img: "/images/ultra-soft-toilet-paper.jpg",
      features: [
        "Premium 4-ply wood pulp toilet paper, ultra-soft and strong",
        "Eco-friendly, biodegradable, and 100% plastic-free",
        "Water-soluble and silky touch for sensitive skin",
      ],
      specs: {
        Product: "ULTRA SOFT TOILET PAPER",
        Material: "Virgin wood pulp",
        GSM: "14.5gsm",
        Layer: "4ply",
        "Sheet size": "101*115mm (4’*4.5’)",
        Sheets: "240 sheets",
        Embossed: "Side embossed",
        Core: "42mm",
        Weight: "170g/roll",
        "Tissue color": "White",
        Feature: "Super soft, Water soluble",
        Packing: "10 rolls/polybag (60 rolls/master bag) or 27 rolls/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 40HQ container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "10",
      title: "2ply Mini Jumbo Toilet Roll",
      img: "/images/2ply-mini-jumbo-toilet-roll.jpg",
      features: [
        "High-capacity jumbo roll, significantly reducing replacement frequency",
        "Soft yet durable 2-ply texture with side embossing",
        "Cost-effective solution for high-traffic commercial washrooms",
      ],
      specs: {
        Product: "2PLY MINI JUMBO TOILET ROLL",
        Material: "Virgin mix pulp",
        GSM: "19gsm",
        Layer: "2ply",
        "Sheet size": "94*115mm",
        Length: "183m",
        "Roll diameter": "230mm",
        Core: "72mm",
        Embossed: "Side embossed",
        Weight: "750g/roll",
        "Tissue color": "White",
        Packing: "3 rolls/pack, 12 rolls/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 40HQ container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "29",
      title: "Toilet Paper",
      img: "/images/toilet-paper.jpg",
      features: [
        "100% Eco-friendly virgin bamboo toilet paper",
        "Biodegradable and water-soluble with a silky touch",
        "Plastic-free and Responsible Forestry Certified",
      ],
      specs: {
        Product: "TOILET PAPER",
        Material: "Virgin bamboo pulp",
        GSM: "14.5gsm",
        Layer: "3ply",
        "Sheet size": "101*115mm (4’*4.5’)",
        Sheets: "240 sheets",
        Embossed: "Side embossed",
        Core: "42mm",
        Weight: "140g/roll",
        "Tissue color": "Unbleached",
        Feature: "Environmental protection",
        Packing: "Matte plastic film; 10 rolls/polybag, 60 rolls/master bag",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 40HQ container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
    {
      id: "30",
      title: "Bamboo Dissolvable Toilet Paper",
      img: "/images/virgin-dissolvable-toilet-paper.jpg",
      features: [
        "100% Eco-friendly bamboo pulp with elegant butterfly embossing",
        "Specially designed to be water-soluble and toilet-safe",
        "Biodegradable, plastic-free, and FSC certified",
      ],
      specs: {
        Product: "Bamboo Dissolvable Toilet Paper",
        Material: "Virgin bamboo pulp",
        GSM: "14.5gsm",
        Layer: "3ply",
        "Sheet size": "101*120mm (4’*4.8’)",
        Sheets: "220 sheets",
        Embossed: "Butterflies embossed",
        Core: "42mm",
        Weight: "120g/roll",
        "Tissue color": "White",
        Feature: "Dissolvable",
        Packing: "12 rolls/polybag, 96 rolls/carton",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 40HQ container. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
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
    },
    {
      id: "13",
      title: "Hand Paper Towel",
      img: "/images/hand-paper-towel.jpg",
    },
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
      features: [
        "100% Virgin premium toilet paper with a silky touch",
        "Water-soluble design with elegant butterfly embossing",
        "Biodegradable, plastic-free, and FSC certified",
      ],
      specs: {
        Product: "Virgin DISSOLVABLE TOILET PAPER",
        Material: "Virgin bamboo pulp",
        GSM: "14.5gsm",
        Layer: "3ply",
        "Sheet size": "101*120mm (4’*4.8’)",
        Sheets: "220 sheets",
        Embossed: "Butterflies embossed",
        Core: "42mm",
        Weight: "120g/roll",
        "Tissue color": "White",
        Feature: "Dissolvable",
        Packing: "Packaging one: 24 rolls/case",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 20,000 rolls. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
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
      features: [
        "100% Recycled eco-friendly pulp, promoting a circular economy",
        "Water-soluble and biodegradable, safe for all plumbing systems",
        "Elegant butterfly embossing with a soft, silky touch",
      ],
      specs: {
        Product: "Recycle DISSOLVABLE TOILET PAPER",
        Material: "Recycle pulp",
        GSM: "14.5gsm",
        Layer: "3ply",
        "Sheet size": "101*120mm (4’*4.8’)",
        Sheets: "220 sheets",
        Embossed: "Butterflies embossed",
        Core: "42mm",
        Weight: "120g/roll",
        "Tissue color": "White",
        Feature: "Dissolvable",
        Packing: "Packaging one: 24 rolls/case",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 20,000 rolls. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
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
      features: [
        "100% Mixed pulp eco-friendly paper, perfectly balancing quality and value",
        "Water-soluble and biodegradable, designed for smooth dissolvability",
        "Silk-like touch with elegant butterfly embossing",
      ],
      specs: {
        Product: "Mixed DISSOLVABLE TOILET PAPER",
        Material: "Mixed pulp",
        GSM: "14.5gsm",
        Layer: "3ply",
        "Sheet size": "101*120mm (4’*4.8’)",
        Sheets: "220 sheets",
        Embossed: "Butterflies embossed",
        Core: "42mm",
        Weight: "120g/roll",
        "Tissue color": "White",
        Feature: "Dissolvable",
        Packing: "Packaging one: 24 rolls/case",
        Certifications: "FSC, BSI, SGS",
      },
      terms: [
        { label: "Samples", value: "We can provide samples for free, but the customer needs to pay the freight." },
        { label: "Customize", value: "Material, GSM, Layer, Sheet size, Sheets, Weight, Packing can be customized." },
        { label: "MOQ", value: "Customized: 20,000 rolls. Standard: No limit." },
        { label: "Lead time", value: "Customized: approx 25 work days. Standard: approx 7-10 days." },
      ],
    },
  ],
};

// ============================================================
// 🚀 PAGE COMPONENT
// ============================================================
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  // 💡 关键防御机制 1：无论用户怎么输入 URL，统一转小写匹配数据库 (比如 /products/Bamboo -> bamboo)
  const normalizedCategory = decodeURIComponent(category).toLowerCase();

  // 💡 关键防御机制 2：如果找不到这个分类，才会去 404
  if (!Object.keys(productsDatabase).includes(normalizedCategory)) {
    notFound();
  }

  const products = productsDatabase[normalizedCategory];

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
            href={`/products/${normalizedCategory}/${product.id}`}
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