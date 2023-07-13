import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useTexture,
  OrbitControls,
  Float,
  Preload,
  Decal,
} from "@react-three/drei";

import { Loader } from "../Loader";

const Ball = ({ url }: { url: string }) => {
  const [texture] = useTexture([url]);

  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={1}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0.3, 0, 0.5]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 4]} />
        <meshBasicMaterial color="#bf8040" />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 5]}
          map={texture}
        />
      </mesh>
    </Float>
  );
};

type Props = {
  icon: string;
};

export const BallCanvas = ({ icon }: Props) => (
  <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<Loader />}>
      <OrbitControls enableZoom={false} />
      <Ball url={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
);
