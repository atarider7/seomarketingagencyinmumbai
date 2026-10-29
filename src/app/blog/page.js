import Link from "next/link";
import BlogView from "@/components/BlogView";

export const metadata = {
  title: "SEO & Web Engineering Insights | Mumbai SEO Blog | Apex Digital",
  description:
    "Actionable guides, algorithm updates, and case studies on ranking #1 on Google in Mumbai and building ultra-fast responsive websites.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "3.5rem" }}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>/</span>{" "}
            <span style={{ color: "var(--cyan)" }}>Blog & Insights</span>
          </div>

          <div className="section-header">
            <span className="section-subtitle">Search Knowledge Base</span>
            <h1 className="section-title">
              The Mumbai SEO & Web{" "}
              <span className="gradient-text">Engineering Playbook</span>
            </h1>
            <p className="section-desc">
              Actionable guides, data breakdowns, and real tactical blueprints written by senior search practitioners in BKC.
            </p>
          </div>

          <BlogView />
        </div>
      </section>
    </main>
  );
}
