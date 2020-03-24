import { styled } from "linaria/react";

const P = styled.p`
  font-size: ${({ fontSize = "1" }) => fontSize}em;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
  margin: ${({ margin = "1" }) => margin}rem;
`;

export default P;
