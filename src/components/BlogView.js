"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: "post-1",
    category: "seo",
    categoryLabel: "SEO Services",
    date: "October 2026",
    readTime: "6 min read",
    title: "How Mumbai Businesses Rank #1 on Google Local 3-Pack: The Complete 2026 Strategy",
    excerpt: "The hyper-local proximity and review velocity signals that decide who wins Google Maps in Bandra, BKC, and South Mumbai.",
    image: "/images/seo-analytics-hero.jpg",
    content: `
      <h3>The Mumbai Local Search Landscape</h3>
      <p>Ranking on Google Maps and Local 3-Pack in Mumbai is uniquely competitive due to dense commercial micro-markets (Bandra West, BKC, Andheri East/West, Lower Parel, South Bombay). Customers searching for services rely heavily on the top 3 Google Business Profiles.</p>
      
      <h3>Key Pillars for Dominating Mumbai Local Maps</h3>
      <ul>
        <li><strong>Hyper-Localized NAP Consistency:</strong> Ensure Name, Address, and Phone Number match exactly across Google Business Profile, Justdial, Indiamart, and your website schema.</li>
        <li><strong>Geo-Tagged Local Photo Updates:</strong> Regularly upload authentic photos of your Mumbai premises with GPS coordinates and localized metadata.</li>
        <li><strong>Review Velocity with Location Keywords:</strong> Encourage clients to mention specific localities in their Google reviews.</li>
        <li><strong>Neighborhood Landing Pages:</strong> Build dedicated pages for targeted Mumbai suburbs with schema.org LocalBusiness markup.</li>
      </ul>

      <h3>Common Mistakes to Avoid</h3>
      <p>Using virtual addresses or fake P.O. boxes in Mumbai will trigger Google suspension. Always verify with actual video verification and utility bills.</p>
    `,
  },
  {
    id: "post-2",
    category: "web",
    categoryLabel: "Website Development",
    date: "October 2026",
    readTime: "5 min read",
    title: "Core Web Vitals 2026: Why Website Speed is the Secret SEO Weapon",
    excerpt: "Interaction to Next Paint (INP) and LCP benchmarks. How a 0.8-second load speed doubled mobile conversions for Mumbai brands.",
    image: "/images/web-showcase.jpg",
    content: `
      <h3>Speed Equals Conversions and Rankings</h3>
      <p>In modern search algorithms, Google uses Interaction to Next Paint (INP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS) as direct ranking factors. For mobile users browsing across Mumbai, a 1-second delay can drop conversions by over 20%.</p>
      
      <h3>How We Achieve 98+ PageSpeed Scores</h3>
      <ul>
        <li><strong>Zero Bloat Vanilla Architecture:</strong> Lightweight semantic HTML and modular CSS eliminate render-blocking JavaScript frameworks where not needed.</li>
        <li><strong>Next-Gen WebP/AVIF Image Compression:</strong> Serving responsive images tailored to screen size saves over 70% bandwidth.</li>
        <li><strong>Edge CDN Caching in Mumbai:</strong> Hosting assets on Mumbai (BOM) AWS/Cloudflare edge servers ensures TTFB under 40 milliseconds.</li>
      </ul>
    `,
  },
  {
    id: "post-3",
    category: "app",
    categoryLabel: "App Development",
    date: "September 2026",
    readTime: "7 min read",
    title: "Flutter vs. React Native: Choosing the Right Mobile Framework in 2026",
    excerpt: "Comparing performance, developer speed, and native module integration for iOS & Android apps built for the Indian market.",
    image: "/images/web-showcase.jpg",
    content: `
      <h3>Cross-Platform Mobile App Dominance</h3>
      <p>Building separate native codebases for iOS and Android often doubles the engineering timeline. Modern cross-platform frameworks now deliver near-native 60 FPS performance while cutting development overhead in half.</p>
      
      <h3>Key Comparison Criteria</h3>
      <ul>
        <li><strong>Flutter (Dart):</strong> Exceptional canvas-rendered UI consistency, ideal for rich animations and branded commerce apps.</li>
        <li><strong>React Native:</strong> Seamless if your web application is already in React / Next.js, allowing shared business logic and component architecture.</li>
        <li><strong>Payment & Hardware APIs:</strong> Both support native UPI bridges (Razorpay, PhonePe) and device biometric authentication.</li>
      </ul>
    `,
  },
  {
    id: "post-4",
    category: "seo",
    categoryLabel: "SEO Services",
    date: "September 2026",
    readTime: "8 min read",
    title: "Technical SEO Audit Checklist: 25 Factors That Break Your Rankings",
    excerpt: "From canonical redirect loops to broken schema and crawl budget drains. How to identify silent ranking killers.",
    image: "/images/mumbai-team.jpg",
    content: `
      <h3>Why Most SEO Campaigns Fail at the Foundation</h3>
      <p>You can write dozens of articles and build backlinks, but if your site has canonical loops, orphan pages, or incorrect robots.txt directives, Googlebot will skip your pages.</p>
      
      <h3>The Top Critical Checks</h3>
      <ul>
        <li><strong>Canonicalization & Duplicate Content:</strong> Correct self-referencing canonical tags on HTTPS versions.</li>
        <li><strong>Crawl Budget Optimization:</strong> Disallowing internal search queries and infinite faceted URLs.</li>
        <li><strong>Internal Link Architecture:</strong> No high-value page should be more than 3 clicks away from the homepage.</li>
      </ul>
    `,
  },
  {
    id: "post-5",
    category: "web",
    categoryLabel: "Website Development",
    date: "August 2026",
    readTime: "4 min read",
    title: "Dark Mode UI/UX: Why Modern Tech Brands in Mumbai Are Switching",
    excerpt: "Why modern fintech, high-end consulting, and tech agencies are choosing sleek dark interfaces over generic templates.",
    image: "/images/web-showcase.jpg",
    content: `
      <h3>The Aesthetics of Modern Web Engineering</h3>
      <p>Dark mode is no longer just a visual preference; for modern tech companies, fintech startups, and luxury agencies in Mumbai, dark interfaces communicate sophistication, premium quality, and technological advancement.</p>
      <p>Paired with subtle neon accents and glassmorphism, dark themes reduce eye strain and make data visualizations pop with incredible clarity.</p>
    `,
  },
  {
    id: "post-6",
    category: "app",
    categoryLabel: "App Development",
    date: "August 2026",
    readTime: "6 min read",
    title: "Launching on Google Play & Apple App Store: Guidelines & Pitfalls",
    excerpt: "How to avoid common app rejection pitfalls, manage privacy nutrition labels, and achieve first-time store approval.",
    image: "/images/seo-analytics-hero.jpg",
    content: `
      <h3>Navigating Store Review Policies</h3>
      <p>Both Apple and Google have tightened guidelines around user privacy, in-app account deletion, and background permissions. Understanding these upfront prevents weeks of launch delays.</p>
    `,
  },
];

export default function BlogView() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat =
      activeCategory === "all" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getWhatsAppShareUrl = (title, id) => {
    const text = encodeURIComponent(
      `Check out this article: "${title}" by seomarketingagencyinmumbai.com https://seomarketingagencyinmumbai.com/blog#${id}`
    );
    return `https://api.whatsapp.com/send?text=${text}`;
  };

  return (
    <>
      <div className="blog-filter-bar">
        <div className="filter-pills">
          <button
            className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Insights
          </button>
          <button
            className={`filter-pill ${activeCategory === "seo" ? "active" : ""}`}
            onClick={() => setActiveCategory("seo")}
          >
            SEO Services
          </button>
          <button
            className={`filter-pill ${activeCategory === "web" ? "active" : ""}`}
            onClick={() => setActiveCategory("web")}
          >
            Website Development
          </button>
          <button
            className={`filter-pill ${activeCategory === "app" ? "active" : ""}`}
            onClick={() => setActiveCategory("app")}
          >
            App Development
          </button>
        </div>

        <div style={{ width: "280px" }}>
          <input
            type="text"
            className="form-input"
            placeholder="🔍 Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Featured Guide Banner */}
      <div
        className="glass-card"
        style={{
          marginBottom: "3.5rem",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "2.5rem",
          alignItems: "center",
          borderColor: "rgba(255, 51, 34, 0.35)",
        }}
      >
        <div>
          <div style={{ display: "flex", gap: "0.8rem", alignItems: "center", marginBottom: "1rem" }}>
            <span className="badge badge-green">Featured Guide 2026</span>
            <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>6 min read</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", marginBottom: "1rem" }}>
            How Mumbai Businesses Rank #1 on Google Local 3-Pack: The Complete 2026 Strategy
          </h2>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Discover the exact geo-tagging, NAP consistency, and localized review velocity blueprint that put our Bandra, BKC, and Andheri clients at the very top of Google Maps.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <button
              className="btn btn-primary"
              onClick={() => setSelectedPost(blogPosts[0])}
            >
              Read Full Article Now →
            </button>
            <a
              href={getWhatsAppShareUrl(blogPosts[0].title, blogPosts[0].id)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm"
            >
              Share on WhatsApp 💬
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/images/seo-analytics-hero.jpg"
            alt="Local SEO Mumbai Strategy Visual"
            width={600}
            height={340}
            style={{ borderRadius: "var(--radius-md)", border: "1px solid var(--border-subtle)", width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Post Grid */}
      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <article key={post.id} className="blog-card" id={post.id}>
            <div
              className="blog-card-thumb"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url('${post.image}')`,
              }}
            ></div>
            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="case-pill" style={{ margin: 0 }}>
                  {post.categoryLabel}
                </span>
                <span>• {post.date}</span>
                <span>• {post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "0.8rem", borderTop: "1px solid var(--border-subtle)" }}>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setSelectedPost(post)}
                >
                  Read Article →
                </button>
                <a
                  href={getWhatsAppShareUrl(post.title, post.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--crimson-light)", fontSize: "0.85rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem" }}
                  title="Share on WhatsApp"
                >
                  <span>Share</span> 💬
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target.classList.contains("modal-overlay")) {
              setSelectedPost(null);
            }
          }}
        >
          <div className="modal-container">
            <button
              className="modal-close-btn"
              onClick={() => setSelectedPost(null)}
              aria-label="Close Article"
            >
              ✕
            </button>

            <div
              style={{
                display: "flex",
                gap: "0.8rem",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <span className="case-pill" style={{ margin: 0 }}>
                {selectedPost.categoryLabel}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-dim)" }}>
                {selectedPost.date} • {selectedPost.readTime}
              </span>
            </div>

            <h2
              style={{
                fontSize: "1.9rem",
                marginBottom: "1.5rem",
                lineHeight: "1.3",
              }}
            >
              {selectedPost.title}
            </h2>

            <div
              style={{
                color: "var(--text-muted)",
                fontSize: "1rem",
                lineHeight: "1.8",
              }}
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            ></div>

            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-subtle)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <a
                href={getWhatsAppShareUrl(selectedPost.title, selectedPost.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success btn-sm"
              >
                Share This Article on WhatsApp 💬
              </a>
              <Link href="/contact" className="btn btn-primary btn-sm">
                Discuss Project Requirements →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
