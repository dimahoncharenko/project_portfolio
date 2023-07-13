import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { projects } from "../../utils/constants";

import {
  CardWrapper,
  CardCover,
  CardContent,
  CardHeading,
  CardDescription,
  Layer,
  Icon,
  TagsContainer,
  Tag,
} from "./styled";

import gitHub from "../../assets/github.png";

type Props = {
  index: number;
  project: typeof projects[number];
};

export const Card = ({ project, index }: Props) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt style={{ height: "100%" }}>
        <CardWrapper>
          <Layer>
            <CardCover src={project.image} alt={project.name} />
            <a
              style={{ justifySelf: "right" }}
              href={project.source_code_link}
              target="_blank"
            >
              <Icon src={gitHub} alt="source code link" />
            </a>
          </Layer>
          <CardContent>
            <CardHeading>{project.name}</CardHeading>
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
          <TagsContainer>
            {project.tags.map((tag, index) => (
              <Tag key={index} tagColor={tag.color}>
                {tag.name}
              </Tag>
            ))}
          </TagsContainer>
        </CardWrapper>
      </Tilt>
    </motion.div>
  );
};
