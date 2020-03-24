import React from "react";
import { SocialMediaBar } from "./SocialMediaBar";
import { Row, Col, P } from "../atoms";
import { alignItemsCenter } from "../atoms";
import Link from "next/link";

const links = [
  {
    href: "/privacy-policy",
    text: "Privacy Content"
  },
  {
    href: "/terms-of-service",
    text: "Terms Of Service"
  }
];

export const Footer = ({ children }) => (
  <>
    <SocialMediaBar />
    <Row className={alignItemsCenter}>
      <Col>
        <P fontSize={0.8} margin={0.5}>
          Copyright © 2019 AnnoSuite, Inc. All rights reserved.
        </P>
      </Col>
      <Col
        style={{
          justifyContent: "flex-end",
          flexGrow: 1,
          flexDirection: "row",
          padding: 0
        }}
      >
        {links.map(({ href, text }) => (
          <Link href={href} key={href + ":" + text}>
            <a style={{ fontSize: "0.8em", margin: ".5em" }}>{text}</a>
          </Link>
        ))}
      </Col>
    </Row>
    {children}
  </>
);
