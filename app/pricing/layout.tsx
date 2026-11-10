import type { Metadata } from "next";

// The pricing page is a client component, so its title lives here.
export const metadata: Metadata = {
  title: "Sermfy CMS Pricing",
  description: "Sermfy CMS plans and prices.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
