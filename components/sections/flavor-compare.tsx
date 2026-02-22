"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const compareData = {
  left: {
    title: "Neon Pulse Cola",
    notes: "Deep cola, vanilla spark, midnight fizz.",
    gradient: "from-[#FF2E63] to-[#5a0f3b]",
  },
  right: {
    title: "Lemon Nova",
    notes: "Crisp lemon, solar zest, chilled finish.",
    gradient: "from-[#F9ED69] to-[#08D9D6]",
  },
};

export default function FlavorCompare() {
  const [value, setValue] = useState([50]);

  return (
    <section className="section mt-24">
      <div className="glass-strong rounded-[2rem] p-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Flavor Compare</p>
            <h3 className="font-display text-3xl tracking-[0.2em] text-white">
              Balance the glow to choose your mood
            </h3>
          </div>
          <p className="max-w-sm text-sm text-white/70">
            Slide between iconic cola depth and citrus lift to match your energy.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className={`rounded-2xl bg-gradient-to-br ${compareData.left.gradient} p-6 text-white`}>
            <p className="text-xs uppercase tracking-[0.3em]">Left Channel</p>
            <p className="mt-3 text-xl font-semibold">{compareData.left.title}</p>
            <p className="text-sm text-white/80">{compareData.left.notes}</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Slider
              value={value}
              onValueChange={setValue}
              max={100}
              step={1}
              className="w-44"
            />
            <span className="text-xs uppercase tracking-[0.3em] text-white/60">
              {value[0]}% / {100 - value[0]}%
            </span>
          </div>

          <div className={`rounded-2xl bg-gradient-to-br ${compareData.right.gradient} p-6 text-white`}>
            <p className="text-xs uppercase tracking-[0.3em]">Right Channel</p>
            <p className="mt-3 text-xl font-semibold">{compareData.right.title}</p>
            <p className="text-sm text-white/80">{compareData.right.notes}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
