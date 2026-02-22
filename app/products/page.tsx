"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/sections/product-card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products } from "@/utils/products";

const flavors = ["All", "Cola", "Orange", "Lemon", "Energy"];
const sizes = ["All", "250ml", "500ml", "1L"];
const brands = ["All", "Neon Pulse"];

export default function ProductsPage() {
  const [flavor, setFlavor] = useState("All");
  const [size, setSize] = useState("All");
  const [brand, setBrand] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      const flavorMatch = flavor === "All" || product.flavor === flavor;
      const sizeMatch = size === "All" || product.size === size;
      const brandMatch = brand === "All" || product.brand === brand;
      return flavorMatch && sizeMatch && brandMatch;
    });
  }, [flavor, size, brand]);

  return (
    <main className="pt-32">
      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Store</p>
            <h1 className="font-display text-4xl tracking-[0.2em] text-white">Neon Supply</h1>
          </div>
          <Badge className="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
            {filtered.length} Flavors
          </Badge>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Select value={flavor} onValueChange={setFlavor}>
            <SelectTrigger className="rounded-full border-white/10 bg-white/5 text-white">
              <SelectValue placeholder="Flavor" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#0b0916] text-white">
              {flavors.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={size} onValueChange={setSize}>
            <SelectTrigger className="rounded-full border-white/10 bg-white/5 text-white">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#0b0916] text-white">
              {sizes.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={brand} onValueChange={setBrand}>
            <SelectTrigger className="rounded-full border-white/10 bg-white/5 text-white">
              <SelectValue placeholder="Brand" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#0b0916] text-white">
              {brands.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
