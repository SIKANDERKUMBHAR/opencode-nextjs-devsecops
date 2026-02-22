"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HomeFlavorBurst() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const spread = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section ref={ref} className="section relative mt-24">
      <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-10 md:p-16">
        <div className="absolute inset-0 opacity-30">
          <div className="mesh-bg h-full w-full" />
        </div>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Flavor Burst</p>
            <h2 className="font-display text-3xl tracking-[0.2em] text-white">
              Explosion of Citrus, Cola, and Energy
            </h2>
            <p className="text-sm leading-7 text-white/70">
              Scroll through the flavor wave and watch the bottle disperse into its neon
              signature. Each bubble is a flavor node with a distinct glow profile.
            </p>
          </div>
          <div className="relative flex h-[260px] items-center justify-center">
            <motion.div
              style={{ opacity: fade }}
              className="absolute h-32 w-24 rounded-full bg-gradient-to-b from-[#FF2E63] to-[#5a0f3b] shadow-[0_0_40px_rgba(255,46,99,0.5)]"
            />
            <motion.span
              style={{ x: spread, y: spread }}
              className="absolute h-16 w-16 rounded-full bg-[#08D9D6]/80 blur-[1px]"
            />
            <motion.span
              style={{ x: spread, y: -spread }}
              className="absolute h-14 w-14 rounded-full bg-[#F9ED69]/80 blur-[1px]"
            />
            <motion.span
              style={{ x: -spread, y: spread }}
              className="absolute h-12 w-12 rounded-full bg-[#FF2E63]/80 blur-[1px]"
            />
            <motion.span
              style={{ x: -spread, y: -spread }}
              className="absolute h-16 w-16 rounded-full bg-[#6DFFB1]/80 blur-[1px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
