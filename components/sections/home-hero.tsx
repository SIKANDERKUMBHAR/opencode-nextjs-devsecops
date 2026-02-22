"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ParallaxBubbles from "@/components/visuals/parallax-bubbles";

const SodaHeroScene = dynamic(() => import("@/components/three/soda-hero-scene"), {
  ssr: false,
});

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="absolute inset-0">
        <ParallaxBubbles />
      </div>
      <div className="section grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative z-10 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-white/60"
          >
            Future-Fresh Cold Drinks
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="hero-title neon-text text-white"
          >
            A Neon-Fueled
            <br />
            Soda Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-lg text-base leading-7 text-white/70"
          >
            Hyper-chilled, crystal-clear, and engineered for immersive refreshment. Taste
            the glow with floating ice, liquid pulses, and 3D-driven flavor explosions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              asChild
              className="cta-glow rounded-full bg-[#FF2E63] px-8 py-6 text-xs font-semibold uppercase tracking-[0.4em] text-white hover:bg-[#ff4b7a]"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 px-8 py-6 text-xs uppercase tracking-[0.4em] text-white hover:bg-white/10"
            >
              <Link href="/products">Explore Flavors</Link>
            </Button>
          </motion.div>
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.3em] text-white/50">
            <span>Liquid Glow</span>
            <span>Zero Gravity Chill</span>
            <span>Hyper Fresh</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-[#FF2E63]/20 via-transparent to-[#08D9D6]/30 blur-2xl" />
          <div className="glass relative rounded-[2.5rem] border border-white/10 p-6">
            <SodaHeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
