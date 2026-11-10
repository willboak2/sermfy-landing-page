import { BrowserFrame, LaptopFrame, MonitorFrame, Shot } from "@/components/site/Frames";
import { SCREENS, type Product } from "@/lib/site";

const URLS: Record<Product["slug"], string> = {
  cms: "cms.sermfy.com",
  stream: "",
  presenter: "",
  go: "go.sermfy.com",
};

/** A product's screenshot inside the device it runs on. */
export default function ProductVisual({
  product,
  screen = product.hero,
  sizes = "(min-width: 1024px) 1100px, 100vw",
  preload = false,
}: {
  product: Product;
  screen?: keyof typeof SCREENS;
  sizes?: string;
  preload?: boolean;
}) {
  const dark = product.theme === "dark";
  const shot = <Shot screen={screen} mark={product.mark.src} sizes={sizes} preload={preload} dark={dark} />;
  if (product.frame === "monitor") return <MonitorFrame>{shot}</MonitorFrame>;
  if (product.frame === "laptop") return <LaptopFrame>{shot}</LaptopFrame>;
  return (
    <BrowserFrame url={URLS[product.slug]} dark={dark}>
      {shot}
    </BrowserFrame>
  );
}
