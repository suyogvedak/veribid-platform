"use client";

import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";

export default function JudgeHammer() {
  const group = useRef<Group>(null);

  // LOAD FINAL GLB
  const { scene, animations } = useGLTF(
    "/models/judge-hammer.glb"
  );

  // PLAY BLENDER ANIMATION
  const { actions } = useAnimations(
    animations,
    group
  );

  useEffect(() => {
    const firstAnimation =
      Object.values(actions)[0];

    if (firstAnimation) {
      firstAnimation.reset().play();
    }
  }, [actions]);

  return (
    <group
  ref={group}

  // MOVE LEFT + SLIGHTLY UP
  position={[-11, 0, -7]}

  // KEEP SIZE LARGE
  scale={0.75}

  // KEEP OLD DIRECTION
  rotation={[0.1, Math.PI, 0.25]}
>
      <primitive object={scene} />
    </group>
  );
}