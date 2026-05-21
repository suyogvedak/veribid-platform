"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

export default function JudgeHammer() {
  const group = useRef<Group>(null);

  const { scene, animations } = useGLTF("/models/judge-hammer.glb");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const firstAnimation = Object.values(actions)[0];

    if (firstAnimation) {
      firstAnimation.reset().play();
    }
  }, [actions]);

  return (
    <group
      ref={group}
      position={[-13, 0, -8]}
      scale={5.5}
      rotation={[0.15, Math.PI, 0.25]}
    >
      <primitive object={scene} />
    </group>
  );
}