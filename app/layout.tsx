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
  title: "Sermfy — Church Growth Management System",
  description:
    "Premium church growth software built for modern churches. Manage members, attendance, finance, groups, and communication in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-[#272727]">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}