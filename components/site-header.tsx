"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartDrawer from "@/components/cart/cart-drawer";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="section">
        <div className="mt-6 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-lg font-semibold text-white">
              NP
            </span>
            <div className="leading-tight">
              <p className="font-display text-base tracking-[0.35em] text-white">
                NEON PULSE
              </p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Soda Lab
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.3em] text-white/70 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative transition-colors hover:text-white",
                  pathname === item.href ? "text-white" : ""
                )}
              >
                {item.label}
                {pathname === item.href ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-gradient-to-r from-[#FF2E63] via-[#08D9D6] to-[#F9ED69]"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="hidden rounded-full bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(255,46,99,0.3)] hover:bg-white/20 lg:inline-flex"
            >
              <Link href="/products">Shop Now</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="glass-strong border-white/10 text-white">
                <SheetHeader>
                  <SheetTitle className="font-display text-lg tracking-[0.3em]">
                    Neon Pulse
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 grid gap-4 text-sm uppercase tracking-[0.3em]">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  );
}
