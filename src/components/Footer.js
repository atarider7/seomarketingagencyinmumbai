import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid-compact">
        {/* Brand Column */}
        <div className="footer-col-main">
          <div className="brand-logo" style={{ marginBottom: "0.8rem" }}>
            <div className="brand-icon" style={{ background: "linear-gradient(135deg, #ff3b28, #991307)", boxShadow: "0 0 20px rgba(255, 51, 34, 0.45)" }}>⚡</div>
            <div className="brand-text">
              SEO AGENCY<span style={{ color: "var(--crimson)" }}>MUMBAI</span>
              <span className="brand-tag">seomarketingagencyinmumbai.com</span>
            </div>
          </div>
          <p style={{ fontSize: "0.92rem", lineHeight: "1.6", color: "var(--text-muted)", marginBottom: "1.2rem", maxWidth: "380px" }}>
            Mumbai’s premier digital agency engineering top Google search rankings, high-speed custom websites, and scalable mobile apps.
          </p>
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <span className="client-logo-pill" style={{ padding: "0.35rem 0.8rem", fontSize: "0.8rem" }}>Bandra Kurla Complex (BKC)</span>
            <span className="client-logo-pill" style={{ padding: "0.35rem 0.8rem", fontSize: "0.8rem" }}>Mumbai, MH</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col-nav">
          <h4>Navigation</h4>
          <ul className="footer-links-compact">
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/about" className="footer-link">About Us</Link></li>
            <li><Link href="/services" className="footer-link">Services</Link></li>
            <li><Link href="/blog" className="footer-link">Blog &amp; Guides</Link></li>
            <li><Link href="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col-nav">
          <h4>Core Services</h4>
          <ul className="footer-links-compact">
            <li><Link href="/seo-services" className="footer-link">SEO Services</Link></li>
            <li><Link href="/web-services" className="footer-link">Website Development</Link></li>
            <li><Link href="/app-services" className="footer-link">Mobile App Development</Link></li>
            <li><Link href="/seo-services#local-seo" className="footer-link">Mumbai Google 3-Pack</Link></li>
          </ul>
        </div>

        {/* Headquarters Contact */}
        <div className="footer-col-contact">
          <h4>Mumbai Headquarters</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <span>704, Trade Center, G Block, BKC, Bandra East, Mumbai 400051</span>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <a href="tel:+919594147486" style={{ color: "var(--crimson-light)", fontWeight: 600 }}>
              +91 95941 47486
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">💬</span>
            <a href="https://wa.me/919594147486" target="_blank" rel="noopener noreferrer" style={{ color: "var(--crimson-light)", fontWeight: 600 }}>
              WhatsApp: +91 95941 47486
            </a>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉️</span>
            <span>contact@seomarketingagencyinmumbai.com</span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>
          © 2026 seomarketingagencyinmumbai.com • Created by <a href="https://codeorbi.cloud" target="_blank" rel="noopener noreferrer" style={{ color: "var(--crimson-light)", fontWeight: 600 }}>codeorbi.cloud</a>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy-policy" style={{ color: "var(--text-muted)" }}>
            Privacy Policy
          </Link>
          <Link href="/terms" style={{ color: "var(--text-muted)" }}>
            Terms of Service
          </Link>
          <Link href="/contact" style={{ color: "var(--text-muted)" }}>
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
