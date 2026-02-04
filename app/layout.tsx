import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haven - Incident Tracking & Behavior Management for Schools | Reduce Incidents by 70%",
  description: "Mobile and web platform helping schools reduce repeat behavioral incidents by up to 70%. Track incidents, identify at-risk students early, and respond 3-5x faster with data-driven insights.",
  keywords: [
    "school incident tracking",
    "behavior management software",
    "school safety platform",
    "incident reporting for schools",
    "student behavior tracking",
    "safeguarding software",
    "school management system",
    "behavioral incident tracking",
    "education safety software",
    "school incident management",
    "behavior intervention software",
    "student wellbeing platform"
  ],
  authors: [{ name: "Haven" }],
  openGraph: {
    title: "Haven - Reduce School Behavioral Incidents by 70%",
    description: "Mobile and web incident tracking platform for schools. Identify at-risk students early, respond faster, and create safer learning environments.",
    url: "https://safehaven.dev",
    siteName: "Haven",
    type: "website",
    images: [
      {
        url: "https://safehaven.dev/logo.jpg",
        width: 800,
        height: 800,
        alt: "Haven - School Incident Tracking Platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven - Incident Tracking for Schools",
    description: "Reduce repeat behavioral incidents by up to 70%. Mobile and web platform for school safety.",
    images: ["https://safehaven.dev/logo.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://safehaven.dev/#organization",
        "name": "Haven",
        "url": "https://safehaven.dev",
        "logo": "https://safehaven.dev/logo.jpg",
        "description": "Incident tracking and reporting for schools. Reduce repeat behavioral incidents by up to 70%.",
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://safehaven.dev/#website",
        "url": "https://safehaven.dev",
        "name": "Haven - Incident Tracking for Schools",
        "publisher": {
          "@id": "https://safehaven.dev/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Haven",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        },
        "description": "Mobile and web platform for schools to track incidents, identify at-risk students, and reduce repeat behavioral incidents by up to 70%."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
