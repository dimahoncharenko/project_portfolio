import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";
import { services } from "../../utils/constants";
import { CardWrapper, CardIcon, CardText } from "./styled";

type Service = typeof services[number];
type Props = Service & {
  index: number;
};

export const Card = ({ title, icon, index }: Props) => {
  return (
    <CardWrapper>
      <Tilt style={{ height: "100%" }}>
        <motion.div
          id="card__content"
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        >
          <CardIcon src={icon} alt={title} />
          <CardText style={{ color: "darkgoldenrod" }}>{title}</CardText>
        </motion.div>
      </Tilt>
    </CardWrapper>
  );
};
