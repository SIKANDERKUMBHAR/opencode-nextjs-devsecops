import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="section flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-white/60">404</p>
      <h1 className="font-display text-4xl tracking-[0.2em] text-white">
        Signal Lost
      </h1>
      <p className="mt-4 max-w-md text-sm text-white/70">
        The neon trail went cold. Return to the store and keep the glow alive.
      </p>
      <Button asChild className="mt-6 rounded-full bg-[#08D9D6] px-8 py-6 text-xs uppercase tracking-[0.3em] text-black">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
