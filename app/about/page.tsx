import FactoryScene from "@/components/three/factory-scene";
import ScrollReveal from "@/components/visuals/scroll-reveal";

const timeline = [
  {
    year: "2019",
    title: "Zero-Gravity Lab",
    description: "We built our first microbrew module in the upper stratosphere.",
  },
  {
    year: "2022",
    title: "Liquid Light Formula",
    description: "Citrus, cola, and mineral ions fused for neon clarity.",
  },
  {
    year: "2026",
    title: "Neon Pulse Launch",
    description: "Global release with immersive, 3D-driven tasting rooms.",
  },
];

const ingredients = [
  "Glacier mineral water",
  "Citrus photon extract",
  "Zero sugar mint notes",
  "Bio-fermented bubbles",
];

export default function AboutPage() {
  return (
    <main className="pt-32">
      <section className="section grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Our Story</p>
          <h1 className="font-display text-4xl tracking-[0.2em] text-white">
            Crafted in the Aurora Factory
          </h1>
          <p className="text-sm leading-7 text-white/70">
            Neon Pulse is a premium cold drink studio blending advanced fermentation,
            liquid crystal infusions, and sustainable energy. Each batch is engineered to
            feel like a first sip on a new planet.
          </p>
          <div className="grid gap-3">
            {ingredients.map((item, index) => (
              <div
                key={item}
                className="glass floating rounded-full border border-white/10 px-5 py-3 text-sm text-white/80"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-[2rem] border border-white/10 p-4">
          <FactoryScene />
        </div>
      </section>

      <section className="section mt-20">
        <ScrollReveal className="grid gap-6 lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.year} className="reveal glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{item.year}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <section className="section mt-20">
        <div className="glass-strong rounded-[2rem] p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Mission</p>
          <h2 className="mt-3 font-display text-3xl tracking-[0.2em] text-white">
            Build the future of refreshment
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70">
            We believe beverages should be immersive, sustainable, and engineered to elevate
            human energy. Neon Pulse exists to push beyond ordinary hydration and craft the
            most cinematic cold drink experience on Earth.
          </p>
        </div>
      </section>
    </main>
  );
}
