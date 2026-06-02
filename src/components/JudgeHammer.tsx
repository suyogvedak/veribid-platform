"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function JudgeHammer() {
  const group = useRef<THREE.Group>(null);

  // LOAD MODEL
  const { scene, animations } = useGLTF("/models/judge-hammer.glb");

  // LOAD ANIMATIONS
  const { actions } = useAnimations(animations, group);

  // PLAY ANIMATION
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.play();
      });
    }
  }, [actions]);

  // FLOATING EFFECT
  useFrame((state) => {
  if (!group.current) return;

  group.current.rotation.z =
    Math.sin(state.clock.elapsedTime * 0.25) * 0.01;
});

  return (
    <group
  ref={group}

  position={[-1.9, -0.2, 0]}

rotation={[
  -0.7,
  2.95,
  -0.9
]}


scale={0.24}
>
  <primitive object={scene} />
</group>
  );
}

// PRELOAD MODEL
useGLTF.preload("/models/judge-hammer.glb");