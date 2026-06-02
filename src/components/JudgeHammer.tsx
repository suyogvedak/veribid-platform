"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

import * as THREE from "three";

export default function JudgeHammer() {
  const group = useRef<THREE.Group>(null);

  // LOAD MODEL

  const { scene, animations } = useGLTF(
    "/models/judge-hammer.glb"
  );

  // LOAD ANIMATIONS

  const { actions } = useAnimations(
    animations,
    group
  );

  // PLAY ANIMATION

  useEffect(() => {
    if (!actions) return;

    const firstAction =
      actions[Object.keys(actions)[0]];

    if (firstAction) {
      firstAction.reset();

      firstAction.fadeIn(0.5);

      firstAction.play();
    }
  }, [actions]);

  return (
    <group
      ref={group}

      // POSITION
      position={[-1.8, -0.8, 0]}

      // ROTATION
      rotation={[0.1, Math.PI, 0]}

      // SCALE
      scale={1.8}
    >
      <primitive object={scene} />
    </group>
  );
}

// PRELOAD MODEL

useGLTF.preload("/models/judge-hammer.glb");