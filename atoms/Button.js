import { styled } from "linaria/react";

const Button = styled.button`
  font-size: 12px;
  padding: 1em 3em;
  height: 4.4em;
  color: #fff;
  border: none;
  border-radius: 1em;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#000"};
  :focus,
  :active {
    box-shadow: 0 0 0 3px #ffd363;
    outline: none;
  }
`;

export default Button;
