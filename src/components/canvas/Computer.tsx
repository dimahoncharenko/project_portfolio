import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";

import { Loader } from "../";

type Props = {
  isMobile: boolean;
};
const ComputerModel = ({ isMobile }: Props) => {
  const model = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh frustumCulled>
      <spotLight
        intensity={1}
        position={[-20, 50, 10]}
        castShadow
        shadow-mapSize={1024}
        penumbra={1}
      />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={model.scene}
        scale={isMobile ? 0.6 : 0.7}
        position={isMobile ? [0, -3, -1] : [0, -3, -0.8]}
        rotation={[0, -0.2, -0.1]}
      />
    </mesh>
  );
};

export const Computer = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`screen and (max-width: 500px)`);
    setMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <Canvas
      style={{
        width: "calc(100vw - 1em)",
        maxHeight: "1000px",
      }}
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
