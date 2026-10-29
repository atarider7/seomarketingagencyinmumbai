import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | seomarketingagencyinmumbai.com - Mumbai Digital Agency",
  description:
    "Learn about seomarketingagencyinmumbai.com, Mumbai's leading agency for Search Engine Optimization, High-Speed Websites, and Mobile Apps based in BKC.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>About Us</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="badge badge-purple" style={{ marginBottom: "1rem" }}>
                Digital Engineering Excellence
              </div>
              <h1 style={{ marginBottom: "1.2rem" }}>
                We Build Search Visibility &amp; Modern Digital Products That{" "}
                <span className="gradient-text">Scale Mumbai Businesses</span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Headquartered in Bandra Kurla Complex (BKC), <strong>seomarketingagencyinmumbai.com</strong> was founded with a singular purpose: eliminate vague vanity metrics and provide businesses with rigorous, measurable digital solutions across <strong>Search Engine Optimization (SEO)</strong>, <strong>Website Development</strong>, and <strong>Mobile Application Development</strong>.
              </p>
              <p style={{ fontSize: "1rem", color: "var(--text-dim)", marginBottom: "2rem" }}>
                We understand the nuanced commercial landscape of Mumbai — from luxury real estate in Worli and Bandra to fintech powerhouses in BKC and high-growth retail brands across Andheri. We don&apos;t just generate passive traffic; we engineer high-converting digital assets.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <Link href="/services" className="btn btn-outline">
                  Explore Our 3 Services
                </Link>
              </div>
            </div>

            <div>
              <div className="media-mockup-wrapper">
                <Image
                  src="/images/mumbai-team.jpg"
                  alt="Our Mumbai Agency Team collaborating in BKC office overlooking the night skyline"
                  width={650}
                  height={365}
                  priority
                  className="media-mockup-image"
                />
                <div className="floating-badge floating-badge-2" style={{ bottom: "-15px", left: "-10px" }}>
                  <div className="badge-icon-box badge-icon-cyan">📍</div>
                  <div>
                    <strong style={{ color: "var(--text-bright)", fontSize: "0.9rem", display: "block" }}>
                      BKC Headquarters
                    </strong>
                    <span style={{ color: "var(--cyan)", fontSize: "0.78rem" }}>
                      Trade Center, Mumbai
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Values */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Philosophy</span>
            <h2 className="section-title">The Principles Behind Our Long-Term Client Partnerships</h2>
            <p className="section-desc">
              Why 92% of our clients continue their digital growth with us year after year.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔬</div>
              <h3>Data-Driven Search Mechanics</h3>
              <p>
                Search algorithms are mathematical relevance models. We structure schema, optimize Core Web Vitals, and build topical depth to secure consistent Page #1 rankings.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Obsession With Mobile Speed</h3>
              <p>
                In a mobile-first market like Mumbai, every 100 milliseconds matters. We write zero-bloat code that loads in under 1 second, boosting both conversion rates and user retention.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Radical Transparency</h3>
              <p>
                No hidden charges or confusing vanity metrics. We provide live keyword tracking, code repository visibility, and bi-weekly direct calls with your senior engineer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Leadership</span>
            <h2 className="section-title">Senior Technologists Leading Your Projects</h2>
            <p className="section-desc">
              Experienced practitioners directing strategy, web engineering, and mobile architecture.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <div className="case-card" style={{ textAlign: "center" }}>
              <div className="author-avatar" style={{ width: "72px", height: "72px", fontSize: "1.5rem", margin: "0 auto 1.2rem" }}>
                RM
              </div>
              <h3 style={{ fontSize: "1.2rem" }}>Rahul Mehta</h3>
              <span style={{ color: "var(--cyan)", fontSize: "0.85rem", display: "block", marginBottom: "0.8rem" }}>
                Head of Search Engine Optimization
              </span>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                12+ years optimizing national search engines and high-volume commercial aggregators in India.
              </p>
            </div>

            <div className="case-card" style={{ textAlign: "center" }}>
              <div
                className="author-avatar"
                style={{
                  width: "72px",
                  height: "72px",
                  fontSize: "1.5rem",
                  margin: "0 auto 1.2rem",
                  background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                }}
              >
                PS
              </div>
              <h3 style={{ fontSize: "1.2rem" }}>Priya Sharma</h3>
              <span style={{ color: "var(--cyan)", fontSize: "0.85rem", display: "block", marginBottom: "0.8rem" }}>
                Lead Web &amp; UI Architect
              </span>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Specialist in high-speed Next.js architecture, dark-mode design systems, and Core Web Vitals 95+.
              </p>
            </div>

            <div className="case-card" style={{ textAlign: "center" }}>
              <div
                className="author-avatar"
                style={{
                  width: "72px",
                  height: "72px",
                  fontSize: "1.5rem",
                  margin: "0 auto 1.2rem",
                  background: "linear-gradient(135deg, #00f5a0, #00b4d8)",
                }}
              >
                AD
              </div>
              <h3 style={{ fontSize: "1.2rem" }}>Arjun Deshmukh</h3>
              <span style={{ color: "var(--cyan)", fontSize: "0.85rem", display: "block", marginBottom: "0.8rem" }}>
                Lead Mobile App Engineer
              </span>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Expert in Flutter, React Native, and Swift/Kotlin mobile application architecture and store launches.
              </p>
            </div>

            <div className="case-card" style={{ textAlign: "center" }}>
              <div
                className="author-avatar"
                style={{
                  width: "72px",
                  height: "72px",
                  fontSize: "1.5rem",
                  margin: "0 auto 1.2rem",
                  background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                }}
              >
                AI
              </div>
              <h3 style={{ fontSize: "1.2rem" }}>Ananya Iyer</h3>
              <span style={{ color: "var(--cyan)", fontSize: "0.85rem", display: "block", marginBottom: "0.8rem" }}>
                Local Search &amp; Schema Specialist
              </span>
              <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                Focused on hyper-local Mumbai 3-Pack rankings, citation networks, and structured JSON-LD schema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Track Record</span>
            <h2 className="section-title">Milestones in Our Growth</h2>
            <p className="section-desc">
              From our initial consulting room in Bandra to managing 450+ enterprise and D2C brands.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <div className="process-step-num">2019</div>
              <h4>Founded in Mumbai</h4>
              <p>Started as a boutique search agency dedicated to local businesses with verified ranking guarantees.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">2021</div>
              <h4>Web Engineering Studio</h4>
              <p>Expanded to build custom high-speed websites so clients could maximize conversion from organic traffic.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">2023</div>
              <h4>Mobile App Division</h4>
              <p>Launched dedicated mobile app engineering studio for iOS &amp; Android platforms, relocating to BKC Trade Center.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">2026</div>
              <h4>450+ Client Engagements</h4>
              <p>Serving market leaders across Mumbai, delivering over ₹42 Crore in attributed client revenue.</p>
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
                Ready to Collaborate?
              </span>
              <h2>Work Directly With Senior Mumbai Technologists</h2>
              <p style={{ marginBottom: "2rem", color: "#cbd5e1" }}>
                No junior account managers. Get direct technical answers and actionable execution plans for your business.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Book BKC Office Consultation
                </Link>
                <a
                  href="https://wa.me/919594147486"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
