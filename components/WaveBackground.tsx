import Image from "next/image";

export default function WaveBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/wavebackground.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-125 object-cover object-center opacity-60 sm:scale-110 sm:opacity-70"
      />
    </div>
  );
}
