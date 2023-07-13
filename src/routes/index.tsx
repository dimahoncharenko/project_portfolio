import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
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
      <RelativeBackground>
        <Contact />
        <StarsCanvas />
      </RelativeBackground>
    </>
  );
};
