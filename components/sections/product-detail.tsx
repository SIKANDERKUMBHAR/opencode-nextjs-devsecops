"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/format";
import { flavorColors } from "@/utils/theme";
import type { Product } from "@/utils/products";

const ProductViewer = dynamic(() => import("@/components/three/product-viewer"), {
  ssr: false,
});

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="section"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="glass rounded-[2rem] border border-white/10 p-6">
          <ProductViewer
            variant={product.modelKey}
            color={flavorColors[product.flavor] || "#FF2E63"}
          />
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">
              {product.flavor} / {product.size}
            </p>
            <h1 className="font-display text-4xl tracking-[0.2em] text-white">
              {product.name}
            </h1>
            <p className="mt-3 text-sm leading-7 text-white/70">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-3xl font-semibold text-white">
              {formatPrice(product.price)}
            </span>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full text-white"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-6 text-center text-sm font-semibold text-white">
                {quantity}
              </span>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 rounded-full text-white"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.div whileTap={{ scale: 0.96 }}>
              <Button
                className="rounded-full bg-[#FF2E63] px-8 py-6 text-xs uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(255,46,99,0.4)] hover:bg-[#ff4b7a]"
                onClick={() =>
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity,
                    flavor: product.flavor,
                    size: product.size,
                  })
                }
              >
                Add to Cart
              </Button>
            </motion.div>
            <Button
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 px-8 py-6 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/10"
              onClick={() => {
                if (typeof window === "undefined") return;
                if (!("xr" in navigator)) {
                  alert("AR is not available on this device yet.");
                  return;
                }
                alert("AR preview launching soon.");
              }}
            >
              View in AR
            </Button>
          </div>

          <Tabs defaultValue="nutrition" className="w-full">
            <TabsList className="rounded-full border border-white/10 bg-white/5">
              <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>
            <TabsContent value="nutrition" className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="grid gap-4 text-sm text-white/70 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Calories</p>
                  <p className="text-white">{product.nutrition.calories}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Sugar</p>
                  <p className="text-white">{product.nutrition.sugar}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Caffeine</p>
                  <p className="text-white">{product.nutrition.caffeine}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Sodium</p>
                  <p className="text-white">{product.nutrition.sodium}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
              <p>
                Crafted with precision micro-filtration, infused with neon botanicals, and
                carbonated for a floating finish. Best served at 2C.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.section>
  );
}
