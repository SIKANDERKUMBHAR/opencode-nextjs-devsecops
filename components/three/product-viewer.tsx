"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import SodaModel from "@/components/three/soda-models";

type ProductViewerProps = {
  variant: "can" | "bottle" | "crate";
  color?: string;
};

export default function ProductViewer({ variant, color }: ProductViewerProps) {
  return (
    <div className="h-[360px] w-full">
      <Canvas camera={{ position: [0, 0.4, 4.5], fov: 45 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#05050a"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <Suspense fallback={null}>
          <group position={[0, -0.7, 0]}>
            <SodaModel variant={variant} color={color} scale={1.4} />
          </group>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
