import Link from "next/link";

const ArrowIcon = () => (
  <span className="arrow-icon">→</span>
);

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Products & Services */}
        <div className="footer-col">
          <h4>Products &amp; Services</h4>
          <div className="divider" />
          <ul className="footer-links">
            <li>
              <Link href="/products/bamboo">
                <ArrowIcon /> Bamboo Products
              </Link>
            </li>
            <li>
              <Link href="/products/virgin">
                <ArrowIcon /> Virgin Products
              </Link>
            </li>
            <li>
              <Link href="/products/recycle">
                <ArrowIcon /> Recycle Products
              </Link>
            </li>
            <li>
              <Link href="/products/mixed">
                <ArrowIcon /> Mixed Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Access */}
        <div className="footer-col">
          <h4>Quick Access</h4>
          <div className="divider" />
          <ul className="footer-links">
            <li>
              <Link href="/about-us">
                <ArrowIcon /> About Us
              </Link>
            </li>
            <li>
              <Link href="/corporate-responsibility">
                <ArrowIcon /> Corporate Responsibility
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <ArrowIcon /> Contact Us
              </Link>
            </li>
            <li>
              <Link href="/career">
                <ArrowIcon /> Careers
              </Link>
            </li>
            <li>
              <Link href="/products">
                <ArrowIcon /> Our Products
              </Link>
            </li>
          </ul>
        </div>

        {/* You Are */}
        <div className="footer-col">
          <h4>You are</h4>
          <div className="divider" />
          <ul className="footer-links">
            <li>
              <Link href="/customer-zone">
                <ArrowIcon /> Supplier
              </Link>
            </li>
            <li>
              <Link href="/">
                <ArrowIcon /> Customer
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <ArrowIcon /> A member of the Press
              </Link>
            </li>
            <li>
              <Link href="/about-us">
                <ArrowIcon /> A Visitor
              </Link>
            </li>
          </ul>
        </div>

        {/* Head Office */}
        <div className="footer-col">
          <h4>Head Office</h4>
          <div className="divider" />
          <ul className="footer-contact">
            <li>
              <span className="icon">📍</span>
              <span>222 Rue Poirier, #30 St-Eustache, J7R 6B1</span>
            </li>
            <li>
              <span className="icon">📞</span>
              <span>+1(514)971-8238</span>
            </li>
            <li>
              <span className="icon">📞</span>
              <span>+1(514)291-8063</span>
            </li>
            <li>
              <span className="icon">✉️</span>
              <span>sales@ivoiretissue.com</span>
            </li>
          </ul>

          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/watch?v=Cw_H_hXJ3SA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <Link href="/policy">Privacy Policy</Link>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>Terms of use</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span>FSC certifications</span>
        </div>
        <p className="footer-copyright">
          Copyright © 2023 Ivoire Tissue – All Rights Reserved. Ivoire Tissue
          Paper™️
        </p>
      </div>
    </footer>
  );
}
