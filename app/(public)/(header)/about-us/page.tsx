import type { Metadata } from "next";
import ContentSection from "@/app/components/ContentSection";
// 如果你有单独的 CSS 文件，可以在这里引入，例如：
// import "./about.css";

export const metadata: Metadata = {
  title: "About Us – Ivoiretissue",
  description:
    "Learn about the history, mission, and location of Ivoire Tissue Paper.",
};

export default function AboutUsPage() {
  return (
    <div className="about-page">
      {/* 页面主标题区 */}
      <section className="page-header">
        <div className="container">
          <h1>Ivoire Tissue</h1>
        </div>
      </section>

      {/* 1. Our History */}
      <ContentSection
        id="history"
        title="Our History"
        // imageSrc="/images/about-history.jpg" // 准备好图片后取消注释
      >
        <p>
          Ivoire Tissue Paper is a Canadian family company founded on 12
          December 2022 in Montreal, Québec (Canada). Ivoire Tissue was
          preoccupied with the environment and given climate change and the
          destruction of our forest systems, Ivoire Tissue has decided to help
          protect our planet by providing solutions such as the use of bamboo
          paper products to replace traditional paper products. In 2022, Yves
          Andoh Chairman of Ivoire Tissue, and Cynthia Kadjo VP of Ivoire Tissue
          decided to implant a factory at Saint-Eustache 37min or 45km to
          Montréal at 222 Rue Poirier.
        </p>
      </ContentSection>

      {/* 2. Our Mission - 使用 reverse={true} 让图文反转，增加视觉层次感 */}
      <ContentSection
        id="mission"
        title="Our Mission"
        reverse={true}
        // imageSrc="/images/about-mission.jpg"
      >
        <p>
          Ivoire Tissue Paper is dedicated to promoting sustainability,
          innovation, and quality in the paper industry. By utilizing bamboo as
          a renewable resource, the company aims to reduce environmental impact
          while providing high-quality alternatives to traditional paper
          products.
        </p>
        <p>
          By offering high-quality alternatives to traditional paper products,
          Ivoire Tissue Paper aims to inspire positive change within the paper
          industry and encourage more sustainable practices among consumers and
          businesses alike. Through their dedication to sustainability,
          innovation, and quality, they strive to make a meaningful contribution
          to environmental conservation and create a brighter future for
          generations to coefficient harvesting without causing deforestation or
          habitat destruction.
        </p>
      </ContentSection>

      {/* 3. Our Location - id 必须为 "vision" 以匹配 Header/Footer 中的锚点链接 */}
      <ContentSection
        id="vision"
        title="Our Location"
        // imageSrc="/images/about-location.jpg"
      >
        <p>
          Located at 222 Rue Poirier in Saint-Eustache, Quebec, Canada, Ivoire
          Tissue Paper specializes in the manufacturing of premium bamboo-based
          paper products. Situated in the heart of Saint-Eustache, our facility
          combines state-of-the-art production technology with a commitment to
          environmental sustainability.
        </p>
        <p>
          At Ivoire Tissue Paper, we pride ourselves on using bamboo—a rapidly
          renewable resource—as the primary material for our paper products.
          Bamboo’s exceptional strength and eco-friendly properties make it an
          ideal alternative to traditional paper sources. Our production
          processes prioritize efficiency and sustainability, minimizing
          environmental impact without compromising product quality.
        </p>
        <p>
          Our location in Saint-Eustache offers strategic advantages, with
          proximity to major transportation routes facilitating efficient
          distribution throughout Quebec and beyond. Surrounded by the natural
          beauty of Quebec’s landscape, our company embodies the spirit of
          responsible manufacturing in harmony with nature.
        </p>
        <p>
          Visit us at 222 Rue Poirier to explore our range of bamboo tissue
          papers, napkins, and other sustainable paper solutions. Experience the
          difference of Ivoire Tissue Paper—where quality, innovation, and
          environmental consciousness converge.
        </p>
      </ContentSection>
    </div>
  );
}
