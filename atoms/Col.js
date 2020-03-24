import { styled } from "linaria/react";
import { css } from "linaria";

const Col = styled.div`
  display: flex;
  flex-flow: column;
  &.hero-image {
    flex-grow: 1;
  }
`;

export const grow = css``;
export const alignItemsCenter = css`
  align-items: center;
`;

export default Col;
