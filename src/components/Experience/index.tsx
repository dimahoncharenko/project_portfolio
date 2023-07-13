import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { textVariant } from "../../utils/motion";
import { experiences } from "../../utils/constants";
import { SectionWrapper } from "../../hoc/SectionWrapper";
import { SectionText, SectionHeading } from "../../shared/styled";

import { Timeline } from "./Timeline";

export const Experience = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <SectionText>What is my story?</SectionText>
        <SectionHeading>About myself</SectionHeading>
      </motion.div>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <Timeline key={index} experience={exp} />
        ))}
      </VerticalTimeline>
    </>
  );
}, "experience");
