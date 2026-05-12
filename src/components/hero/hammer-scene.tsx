"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Float,
  useGLTF,
} from "@react-three/drei";

function HammerModel() {
  const model = useGLTF("/models/hammer.glb");

  return (
    <primitive
  object={model.scene}
  scale={5}
  rotation={[0, Math.PI, 0]}
  position={[0, -1.5, 0]}
/>
  );
}

export default function HammerScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 45,
        }}
      >
        {/* LIGHTING */}
        <ambientLight intensity={2.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={5}
        />

        {/* ENVIRONMENT */}
        <Environment preset="city" />

        {/* FLOATING MOTION */}
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <HammerModel />
        </Float>

        {/* CAMERA CONTROL */}
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}