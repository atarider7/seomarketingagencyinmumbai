import Image from "next/image";
import Link from "next/link";
import SeoChecker from "@/components/SeoChecker";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata = {
  title: "SEO, Website Development & App Development Agency in Mumbai | seomarketingagencyinmumbai.com",
  description:
    "Mumbai's premier digital agency for Search Engine Optimization (SEO), High-Speed Website Development, and Mobile App Development (iOS & Android). Based in BKC, Mumbai.",
};

export default function HomePage() {
  return (
    <main>
      {/* ==================== HERO SECTION (LUXURY EDITORIAL) ==================== */}
      <section className="section-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow-row">
              <div className="hero-eyebrow-text">
                SAME ROADS <span>•</span> NEW PERSPECTIVES <span>•</span> MUMBAI BKC
              </div>
              <div className="editorial-counter">
                <span className="curr">01</span>
                <span className="divider">/</span>
                <span>03</span>
              </div>
            </div>

            <h1 className="hero-editorial-title">
              <span className="editorial-row-red">BUILT</span>
              <span className="editorial-row-serif">DIFFERENTLY.</span>
            </h1>

            <p className="hero-desc-editorial">
              A fresh take on digital performance — where Google #1 authority, high-speed custom web engineering, and scalable iOS &amp; Android mobile apps meet Mumbai’s most ambitious brands.
            </p>

            <div className="hero-cta-group">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Bespoke Proposal ⚡
              </Link>
              <a href="#services" className="btn btn-luxury-pill btn-lg">
                Explore 3 Disciplines →
              </a>
              <a
                href="https://wa.me/919594147486"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-lg"
              >
                WhatsApp Direct 💬
              </a>
            </div>

            <div className="hero-stats-row">
              <div className="stat-item">
                <h3>98<span>%</span></h3>
                <p>Google Top 3 Rank Rate</p>
              </div>
              <div className="stat-item">
                <h3>450<span>+</span></h3>
                <p>High-Speed Web &amp; SEO</p>
              </div>
              <div className="stat-item">
                <h3>120<span>+</span></h3>
                <p>Mobile Apps Launched</p>
              </div>
              <div className="stat-item">
                <h3>₹42Cr<span>+</span></h3>
                <p>Verified Client Value</p>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            {/* Vertical Crimson Light Blade (From Reference Photo) */}
            <div className="crimson-light-blade"></div>

            {/* Studio Wet Floor Reflection */}
            <div className="studio-floor-reflection"></div>

            <div className="media-mockup-wrapper">
              <Image
                src="/images/seo-analytics-hero.jpg"
                alt="Apex Digital SEO, Website & App Performance Showcase"
                width={700}
                height={394}
                priority
                className="media-mockup-image"
              />

              <div className="floating-badge floating-badge-1">
                <div className="badge-icon-box" style={{ background: "rgba(255, 51, 34, 0.15)", color: "var(--crimson)", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>⚡</div>
                <div>
                  <strong style={{ color: "var(--white-pure)", fontSize: "0.88rem", display: "block" }}>
                    SEO • Web • Apps
                  </strong>
                  <span style={{ color: "var(--crimson-light)", fontSize: "0.76rem", fontFamily: "var(--font-mono)" }}>
                    Direct Mumbai Flagship
                  </span>
                </div>
              </div>

              <div className="floating-badge floating-badge-2">
                <div className="badge-icon-box" style={{ background: "rgba(179, 27, 27, 0.22)", color: "var(--crimson-light)", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>🏆</div>
                <div>
                  <strong style={{ color: "var(--white-pure)", fontSize: "0.88rem", display: "block" }}>
                    Rank #1 in Mumbai
                  </strong>
                  <span style={{ color: "var(--crimson-light)", fontSize: "0.76rem", fontFamily: "var(--font-mono)" }}>
                    Google 3-Pack Verified
                  </span>
                </div>
              </div>

              {/* Luxury Mini Preview Card (From Reference Photo Bottom-Right) */}
              <div className="hero-mini-preview-card">
                <Image
                  src="/images/web-showcase.jpg"
                  alt="Next Project Preview"
                  width={130}
                  height={70}
                />
                <span>02 / WEB SPEC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3 CORE SERVICES (MOBILE SWIPEABLE) ==================== */}
      <section className="section" id="services" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Specialize In</span>
            <h2 className="section-title">Our 3 Core Digital Services</h2>
            <p className="section-desc">
              Direct, high-performance digital solutions designed to drive revenue, search visibility, and customer acquisition.
            </p>
            <div className="mobile-swipe-hint">
              <span>← Swipe left or right to explore services →</span>
            </div>
          </div>

          {/* Swipeable container on mobile, responsive grid on desktop */}
          <div className="service-scroll-container">
            {/* Service 1: SEO Services */}
            <div className="service-card service-card-snap">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.4rem" }}>
                <div className="editorial-counter">
                  <span className="curr">01</span>
                  <span className="divider">/</span>
                  <span>03</span>
                </div>
                <span style={{ fontSize: "0.74rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", color: "var(--crimson-light)", textTransform: "uppercase" }}>
                  Google Domination
                </span>
              </div>
              <div className="service-icon">🎯</div>
              <h3>Search Engine Optimization (SEO)</h3>
              <p style={{ color: "var(--white-pure)", fontWeight: 600, marginBottom: "0.6rem", fontSize: "1.05rem" }}>
                Dominate Google Rankings &amp; Scale Inbound Leads
              </p>
              <p>
                Capture high-intent commercial buyers searching for your solutions in Mumbai and nationwide. We engineer permanent Page #1 Google positions through technical audits, localized Google 3-Pack authority, and high-impact editorial backlinks.
              </p>
              <ul className="service-features-list">
                <li>Google Page #1 Search Rankings (Mumbai &amp; Pan-India)</li>
                <li>Mumbai Local 3-Pack (BKC, Bandra, Andheri, SoBo)</li>
                <li>Technical SEO &amp; Core Web Vitals 98+</li>
                <li>High-DA Editorial Backlink Acquisition</li>
                <li>Bi-Weekly Transparent Live Rank Reports</li>
              </ul>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/contact?service=seo" className="btn btn-primary btn-sm">
                  Get Free SEO Proposal →
                </Link>
                <Link href="/seo-services" className="btn btn-luxury-pill btn-sm" style={{ textAlign: "center" }}>
                  View Full SEO Capabilities &amp; Roadmap
                </Link>
              </div>
            </div>

            {/* Service 2: Website Development */}
            <div className="service-card service-card-snap">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.4rem" }}>
                <div className="editorial-counter">
                  <span className="curr">02</span>
                  <span className="divider">/</span>
                  <span>03</span>
                </div>
                <span style={{ fontSize: "0.74rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", color: "var(--crimson-light)", textTransform: "uppercase" }}>
                  Web Architecture
                </span>
              </div>
              <div className="service-icon">💻</div>
              <h3>Website Design &amp; Development</h3>
              <p style={{ color: "var(--white-pure)", fontWeight: 600, marginBottom: "0.6rem", fontSize: "1.05rem" }}>
                Ultra-Fast, Modern &amp; Phone-Responsive Websites
              </p>
              <p>
                Your website is your primary digital storefront. We build bespoke Next.js and custom web experiences with sub-second loading (&lt;1.0s), obsidian luxury glassmorphism, and conversion funnels that turn visitors into paying clients.
              </p>
              <ul className="service-features-list">
                <li>100% Mobile &amp; Phone-First Responsive Architecture</li>
                <li>Guaranteed Sub-Second Page Load (&lt;1.0s)</li>
                <li>Modern Dark Mode Aesthetics &amp; Micro-animations</li>
                <li>Built-in Schema.org JSON-LD &amp; SEO Semantics</li>
                <li>High-Converting E-Commerce &amp; Corporate Lead Funnels</li>
              </ul>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/contact?service=website" className="btn btn-primary btn-sm">
                  Get Website Development Quote →
                </Link>
                <Link href="/web-services" className="btn btn-luxury-pill btn-sm" style={{ textAlign: "center" }}>
                  View Full Web Capabilities &amp; Architecture
                </Link>
              </div>
            </div>

            {/* Service 3: App Development */}
            <div className="service-card service-card-snap">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.4rem" }}>
                <div className="editorial-counter">
                  <span className="curr">03</span>
                  <span className="divider">/</span>
                  <span>03</span>
                </div>
                <span style={{ fontSize: "0.74rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", color: "var(--crimson-light)", textTransform: "uppercase" }}>
                  Mobile Engineering
                </span>
              </div>
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p style={{ color: "var(--white-pure)", fontWeight: 600, marginBottom: "0.6rem", fontSize: "1.05rem" }}>
                iOS &amp; Android Apps Built for Scale
              </p>
              <p>
                Turn your business concept into an engaging mobile application. We build high-performance cross-platform (Flutter &amp; React Native) and native (Swift &amp; Kotlin) mobile apps with secure payment gateways and App Store publishing.
              </p>
              <ul className="service-features-list">
                <li>Cross-Platform iOS &amp; Android (Flutter / React Native)</li>
                <li>Native Apple iOS (Swift) &amp; Android (Kotlin)</li>
                <li>Instant UPI, Razorpay &amp; Payment Gateway Integration</li>
                <li>Real-Time In-App Chat, Notifications &amp; Auth</li>
                <li>Guaranteed Apple App Store &amp; Google Play Store Approval</li>
              </ul>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link href="/contact?service=app" className="btn btn-primary btn-sm">
                  Get Mobile App Estimate →
                </Link>
                <Link href="/app-services" className="btn btn-luxury-pill btn-sm" style={{ textAlign: "center" }}>
                  View Full Mobile App Capabilities &amp; Stack
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FREE SEO & SITE CHECKER ==================== */}
      <SeoChecker />

      {/* ==================== CLIENT MARQUEE ==================== */}
      <section
        className="section"
        style={{ padding: "2.5rem 0", borderBottom: "1px solid var(--border-subtle)" }}
      >
        <div className="container" style={{ textAlign: "center", marginBottom: "1rem" }}>
          <p
            style={{
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--text-dim)",
              fontWeight: 600,
            }}
          >
            Trusted by 450+ High-Growth Mumbai Businesses &amp; Startups
          </p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-content">
            <div className="client-logo-pill">🏢 Lodha Luxury Estates</div>
            <div className="client-logo-pill">💎 Bandra Jewels Co.</div>
            <div className="client-logo-pill">🏥 Apex Healthcare Mumbai</div>
            <div className="client-logo-pill">💳 FinMatrix BKC</div>
            <div className="client-logo-pill">🛍️ UrbanVibe D2C</div>
            <div className="client-logo-pill">🍽️ Bombay Dining Group</div>
            <div className="client-logo-pill">⚖️ Mumbai Legal Chambers</div>
            <div className="client-logo-pill">🏨 Marine Drive Suites</div>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <div className="client-logo-pill">🏢 Lodha Luxury Estates</div>
            <div className="client-logo-pill">💎 Bandra Jewels Co.</div>
            <div className="client-logo-pill">🏥 Apex Healthcare Mumbai</div>
            <div className="client-logo-pill">💳 FinMatrix BKC</div>
            <div className="client-logo-pill">🛍️ UrbanVibe D2C</div>
            <div className="client-logo-pill">🍽️ Bombay Dining Group</div>
            <div className="client-logo-pill">⚖️ Mumbai Legal Chambers</div>
            <div className="client-logo-pill">🏨 Marine Drive Suites</div>
          </div>
        </div>
      </section>

      {/* ==================== CASE STUDIES ==================== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Proven Results</span>
            <h2 className="section-title">Case Studies: Measurable Growth</h2>
            <p className="section-desc">
              Real performance delivered for our clients across Mumbai and Maharashtra.
            </p>
          </div>

          <div className="case-studies-grid">
            <div className="case-card">
              <span className="case-pill">SEO: Bandra Luxury Real Estate</span>
              <h3>From Page 4 to #1 on Google for High-Value Commercial Searches</h3>
              <p>
                Executed full technical SEO audit, structured local geo-sitemaps, and achieved top 3 Google Map Pack positions across Bandra and South Mumbai.
              </p>
              <div className="case-stats-grid">
                <div>
                  <div className="case-stat-num">+380%</div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Organic Inbound Leads</span>
                </div>
                <div>
                  <div className="case-stat-num">#1</div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Google 3-Pack</span>
                </div>
              </div>
              <Link href="/contact" className="case-link">
                Request Case Breakdown →
              </Link>
            </div>

            <div className="case-card">
              <span className="case-pill">Website: Andheri Fashion Retail</span>
              <h3>Dark Mode Website Redesign Elevates PageSpeed from 28 to 96 on Mobile</h3>
              <p>
                Rebuilt slow legacy code into ultra-fast Next.js architecture with instant checkout and sub-second page loading.
              </p>
              <div className="case-stats-grid">
                <div>
                  <div className="case-stat-num">0.8s</div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Mobile Load Time</span>
                </div>
                <div>
                  <div className="case-stat-num">+62%</div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Checkout Conversions</span>
                </div>
              </div>
              <Link href="/contact" className="case-link">
                Request Case Breakdown →
              </Link>
            </div>

            <div className="case-card">
              <span className="case-pill">App: BKC FinTech Platform</span>
              <h3>Cross-Platform Mobile App with 150k+ Active Downloads</h3>
              <p>
                Engineered secure biometric authentication, instant UPI integration, and maintained a 4.8★ App Store rating.
              </p>
              <div className="case-stats-grid">
                <div>
                  <div className="case-stat-num">150k+</div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>Active Installs</span>
                </div>
                <div>
                  <div className="case-stat-num">4.8 ★</div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>App Store Rating</span>
                </div>
              </div>
              <Link href="/contact" className="case-link">
                Request Case Breakdown →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4-STEP PROCESS ==================== */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Systematic Approach</span>
            <h2 className="section-title">How We Guarantee Quality &amp; Deadlines</h2>
            <p className="section-desc">
              Whether you need SEO, website development, or a mobile app, our structured engineering process ensures success.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <div className="process-step-num">01</div>
              <h4>Requirement Analysis</h4>
              <p>We analyze your business, target audience, competitors, and exact technical requirements.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">02</div>
              <h4>Architecture &amp; Design</h4>
              <p>Wireframes, keyword maps, and clickable UI/UX mockups before writing a single line of production code.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">03</div>
              <h4>Sprint Execution</h4>
              <p>Fast coding sprints with speed optimization, QA checks on physical devices, and weekly live progress demos.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">04</div>
              <h4>Launch &amp; Scaling</h4>
              <p>Deploy to production servers, publish on Play Store / App Store, and rank on Google with bi-weekly reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ACCORDION ==================== */}
      <FaqAccordion />

      {/* ==================== BOTTOM CTA BANNER ==================== */}
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="badge badge-green" style={{ marginBottom: "1rem" }}>
                Ready to Accelerate Your Digital Growth?
              </span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", marginBottom: "1rem" }}>
                Let&apos;s Build Your SEO, Website, or Mobile App
              </h2>
              <p style={{ fontSize: "1.05rem", marginBottom: "2rem", color: "#cbd5e1" }}>
                Speak directly with our senior digital strategists in BKC Mumbai. Get a comprehensive scope and actionable proposal within 2 hours.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Submit Project Details 🚀
                </Link>
                <a
                  href="https://wa.me/919594147486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  Direct WhatsApp Chat 💬
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
