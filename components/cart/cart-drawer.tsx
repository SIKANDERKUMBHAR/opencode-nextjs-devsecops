"use client";

import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/utils/format";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function CartDrawer() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clear } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
        >
          <ShoppingCart className="h-5 w-5" />
          {totalItems > 0 ? (
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#FF2E63] text-[10px] font-semibold text-white">
              {totalItems}
            </span>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent className="glass-strong w-full border-white/10 text-white sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl tracking-[0.3em]">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex h-full flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center text-white/70">
              <ShoppingCart className="h-10 w-10 text-white/40" />
              <p>Cart is empty. Start with a neon refresh.</p>
            </div>
          ) : (
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto pr-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {item.flavor} / {item.size}
                    </p>
                    <p className="mt-1 text-sm text-white/80">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-white/10 text-white"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 rounded-full border border-white/10 text-white"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full text-white/70 hover:text-white"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between text-sm text-white/80">
              <span>Subtotal</span>
              <span className="text-white">{formatPrice(totalPrice)}</span>
            </div>
            <div className="mt-4 grid gap-3">
              <SheetClose asChild>
                <Button
                  asChild
                  className="w-full rounded-full bg-[#FF2E63] text-white shadow-[0_0_30px_rgba(255,46,99,0.4)] hover:bg-[#ff4b7a]"
                >
                  <Link href="/contact">Checkout</Link>
                </Button>
              </SheetClose>
              {items.length > 0 ? (
                <Button
                  variant="ghost"
                  className="w-full rounded-full border border-white/10 text-white/70 hover:text-white"
                  onClick={clear}
                >
                  Clear Cart
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
