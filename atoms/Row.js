import { styled } from "linaria/react";
import { css } from "linaria";

export const row = css`
  flex-flow: row !important;
`;
const Row = styled.div`
  display: flex;
  flex-flow: row;
  @media (max-width: 900px) {
    flex-flow: column;
  }
`;

export default Row;
