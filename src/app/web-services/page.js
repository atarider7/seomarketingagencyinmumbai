import Image from "next/image";
import Link from "next/link";
import WebEstimator from "@/components/WebEstimator";

export const metadata = {
  title: "Website Design & Development in Mumbai | Fast & Mobile Responsive | seomarketingagencyinmumbai.com",
  description:
    "Custom web development agency in Mumbai. We build high-speed, phone-responsive, dark-mode websites optimized for Google rankings and maximum conversions.",
};

export default function WebServicesPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <Link href="/services">Services</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>Website Development</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="badge badge-purple">
                <span className="pulse-dot"></span>
                Ultra-Fast & Mobile-First Web Engineering
              </div>
              <h1 style={{ margin: "1rem 0" }}>
                High-Converting Websites Engineered for{" "}
                <span className="gradient-text">Lightning Speed & Flawless Phone Experience</span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Your website is your 24/7 sales representative in Mumbai. We build sleek dark-mode, glassmorphic web experiences that load under 1.2 seconds, captivate mobile users, and convert cold visitors into high-value clients.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <a href="#estimator" className="btn btn-primary btn-lg">
                  Calculate Website Cost ⚡
                </a>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Schedule UI/UX Review
                </Link>
              </div>

              <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
                <div>
                  <strong style={{ color: "var(--cyan)", fontSize: "1.5rem", display: "block" }}>
                    98/100
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Google Mobile PageSpeed</span>
                </div>
                <div>
                  <strong style={{ color: "var(--emerald)", fontSize: "1.5rem", display: "block" }}>
                    &lt; 1.0s
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Avg Page Load Time</span>
                </div>
                <div>
                  <strong style={{ color: "var(--violet)", fontSize: "1.5rem", display: "block" }}>
                    100%
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Phone Responsive</span>
                </div>
              </div>
            </div>

            <div>
              <div className="media-mockup-wrapper">
                <Image
                  src="/images/web-showcase.jpg"
                  alt="Responsive multi-device website design showcase with laptop, tablet and smartphone"
                  width={650}
                  height={365}
                  priority
                  className="media-mockup-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Engineering Pillars */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Web Architecture</span>
            <h2 className="section-title">Built Different: The 6 Web Engineering Pillars</h2>
            <p className="section-desc">
              Why our websites consistently outperform standard agency templates in speed, SEO, and sales conversion.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>1. Phone-First Responsive Design</h3>
              <p>Every layout is engineered mobile-first with touch-friendly tap targets, smooth gesture sliders, and optimized vertical reading flow for iPhone and Android users across Mumbai.</p>
            </div>

            <div className="service-card" id="speed">
              <div className="service-icon">⚡</div>
              <h3>2. Guaranteed Sub-Second Speed</h3>
              <p>We eliminate heavyweight bloated page builders. Clean semantic HTML, modular CSS, lazy-loaded next-gen WebP/AVIF graphics, and local Mumbai CDN caching.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>3. Sleek Dark Aesthetics & Glassmorphism</h3>
              <p>Modern dark-mode layouts with neon glowing accents, subtle micro-animations, and translucent frosted glass styling that makes your business look elite.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>4. Native SEO & Schema Integration</h3>
              <p>Every page is built with pristine semantic hierarchy (single H1, clean H2/H3s), automated Open Graph cards, canonical tags, and pre-baked Schema.org structured data.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>5. Bank-Grade Security & Zero Bloat</h3>
              <p>Hardened against DDOS, zero-dependency vulnerabilities, automated daily cloud backups, and SSL/TLS encryption for maximum client trust.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>6. Conversion Funnel Optimization</h3>
              <p>Strategic placement of WhatsApp click-to-chat triggers, sticky phone call buttons, friction-free forms, and clear value proposition CTAs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Website Cost Estimator */}
      <WebEstimator />

      {/* Comparison Table */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container container-sm">
          <div className="section-header">
            <span className="section-subtitle">The Difference</span>
            <h2 className="section-title">Standard Agency vs. Apex Digital Engineering</h2>
            <p className="section-desc">
              Why our code quality gives you an unfair advantage on Google search.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "1rem", fontWeight: 700 }}>
              <div style={{ color: "var(--rose)" }}>❌ Typical Agency in Mumbai</div>
              <div style={{ color: "var(--cyan)" }}>⚡ Apex Digital Engineering</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", padding: "1rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.9rem" }}>
              <div style={{ color: "var(--text-dim)" }}>Heavy bloated theme templates with 40+ third-party plugins.</div>
              <div style={{ color: "var(--text-main)" }}>Zero-bloat, custom-coded semantic architecture built for speed.</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", padding: "1rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.9rem" }}>
              <div style={{ color: "var(--text-dim)" }}>Loads in 4.5+ seconds on mobile; fails Core Web Vitals.</div>
              <div style={{ color: "var(--text-main)" }}>Sub-second load times (&lt;1.2s); 95+ PageSpeed on smartphones.</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", padding: "1rem 0", borderBottom: "1px solid var(--border-subtle)", fontSize: "0.9rem" }}>
              <div style={{ color: "var(--text-dim)" }}>SEO treated as an afterthought; missing schema markup.</div>
              <div style={{ color: "var(--text-main)" }}>Built by SEO veterans; pre-configured schema & meta hierarchies.</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", padding: "1rem 0", fontSize: "0.9rem" }}>
              <div style={{ color: "var(--text-dim)" }}>Generic corporate look with plain white background.</div>
              <div style={{ color: "var(--text-main)" }}>Sleek futuristic dark mode, glowing accents, and micro-animations.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="badge badge-green" style={{ marginBottom: "1rem" }}>
                Let&apos;s Build Something Extraordinary
              </span>
              <h2>Ready for a Website That Actually Sells?</h2>
              <p style={{ marginBottom: "2rem", color: "#cbd5e1" }}>
                Bring your current design or start from scratch. Our lead UI/UX architect will draft a modern wireframe for your brand.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start Website Project
                </Link>
                <a
                  href="https://wa.me/919594147486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
