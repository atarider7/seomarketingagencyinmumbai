"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container navbar">
          <Link href="/" className="brand-logo" onClick={closeMobile}>
            <div className="brand-icon" style={{ background: "linear-gradient(135deg, #ff3b28, #991307)", boxShadow: "0 0 20px rgba(255, 51, 34, 0.45)" }}>⚡</div>
            <div className="brand-text">
              SEO AGENCY<span style={{ color: "var(--crimson)" }}>MUMBAI</span>
              <span className="brand-tag">seomarketingagencyinmumbai.com</span>
            </div>
          </Link>

          <nav aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${pathname === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>

              {/* 3 Main Services Dropdown */}
              <li className="nav-item">
                <Link
                  href="/services"
                  className={`nav-link ${
                    pathname.startsWith("/services") ||
                    pathname === "/seo-services" ||
                    pathname === "/web-services" ||
                    pathname === "/app-services"
                      ? "active"
                      : ""
                  }`}
                >
                  Services <span style={{ fontSize: "0.75rem" }}>▼</span>
                </Link>
                <ul className="dropdown-menu" style={{ width: "290px" }}>
                  <li>
                    <Link href="/seo-services" className="dropdown-link">
                      <span className="dropdown-icon">🎯</span>
                      <div>
                        <strong>SEO Services</strong>
                        <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)" }}>
                          Google Page #1 &amp; Maps 3-Pack
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/web-services" className="dropdown-link">
                      <span className="dropdown-icon">💻</span>
                      <div>
                        <strong>Website Development</strong>
                        <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)" }}>
                          Next.js &amp; Bespoke Web Engineering
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/app-services" className="dropdown-link">
                      <span className="dropdown-icon">📱</span>
                      <div>
                        <strong>App Development</strong>
                        <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)" }}>
                          iOS &amp; Android Cross-Platform
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li style={{ borderTop: "1px solid var(--border-subtle)", marginTop: "0.4rem", paddingTop: "0.4rem" }}>
                    <Link href="/services" className="dropdown-link">
                      <span className="dropdown-icon">📂</span>
                      <div>
                        <strong>All 3 Services Overview</strong>
                        <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-dim)" }}>
                          Pricing & Comparison
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  href="/about"
                  className={`nav-link ${pathname === "/about" ? "active" : ""}`}
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/blog"
                  className={`nav-link ${pathname === "/blog" ? "active" : ""}`}
                >
                  Blog & Guides
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  href="/contact"
                  className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-primary btn-sm">
              Get Bespoke Quote ⚡
            </Link>
            <button
              className={`hamburger-btn ${mobileOpen ? "active" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={closeMobile}
      ></div>
      <aside className={`mobile-nav-drawer ${mobileOpen ? "open" : ""}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link
              href="/"
              className={`mobile-nav-link ${pathname === "/" ? "active" : ""}`}
              onClick={closeMobile}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`mobile-nav-link ${pathname === "/services" ? "active" : ""}`}
              onClick={closeMobile}
            >
              Our 3 Services
            </Link>
            <ul className="mobile-sub-list">
              <li>
                <Link
                  href="/seo-services"
                  className="mobile-sub-link"
                  onClick={closeMobile}
                >
                  🎯 1. SEO Services (Google Rankings)
                </Link>
              </li>
              <li>
                <Link
                  href="/web-services"
                  className="mobile-sub-link"
                  onClick={closeMobile}
                >
                  💻 2. Website Development (Next.js Speed)
                </Link>
              </li>
              <li>
                <Link
                  href="/app-services"
                  className="mobile-sub-link"
                  onClick={closeMobile}
                >
                  📱 3. App Development (iOS &amp; Android)
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/about"
              className={`mobile-nav-link ${pathname === "/about" ? "active" : ""}`}
              onClick={closeMobile}
            >
              About Agency
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`mobile-nav-link ${pathname === "/blog" ? "active" : ""}`}
              onClick={closeMobile}
            >
              Blog & Guides
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`mobile-nav-link ${pathname === "/contact" ? "active" : ""}`}
              onClick={closeMobile}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <a href="tel:+919594147486" className="btn btn-outline btn-sm">
            📞 +91 95941 47486
          </a>
          <a
            href="https://wa.me/919594147486"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success btn-sm"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </aside>
    </>
  );
}
