import { styled } from "linaria/react";

const Logo = styled.h1`
  font-size: 1.875rem;
  a {
    display: block;
    color: #000;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    animation: highlight 1s;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    background-color: #fff355;
  }
`;

export default Logo;
