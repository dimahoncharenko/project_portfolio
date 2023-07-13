import styled from "styled-components";

import heroBg from "../../assets/hero.jpg";

export const HeroBG = styled.section`
  height: 100vh;
  width: calc(100vw - 1em);
  background-image: url(${heroBg}),
    radial-gradient(
      circle,
      rgba(2, 0, 36, 0) 0%,
      rgba(98, 98, 98, 1) 69%,
      rgba(31, 34, 34, 1) 100%
    );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
  margin-bottom: 400px;
`;

export const HeroGreetings = styled.div`
  display: flex;
  gap: 1em;
`;

export const TextContainer = styled.div`
  max-width: 70vw;

  h1 {
    font-size: clamp(1.4rem, 2vw + 0.3em, 2.5rem);
    line-height: 2em;
  }

  p {
    line-height: 1.5em;
  }
`;

export const ArrowWrapper = styled.div`
  max-width: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowCircle = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: white;
  border-radius: 50%;
`;

export const ArrowLine = styled.span`
  display: inline-block;
  width: 0.1em;
  height: 50vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(98, 98, 98, 0) 100%
  );
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icon = styled.a`
  border-radius: 2em;
  padding: 0.5em;
  border: 0.1em solid white;

  > div {
    width: 0.1em;
    height: 1em;
    background-color: orange;
    position: relative;

    &::before {
      content: " ";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.3em;
      bottom: 0;
      left: calc(100% + 0.05em);
      background-color: orange;
      transform: rotateZ(45deg);
    }

    &::after {
      content: " ";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.3em;
      bottom: 0;
      right: calc(100% + 0.05em);
      background-color: orange;
      transform: rotateZ(-45deg);
    }
  }
`;
