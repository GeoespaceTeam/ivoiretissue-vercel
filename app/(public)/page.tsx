import Link from "next/link";
import HeroCarousel from "../components/HeroCarousel";
import AnimatedCounter from "../components/AnimatedCounter";
import ContactForm from "../components/ContactForm";
import VideoPlayerClient from "../components/VideoPlayerClient";

// ============================================================
// IVOIRE TISSUE HOME PAGE
// Design style: dongshi (东实纸业) layout
// Content: Ivoire Tissue Paper
// ============================================================
// TODO: 需要提供的资源（放在 public/ 目录下）:
//
// /public/images/logo.png              - Ivoire Tissue Logo
// /public/videos/hero-1.mp4            - Hero视频1
// /public/videos/hero-2.mp4            - Hero视频2
// /public/videos/hero-3.mp4            - Hero视频3
// /public/images/about.png             - About区域图片
// /public/images/product-bamboo.jpg    - 竹子产品图
// /public/images/product-virgin.jpg    - 原浆产品图
// /public/images/product-recycle.jpg   - 再生产品图
// /public/images/product-mixed.jpg     - 混合产品图
// /public/images/video-thumb.jpg       - 视频封面图
// /public/videos/product-video.mp4     - 产品视频
// /public/images/contact-bg.jpg        - 联系区域背景图
//
// 原站资源:
// Logo: https://ivoiretissue.com/wp-content/uploads/2024/03/Mar.png
// 视频: https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview-2.mp4
//       https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview.mp4
//       https://ivoiretissue.com/wp-content/uploads/2024/03/WhatsApp-video-preview-1.mp4
// ============================================================

export default function HomePage() {
  return (
    <>
      {/* ==================== HERO CAROUSEL ==================== */}
      <HeroCarousel />

      {/* ==================== STATS BAR (dongshi style) ==================== */}
      <section className="stats-bar">
        <div className="stats-bar-inner">
          <div className="stat-item">
            <div>
              <AnimatedCounter target={2022} />
              <span className="stat-suffix">Est.</span>
            </div>
            <div className="stat-desc">
              Founded in Montreal, Canada — a pioneering bamboo tissue paper
              manufacturer.
            </div>
          </div>

          <div className="stat-item">
            <div>
              <AnimatedCounter target={4} />
              <span className="stat-suffix">Lines</span>
            </div>
            <div className="stat-desc">
              4 product lines: Bamboo, Virgin, Recycle, and Mixed — premium
              sustainable paper solutions.
            </div>
          </div>

          <div className="stat-item">
            <div>
              <AnimatedCounter target={3} />
              <span className="stat-suffix">Plans</span>
            </div>
            <div className="stat-desc">
              3 renewable energy power plans driving our commitment to
              eco-friendly manufacturing.
            </div>
          </div>

          <div className="stat-item">
            <div>
              <AnimatedCounter target={1} />
              <span className="stat-suffix">Factory</span>
            </div>
            <div className="stat-desc">
              State-of-the-art production facility in Saint-Eustache, Quebec,
              serving North America.
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section className="about-section">
        <div className="section-wrapper">
          <div className="section-title">
            <h1>About Ivoire Tissue</h1>
          </div>
          <div className="section-title-desc">
            Ivoire Tissue Paper is a pioneering Canadian company dedicated to
            producing high-quality tissue paper using sustainable bamboo
            resources. Established in 2022 in Montreal, Canada, the company was
            founded with a vision to offer eco-friendly alternatives to
            traditional paper products while ensuring top-notch quality and
            performance.
          </div>

          <div className="about-row">
            <div className="about-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about.png" alt="About Ivoire Tissue" />
            </div>
            <div className="about-text">
              <p>
                At Ivoire Tissue Paper, sustainability is more than just a
                buzzword — it&apos;s a way of life. By utilizing bamboo, a
                rapidly renewable resource, we minimize our environmental
                footprint while offering superior quality products to our
                customers.
              </p>
              <p>
                Our production processes are designed to be energy-efficient and
                waste-minimizing, ensuring that every step of our operation is
                aligned with our commitment to environmental stewardship.
              </p>
              <p>
                By focusing on sustainability, quality, and innovation, Ivoire
                Tissue Paper is poised for continued growth and success in the
                competitive paper manufacturing industry, while making a positive
                impact on the environment and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCTS (dongshi card grid) ==================== */}
      <section className="products-section">
        <div className="section-wrapper">
          <div className="section-title">
            <h1>Find Our Different Products</h1>
          </div>
          <div className="section-title-desc">
            Each of Ivoire Tissue Paper&apos;s products offers a unique
            combination of quality, sustainability, and functionality, making
            them the perfect choice for eco-conscious consumers.
          </div>

          <div className="products-grid">
            {[
              {
                title: "Bamboo Products",
                desc: "Premium tissue paper made from 100% sustainable bamboo fiber — soft, strong, and eco-friendly.",
                img: "/images/product-bamboo.jpg",
                href: "/products/bamboo",
              },
              {
                title: "Virgin Products",
                desc: "Ultra-soft virgin pulp tissue products delivering exceptional comfort and absorbency.",
                img: "/images/product-virgin.jpg",
                href: "/products/virgin",
              },
              {
                title: "Recycle Products",
                desc: "Eco-conscious recycled tissue paper — reducing waste while maintaining quality performance.",
                img: "/images/product-recycle.jpg",
                href: "/products/recycle",
              },
              {
                title: "Mixed Products",
                desc: "Balanced blend of bamboo, virgin, and recycled fibers for versatile everyday use.",
                img: "/images/product-mixed.jpg",
                href: "/products/mixed",
              },
            ].map((product) => (
              <Link
                key={product.title}
                href={product.href}
                className="product-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="product-card-img"
                  src={product.img}
                  alt={product.title}
                />
                <div className="product-card-body">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO SECTION ==================== */}
      <section className="video-section">
        <div className="section-wrapper">
          <div className="section-title">
            <h1>Discover Our Process</h1>
          </div>
          <div className="section-title-desc">
            Together, we can build a world where forests flourish, rivers run
            pure, and the air we breathe is clean and revitalizing.
          </div>

          <VideoPlayerClient
            src="/videos/product-video.mov"
            thumbnail="/images/video-thumb.jpg"
          />
        </div>
      </section>

      {/* ==================== VISION (dongshi hover-card style) ==================== */}
      <section className="vision-section">
        <div className="section-wrapper">
          <div className="section-title">
            <h1>Our Vision</h1>
          </div>
          <div className="section-title-desc">
            Ivoire Tissue Paper — Redefining Excellence, Sustaining the Future.
          </div>

          <div className="vision-grid">
            {/* Company card */}
            <div className="company-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="Ivoire Tissue Paper" />
              <h3>Ivoire Tissue Paper</h3>
              <p>
                A Canadian manufacturing company established in 2022 that
                specializes in Bamboo transformation into Tissue Paper, Paper
                Towels, Facial Tissue, Wet Wipes, and Pocket Tissue.
              </p>
            </div>

            {/* History */}
            <Link href="/about-us#history" className="vision-card">
              <div className="vision-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3>Our History</h3>
              <p>
                Ivoire Tissue Paper is a Canadian family company founded on 12
                December 2022 in Montreal, Québec (Canada).
              </p>
              <span className="card-link">Read More</span>
            </Link>

            {/* Mission */}
            <Link href="/about-us#mission" className="vision-card">
              <div className="vision-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize the paper industry by providing environmentally
                sustainable, high-quality products.
              </p>
              <span className="card-link">Read More</span>
            </Link>

            {/* Location */}
            <Link href="/about-us#vision" className="vision-card">
              <div className="vision-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13" />
                  <path d="M22 2l-7 20-4-9-9-4z" />
                </svg>
              </div>
              <h3>Our Location</h3>
              <p>
                Our factory is in Saint-Eustache at 222 Rue Poirier, 32,
                Saint-Eustache, J7R 6B1, Quebec, Canada.
              </p>
              <span className="card-link">Read More</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section className="contact-section">
        <div className="section-wrapper">
          <div className="section-title">
            <h1>Submit a Request</h1>
          </div>
          <div className="section-title-desc">
            Have a question or want to learn more about our products? Get in
            touch with our team.
          </div>

          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
            <div
              className="contact-image"
              style={{ backgroundImage: "url(/images/contact-bg.jpg)" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
