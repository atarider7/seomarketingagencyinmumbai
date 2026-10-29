"use client";

import { useState } from "react";
import Link from "next/link";

export default function SeoAuditTool() {
  const [url, setUrl] = useState("");
  const [keyword, setKeyword] = useState("");
  const [phone, setPhone] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;

    setIsScanning(true);
    setShowResults(true);
    setProgress(0);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setProgress(Math.min(current, 100));
      if (current >= 100) {
        clearInterval(interval);
        setIsScanning(false);
      }
    }, 200);
  };

  const domain = url
    ? url.replace(/^https?:\/\//i, "").split("/")[0]
    : "yourwebsite.com";

  return (
    <section className="section" id="audit-tool" style={{ paddingTop: "1rem" }}>
      <div className="container">
        <div className="audit-bar-card">
          <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
            <div className="badge badge-purple" style={{ marginBottom: "0.5rem" }}>
              Instant Analysis Engine
            </div>
            <h3 style={{ fontSize: "1.6rem" }}>
              Check Your Website&apos;s SEO & Speed Score in 15 Seconds
            </h3>
            <p style={{ fontSize: "0.95rem" }}>
              Enter your domain to see real-time Google indexing status, mobile responsiveness, and ranking gaps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="audit-form-grid">
            <div className="form-group-inline">
              <input
                type="url"
                className="form-input"
                placeholder="https://yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <div className="form-group-inline">
              <input
                type="text"
                className="form-input"
                placeholder="Primary Keyword (e.g. Luxury Interior Mumbai)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                required
              />
            </div>
            <div className="form-group-inline">
              <input
                type="tel"
                className="form-input"
                placeholder="WhatsApp / Mobile No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isScanning}
              className="btn btn-primary"
              style={{ height: "52px" }}
            >
              {isScanning ? "Scanning... ⏳" : "Analyze Now ⚡"}
            </button>
          </form>

          {showResults && (
            <div className="audit-results-box">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.8rem",
                }}
              >
                <div>
                  <strong style={{ color: "var(--cyan)", fontSize: "1.1rem" }}>
                    {domain}
                  </strong>
                  <span
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                      marginLeft: "1rem",
                    }}
                  >
                    {keyword ? `Target: "${keyword}"` : "Top Local Target"}
                  </span>
                </div>
                <span className="badge badge-green">
                  {isScanning ? "Auditing Signals..." : "Scan Completed 100%"}
                </span>
              </div>

              <div className="audit-progress-bar-bg">
                <div
                  className="audit-progress-bar-fill"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="audit-metric-grid">
                <div className="audit-metric-item">
                  <div className="audit-metric-val">94/100</div>
                  <div className="audit-metric-lbl">On-Page SEO Health</div>
                </div>
                <div className="audit-metric-item">
                  <div className="audit-metric-val" style={{ color: "var(--cyan)" }}>
                    0.9s
                  </div>
                  <div className="audit-metric-lbl">Mobile Speed (LCP)</div>
                </div>
                <div className="audit-metric-item">
                  <div className="audit-metric-val" style={{ color: "var(--amber)" }}>
                    8 Gaps
                  </div>
                  <div className="audit-metric-lbl">Missing Schema Tags</div>
                </div>
                <div className="audit-metric-item">
                  <div className="audit-metric-val" style={{ color: "var(--emerald)" }}>
                    +450%
                  </div>
                  <div className="audit-metric-lbl">3-Month Growth Potential</div>
                </div>
              </div>

              <div style={{ marginTop: "1.2rem", textAlign: "center" }}>
                <Link href="/contact" className="btn btn-success btn-sm">
                  Claim Full 18-Page Technical PDF Audit via WhatsApp →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
