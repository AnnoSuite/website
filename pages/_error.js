import React from "react";
import Head from "next/head";
import {
  Heading,
  Container,
  Description,
  GlobalStyle,
  SocialMediaLinks,
  SocialMediaLink,
  Box
} from "../atoms";
import { Header, Form } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble,
  faProductHunt
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faTwitter, faGithub, faDribbble, faProductHunt);

const Error = ({ statusCode }) => {
  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>AnnoSuite</title>
      </Head>
      <section>
        <Header />
        <Heading>
          404&nbsp;
          <br />
          <span className="primaryMessage">
            {statusCode
              ? statusCode === 404
                ? "Page Not Found "
                : `An error ${statusCode} occurred on server`
              : "An error occurred on client"}
          </span>
        </Heading>
        <Description>Woops! Perhaps you entered the wrong address?</Description>
        <Box>
          <SocialMediaLinks>
            <SocialMediaLink href="https://www.instagram.com/annosuite/">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.twitter.com/annosuite/">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.github.com/annosuite/">
              <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.dribbble.com/annosuite">
              <FontAwesomeIcon icon={["fab", "dribbble"]} size="1x" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.producthunt.com/my/upcoming/annoread">
              <FontAwesomeIcon icon={["fab", "product-hunt"]} size="1x" />
            </SocialMediaLink>
          </SocialMediaLinks>
        </Box>
      </section>
    </Container>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
