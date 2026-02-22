import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="section py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-display text-2xl tracking-[0.4em] text-white">
              NEON PULSE
            </p>
            <p className="max-w-md text-sm leading-6 text-white/70">
              Crafted in a zero-gravity microbrew lab. Bold flavor, neon energy, and a
              future-forward refreshment ritual.
            </p>
            <div className="flex items-center gap-3">
              <Button className="rounded-full bg-white/10 px-6 text-xs uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(8,217,214,0.35)] hover:bg-white/20">
                Join the Lab
              </Button>
            </div>
          </div>

          <div className="space-y-3 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Explore</p>
            <Link href="/products" className="block hover:text-white">
              Store
            </Link>
            <Link href="/about" className="block hover:text-white">
              Brand Story
            </Link>
            <Link href="/contact" className="block hover:text-white">
              Contact
            </Link>
          </div>

          <div className="space-y-3 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
            <p>hello@neonpulse.com</p>
            <p>+1 (808) 555-2404</p>
            <p>Neo District, 88th Street, Lunar City</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-white/40">
          <span>(c) 2026 Neon Pulse Soda Lab</span>
          <span>Immersive Commerce Experience</span>
        </div>
      </div>
    </footer>
  );
}
