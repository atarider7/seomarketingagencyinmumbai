"use client";

import { useState } from "react";
import Link from "next/link";

export default function RoiCalculator() {
  const [visitors, setVisitors] = useState(5000);
  const [convRate, setConvRate] = useState(2.0);
  const [aov, setAov] = useState(15000);

  // Projections using proven 3.2x multiplier
  const projectedVisitors = Math.round(visitors * 3.2);
  const projectedLeads = Math.round(projectedVisitors * (convRate / 100));
  const projectedRevenue = Math.round(projectedLeads * aov);

  const formatRevenue = (val) => {
    if (val >= 10000000) {
      return "₹" + (val / 10000000).toFixed(2) + " Cr";
    } else if (val >= 100000) {
      return "₹" + (val / 100000).toFixed(2) + " Lakh";
    }
    return "₹" + val.toLocaleString("en-IN");
  };

  return (
    <section className="section" style={{ background: "var(--bg-primary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Data-Driven Growth</span>
          <h2 className="section-title">Calculate Your Projected SEO Revenue ROI</h2>
          <p className="section-desc">
            Slide to match your current website metrics and see what our targeted Mumbai SEO campaign can yield over 6 months.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calc-controls">
            <div className="calc-control-group">
              <div className="calc-label-row">
                <span>Current Monthly Website Visitors</span>
                <span className="calc-label-val">
                  {visitors.toLocaleString("en-IN")}/mo
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="50000"
                step="1000"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <div className="calc-control-group">
              <div className="calc-label-row">
                <span>Current Conversion Rate (%)</span>
                <span className="calc-label-val">{convRate.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.5"
                value={convRate}
                onChange={(e) => setConvRate(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <div className="calc-control-group">
              <div className="calc-label-row">
                <span>Average Deal / Order Value (₹)</span>
                <span className="calc-label-val">
                  ₹{aov.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="150000"
                step="2000"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="calc-slider"
              />
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-dim)", marginTop: "1.5rem" }}>
              *Estimates are calculated using our client historical average 3.2x organic search volume multiplier over a 6-month ranking sprint.
            </p>
          </div>

          <div className="calc-result-panel">
            <div
              className="badge badge-green"
              style={{ alignSelf: "center", marginBottom: "0.8rem" }}
            >
              Projected Monthly Growth
            </div>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Estimated New Monthly Revenue
            </p>
            <div className="calc-result-number">
              {formatRevenue(projectedRevenue)}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  background: "rgba(10, 13, 23, 0.6)",
                  padding: "0.8rem",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                  Projected Visitors
                </div>
                <strong style={{ color: "var(--cyan)", fontSize: "1.15rem" }}>
                  {projectedVisitors.toLocaleString("en-IN")}
                </strong>
              </div>
              <div
                style={{
                  background: "rgba(10, 13, 23, 0.6)",
                  padding: "0.8rem",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                  Projected Leads
                </div>
                <strong style={{ color: "var(--emerald)", fontSize: "1.15rem" }}>
                  {projectedLeads.toLocaleString("en-IN")}
                </strong>
              </div>
            </div>

            <Link href="/contact" className="btn btn-primary btn-sm">
              Claim This Revenue Strategy →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
