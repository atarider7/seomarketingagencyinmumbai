import Image from "next/image";
import Link from "next/link";
import AppEstimator from "@/components/AppEstimator";
import LeadContactForm from "@/components/LeadContactForm";

export const metadata = {
  title: "Mobile App Development in Mumbai | iOS & Android Apps | seomarketingagencyinmumbai.com",
  description:
    "Top mobile app development agency in Mumbai. We build high-performance iOS and Android apps using Flutter, React Native, Swift, and Kotlin.",
};

export default function AppServicesPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <Link href="/services">Services</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>App Development</span>
          </div>

          <div className="hero-grid">
            <div>
              <div className="badge badge-purple">
                <span className="pulse-dot"></span>
                iOS & Android Mobile App Engineering
              </div>
              <h1 style={{ margin: "1rem 0" }}>
                High-Performance Mobile Apps Built for{" "}
                <span className="gradient-text">Speed, Scale & User Engagement</span>
              </h1>
              <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Whether you need a consumer iOS/Android app or an enterprise operational tool in Mumbai, we build fast, scalable, and intuitive mobile applications using modern Flutter, React Native, Swift, and Kotlin.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                <a href="#app-calc" className="btn btn-primary btn-lg">
                  Calculate App Cost ⚡
                </a>
                <Link href="/contact" className="btn btn-outline btn-lg">
                  Book App Architecture Call
                </Link>
              </div>

              <div style={{ display: "flex", gap: "2rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
                <div>
                  <strong style={{ color: "var(--cyan)", fontSize: "1.5rem", display: "block" }}>
                    60 FPS
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Smooth Animations</span>
                </div>
                <div>
                  <strong style={{ color: "var(--emerald)", fontSize: "1.5rem", display: "block" }}>
                    100%
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>App Store Approval</span>
                </div>
                <div>
                  <strong style={{ color: "var(--violet)", fontSize: "1.5rem", display: "block" }}>
                    45 Days
                  </strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Avg MVP Delivery</span>
                </div>
              </div>
            </div>

            <div>
              <div className="media-mockup-wrapper">
                <Image
                  src="/images/web-showcase.jpg"
                  alt="Mobile application UI mockups on iOS and Android devices"
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

      {/* App Capabilities */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Mobile App Capabilities</span>
            <h2 className="section-title">What Kind of App Do You Need?</h2>
            <p className="section-desc">
              We engineer custom mobile apps with bank-grade security, offline caching, and real-time synchronization.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Cross-Platform Apps (Flutter & React Native)</h3>
              <p>
                One unified codebase running natively on both Apple iOS and Google Android. Cuts development time and cost by 40% while preserving 60 FPS native performance.
              </p>
              <ul className="service-features-list">
                <li>Flutter & React Native Architecture</li>
                <li>Single Codebase for iOS & Android</li>
                <li>Pixel-Perfect Native UI Components</li>
                <li>Faster Time to Market</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🍎</div>
              <h3>Native iOS App Development (Swift)</h3>
              <p>
                Bespoke Apple ecosystem applications built with Swift and SwiftUI. Deep hardware integration with Apple Pay, FaceID, WidgetKit, and HealthKit.
              </p>
              <ul className="service-features-list">
                <li>Swift 6 & SwiftUI Framework</li>
                <li>Apple Human Interface Guidelines (HIG)</li>
                <li>In-App Subscriptions & Apple Pay</li>
                <li>Optimized for iPhone, iPad & Apple Watch</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>Native Android App Development (Kotlin)</h3>
              <p>
                Modern Android applications built with Kotlin and Jetpack Compose. Engineered to support the full range of Android devices and screen densities in India.
              </p>
              <ul className="service-features-list">
                <li>Kotlin & Jetpack Compose</li>
                <li>Material You 3 Design Standards</li>
                <li>Google Play Billing & UPI Integration</li>
                <li>Low Memory Footprint & Battery Efficiency</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🛍️</div>
              <h3>E-Commerce & D2C Shopping Apps</h3>
              <p>
                Turn mobile visitors into repeat buyers with instant one-tap checkouts, push notification marketing, and seamless inventory sync with Shopify/WooCommerce.
              </p>
              <ul className="service-features-list">
                <li>Shopify & Headless Backend Sync</li>
                <li>Automated Push Notifications</li>
                <li>Fast UPI & Card Payment Gateways</li>
                <li>Personalized Wishlist & Reordering</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Backend, APIs & Cloud Scalability</h3>
              <p>
                Robust cloud backends engineered on Node.js, Python, PostgreSQL, and AWS/Firebase. Handles millions of concurrent API calls with sub-50ms latency.
              </p>
              <ul className="service-features-list">
                <li>Scalable REST & GraphQL Microservices</li>
                <li>Real-Time WebSockets for Live Chat & Tracking</li>
                <li>Automated Daily Cloud Backups</li>
                <li>SOC2 & ISO 27001 Security Standards</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>App Store Publishing & ASO</h3>
              <p>
                We handle the complete Apple App Store and Google Play review process, resolving guidelines, setting up developer accounts, and optimizing App Store rankings.
              </p>
              <ul className="service-features-list">
                <li>100% Guaranteed Store Approval</li>
                <li>App Store Optimization (ASO) for Keywords</li>
                <li>Screenshot & Preview Video Production</li>
                <li>Crashlytics & Performance Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive App Cost Estimator */}
      <section className="section" id="app-calc">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Instant Quote</span>
            <h2 className="section-title">Interactive Mobile App Cost Estimator</h2>
            <p className="section-desc">
              Select your platform and features to estimate project budget and delivery timeline.
            </p>
          </div>

          <AppEstimator />
        </div>
      </section>

      {/* 4-Step App Development Process */}
      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Process</span>
            <h2 className="section-title">How We Build & Launch Your Mobile App</h2>
            <p className="section-desc">
              A transparent, agile development cycle with weekly test builds delivered to your phone.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-step-card">
              <div className="process-step-num">01</div>
              <h4>Wireframing & UI/UX</h4>
              <p>Interactive Figma prototypes, user journeys, and clickable screen flows reviewed before any code is written.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">02</div>
              <h4>Frontend & Backend Sprints</h4>
              <p>Agile 2-week coding sprints with continuous integration. You test working builds directly via TestFlight / APK.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">03</div>
              <h4>Rigorous QA Testing</h4>
              <p>Tested on 20+ real physical iOS and Android devices for performance, edge connectivity, and battery consumption.</p>
            </div>
            <div className="process-step-card">
              <div className="process-step-num">04</div>
              <h4>Store Launch & Growth</h4>
              <p>Submission to Apple App Store and Google Play Store with full post-launch monitoring and feature iterations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ background: "var(--bg-primary)" }}>
        <div className="container container-sm">
          <div className="section-header">
            <span className="section-subtitle">Get Started</span>
            <h2 className="section-title">Have an App Idea? Let&apos;s Build It</h2>
            <p className="section-desc">
              Speak with our lead mobile app architect in Mumbai. Get a comprehensive technical scope and wireframe consultation.
            </p>
          </div>

          <LeadContactForm />
        </div>
      </section>
    </main>
  );
}
