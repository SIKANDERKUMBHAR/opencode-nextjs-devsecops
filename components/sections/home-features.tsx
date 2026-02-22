import ScrollReveal from "@/components/visuals/scroll-reveal";

const features = [
  {
    title: "Cryo-Chilled Blend",
    description: "Sub-zero infusion locks in flavor with a luminous finish.",
  },
  {
    title: "Nano Bubble Lift",
    description: "Fine bubble matrix for a silky, floating mouthfeel.",
  },
  {
    title: "Glassmorph Can",
    description: "Iridescent packaging inspired by future flight surfaces.",
  },
  {
    title: "Solar Recharge",
    description: "Ingredients sourced from clean-energy micro farms.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="section mt-24">
      <ScrollReveal className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="reveal space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Immersive Brew Lab
          </p>
          <h2 className="font-display text-3xl tracking-[0.2em] text-white">
            Futuristic Craft. Premium Energy.
          </h2>
          <p className="text-sm leading-7 text-white/70">
            Designed for next-gen taste seekers, our lab combines cold-chain
            extraction with zero-gravity fermentation for a clean neon glow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="reveal glass rounded-2xl border border-white/10 p-6 text-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">
                {feature.title}
              </p>
              <p className="mt-3 text-sm text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
