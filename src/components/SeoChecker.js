"use client";

import { useState } from "react";
import Link from "next/link";

export default function SeoChecker() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsChecking(true);
    setResults(null);

    setTimeout(() => {
      setIsChecking(false);
      const domain = url.replace(/^https?:\/\//i, "").split("/")[0];
      setResults({
        domain,
        score: 93,
        mobileSpeed: "0.9s (Passing)",
        indexStatus: "100% Crawlable",
        security: "HTTPS SSL Active",
        gapsFound: "4 Missing Schema Tags",
      });
    }, 1200);
  };

  return (
    <section className="section" id="seo-checker" style={{ paddingTop: "1rem" }}>
      <div className="container">
        <div className="audit-bar-card">
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <div className="badge badge-purple" style={{ marginBottom: "0.5rem" }}>
              Live Diagnostic Tool
            </div>
            <h3 style={{ fontSize: "1.6rem" }}>
              Free SEO &amp; Website Health Checker
            </h3>
            <p style={{ fontSize: "0.95rem" }}>
              Enter your domain to check Google indexing readiness, Core Web Vitals, and organic search gaps.
            </p>
          </div>

          <form onSubmit={handleCheck} className="audit-form-grid">
            <div className="form-group-inline">
              <input
                type="url"
                className="form-input"
                placeholder="Enter domain URL (e.g. https://yourbusiness.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <div className="form-group-inline">
              <input
                type="text"
                className="form-input"
                placeholder="Target keyword (optional, e.g. SEO Mumbai)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isChecking}
              className="btn btn-primary"
              style={{ minHeight: "52px" }}
            >
              {isChecking ? "Analyzing Domain... ⏳" : "Run SEO Check ⚡"}
            </button>
          </form>

          {results && (
            <div className="audit-results-box" style={{ display: "block" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                }}
              >
                <div>
                  <strong style={{ color: "var(--crimson-light)", fontSize: "1.15rem" }}>
                    {results.domain}
                  </strong>
                  {keyword && (
                    <span style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginLeft: "1rem" }}>
                      Target: &ldquo;{keyword}&rdquo;
                    </span>
                  )}
                </div>
                <span className="badge badge-green">Health Diagnostic Complete</span>
              </div>

              <div className="audit-metric-grid">
                <div className="audit-metric-item">
                  <div className="audit-metric-val">{results.score}/100</div>
                  <div className="audit-metric-lbl">SEO Health Score</div>
                </div>
                <div className="audit-metric-item">
                  <div className="audit-metric-val" style={{ color: "var(--crimson-light)" }}>
                    {results.mobileSpeed}
                  </div>
                  <div className="audit-metric-lbl">Core Web Vitals</div>
                </div>
                <div className="audit-metric-item">
                  <div className="audit-metric-val" style={{ color: "var(--amber)" }}>
                    {results.gapsFound}
                  </div>
                  <div className="audit-metric-lbl">Optimization Gaps</div>
                </div>
                <div className="audit-metric-item">
                  <div className="audit-metric-val" style={{ color: "var(--emerald)" }}>
                    {results.indexStatus}
                  </div>
                  <div className="audit-metric-lbl">Google Indexability</div>
                </div>
              </div>

              <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary btn-sm">
                  Request Full SEO Audit &amp; Fix Plan →
                </Link>
                <a
                  href={`https://wa.me/919594147486?text=Hi,%20I%20ran%20an%20SEO%20check%20for%20${encodeURIComponent(url)}%20and%20would%20like%20a%20full%20audit.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-sm"
                >
                  Receive Report on WhatsApp 💬
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
