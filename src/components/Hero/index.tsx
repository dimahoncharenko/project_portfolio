import { motion } from "framer-motion";

import { Computer } from "../";

import {
  HeroBG,
  HeroGreetings,
  ArrowWrapper,
  ArrowLine,
  ArrowCircle,
  TextContainer,
  IconContainer,
  Icon,
} from "./styled";
import { Container } from "../../shared/styled";

export const Hero = () => {
  return (
    <HeroBG>
      <Container>
        <HeroGreetings>
          <ArrowWrapper>
            <ArrowCircle />
            <ArrowLine />
          </ArrowWrapper>
          <TextContainer>
            <h1>
              <span style={{ color: "orange" }}>Hi</span>, I'm Dima
            </h1>
            <p>
              I develop web-sites, user interfaces, backend sides, web-games, 3D
              visuals and web applications.
            </p>
          </TextContainer>
        </HeroGreetings>
      </Container>
      <Computer />

      <IconContainer>
        <Icon href="#about">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          ></motion.div>
        </Icon>
      </IconContainer>
    </HeroBG>
  );
};
