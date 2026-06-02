"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import JudgeHammer from "../JudgeHammer";

export default function HammerScene() {
  return (
    <div
      className="
        absolute
        left-[-260px]
        top-[-120px]
        w-[700px]
        h-[700px]
        z-0
        overflow-visible
        pointer-events-none
      "
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
        }}

        dpr={[1, 1.5]}

        camera={{
          position: [0, 0, 8],
          fov: 40,
        }}

        style={{
          background: "transparent",
        }}
      >
        {/* LIGHTING */}

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, 3, 5]}
          intensity={2}
        />

        {/* MODEL */}

        <Suspense fallback={null}>
          <JudgeHammer />
        </Suspense>
      </Canvas>
    </div>
  );
}