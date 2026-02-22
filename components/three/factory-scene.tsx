"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import SodaModel from "@/components/three/soda-models";
import BubbleField from "@/components/three/bubble-field";

export default function FactoryScene() {
  return (
    <div className="h-[360px] w-full">
      <Canvas camera={{ position: [0, 1.4, 6], fov: 45 }} dpr={[1, 1.5]}>
        <color attach="background" args={["#05050a"]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 3]} intensity={1.2} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]}>
            <SodaModel variant="crate" color="#1d162d" scale={1.2} />
            <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.5}>
              <group position={[-1.3, 0.6, 0.3]}>
                <SodaModel variant="can" color="#08D9D6" scale={0.9} />
              </group>
            </Float>
            <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.6}>
              <group position={[1.2, 0.4, -0.3]}>
                <SodaModel variant="bottle" color="#FF2E63" scale={0.9} />
              </group>
            </Float>
          </group>
          <BubbleField count={120} radius={6} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
