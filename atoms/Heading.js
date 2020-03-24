import { styled } from "linaria/react";

const Heading = styled.h2`
  margin-top: 2rem;
  margin-bottom: ${({ margin = "1" }) => margin + "rem"};
  color: #656565;
  font-size: 1.5625rem;
  span.primaryMessage {
    color: #000;
    font-size: 3.125rem;
    ::selection {
      background-color: #fff355;
  }
`;

export default Heading;
