import Link from "next/link";

export const metadata = {
  title: "Services & Pricing | SEO, Website & App Development Mumbai",
  description:
    "Explore our 3 core services: SEO Services, Website Development, and Mobile App Development (iOS & Android) with transparent pricing in Mumbai.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>Services</span>
          </div>

          <div className="section-header">
            <span className="section-subtitle">Our 3 Core Disciplines</span>
            <h1 className="section-title">
              SEO, Website Development &amp;{" "}
              <span className="gradient-text">App Development Services</span>
            </h1>
            <p className="section-desc">
              No unnecessary fluff. We focus on the 3 digital assets that directly generate revenue, authority, and customers for your business.
            </p>
          </div>

          {/* Master 3 Services Grid */}
          <div className="services-grid" style={{ marginBottom: "4rem" }}>
            {/* 1. SEO */}
            <div className="service-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
                <div className="editorial-counter">
                  <span className="curr">01</span>
                  <span className="divider">/</span>
                  <span>03</span>
                </div>
                <span style={{ fontSize: "0.74rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", color: "var(--crimson-light)", textTransform: "uppercase" }}>
                  Search Architecture
                </span>
              </div>
              <div className="service-icon">🎯</div>
              <h3>1. Search Engine Optimization (SEO)</h3>
              <p style={{ color: "var(--text-bright)", fontWeight: 600 }}>
                Full-Funnel Search Engine Optimization
              </p>
              <p>
                Google Page #1 rankings for high-intent keywords in Mumbai and nationwide. Get steady inbound phone calls, WhatsApp inquiries, and organic sales without paying for ads.
              </p>
              <ul className="service-features-list">
                <li>Comprehensive Search Intent Keyword Research</li>
                <li>Technical Core Web Vitals Optimization</li>
                <li>Mumbai Local 3-Pack Google Maps Dominance</li>
                <li>High-DA Editorial Backlink Acquisition</li>
                <li>Bi-Weekly Transparent Live Rank Reports</li>
              </ul>
              <Link href="/seo-services" className="btn btn-primary btn-sm" style={{ marginTop: "auto" }}>
                Dedicated SEO Services Page →
              </Link>
            </div>

            {/* 2. Web Development */}
            <div className="service-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
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
              <h3>2. Website Design &amp; Development</h3>
              <p style={{ color: "var(--text-bright)", fontWeight: 600 }}>
                High-Performance &amp; Phone-Responsive Websites
              </p>
              <p>
                Custom-coded Next.js/React websites built for extreme speed (&lt;1s load time), seamless mobile responsiveness, dark-mode aesthetics, and conversion-optimized funnels.
              </p>
              <ul className="service-features-list">
                <li>100% Mobile &amp; Phone-First Architecture</li>
                <li>PageSpeed Score 95+ Guaranteed</li>
                <li>Modern Dark Mode, Glassmorphism &amp; Micro-animations</li>
                <li>Built-in Schema.org JSON-LD &amp; SEO Semantics</li>
                <li>E-Commerce, Corporate &amp; Booking Funnels</li>
              </ul>
              <Link href="/web-services" className="btn btn-primary btn-sm" style={{ marginTop: "auto" }}>
                Dedicated Website Services Page →
              </Link>
            </div>

            {/* 3. App Development */}
            <div className="service-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.2rem" }}>
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
              <h3>3. Mobile App Development</h3>
              <p style={{ color: "var(--text-bright)", fontWeight: 600 }}>
                iOS &amp; Android Mobile App Development
              </p>
              <p>
                From consumer marketplace apps to enterprise internal tools. We develop cross-platform (Flutter / React Native) and native (Swift / Kotlin) mobile apps with store launch.
              </p>
              <ul className="service-features-list">
                <li>Cross-Platform iOS &amp; Android (Flutter / React Native)</li>
                <li>Native Apple iOS (Swift) &amp; Android (Kotlin)</li>
                <li>Instant UPI, Razorpay &amp; Payment Gateway Integration</li>
                <li>Real-Time Chat, Push Notifications &amp; Auth</li>
                <li>Google Play Store &amp; Apple App Store Approval</li>
              </ul>
              <Link href="/app-services" className="btn btn-primary btn-sm" style={{ marginTop: "auto" }}>
                Dedicated App Services Page →
              </Link>
            </div>
          </div>

          {/* Pricing Tiers for the 3 Categories */}
          <div id="pricing" style={{ marginTop: "5rem" }}>
            <div className="section-header">
              <span className="section-subtitle">Transparent Pricing</span>
              <h2 className="section-title">Packages for SEO, Website &amp; App Development</h2>
              <p className="section-desc">
                Clear pricing benchmarks with no hidden costs. Tailored for Mumbai startups and scaling businesses.
              </p>
            </div>

            <div className="pricing-grid">
              {/* Plan 1: SEO Sprint */}
              <div className="pricing-card">
                <span className="badge" style={{ alignSelf: "flex-start", marginBottom: "0.8rem" }}>
                  SEO Package
                </span>
                <h3>Mumbai SEO Domination</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  For businesses looking to capture Page #1 rankings and dominate Mumbai Google Maps.
                </p>
                <div className="pricing-price">
                  ₹35,000 <span>/ month</span>
                </div>

                <ul className="service-features-list" style={{ margin: "1.5rem 0" }}>
                  <li>Up to 25 Target Commercial Keywords</li>
                  <li>Google Business Profile 3-Pack Optimization</li>
                  <li>Technical SEO &amp; Core Web Vitals Fix</li>
                  <li>4 High-DA Editorial Backlinks Monthly</li>
                  <li>Bi-Weekly Live Ranking Reports</li>
                  <li>Direct WhatsApp Consultant Support</li>
                </ul>

                <Link href="/contact?plan=seo-domination" className="btn btn-outline" style={{ marginTop: "auto" }}>
                  Start SEO Campaign
                </Link>
              </div>

              {/* Plan 2: Web Dev */}
              <div className="pricing-card featured">
                <div className="pricing-badge">Most Requested in Mumbai</div>
                <span className="badge badge-green" style={{ alignSelf: "flex-start", marginBottom: "0.8rem" }}>
                  Website Package
                </span>
                <h3>Custom Next.js Website</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Ultra-fast, dark mode, phone-responsive website designed to convert visitors.
                </p>
                <div className="pricing-price" style={{ color: "var(--cyan)" }}>
                  ₹65,000 <span>one-time</span>
                </div>

                <ul className="service-features-list" style={{ margin: "1.5rem 0" }}>
                  <li>Up to 10 Custom Designed Pages</li>
                  <li>Next.js / React High-Speed Architecture</li>
                  <li>PageSpeed Score 95+ Guaranteed</li>
                  <li>Pre-Built SEO Meta &amp; Schema JSON-LD</li>
                  <li>WhatsApp / Lead Funnel Integration</li>
                  <li>60 Days Free Post-Launch Maintenance</li>
                </ul>

                <Link href="/contact?plan=custom-website" className="btn btn-primary" style={{ marginTop: "auto" }}>
                  Build Your Website 🚀
                </Link>
              </div>

              {/* Plan 3: App Dev */}
              <div className="pricing-card">
                <span className="badge badge-purple" style={{ alignSelf: "flex-start", marginBottom: "0.8rem" }}>
                  App Package
                </span>
                <h3>Mobile App MVP Launch</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                  Complete mobile application published on both Google Play Store and Apple App Store.
                </p>
                <div className="pricing-price">
                  ₹1,25,000 <span>one-time</span>
                </div>

                <ul className="service-features-list" style={{ margin: "1.5rem 0" }}>
                  <li>Both Android &amp; iOS (Flutter / React Native)</li>
                  <li>User Login, Profiles &amp; Push Notifications</li>
                  <li>Payment Gateway (UPI / Razorpay / Stripe)</li>
                  <li>Admin Web Dashboard for Management</li>
                  <li>App Store &amp; Play Store Approval</li>
                  <li>90 Days Free Technical Bug Support</li>
                </ul>

                <Link href="/contact?plan=mobile-app" className="btn btn-outline" style={{ marginTop: "auto" }}>
                  Build Your Mobile App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="badge badge-green" style={{ marginBottom: "1rem" }}>
                Direct Mumbai Consultation
              </span>
              <h2>Need a Custom Package for SEO, Website, or App?</h2>
              <p style={{ marginBottom: "2rem", color: "#cbd5e1" }}>
                Tell us about your project requirements. Our senior technical consultant will draft an exact roadmap and proposal within 2 hours.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get Custom Scope
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
