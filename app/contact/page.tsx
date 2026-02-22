import { Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "X", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
];

export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="section grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Contact</p>
          <h1 className="font-display text-4xl tracking-[0.2em] text-white">
            Order Neon Pulse
          </h1>
          <p className="text-sm leading-7 text-white/70">
            Send us your order notes, flavor requests, or partnership ideas. We'll reply with
            a custom neon shipment plan.
          </p>

          <div className="space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#08D9D6]" /> hello@neonpulse.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#FF2E63]" /> +1 (808) 555-2404
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-[#F9ED69]" /> Neo District, Lunar City
            </p>
          </div>

          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 text-xs uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1 hover:scale-105"
              >
                <social.icon className="h-4 w-4 text-white/70 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-[2rem] p-8">
          <form className="space-y-4">
            <Input
              placeholder="Name"
              className="rounded-full border-white/10 bg-white/5 text-white placeholder:text-white/40"
            />
            <Input
              type="email"
              placeholder="Email"
              className="rounded-full border-white/10 bg-white/5 text-white placeholder:text-white/40"
            />
            <Textarea
              placeholder="Order notes"
              className="min-h-[140px] rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40"
            />
            <Button className="w-full rounded-full bg-[#FF2E63] py-6 text-xs uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(255,46,99,0.4)] hover:bg-[#ff4b7a]">
              Submit Order
            </Button>
          </form>
        </div>
      </section>

      <section className="section mt-16">
        <div className="glass rounded-[2rem] border border-white/10 p-4">
          <iframe
            title="Neon Pulse Lab"
            src="https://maps.google.com/maps?q=Times%20Square%2C%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="h-[320px] w-full rounded-[1.5rem] border-0"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}
