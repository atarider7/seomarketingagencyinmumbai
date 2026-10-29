"use client";

import { useState } from "react";
import Link from "next/link";

export default function WebEstimator() {
  const [pages, setPages] = useState(10);
  const [multiplier, setMultiplier] = useState(1.0);
  const [speedBoost, setSpeedBoost] = useState(true);

  let days = 10 + Math.ceil(pages * 1.5);
  if (multiplier > 1.4) days += 10;

  const getTier = () => {
    if (multiplier >= 1.8) return "Enterprise Web Application & Portal";
    if (multiplier >= 1.5) return "Full E-Commerce & Checkout Funnel";
    if (multiplier >= 1.2) return "Premium Dark-Mode & Custom 3D UI";
    return "High-Speed Business & Lead Generation";
  };

  return (
    <section className="section" id="estimator">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Interactive Scope Planner</span>
          <h2 className="section-title">Website Scope &amp; Timeline Planner</h2>
          <p className="section-desc">
            Select your project specifications to calculate estimated development turnaround and architecture requirements.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calc-controls">
            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="form-label">Number of Pages Required</label>
              <select
                className="form-input"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
              >
                <option value={5}>1 - 5 Pages (Starter Brand / Clinic / Boutique)</option>
                <option value={10}>6 - 10 Pages (Growing Corporate / Multi-Service)</option>
                <option value={20}>11 - 25 Pages (Comprehensive Catalog / Enterprise)</option>
                <option value={40}>25+ Pages (Large Multi-Category Web Portal)</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="form-label">Website Functionality &amp; Type</label>
              <select
                className="form-input"
                value={multiplier}
                onChange={(e) => setMultiplier(Number(e.target.value))}
              >
                <option value={1.0}>High-Speed Corporate &amp; Lead Generation</option>
                <option value={1.3}>Luxury Dark-Mode with Custom 3D &amp; Animations</option>
                <option value={1.6}>Full E-Commerce Store (Razorpay/UPI, Inventory, Cart)</option>
                <option value={1.9}>Custom Web Portal &amp; Client Dashboard</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: "1.5rem" }}>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={speedBoost}
                  onChange={(e) => setSpeedBoost(e.target.checked)}
                />
                <span>Include Core Web Vitals 95+ Guarantee &amp; Mumbai Edge CDN Caching</span>
              </label>
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
              *Every website includes 100% phone responsiveness, semantic SEO hierarchy, Schema JSON-LD tags, and 60 days of post-launch maintenance.
            </p>
          </div>

          <div className="calc-result-panel">
            <div
              className="badge badge-purple"
              style={{ alignSelf: "center", marginBottom: "0.8rem" }}
            >
              Architecture Blueprint
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Recommended Architecture
            </p>
            <div
              style={{
                fontSize: "1.45rem",
                fontWeight: 700,
                color: "var(--crimson-light)",
                margin: "0.5rem 0 1.2rem",
                lineHeight: "1.3",
              }}
            >
              {getTier()}
            </div>

            <div
              style={{
                background: "rgba(10, 13, 23, 0.6)",
                padding: "1rem",
                borderRadius: "var(--radius-sm)",
                marginBottom: "1.5rem",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Delivery Turnaround:</span>
                <strong style={{ color: "var(--emerald)", fontSize: "0.95rem" }}>
                  {days} - {days + 5} Working Days
                </strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Speed Target:</span>
                <strong style={{ color: "var(--cyan)", fontSize: "0.95rem" }}>
                  &lt; 1.0s (95+ PageSpeed)
                </strong>
              </div>
            </div>

            <Link href="/contact?service=website" className="btn btn-primary btn-sm">
              Request Full Scope &amp; Proposal →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
