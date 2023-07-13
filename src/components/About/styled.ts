import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 0em 1em;
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  grid-auto-rows: 40vh;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(max-content, 20em));
    grid-auto-rows: 23em;
    gap: 1.5em;
  }
`;

export const CardWrapper = styled.div`
  cursor: pointer;
  text-align: center;
  height: 100%;
  padding: 1em 0em;

  #card__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 0.1em solid hsl(30deg, 45%, 35%);
    border-radius: 2em;
    padding: 0.5em;
    align-items: center;
    justify-content: center;
    background-color: hsl(258.75deg, 45.71%, 13.73%);
  }
`;

export const CardIcon = styled.img`
  object-fit: contain;
  width: clamp(3em, 10vw + 1.5em, 12em);
`;

export const CardText = styled.p`
  color: "darkgoldenrod";
  font-weight: bold;
  margin-top: 0.5em;
`;
