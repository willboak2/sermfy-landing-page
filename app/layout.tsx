import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { SOCIAL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const DESCRIPTION =
  "Software for churches, ministries and organisations: Sermfy CMS, Sermfy Stream, Sermfy Presenter and Sermfy Go.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sermfy.com"),
  title: { default: "Sermfy: manage, stream, present and share", template: "%s | Sermfy" },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Sermfy",
    url: "https://www.sermfy.com",
    title: "Sermfy: manage, stream, present and share",
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico", apple: "/brand/sermfy-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sermfy",
  url: "https://www.sermfy.com/",
  logo: "https://www.sermfy.com/brand/sermfy-mark.png",
  description: DESCRIPTION,
  sameAs: SOCIAL.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
