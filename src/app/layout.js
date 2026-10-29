import { Plus_Jakarta_Sans, Space_Grotesk, Playfair_Display, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata = {
  title: "SEO, Website Development & App Development Agency in Mumbai | seomarketingagencyinmumbai.com",
  description:
    "Top digital agency in Mumbai for SEO Services, Custom Website Development, and Mobile App Development (iOS & Android). Based in BKC, Mumbai.",
  keywords: [
    "SEO marketing agency in Mumbai",
    "website development Mumbai",
    "mobile app development Mumbai",
    "SEO services Mumbai",
    "iOS and Android app developers Mumbai",
    "digital marketing BKC",
  ],
  metadataBase: new URL("https://seomarketingagencyinmumbai.com"),
  openGraph: {
    title: "SEO, Website & App Development Agency Mumbai | seomarketingagencyinmumbai.com",
    description:
      "Expert SEO, High-Speed Websites & Scalable Mobile Apps in Mumbai. Trusted by 450+ brands.",
    url: "https://seomarketingagencyinmumbai.com",
    siteName: "seomarketingagencyinmumbai.com",
    images: [
      {
        url: "/images/seo-analytics-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Apex Digital SEO Analytics Mockup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Apex Digital - SEO & Web Agency Mumbai",
    image: "https://seomarketingagencyinmumbai.com/images/seo-analytics-hero.jpg",
    "@id": "https://seomarketingagencyinmumbai.com/",
    url: "https://seomarketingagencyinmumbai.com/",
    telephone: "+919594147486",
    priceRange: "₹₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "704, Trade Center, G Block, Bandra Kurla Complex (BKC)",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400051",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.0657,
      longitude: 72.8687,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "19:30",
    },
  };

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable} ${playfair.variable} ${syne.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
