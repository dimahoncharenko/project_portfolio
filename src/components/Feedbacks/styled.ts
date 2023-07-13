import styled from "styled-components";

export const FeedbacksBackground = styled.div`
  --padding-box: 4em;

  position: relative;
  padding: 0em var(--padding-box) 2em;

  &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    filter: blur(0.6em);
    background-color: hsla(0deg, 0%, 6%, 1);
    border-radius: 3em;
    z-index: -1;
  }

  // &::after {
  //   --star-size: 15em;
  //
  //   content: " ";
  //   position: absolute;
  //   top: calc(var(--star-size) / -3);
  //   right: calc(var(--star-size) / -3);
  //   width: var(--star-size);
  //   height: var(--star-size);
  //   background-color: yellow;
  //   border-radius: 50%;
  //   filter: blur(0.2em);
  // }
`;

export const Stellar = styled.div`
  --star-size: 15em;
  position: absolute;
  top: calc(var(--star-size) / -3);
  right: calc(var(--star-size) / -3);
  width: var(--star-size);
  height: var(--star-size);
`;

export const TextBox = styled.div`
  padding: 3em 0em;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const CardWrapper = styled.div`
  padding: 1em;
  color: hsl(30, 65%, 45%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    border-left: 0.2em solid gray;
  }

  @media screen and (min-width: 800px) {
    max-width: calc(20em - var(--padding-box) / 2);
  }
`;

export const Quote = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
`;

export const At = styled.span`
  display: inline;
  color: hsl(270deg, 45%, 40%);
  font-weight: bold;
`;

export const Comment = styled.p`
  text-align: justify;
  padding: 0.5em 0em;
  font-size: 1.1rem;
  font-weight: lighter;
  text-shadow: 0em 0em 0.05em hsl(20deg, 50%, 40%);
`;

export const OwnerBox = styled.div`
  margin-top: auto;

  display: flex;
  gap: 2em;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 800px) {
    width: 100%;
  }
`;

export const OwnerAvatar = styled.img`
  height: 3em;
  width: 3em;
  border-radius: 50%;
  object-fit: cover;
`;

export const OwnerCompany = styled.p`
  font-size: 0.6rem;
  color: darkgray;
`;
