import { Html, useProgress } from "@react-three/drei";

import { ProgressBar } from "./styled";

export const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <ProgressBar>{progress.toFixed(2)}%</ProgressBar>
    </Html>
  );
};
