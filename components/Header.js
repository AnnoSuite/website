import React from "react";
import { Header as Container, Row, Col, Logo, Menu, P } from "../atoms";
import { grow, row, alignItemsCenter } from "../atoms";

import Link from "next/link";

export const Header = ({ children }) => {
  return (
    <Container>
      <Row className={[alignItemsCenter, row].join(" ")}>
        <Col>
          <Logo as="span">
            <Link href={"/"}>
              <a>
                <Logo>
                  AnnoSuite{" "}
                  <span
                    className={"highlight-red"}
                    style={{ fontSize: ".4em" }}
                  >
                    Beta
                  </span>
                </Logo>
              </a>
            </Link>
          </Logo>
        </Col>
        <Col className={grow}>
          <Menu>
            {/* <Link href={"/read"}>
              <a>Read</a>
            </Link> */}
            {/* <Link href={"/about"}>
              <a>About</a>
            </Link> */}
          </Menu>
        </Col>
      </Row>
    </Container>
  );
};
