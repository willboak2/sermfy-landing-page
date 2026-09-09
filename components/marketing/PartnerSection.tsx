import Link from "next/link";
import { Handshake } from "lucide-react";
import Reveal from "./Reveal";

export default function PartnerSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy">
          <Handshake size={30} strokeWidth={2} className="text-white" />
        </span>

        <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Become a Sermfy Partner
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Refer churches to Sermfy and earn recurring commission on every subscription — with your own dashboard to
          track every referral and payout.
        </p>

        <Link
          href="/partners"
          className="mt-8 inline-block rounded-full bg-gradient-to-r from-sky to-brand px-8 py-4 text-center text-lg font-medium text-white transition hover:opacity-90"
        >
          Become a Partner
        </Link>
      </Reveal>
    </section>
  );
}
