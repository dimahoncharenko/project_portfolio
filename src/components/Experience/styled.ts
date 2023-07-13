import styled from "styled-components";

export const TimelineHeadline = styled.h4`
  font-size: clamp(0.8rem, 2vw + 3em, 1.2rem);
  margin-bottom: 0.3em;
`;

export const TimelineCompany = styled.p`
  color: hsl(30deg, 35%, 80%);
  text-transform: uppercase;
  margin: 0em 0em 0.3em 0em !important;
`;

export const ListPoints = styled.ul`
  padding-left: 2em;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(30deg, 50%, 50%);
  border-radius: 50%;
`;

export const Icon = styled.img`
  max-width: 100%;
  object-fit: contain;
`;
