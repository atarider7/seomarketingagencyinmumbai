import Link from "next/link";

export const metadata = {
  title: "Terms of Service | seomarketingagencyinmumbai.com",
  description:
    "Terms of Service for seomarketingagencyinmumbai.com. Review our consulting engagement terms, deliverables, and service scope policies.",
};

export default function TermsPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container container-sm">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>Terms of Service</span>
          </div>

          <div className="section-header text-left" style={{ marginBottom: "2.5rem" }}>
            <span className="section-subtitle">Legal Agreement</span>
            <h1 className="section-title">Terms of Service</h1>
            <p className="section-desc">
              Last updated: October 2026. Please read these terms carefully before engaging our SEO, website, or mobile app services.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: "1.8", color: "var(--text-muted)" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              1. Engagement &amp; Scope
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Apex Digital (operating as <strong>seomarketingagencyinmumbai.com</strong>) provides professional services in Search Engine Optimization (SEO), Website Design &amp; Development, and Mobile Application Development. All specific project deliverables, timelines, and technical requirements are defined in written proposals agreed upon with the client.
            </p>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              2. Intellectual Property Rights
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Upon full settlement of agreed project dues, all custom source code, design assets, and content developed specifically for your project become the intellectual property of your business, unless otherwise specified.
            </p>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              3. Search Engine Guidelines
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We adhere strictly to official Google Search Essentials (formerly Webmaster Guidelines) and employ white-hat SEO methodologies. While we guarantee proven technical execution and industry-leading rankings, search engine algorithmic updates and third-party platform policies remain under the control of their respective providers.
            </p>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              4. Governing Law
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              These terms are governed by and construed in accordance with the laws of Mumbai, Maharashtra, India.
            </p>

            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
              <Link href="/" className="btn btn-outline btn-sm">
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
