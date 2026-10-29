import Image from "next/image";
import Link from "next/link";
import LeadContactForm from "@/components/LeadContactForm";

export const metadata = {
  title: "SEO Services in Mumbai | Organic Search & Google 3-Pack | seomarketingagencyinmumbai.com",
  description:
    "Top SEO agency in Mumbai. Rank #1 on Google for high-intent search queries. Technical SEO, Local Mumbai 3-Pack, and High-DA Link Building.",
};

export default function SeoServicesPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <Link href="/services">Services</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>SEO Services Mumbai</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="badge">
                <span className="pulse-dot"></span>
                Proven Page #1 Search Engineering
              </div>
              <h1 style={{ margin: "1rem 0" }}>
                Precision SEO Services That Turn{" "}
                <span className="gradient-text">Google Search Into Your #1 Revenue Channel</span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Stop wasting money on paid ads that vanish the moment you pause budgets. We engineer organic search authority that permanently captures high-ticket buyers across Mumbai, Maharashtra, and India.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <a href="#seo-audit" className="btn btn-primary btn-lg">
                  Request Free SEO Audit ⚡
                </a>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Book 1-on-1 Consultation
                </Link>
              </div>

              <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
                <div>
                  <strong style={{ color: "var(--cyan)", fontSize: "1.5rem", display: "block" }}>
                    98.4%
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Page 1 Success Rate</span>
                </div>
                <div>
                  <strong style={{ color: "var(--emerald)", fontSize: "1.5rem", display: "block" }}>
                    3.4x
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Avg Lead Increase</span>
                </div>
                <div>
                  <strong style={{ color: "var(--violet)", fontSize: "1.5rem", display: "block" }}>
                    60 Days
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Avg Time to First Page</span>
                </div>
              </div>
            </div>

            <div>
              <div className="media-mockup-wrapper">
                <Image
                  src="/images/seo-analytics-hero.jpg"
                  alt="Google Ranking Analytics Dashboard"
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

      {/* 4 Pillars of SEO */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Systematic Approach</span>
            <h2 className="section-title">The 4 Core Pillars of Search Dominance</h2>
            <p className="section-desc">
              We tackle every layer of the Google algorithm with scientific rigor.
            </p>
          </div>

          <div className="services-grid services-grid-2">
            <div className="service-card">
              <div className="service-icon">⚙️</div>
              <h3>1. Deep Technical SEO Architecture</h3>
              <p>Search engines can&apos;t rank what they can&apos;t crawl properly. We resolve invisible backend errors that cripple your indexation.</p>
              <ul className="service-features-list">
                <li>Core Web Vitals Speed Optimization (INP, LCP, CLS)</li>
                <li>JSON-LD Schema Markup (LocalBusiness, Organization, Product, FAQ)</li>
                <li>XML Sitemap & Robots.txt Crawl Budget Optimization</li>
                <li>Canonical Tag Loops & 404 / 301 Redirect Chains Remediation</li>
                <li>HTTPS Security & Mobile Crawl Verification</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>2. Search Intent & Content Hubs</h3>
              <p>Forget keyword stuffing. We build comprehensive topical authority hubs that satisfy exact user commercial and informational intent.</p>
              <ul className="service-features-list">
                <li>Competitor Keyword Gap & Search Volume Analysis</li>
                <li>Content Clustering (Pillar Pages + Cluster Spoke Silos)</li>
                <li>Click-Through-Rate (CTR) Optimized Titles & Meta Descriptions</li>
                <li>Google AI Overview / SGE Snippet Optimization</li>
                <li>Internal Anchor Text Graph Optimization</li>
              </ul>
            </div>

            <div className="service-card" id="local-seo">
              <div className="service-icon">📍</div>
              <h3>3. Mumbai Local Google Map Pack (3-Pack)</h3>
              <p>Dominate high-conversion local searches across Bandra, BKC, Andheri, Powai, South Mumbai, and Navi Mumbai.</p>
              <ul className="service-features-list">
                <li>Google Business Profile (GBP) 100% Verification & Optimization</li>
                <li>Geo-Tagged Mumbai Citations (Justdial, Sulekha, Indiamart)</li>
                <li>Automated Review Generation & Response System</li>
                <li>Location Landing Pages with Microdata Schema</li>
                <li>Local Competitor Map Pack Interception</li>
              </ul>
            </div>

            <div className="service-card" id="ecommerce">
              <div className="service-icon">🔗</div>
              <h3>4. High-DA Authority Backlinks & Digital PR</h3>
              <p>Earn trusted, non-spam editorial backlinks from authoritative national news portals, industry journals, and regional business sites.</p>
              <ul className="service-features-list">
                <li>Manual White-Hat Editorial Outreach</li>
                <li>High Domain Authority (DA 50+) Do-Follow Links</li>
                <li>Brand Mention Reclamation & Broken Link Insertion</li>
                <li>Local Mumbai Press Releases & Business Features</li>
                <li>Zero PBNs, Zero Automated Link Networks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mumbai Search is Unique */}
      <section className="section">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: "center" }}>
            <div>
              <span className="section-subtitle">Localized Market Expertise</span>
              <h2>Why Generic National SEO Fails in Mumbai</h2>
              <p style={{ margin: "1.2rem 0", fontSize: "1.05rem", color: "var(--text-muted)" }}>
                Mumbai isn&apos;t a single monolithic search market. It is a cluster of high-density micro-economies. A luxury consumer searching in Bandra or Nariman Point uses completely different search queries than a corporate procurement officer in BKC or an industrial manufacturer in Thane.
              </p>
              <p style={{ marginBottom: "1.5rem", fontSize: "1rem", color: "var(--text-dim)" }}>
                At Apex Digital, our team operates on the ground in Mumbai. We understand local geographic proximity algorithms, regional consumer purchasing behavior, and how to capture high-ticket clients right at the moment of intent.
              </p>
              <ul className="service-features-list" style={{ borderTop: "none", paddingTop: 0 }}>
                <li>Suburban Targeting: Bandra, Juhu, Worli, BKC, Andheri, Powai, Thane</li>
                <li>Language & Regional Intent Customization (English & Hinglish)</li>
                <li>Direct WhatsApp Click-to-Chat Integration for Fast Conversions</li>
              </ul>
            </div>

            <div>
              <div className="glass-card" style={{ padding: "2.5rem", borderColor: "rgba(255, 51, 34, 0.35)" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1.2rem", color: "var(--cyan)" }}>
                  Guaranteed Campaign Deliverables
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <span style={{ color: "var(--emerald)", fontWeight: "bold" }}>✔</span>
                    <div>
                      <strong>Full Technical Audit PDF (40+ Pages)</strong>
                      <p style={{ fontSize: "0.85rem", marginTop: "0.2rem" }}>
                        Complete forensic analysis of your domain within 48 hours of onboarding.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <span style={{ color: "var(--emerald)", fontWeight: "bold" }}>✔</span>
                    <div>
                      <strong>Live 24/7 Rank Tracking Dashboard</strong>
                      <p style={{ fontSize: "0.85rem", marginTop: "0.2rem" }}>
                        Watch your Google positions update daily in your personal client portal.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.8rem" }}>
                    <span style={{ color: "var(--emerald)", fontWeight: "bold" }}>✔</span>
                    <div>
                      <strong>Bi-Weekly Strategy Video Calls</strong>
                      <p style={{ fontSize: "0.85rem", marginTop: "0.2rem" }}>
                        Direct review with your dedicated senior Mumbai SEO consultant.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Audit Form */}
      <section className="section" id="seo-audit" style={{ background: "var(--bg-surface)" }}>
        <div className="container container-sm">
          <div className="section-header">
            <span className="section-subtitle">Get Started Today</span>
            <h2 className="section-title">Claim Your Free Technical SEO & Ranking Audit</h2>
            <p className="section-desc">
              Our senior engineers will manually review your website and show you the exact keywords your Mumbai competitors are stealing from you.
            </p>
          </div>

          <LeadContactForm />
        </div>
      </section>
    </main>
  );
}
