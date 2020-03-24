import { styled } from "linaria/react";

const InputGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  place-items: start;
  @media (max-width: 900px) {
    place-items: initial;
  }
`;

export default InputGroup;
