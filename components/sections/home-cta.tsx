import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeCta() {
  return (
    <section className="section mt-24">
      <div className="glass-strong grid gap-8 rounded-[2rem] p-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Limited Drop</p>
          <h3 className="font-display text-3xl tracking-[0.2em] text-white">
            Neon Pulse Zero Gravity Pack
          </h3>
          <p className="text-sm leading-7 text-white/70">
            A curated trio of our best-selling neon flavors, packed with an exclusive
            holographic crate and chill core module.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Button className="rounded-full bg-[#08D9D6] px-8 py-6 text-xs uppercase tracking-[0.4em] text-black shadow-[0_0_30px_rgba(8,217,214,0.5)] hover:bg-[#18f0ed]">
            Pre-Order Pack
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/30 bg-white/5 px-8 py-6 text-xs uppercase tracking-[0.4em] text-white hover:bg-white/10"
          >
            <Link href="/about">Meet the Lab</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
