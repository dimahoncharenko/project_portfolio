import { motion } from "framer-motion";
import styled from "styled-components";

export const ContactWrapper = styled.div`
  --radius: 1em;

  display: flex;
  flex-direction: column;

  gap: 2em;

  @media screen and (min-width: 900px) {
    flex-direction: initial;
  }
`;

export const Form = styled(motion.form)`
  background-color: hsl(270deg, 80%, 20%);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 3em;
  order: 2;
  flex: 1;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormLabel = styled.label`
  padding: 0.3em 0em;
  font-size: clamp(1rem, 2vw + 0.3em, 1.6rem);
`;

export const FormField = styled.input`
  padding: 1em;
  border-radius: var(--radius);
  border-color: gold;
  color: white;

  &::placeholder {
    color: white;
  }
`;

export const FormTextArea = styled.textarea`
  padding: 1em;
  border-radius: var(--radius);
  border-color: gold;
  color: white;

  &::placeholder {
    color: white;
  }
`;

export const ErrorMessage = styled.p`
  color: lightgray;
  background-color: hsl(30deg, 50%, 50%);
  padding: 1em;
  border-radius: 0.2em;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: hsl(30deg, 50%, 50%);
  border: 0;
  padding: 1em;
  border-radius: var(--radius);
`;

export const EarthWrapper = styled(motion.div)`
  order: 1;
  flex: 1;
`;
