import type { CSSProperties } from "react";
import styled from "styled-components";

export const CardsWrapper = styled.div`
  display: grid;
  gap: 1em;
  padding: 2em 0em;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardWrapper = styled.div`
  --cards-roundness: 1em;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  background-color: hsl(30deg, 50%, 50%);
  border-radius: var(--cards-roundness);
  overflow: hidden;
  padding: 0.5em;
  height: 100%;
`;

export const Layer = styled.div`
  display: grid;

  > * {
    grid-area: 1/-1;
  }
`;

export const CardCover = styled.img`
  border-radius: var(--cards-roundness);
  object-fit: contain;
  max-width: 100%;
`;

export const Icon = styled.img`
  border-radius: 50%;
  background-color: black;
  width: 2em;
  opacity: 0.7;
  padding: 0.1em;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  gap: 0.5em;
`;

export const CardHeading = styled.h4`
  font-weight: bold;
  font-size: clamp(1rem, 4vw + 0.4em, 1, 4rem);
  margin: 0em;
`;

export const CardDescription = styled.p`
  opacity: 0.7;
  text-align: justify;
  line-height: 1.9em;
  font-size: clamp(0.5rem, 4vw + 0.1em, 0.7rem);
`;

export const TagsContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  text-shadow: 0em 0em #7e3500;
  padding: 0em 0.5em;
  line-heght: 1em;
`;

export const Tag = styled.p<{
  tagColor: CSSProperties["color"];
}>`
  color: ${(props) => props.tagColor};
`;
