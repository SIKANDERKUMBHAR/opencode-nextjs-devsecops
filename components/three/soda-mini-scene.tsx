"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import SodaModel from "@/components/three/soda-models";

type SodaMiniSceneProps = {
  variant: "can" | "bottle" | "crate";
  color?: string;
};

export default function SodaMiniScene({ variant, color }: SodaMiniSceneProps) {
  return (
    <div className="h-40 w-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.25]}>
        <color attach="background" args={["#080812"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[2.5, 4, 2]} intensity={1} />
        <Suspense fallback={null}>
          <group position={[0, -0.6, 0]}>
            <SodaModel variant={variant} color={color} scale={1.1} />
          </group>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
