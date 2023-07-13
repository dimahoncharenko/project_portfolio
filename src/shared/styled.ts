import { motion } from "framer-motion";
import styled from "styled-components";
import { CSSProperties } from "react";

export const Container = styled(motion.div)`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1em;
`;

export const SectionText = styled.p`
  color: hsl(30deg, 20%, 40%);
  text-transform: uppercase;
  font-size: 1rem;
  line-height: 0.3em;
`;

export const SectionHeading = styled.h2`
  font-size: clamp(2rem, 3vw + 0.4em, 3.5rem);
  color: white;
  margin-bottom: 0.5em;
`;

export const StarsWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: -100;
`;

export const RelativeBackground = styled.div<{
  bgColor?: CSSProperties["color"];
}>`
  position: relative;
  background-color: ${(props) => props.bgColor || "transparent"};
  overflow: hidden;
`;
