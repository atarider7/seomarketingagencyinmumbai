import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | seomarketingagencyinmumbai.com",
  description:
    "Privacy Policy for seomarketingagencyinmumbai.com. Learn how we handle client data, cookies, and search engine optimization consulting information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container container-sm">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>Privacy Policy</span>
          </div>

          <div className="section-header text-left" style={{ marginBottom: "2.5rem" }}>
            <span className="section-subtitle">Legal Information</span>
            <h1 className="section-title">Privacy Policy</h1>
            <p className="section-desc">
              Last updated: October 2026. This Privacy Policy outlines our commitment to protecting your personal information and corporate data.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "2.5rem", lineHeight: "1.8", color: "var(--text-muted)" }}>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              When you submit an inquiry or use our SEO and digital tools on <strong>seomarketingagencyinmumbai.com</strong>, we may collect your name, business email address, phone number, website URL, and details regarding your digital marketing and web development requirements.
            </p>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              2. How We Use Your Information
            </h2>
            <p style={{ marginBottom: "1rem" }}>We use collected information solely for the following business purposes:</p>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem" }}>
              <li>Preparing customized SEO audits, website wireframes, and mobile app scopes.</li>
              <li>Communicating via phone, WhatsApp, or email regarding your project consultation.</li>
              <li>Providing technical progress reports, ranking updates, and client portal support.</li>
              <li>Improving website performance, Core Web Vitals, and user experience.</li>
            </ul>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              3. Data Protection &amp; Confidentiality
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We do not sell, rent, or trade your personal or business data to third-party marketers. All client credentials, search console access, and technical configurations are protected with industry-standard encryption protocols.
            </p>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              4. Cookies and Analytics
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Our website uses basic performance cookies and anonymous web analytics to track page speed, user interaction flows, and technical errors to maintain optimal browsing performance on desktop and mobile devices.
            </p>

            <h2 style={{ fontSize: "1.4rem", color: "var(--text-bright)", marginBottom: "1rem" }}>
              5. Contact Us Regarding Your Data
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              If you have any questions about this Privacy Policy or wish to request data deletion, contact us at:
              <br />
              <strong>Email:</strong>{" "}
              <a href="mailto:contact@seomarketingagencyinmumbai.com" style={{ color: "var(--cyan)" }}>
                contact@seomarketingagencyinmumbai.com
              </a>
              <br />
              <strong>Address:</strong> 704, Trade Center, G Block, Bandra Kurla Complex (BKC), Bandra East, Mumbai 400051
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
