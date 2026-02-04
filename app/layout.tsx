import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Haven - Incident Tracking for Schools",
  description: "Keeping schools safe. Be proactive, not reactionary. Incident tracking and reporting for schools.",
  keywords: ["school safety", "incident tracking", "incident reporting", "school management", "safeguarding"],
  authors: [{ name: "Haven" }],
  openGraph: {
    title: "Haven - Incident Tracking for Schools",
    description: "Be proactive, not reactionary. Incident tracking and reporting for schools.",
    url: "https://safehaven.dev",
    siteName: "Haven",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
