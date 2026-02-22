"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { Group, Mesh } from "three";

type SodaModelProps = {
  variant: "can" | "bottle" | "crate";
  color?: string;
  scale?: number;
  floating?: boolean;
};

const modelUrls = {
  can: ["/assets/models/optimized/soda-can.glb", "/assets/models/soda-can.glb"],
  bottle: ["/assets/models/optimized/cola-bottle.glb", "/assets/models/cola-bottle.glb"],
  crate: [
    "/assets/models/optimized/beverage-crate.glb",
    "/assets/models/beverage-crate.glb",
  ],
};

const dracoPath = "https://www.gstatic.com/draco/v1/decoders/";

function useModelAvailability(urls: string[]) {
  const [availableUrl, setAvailableUrl] = useState<string | null>(null);
  const key = urls.join("|");

  useEffect(() => {
    let mounted = true;
    const urlsToCheck = [...urls];

    const check = async () => {
      for (const url of urlsToCheck) {
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok && mounted) {
            setAvailableUrl(url);
            return;
          }
        } catch {
          if (!mounted) return;
        }
      }
      if (mounted) setAvailableUrl(null);
    };

    check();
    return () => {
      mounted = false;
    };
  }, [key]);

  return availableUrl;
}

function ExternalModel({ url, scale = 1 }: { url: string; scale?: number }) {
  const { scene } = useGLTF(url, dracoPath);
  return <primitive object={scene} scale={scale} />;
}

function SodaCan({ color = "#ff2e63" }: { color?: string }) {
  const meshRef = useRef<Mesh>(null);
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.35;
  });

  return (
    <mesh ref={meshRef} castShadow receiveShadow>
      <cylinderGeometry args={[0.65, 0.7, 2.2, 48, 1]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.65}
        roughness={0.2}
        clearcoat={0.4}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function SodaBottle({ color = "#08d9d6" }: { color?: string }) {
  const groupRef = useRef<Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <cylinderGeometry args={[0.65, 0.85, 2.6, 42, 1]} />
        <meshPhysicalMaterial
          color={color}
          metalness={0.1}
          roughness={0.1}
          transmission={0.5}
          thickness={0.8}
          ior={1.3}
          clearcoat={0.6}
          emissive={color}
          emissiveIntensity={0.08}
        />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.45, 0.65, 32]} />
        <meshPhysicalMaterial color="#101018" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.95, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.26, 0.22, 24]} />
        <meshStandardMaterial color="#f9ed69" emissive="#f9ed69" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

function SodaCrate({ color = "#1f1b2e" }: { color?: string }) {
  return (
    <mesh castShadow>
      <boxGeometry args={[2.4, 1.2, 1.8]} />
      <meshStandardMaterial color={color} metalness={0.1} roughness={0.6} />
    </mesh>
  );
}

export default function SodaModel({ variant, color, scale = 1 }: SodaModelProps) {
  const urlList = modelUrls[variant];
  const availableUrl = useModelAvailability(urlList);
  const fallback = useMemo(() => {
    switch (variant) {
      case "bottle":
        return <SodaBottle color={color} />;
      case "crate":
        return <SodaCrate color={color} />;
      case "can":
      default:
        return <SodaCan color={color} />;
    }
  }, [variant, color]);

  return availableUrl ? <ExternalModel url={availableUrl} scale={scale} /> : fallback;
}
