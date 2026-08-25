// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteHeader from "@/components/marketing/SiteHeader";
import SiteFooter from "@/components/marketing/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sermfy.com"),
  title: "Sermfy — Church Growth Management System",
  description:
    "Premium church growth software built for modern churches. Manage members, attendance, finance, groups, and communication in one place.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sermfy",
  url: "https://www.sermfy.com/",
  logo: "https://www.sermfy.com/images/sermfy-cms-logo-footer.png",
  description: "Premium church growth software built for modern churches.",
  sameAs: [
    "https://www.youtube.com/@sermfy",
    "https://www.facebook.com/sermfy",
    "https://www.instagram.com/sermfy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-[#272727]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}