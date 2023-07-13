import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Preload,
  OrbitControls,
  useTexture,
  Decal,
  Sphere,
  Float,
} from "@react-three/drei";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc/SectionWrapper";
import { testimonials } from "../../utils/constants";
import { textVariant } from "../../utils/motion";
import { SectionText, SectionHeading } from "../../shared/styled";
import { Card } from "./Card";
import {
  TextBox,
  FeedbacksBackground,
  CardsContainer,
  Stellar as StellarWrapper,
} from "./styled";

import url from "../../assets/tech/planet.jpg";

export const Stellar = () => {
  const [texture] = useTexture([url]);
  return (
    <Float speed={1}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0.3, 0, 0.5]} />
      <Sphere scale={3}>
        <meshStandardMaterial map={texture} color="#ffff00" />
      </Sphere>
    </Float>
  );
};

export const StellarCanvas = () => {
  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
        />
        <Stellar />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export const Feedbacks = SectionWrapper(() => {
  return (
    <FeedbacksBackground>
      <StellarWrapper>
        <StellarCanvas />
      </StellarWrapper>
      <motion.div variants={textVariant(0.3)}>
        <TextBox>
          <SectionText>What others say</SectionText>
          <SectionHeading style={{ color: "white" }}>
            Testimonials
          </SectionHeading>
        </TextBox>
      </motion.div>
      <CardsContainer>
        {testimonials.map((feedback, index) => (
          <Card key={index} feedback={feedback} />
        ))}
      </CardsContainer>
    </FeedbacksBackground>
  );
}, "feedbacks");
