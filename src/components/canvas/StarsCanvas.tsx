import { Suspense, useRef } from "react";
import { Canvas, useFrame, GroupProps } from "@react-three/fiber";
import { Stars, Preload } from "@react-three/drei";

import { StarsWrapper } from "../../shared/styled";

const Galaxy = () => {
  const ref = useRef<GroupProps>(null);

  useFrame((_, delta) => {
    if (ref.current?.rotation) {
      ref.current.rotation.x -= delta * 0.01;
      ref.current.rotation.y -= delta * 0.01;
    }
  });

  return (
    <group ref={ref}>
      <Stars
        ref={ref}
        radius={100}
        depth={150}
        count={5000}
        factor={5}
        saturation={0}
        fade
        speed={2}
      ></Stars>
    </group>
  );
};

export const StarsCanvas = () => {
  return (
    <StarsWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Galaxy />
        </Suspense>
        <Preload all />
      </Canvas>
    </StarsWrapper>
  );
};
