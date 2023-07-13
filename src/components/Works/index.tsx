import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionText, SectionHeading } from "../../shared/styled";
import { projects } from "../../utils/constants";
import { CardsWrapper } from "./styled";

import { Card } from "./Card";

export const Works = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant(0.3)}>
        <SectionText>My works</SectionText>
        <SectionHeading>Projects</SectionHeading>
      </motion.div>

      <motion.p
        variants={fadeIn("down", "", 0.2, 0.75)}
        style={{ textAlign: "justify" }}
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      <CardsWrapper>
        {projects.map((project, index) => (
          <Card key={project.name} index={index} project={project} />
        ))}
      </CardsWrapper>
    </>
  );
}, "works");
