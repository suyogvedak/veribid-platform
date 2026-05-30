"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import JudgeHammer from "./JudgeHammer";

export default function HammerScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      
      <Canvas
        dpr={[1, 1.5]}
        camera={{
        position: [0, 0, 14],
        fov: 42,
        }}
      >
        {/* LIGHTING */}

        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
        />

        {/* HAMMER */}

        <Suspense fallback={null}>
          <JudgeHammer />
        </Suspense>
      </Canvas>
    </div>
  );
}