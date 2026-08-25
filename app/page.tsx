// app/page.tsx
import type { Metadata } from "next";
import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import PhotoCta from "@/components/marketing/PhotoCta";

export const metadata: Metadata = {
  title: "Sermfy | Premium Church Growth Software",
  description:
    "Sermfy is premium church growth software built for modern churches. Manage members, attendance, communication, finances, events, groups, and more in one system.",
  alternates: {
    canonical: "https://www.sermfy.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sermfy | Premium Church Growth Software",
    description:
      "The premium church growth system built for modern churches. Manage people, attendance, communication, finances, events, and more in one connected platform.",
    url: "https://www.sermfy.com/",
    siteName: "Sermfy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sermfy | Premium Church Growth Software",
    description: "Premium church growth software built for modern churches.",
  },
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <PhotoCta />
    </main>
  );
}