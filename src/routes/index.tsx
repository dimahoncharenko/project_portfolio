import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
} from "../components";

import { StarsCanvas } from "../components/canvas/StarsCanvas";
import { RelativeBackground } from "../shared/styled";

export const IndexRoute = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      {/* <Feedbacks /> */}
      <RelativeBackground>
        <Contact />
        <StarsCanvas />
      </RelativeBackground>
    </>
  );
};
