"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBubbles() {
  const { scrollYProgress } = useScroll();
  const slow = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const mid = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const fast = useTransform(scrollYProgress, [0, 1], [0, -320]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.span
        style={{ y: slow }}
        className="absolute left-[8%] top-[12%] h-20 w-20 rounded-full border border-white/20 bg-white/5 blur-[1px]"
      />
      <motion.span
        style={{ y: mid }}
        className="absolute right-[10%] top-[20%] h-24 w-24 rounded-full border border-[#08D9D6]/40 bg-[#08D9D6]/10 blur-[2px]"
      />
      <motion.span
        style={{ y: fast }}
        className="absolute left-[25%] top-[55%] h-16 w-16 rounded-full border border-[#FF2E63]/30 bg-[#FF2E63]/10 blur-[1px]"
      />
      <motion.span
        style={{ y: slow }}
        className="absolute right-[25%] top-[65%] h-28 w-28 rounded-full border border-[#F9ED69]/30 bg-[#F9ED69]/10 blur-[3px]"
      />
    </div>
  );
}
