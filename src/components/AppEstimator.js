"use client";

import { useState } from "react";
import Link from "next/link";

export default function AppEstimator() {
  const [platform, setPlatform] = useState("cross-platform");
  const [appType, setAppType] = useState("business");
  const [hasAuth, setHasAuth] = useState(true);
  const [hasPayments, setHasPayments] = useState(true);
  const [hasChat, setHasChat] = useState(false);
  const [hasAdmin, setHasAdmin] = useState(true);

  let baseDays = 25;
  if (platform === "native-both") baseDays += 15;
  if (platform === "cross-platform") baseDays += 5;
  if (appType === "ecommerce") baseDays += 8;
  if (appType === "on-demand") baseDays += 14;
  if (hasChat) baseDays += 6;
  if (hasAdmin) baseDays += 6;

  const getPlatformLabel = () => {
    if (platform === "cross-platform") return "Flutter / React Native (iOS & Android)";
    if (platform === "android-only") return "Native Android (Kotlin / Jetpack Compose)";
    if (platform === "ios-only") return "Native Apple iOS (Swift / SwiftUI)";
    return "Dual Native Apps (Swift & Kotlin)";
  };

  return (
    <div className="calculator-card" style={{ marginTop: "2rem" }}>
      <div className="calc-controls">
        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label className="form-label">Platform Required</label>
          <select
            className="form-input"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="cross-platform">
              Cross-Platform (Unified Codebase for Android &amp; iOS via Flutter / React Native)
            </option>
            <option value="android-only">Android Only (Kotlin / Jetpack Compose)</option>
            <option value="ios-only">iOS Only (Swift / SwiftUI)</option>
            <option value="native-both">Dedicated Native (Separate Swift &amp; Kotlin Apps)</option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label className="form-label">Application Type</label>
          <select
            className="form-input"
            value={appType}
            onChange={(e) => setAppType(e.target.value)}
          >
            <option value="business">Business &amp; Service App (Booking, Appointments, Leads)</option>
            <option value="ecommerce">E-Commerce &amp; Retail Store Mobile App</option>
            <option value="on-demand">On-Demand Delivery &amp; Multi-Vendor Marketplace</option>
            <option value="social">Community &amp; Content Platform</option>
          </select>
        </div>

        <div className="form-group" style={{ marginBottom: "1.5rem" }}>
          <label className="form-label">Core App Capabilities</label>
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={hasAuth}
                onChange={(e) => setHasAuth(e.target.checked)}
              />
              <span>User Login &amp; Social Auth</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={hasPayments}
                onChange={(e) => setHasPayments(e.target.checked)}
              />
              <span>UPI / Payment Gateway (Razorpay/Stripe)</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={hasChat}
                onChange={(e) => setHasChat(e.target.checked)}
              />
              <span>Real-Time In-App Chat</span>
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={hasAdmin}
                onChange={(e) => setHasAdmin(e.target.checked)}
              />
              <span>Admin Web Dashboard</span>
            </label>
          </div>
        </div>

        <p style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
          *Includes Apple App Store &amp; Google Play Store submission, backend cloud APIs, and 90 days of bug support.
        </p>
      </div>

      <div className="calc-result-panel">
        <div
          className="badge badge-purple"
          style={{ alignSelf: "center", marginBottom: "0.8rem" }}
        >
          App Engineering Scope
        </div>
        <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
          Recommended Platform Stack
        </p>
        <div
          style={{
            fontSize: "1.35rem",
            fontWeight: 700,
            color: "var(--cyan)",
            margin: "0.5rem 0 1.2rem",
            lineHeight: "1.3",
          }}
        >
          {getPlatformLabel()}
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
            <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Turnaround Timeline:</span>
            <strong style={{ color: "var(--emerald)", fontSize: "0.95rem" }}>
              {baseDays} - {baseDays + 10} Working Days
            </strong>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>Store Approvals:</span>
            <strong style={{ color: "var(--cyan)", fontSize: "0.95rem" }}>
              100% Guaranteed
            </strong>
          </div>
        </div>

        <Link href="/contact?service=app" className="btn btn-primary btn-sm">
          Discuss Your App Concept →
        </Link>
      </div>
    </div>
  );
}
