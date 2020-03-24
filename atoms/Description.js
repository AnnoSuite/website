import { styled } from "linaria/react";

const Description = styled.p`
  margin-top: ${({ margin = "1" }) => margin}rem;
  margin-bottom: 1rem;
`;

export default Description;
