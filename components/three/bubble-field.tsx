"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Points } from "three";

type BubbleFieldProps = {
  count?: number;
  radius?: number;
};

export default function BubbleField({ count = 120, radius = 6 }: BubbleFieldProps) {
  const pointsRef = useRef<Points>(null);
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * radius;
      array[i * 3 + 1] = (Math.random() - 0.2) * radius;
      array[i * 3 + 2] = (Math.random() - 0.5) * radius;
    }
    return array;
  }, [count, radius]);

  useFrame((state) => {
    const points = pointsRef.current;
    if (!points) return;
    points.rotation.y = state.clock.getElapsedTime() * 0.08;
    points.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#08D9D6" opacity={0.8} transparent />
    </points>
  );
}
