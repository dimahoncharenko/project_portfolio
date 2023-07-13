import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc/SectionWrapper";
import { technologies } from "../../utils/constants";
import { textVariant } from "../../utils/motion";

import { BallCanvas } from "../canvas/BallCanvas";
import { BallWrapper, BallsContainer } from "./styled";
import { SectionHeading, SectionText } from "../../shared/styled";

export const Tech = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <SectionText>My Working Stack</SectionText>
        <SectionHeading>Technologies</SectionHeading>
      </motion.div>
      <BallsContainer>
        {technologies.map((tech) => (
          <BallWrapper key={tech.name}>
            <BallCanvas icon={tech.icon} />
          </BallWrapper>
        ))}
      </BallsContainer>
    </>
  );
}, "tech");
