import { styled } from "linaria/react";

const Box = styled.div`
  margin-top: 1em;
  display: block;
  padding: 1em;
  padding-top: .25em
  padding-bottom: .25em
  background-color: #f1f1f1;
  border-radius: 1em;
  margin-bottom: 1em;
  &.success, &.info {
    padding: 10px 20px;
  }
  &.success {
    background-color: #E8F3E0;
    border: 1px solid #68B62B;
  }
  &.info {
    background-color: #e0e9f3;
    border: 1px solid #2b89b6;
  }
`;

export default Box;
