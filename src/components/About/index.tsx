import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils/motion";
import { services } from "../../utils/constants";
import { Card } from "./Card";
import { SectionText, SectionHeading } from "../../shared/styled";
import { CardsGrid } from "./styled";
import { SectionWrapper } from "../../hoc/SectionWrapper";

export const About = SectionWrapper(() => {
  return (
    <>
      <motion.div variants={textVariant(0.3)}>
        <SectionText>Introduction</SectionText>
        <SectionHeading>Overview</SectionHeading>
      </motion.div>

      <motion.p
        variants={fadeIn("left", "spring", 0.2, 1)}
        style={{
          textAlign: "justify",
          lineHeight: "1.8em",
          marginBottom: "1em",
        }}
      >
        I'm a skilled software engineer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Remix.js, Node.js
        and Three.js. I'm a quick learner and collaborate closely with clients
        to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <CardsGrid>
        {services.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </CardsGrid>
    </>
  );
}, "about");
