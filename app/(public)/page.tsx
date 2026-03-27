import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedCounter from "../components/AnimatedCounter";
import ContactForm from "../components/ContactForm";
import VideoPlayerClient from "../components/VideoPlayerClient";

// ============================================================
// HOME PAGE - ivoiretissue.com 完美复刻
// ============================================================
// TODO: 需要你提供的资源（放在 public/ 目录下）:
//
// /public/images/logo.png              - 公司Logo
// /public/videos/hero-1.mp4            - Hero轮播视频1
// /public/videos/hero-2.mp4            - Hero轮播视频2
// /public/videos/hero-3.mp4            - Hero轮播视频3
// /public/images/about-bg.jpg          - About区域右侧背景图
// /public/images/product-bamboo.jpg    - 竹子产品背景图
// /public/images/product-virgin.jpg    - 原浆产品背景图
// /public/images/product-recycle.jpg   - 再生产品背景图
// /public/images/product-mixed.jpg     - 混合产品背景图
// /public/images/video-thumb-1.jpg     - 产品视频封面图
// /public/videos/product-video.mp4     - 产品视频
// /public/images/video-thumb-2.jpg     - YouTube视频封面图
// /public/videos/factory-video.mp4     - 工厂视频（或用.mov）
// /public/images/factory-thumb.jpg     - 工厂视频封面图
// /public/images/contact-bg.jpg        - 联系表单右侧背景图
//
// 你可以直接从原站下载这些资源：
// 视频: https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview-2.mp4
//        https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview.mp4
//        https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview-1.mp4
// Logo: https://ivoiretissue.com/wp-content/uploads/2024/03/Mar.png
// ============================================================

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel />

      {/* ==================== INFO GRID (3 Cards) ==================== */}
      <section className="info-grid">
        <div className="info-card">
          <h2>
            <Link href="/about-us#vision">
              almost 1<br />
              Unit in the North America
            </Link>
          </h2>
          <Link href="/contact-us" className="info-card-arrow" aria-label="Learn more">
            →
          </Link>
        </div>

        <div className="info-card">
          <h2>
            <Link href="/products">Products and Services Available</Link>
          </h2>
          <Link href="/products" className="info-card-arrow" aria-label="View products">
            →
          </Link>
        </div>

        <div className="info-card">
          <h2>
            <Link href="/about-us#mission">Our Future</Link>
          </h2>
          <Link href="/about-us" className="info-card-arrow" aria-label="Our future">
            →
          </Link>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Ivoire Tissue</h2>
          <p>
            Ivoire Tissue Paper is a pioneering Canadian company dedicated to
            producing high-quality tissue paper using sustainable bamboo
            resources. Established in 2022 in Montreal, Canada, the company was
            founded with a vision to offer eco-friendly alternatives to
            traditional paper products while ensuring top-notch quality and
            performance.
          </p>
          <p>
            At Ivoire Tissue Paper, sustainability is more than just a
            buzzword—it&apos;s a way of life. By utilizing bamboo, a rapidly
            renewable resource, we minimize our environmental footprint while
            offering superior quality products to our customers. Our production
            processes are designed to be energy-efficient and waste-minimizing,
            ensuring that every step of our operation is aligned with our
            commitment to environmental stewardship.
          </p>
          <p>
            By focusing on sustainability, quality, and innovation, Ivoire
            Tissue Paper is poised for continued growth and success in the
            competitive paper manufacturing industry, while making a positive
            impact on the environment and society.
          </p>
        </div>
        <div
          className="about-image"
          style={{
            backgroundImage: "url(/images/about-bg.jpg)",
          }}
        />
      </section>

      {/* ==================== PRODUCTS SECTION ==================== */}
      <div className="products-header">
        <h2>Find Our Different Products</h2>
        <p>
          Each of Ivoire Tissue Paper&apos;s products offers a unique
          combination of quality, sustainability, and functionality, making them
          the perfect choice for eco-conscious consumers seeking premium paper
          solutions.
        </p>
      </div>

      <section className="products-grid">
        <Link
          href="/products/bamboo"
          className="product-card"
          style={{ backgroundImage: "url(/images/product-bamboo.jpg)" }}
        >
          <div className="product-card-content">
            <h2>Bamboo Products</h2>
            <span className="product-card-btn">+</span>
          </div>
        </Link>

        <Link
          href="/products/virgin"
          className="product-card"
          style={{ backgroundImage: "url(/images/product-virgin.jpg)" }}
        >
          <div className="product-card-content">
            <h2>Virgin Products</h2>
            <span className="product-card-btn">+</span>
          </div>
        </Link>

        <Link
          href="/products/recycle"
          className="product-card"
          style={{ backgroundImage: "url(/images/product-recycle.jpg)" }}
        >
          <div className="product-card-content">
            <h2>Recycle Products</h2>
            <span className="product-card-btn">+</span>
          </div>
        </Link>

        <Link
          href="/products/mixed"
          className="product-card"
          style={{ backgroundImage: "url(/images/product-mixed.jpg)" }}
        >
          <div className="product-card-content">
            <h2>Mixed Products</h2>
            <span className="product-card-btn">+</span>
          </div>
        </Link>
      </section>

      {/* ==================== VIDEO SECTION ==================== */}
      <section className="video-section">
        <div className="video-wrapper">
          <VideoPlayer
            src="/videos/product-video.mp4"
            thumbnail="/images/video-thumb-1.jpg"
          />
        </div>
      </section>

      {/* ==================== PROUD SECTION ==================== */}
      <section className="proud-section">
        <h2>
          Proud to Manufacture Most America Bamboo Tissue Products.
        </h2>
        <p>
          <strong>Ivoire Tissue</strong> helps to promote the use of bamboo for
          paper products and contribute to protecting the planet&apos;s natural
          resources.
        </p>
      </section>

      {/* ==================== TWO-COL: OUR PRODUCTS ==================== */}
      <section className="two-col-section">
        <VideoPlayer
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          thumbnail="/images/video-thumb-2.jpg"
          isYoutube
        />
        <div className="two-col-text">
          <h1>Our Products</h1>
          <p>
            Together, we can build a world where forests flourish, rivers run
            pure, and the air we breathe is clean and revitalizing.
          </p>
        </div>
      </section>

      {/* ==================== TWO-COL: FACTORY ==================== */}
      <section className="two-col-section reverse">
        <div className="two-col-text">
          <h1>Ivoire Tissue Factory</h1>
          <p>
            Together, we can turn the tide of environmental degradation and
            usher in an era of sustainability and abundance.
          </p>
        </div>
        <VideoPlayer
          src="/videos/factory-video.mp4"
          thumbnail="/images/factory-thumb.jpg"
        />
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="stats-section">
        <AnimatedCounter target={1} label="Activity Sector" />
        <AnimatedCounter target={3} label="Customers" />
        <AnimatedCounter target={4} label="Employees" />
        <AnimatedCounter target={3} label="Renewable Energy Power Plans" />
      </section>

      {/* ==================== VISION SECTION ==================== */}
      <section className="vision-section">
        <div className="vision-header">
          <h2>Our Vision</h2>
          <p>
            Ivoire Tissue Paper – Redefining Excellence, Sustaining the Future.
          </p>
        </div>

        <div className="vision-grid">
          {/* Company Info Card */}
          <div className="company-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="Ivoire Tissue Paper" />
            <h3>Ivoire Tissue Paper</h3>
            <p>
              Ivoire Tissue Paper is a Canadian manufacturing company established
              in 2022 that specializes in Bamboo transformation into Tissue
              Paper, Paper Towels, Facial Tissue, Wet Wipes, Hung-up Tissue, and
              Pocket Tissue.
            </p>
          </div>

          {/* Flip Card: History */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <svg
                  className="flip-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <h3>Our History</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Ivoire Tissue Paper is a Canadian family company founded on 12
                  December 2022 in Montreal, Québec (Canada).
                </p>
                <Link href="/about-us#history">Read More</Link>
              </div>
            </div>
          </div>

          {/* Flip Card: Mission */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <svg
                  className="flip-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <h3>Our Mission</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  At Ivoire Tissue Paper, our mission is to revolutionize the
                  paper industry by providing environmentally sustainable
                  products.
                </p>
                <Link href="/about-us#mission">Read More</Link>
              </div>
            </div>
          </div>

          {/* Flip Card: Location */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <svg
                  className="flip-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
                <h3>Our Location</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Ivoire Tissue Paper was created in November 2022 in Montreal,
                  Quebec, Canada. Our factory is in Saint-Eustache at 222 Rue
                  Poirier, 32, Saint-Eustache, J7R 6B1.
                </p>
                <Link href="/about-us#vision">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className="contact-section">
        <div className="contact-header">
          <h2>Submit a request</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
          <div
            className="contact-image"
            style={{
              backgroundImage: "url(/images/contact-bg.jpg)",
            }}
          />
        </div>
      </section>
    </>
  );
}

// ============================================================
// VideoPlayer 子组件 - 支持本地视频和YouTube iframe
// ============================================================
function VideoPlayer({
  src,
  thumbnail,
  isYoutube = false,
}: {
  src: string;
  thumbnail: string;
  isYoutube?: boolean;
}) {
  return <VideoPlayerClient src={src} thumbnail={thumbnail} isYoutube={isYoutube} />;
}
