"use client";

import { useState } from "react";

export default function LeadContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [budget, setBudget] = useState("₹50,000 - ₹1,00,000");
  const [notes, setNotes] = useState("");
  const [serviceSeo, setServiceSeo] = useState(true);
  const [serviceWeb, setServiceWeb] = useState(false);
  const [serviceApp, setServiceApp] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert("Please enter your Name, Phone Number, and Business Email.");
      return;
    }

    setSubmitting(true);

    const services = [];
    if (serviceSeo) services.push("SEO Services");
    if (serviceWeb) services.push("Website Development");
    if (serviceApp) services.push("App Development");
    if (services.length === 0) services.push("General Consultation");

    const messageLines = [
      `*New Project Inquiry from seomarketingagencyinmumbai.com*`,
      ``,
      `*Client Name:* ${name}`,
      `*Phone / WhatsApp:* ${phone}`,
      `*Email:* ${email}`,
      website ? `*Website:* ${website}` : null,
      `*Services Needed:* ${services.join(", ")}`,
      `*Budget Range:* ${budget}`,
      notes ? `*Project Details:* ${notes}` : null,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/919594147486?text=${encodeURIComponent(
      messageLines.join("\n")
    )}`;

    // Immediate redirect to WhatsApp with prefilled message
    setSubmitting(false);
    setShowModal(true);
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div className="contact-form-box">
        <div style={{ marginBottom: "1.8rem" }}>
          <span className="badge badge-green" style={{ marginBottom: "0.6rem" }}>
            Instant WhatsApp Connect
          </span>
          <h3 style={{ fontSize: "1.5rem" }}>Request Custom Proposal &amp; Quote</h3>
          <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
            Fill in your details below. Submitting will immediately connect you with our senior Mumbai consultant on WhatsApp with your project scope.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Anand Singhania"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone / WhatsApp Number *</label>
              <input
                type="tel"
                className="form-input"
                placeholder="e.g. +91 95941 47486"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label">Business Email *</label>
              <input
                type="email"
                className="form-input"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Website URL (if existing)</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://yourbusiness.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Service Required (Select all that apply)</label>
            <div className="checkbox-group" style={{ gridTemplateColumns: "1fr" }}>
              <label className="checkbox-label" style={{ padding: "0.4rem 0" }}>
                <input
                  type="checkbox"
                  checked={serviceSeo}
                  onChange={(e) => setServiceSeo(e.target.checked)}
                />
                <strong>1. SEO Services</strong> (Google Page #1, Local Maps 3-Pack, Traffic Growth)
              </label>
              <label className="checkbox-label" style={{ padding: "0.4rem 0" }}>
                <input
                  type="checkbox"
                  checked={serviceWeb}
                  onChange={(e) => setServiceWeb(e.target.checked)}
                />
                <strong>2. Website Development</strong> (Custom Next.js/React, Phone Responsive, Fast)
              </label>
              <label className="checkbox-label" style={{ padding: "0.4rem 0" }}>
                <input
                  type="checkbox"
                  checked={serviceApp}
                  onChange={(e) => setServiceApp(e.target.checked)}
                />
                <strong>3. App Development</strong> (iOS &amp; Android Mobile Apps, Flutter/React Native)
              </label>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Estimated Budget</label>
            <select
              className="form-input"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Local SEO / Starter Website)</option>
              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (Growth SEO / Premium Website)</option>
              <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000 (Mobile App MVP / Full Suite)</option>
              <option value="₹2,50,000+">₹2,50,000+ (Enterprise Custom Application / Scale)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Details &amp; Requirements</label>
            <textarea
              className="form-textarea"
              placeholder="Tell us about what you want to achieve, your target audience, or specific features needed..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn btn-primary btn-lg"
            style={{ width: "100%" }}
          >
            {submitting ? "Connecting to WhatsApp... ⏳" : "Submit & Connect on WhatsApp 💬"}
          </button>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-container" style={{ maxWidth: "520px", textAlign: "center" }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>💬</div>
            <h3 style={{ marginBottom: "0.8rem", color: "var(--emerald)" }}>
              Redirecting to WhatsApp!
            </h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
              Your inquiry has been compiled. If WhatsApp did not open automatically, please click the button below to connect with our senior strategist directly at <strong>+91 95941 47486</strong>.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <a
                href={`https://wa.me/919594147486?text=${encodeURIComponent(
                  `Hi, I just submitted an inquiry for ${name} (${phone}) on seomarketingagencyinmumbai.com.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                Open WhatsApp Now 💬
              </a>
              <a href="tel:+919594147486" className="btn btn-outline btn-sm">
                Call +91 95941 47486 📞
              </a>
            </div>
            <button
              onClick={() => {
                setShowModal(false);
                setName("");
                setPhone("");
                setEmail("");
                setWebsite("");
                setNotes("");
              }}
              className="btn btn-outline btn-sm"
            >
              Done &amp; Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
