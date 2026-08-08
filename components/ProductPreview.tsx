import Image from "next/image";

export default function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[1000px]">
      <Image
        src="/laptop-2.png"
        alt="Sermfy CMS dashboard shown on a laptop, with the member list open on a phone in front"
        width={1256}
        height={1108}
        sizes="(min-width: 1024px) 1000px, (min-width: 640px) 90vw, 100vw"
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
