"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast can our Mumbai business expect to see Google Page #1 rankings?",
    a: "For low-to-medium competition local Mumbai keywords (e.g. specific suburbs like Bandra, Andheri, Powai), our clients typically see Page #1 rankings within 45 to 75 days. Highly competitive nationwide terms generally take 3 to 6 months of continuous technical optimization and topical authority building.",
  },
  {
    q: "Why is dark mode and mobile responsiveness critical for modern websites?",
    a: "Over 78% of online search traffic in Mumbai originates from smartphones. Google enforces mobile-first indexing, meaning if your website is slow or clunky on phones, your rankings will plunge. Modern dark aesthetics reduce eye strain, conserve OLED battery life, and give your brand a high-tech, premium look.",
  },
  {
    q: "Do you provide dedicated Local SEO for Mumbai Google Business Profiles?",
    a: "Yes! We have a specialized Google Local 3-Pack system designed specifically for Mumbai micro-markets (BKC, South Bombay, Western Suburbs, Navi Mumbai, Thane). We optimize your GMB profile, geo-tag photos, establish verified local citations, and drive organic reviews.",
  },
  {
    q: "Will our SEO rankings drop if we redesign our website?",
    a: "Not with us! We execute rigorous 1-to-1 URL 301 redirect mapping, preserve existing high-ranking meta titles and schema tags, and pre-test staging environments so you gain speed without losing a single ranking position.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Got Questions?</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Everything you need to know about partnering with Mumbai&apos;s premier SEO & web engineering agency.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "active" : ""}`}>
              <div className="faq-header" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className="faq-icon">+</span>
              </div>
              {openIndex === i && (
                <div className="faq-body">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
