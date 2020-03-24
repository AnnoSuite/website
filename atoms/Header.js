import { styled } from "linaria/react";
import Container from "./Container";

const Header = styled(Container)``;

Header.defaultProps = {
  as: "header"
};

export default Header;
