import { styled } from "linaria/react";

const Menu = styled.nav`
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-end;
  a {
    display: block;
    color: #444;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: #000;
  }
`;

export default Menu;
