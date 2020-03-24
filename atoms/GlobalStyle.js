import { styled } from "linaria/react";
import { css } from "linaria";

const GlobalStyled = css`
  :global(body) {
    font-family: "Roboto";
  }
  :global(*) {
    box-sizing: border-box;
  }
  :global(.highlight-yellow) {
    background: #fff355;
  }
  :global(.highlight-red) {
    background: #ff5555;
  }
  :global(.highlight-green) {
    background: #55ff66;
  }
  :global(.highlight-blue) {
    background: #55b5ff;
  }
  :global(a) {
    color: #000;
    text-decoration: none;
  }
`;

export default styled.div`
  padding: 1em;
  display: flex;
  place-content: center;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  :global(body) {
    font-family: "Roboto";
  }
  :global(*) {
    box-sizing: border-box;
  }
`;
