import { styled } from "linaria/react";
import { Box } from "../atoms";

export const HighlightColor = styled.button`
  cursor: pointer;
  display: block;
  height: 2em;
  width: 2em;
  background-color: ${({ color }) => color};
  margin: 0;
  padding: 0;
  margin-left: 0.75em;
  border-radius: 1em;
  border: 2px solid #000;
`;

HighlightColor.defaultProps = {
  color: "#fff355"
};

export const Toolbar = styled(Box)`
  top: 0;
  left: 0;
  background-color: #fff;
  height: 46px;
  padding: 0.8em;
  position: absolute;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  button:first-child {
    margin-left: 0;
  }
  button:last-child {
    margin-right: 0;
  }
`;
