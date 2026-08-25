// app/page.tsx
import Hero from "@/components/marketing/Hero";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import PhotoCta from "@/components/marketing/PhotoCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <PhotoCta />
    </main>
  );
}