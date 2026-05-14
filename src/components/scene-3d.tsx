"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Group } from "three";

function BuildingMark() {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.6;
  });

  return (
    <group ref={ref} position={[0, -1.4, 0]}>
      {/* Left block — short */}
      <mesh position={[-1.55, 1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.05, 2.2, 1.05]} />
        <meshStandardMaterial color="#2A3850" roughness={0.45} metalness={0.15} />
      </mesh>

      {/* Right block — medium */}
      <mesh position={[1.55, 1.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.05, 2.9, 1.05]} />
        <meshStandardMaterial color="#2A3850" roughness={0.45} metalness={0.15} />
      </mesh>

      {/* Center block — tallest */}
      <mesh position={[0, 2.0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.25, 4.0, 1.25]} />
        <meshStandardMaterial color="#34425a" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Gold pyramid peak */}
      <mesh position={[0, 4.55, 0]} castShadow rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[0.95, 1.2, 4]} />
        <meshStandardMaterial
          color="#DFC07C"
          roughness={0.25}
          metalness={0.55}
          emissive="#DFC07C"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Window strips on center block */}
      {[1.0, 1.8, 2.6, 3.4].map((y, i) => (
        <mesh key={i} position={[0, y, 0.628]}>
          <boxGeometry args={[0.85, 0.06, 0.02]} />
          <meshStandardMaterial
            color="#DFC07C"
            emissive="#DFC07C"
            emissiveIntensity={0.4}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      shadows
      camera={{ position: [5, 3.2, 6.5], fov: 38 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[5, 9, 5]}
          intensity={1.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={20}
          shadow-camera-left={-6}
          shadow-camera-right={6}
          shadow-camera-top={6}
          shadow-camera-bottom={-6}
        />
        <hemisphereLight args={["#ffffff", "#dfc07c", 0.35]} />

        <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.45}>
          <BuildingMark />
        </Float>

        <ContactShadows
          position={[0, -1.45, 0]}
          opacity={0.35}
          scale={10}
          blur={2.4}
          far={3}
          color="#2A3850"
        />

        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
