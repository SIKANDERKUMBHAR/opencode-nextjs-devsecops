"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, PlaneGeometry } from "three";

export default function LiquidWave() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const geometry = mesh.geometry as PlaneGeometry;
    const positions = geometry.attributes.position;
    const time = state.clock.getElapsedTime();

    for (let i = 0; i < positions.count; i += 1) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      const z =
        Math.sin(x * 2.4 + time * 1.2) * 0.12 +
        Math.cos(y * 2.8 + time * 0.9) * 0.08;
      positions.setZ(i, z);
    }

    positions.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.4, 0, 0]} position={[0, -1.4, 0]}>
      <planeGeometry args={[8, 8, 36, 36]} />
      <meshStandardMaterial
        color="#08D9D6"
        emissive="#08D9D6"
        emissiveIntensity={0.3}
        transparent
        opacity={0.3}
        roughness={0.1}
        metalness={0.2}
      />
    </mesh>
  );
}
