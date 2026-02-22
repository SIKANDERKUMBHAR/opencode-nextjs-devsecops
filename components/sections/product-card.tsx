"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/format";
import { flavorColors } from "@/utils/theme";
import type { Product } from "@/utils/products";

const SodaMiniScene = dynamic(() => import("@/components/three/soda-mini-scene"), {
  ssr: false,
});

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
    >
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.heroGradient}`}
      >
        <div className="absolute inset-0 opacity-40 mix-blend-screen">
          <div className="mesh-bg h-full w-full" />
        </div>
        <div className="relative p-3">
          <SodaMiniScene variant={product.modelKey} color={flavorColors[product.flavor]} />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-lg font-semibold text-white group-hover:text-[#F9ED69]">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-white/60">
            {product.size} / {product.brand}
          </p>
        </div>
        <Badge className="rounded-full bg-white/10 text-xs uppercase tracking-[0.2em] text-white">
          {product.flavor}
        </Badge>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-xl font-semibold text-white">
          {formatPrice(product.price)}
        </p>
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            className="rounded-full bg-[#FF2E63] text-xs uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(255,46,99,0.4)] hover:bg-[#ff4b7a]"
            onClick={() =>
              addItem({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                flavor: product.flavor,
                size: product.size,
              })
            }
          >
            <ShoppingBag className="mr-2 h-4 w-4" /> Add
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
