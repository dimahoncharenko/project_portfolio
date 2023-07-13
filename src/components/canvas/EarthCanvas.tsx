import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Preload, OrbitControls } from "@react-three/drei";

import { Loader } from "../";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <mesh scale={1.5}>
      <primitive object={earth.scene} />
    </mesh>
  );
};

export const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{
        fov: 50,
        near: 0.1,
        far: 200,
      }}
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <>
        <Suspense fallback={<Loader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>
        <Preload all />
      </>
    </Canvas>
  );
};
