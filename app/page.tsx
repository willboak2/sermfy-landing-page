import {
  AboutBlock,
  AppsTeaser,
  ChurchLogos,
  Hero,
  ProductCampaign,
  ProductGrid,
} from "@/components/site/HomeSections";
import { PRODUCTS } from "@/lib/site";

export default function HomePage() {
  const [cms, ...rest] = PRODUCTS;
  return (
    <>
      <Hero />
      <ProductGrid />
      <ProductCampaign product={cms} />
      <ChurchLogos />
      {rest.map((p) => (
        <ProductCampaign key={p.slug} product={p} />
      ))}
      <AppsTeaser />
      <AboutBlock />
    </>
  );
}
