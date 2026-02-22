"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import SodaModel from "@/components/three/soda-models";
import BubbleField from "@/components/three/bubble-field";
import LiquidWave from "@/components/three/liquid-wave";

function IceCube({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.8}>
      <mesh position={position} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial
          color="#c9f7ff"
          roughness={0.15}
          transmission={0.9}
          thickness={1.4}
          ior={1.25}
          clearcoat={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function SodaHeroScene() {
  return (
    <div className="h-[420px] w-full md:h-[520px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        shadows
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#05050a"]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 6, 4]} intensity={1.4} castShadow />
        <spotLight position={[-4, 4, 2]} intensity={1.2} angle={0.3} penumbra={0.5} />

        <Suspense fallback={null}>
          <Float speed={1.6} rotationIntensity={0.6} floatIntensity={0.7}>
            <group position={[0, -0.6, 0]}>
              <SodaModel variant="bottle" color="#FF2E63" scale={1.4} />
            </group>
          </Float>
          <BubbleField count={160} radius={7} />
          <LiquidWave />
          <IceCube position={[-1.8, -0.2, 0.2]} />
          <IceCube position={[1.7, -0.4, -0.1]} />
          <IceCube position={[0.4, 0.9, -0.6]} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
