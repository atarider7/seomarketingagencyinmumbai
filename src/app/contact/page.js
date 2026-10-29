import Link from "next/link";
import LeadContactForm from "@/components/LeadContactForm";

export const metadata = {
  title: "Contact Us | seomarketingagencyinmumbai.com - Mumbai BKC Office",
  description:
    "Get in touch with seomarketingagencyinmumbai.com. Visit our BKC Trade Center office or request a free proposal for SEO, Website, or Mobile App development.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>Contact Us</span>
          </div>

          <div className="section-header text-left">
            <span className="section-subtitle">Let&apos;s Connect</span>
            <h1 className="section-title">
              Schedule a Consultation With Our{" "}
              <span className="gradient-text">Senior Mumbai Strategists</span>
            </h1>
            <p className="section-desc">
              Whether you want to dominate Google rankings in Bandra or build an ultra-fast modern website, we&apos;re ready to engineer your growth.
            </p>
          </div>

          <div className="contact-grid">
            {/* Left: Info Panel */}
            <div className="contact-info-panel">
              <div className="contact-card-item">
                <div className="contact-icon-large">📍</div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                    Mumbai Headquarters
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.5" }}>
                    704, Trade Center, G Block, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051
                  </p>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", display: "block", marginTop: "0.4rem" }}>
                    🚇 5 mins from BKC Metro Station / Near MCA Club
                  </span>
                </div>
              </div>

              <div className="contact-card-item">
                <div
                  className="contact-icon-large"
                  style={{ background: "rgba(0, 245, 160, 0.12)", color: "var(--emerald)" }}
                >
                  📞
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                    Direct Phone & WhatsApp
                  </h4>
                  <p style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                    <a href="tel:+919594147486" style={{ color: "var(--cyan)", fontWeight: 600 }}>
                      +91 95941 47486
                    </a>
                  </p>
                  <a
                    href="https://wa.me/919594147486"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm"
                  >
                    Instant WhatsApp Chat 💬
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div
                  className="contact-icon-large"
                  style={{ background: "rgba(139, 92, 246, 0.12)", color: "#c084fc" }}
                >
                  ✉️
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                    Email Inquiries
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                    General: <a href="mailto:hello@seomarketingagencyinmumbai.com" style={{ color: "var(--cyan)" }}>hello@seomarketingagencyinmumbai.com</a>
                  </p>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                    Proposals: <a href="mailto:contact@seomarketingagencyinmumbai.com" style={{ color: "var(--cyan)" }}>contact@seomarketingagencyinmumbai.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-large">⏰</div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "0.3rem" }}>
                    Operating Hours
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                    Monday – Saturday: 9:30 AM – 7:30 PM IST<br />
                    Sunday: Closed (Emergency Client Support Active)
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: "1.5rem", textAlign: "center", borderColor: "rgba(255, 51, 34, 0.35)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🗺️</div>
                <strong style={{ color: "var(--text-bright)", display: "block", fontSize: "1rem" }}>
                  BKC Office Location Map
                </strong>
                <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", margin: "0.5rem 0 1rem" }}>
                  Conveniently accessible from South Mumbai via Sea Link and Western Suburbs via Western Express Highway.
                </p>
                <a
                  href="https://maps.google.com/?q=Trade+Center+Bandra+Kurla+Complex+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Right: Lead Intake Form */}
            <LeadContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
