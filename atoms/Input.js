import { styled } from "linaria/react";

const Input = styled.input`
  height: 4em;
  border-radius: 1em;
  padding: 1em;
  width: 100%;
  border: 2px solid #ccc;
  background-color: #fff;
  margin-bottom: 1em;
  :focus {
    border-color: #000;
    outline: none;
    box-shadow: 0 0 0 3px #ffd363;
  }
  @media (min-width: 900px) {
    margin-right: 1em;
  }
`;

export default Input;
