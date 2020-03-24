import { styled } from "linaria/react";

const SocialMediaLink = styled.a`
  padding: 1em;
  width: 3em;
  height: 3em;
  color: grey;
  margin: 0.5em;

  :nth-child(n + 1) {
    margin-left: 0em;
  }
  :focus,
  :hover {
    color: black;
    background-color: #ffd363;
    border-radius: 40px;
  }
`;

export default SocialMediaLink;
