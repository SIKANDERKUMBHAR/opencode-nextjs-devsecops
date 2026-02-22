"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/hooks/use-cart";
import NeonCursor from "@/components/visuals/neon-cursor";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <CartProvider>
      {children}
      <NeonCursor />
    </CartProvider>
  );
}
