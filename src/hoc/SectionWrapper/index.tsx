import { staggerContainer } from "../../utils/motion";
import { Container } from "../../shared/styled";

export const SectionWrapper = (
  Component: () => JSX.Element,
  name: string
) => () => (
  <Container
    id={name}
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    style={{ padding: "5em 1em" }}
  >
    {<Component />}
  </Container>
);
