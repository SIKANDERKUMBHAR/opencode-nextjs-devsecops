"use client";

import { useEffect, useRef } from "react";

export default function NeonCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let raf = 0;
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: position.x, y: position.y };

    const animate = () => {
      position.x += (target.x - position.x) * 0.12;
      position.y += (target.y - position.y) * 0.12;
      cursor.style.transform = `translate3d(${position.x - 20}px, ${position.y - 20}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    raf = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-10 w-10 rounded-full bg-[radial-gradient(circle,rgba(8,217,214,0.6),rgba(255,46,99,0.2),transparent_70%)] blur-[2px] mix-blend-screen md:block"
    />
  );
}
