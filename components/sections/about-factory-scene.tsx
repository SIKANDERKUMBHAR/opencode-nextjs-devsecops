"use client";

import dynamic from "next/dynamic";

const FactoryScene = dynamic(() => import("@/components/three/factory-scene"), {
  ssr: false,
});

export default function AboutFactoryScene() {
  return <FactoryScene />;
}
