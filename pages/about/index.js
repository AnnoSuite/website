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
} from "../../atoms";
import { Header, Form, Taken } from "../../components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble,
  faProductHunt
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faTwitter, faGithub, faDribbble, faProductHunt);

export default () => {
  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>AnnoSuite</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-143370864-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-143370864-1');
        `
          }}
        />
      </Head>
      <section>
        <Header />
        <Heading>
          <span className="primaryMessage">About Us.</span>
        </Heading>
        <Description>
          We are small company located in the heart of Sacramento, CA focused on
          improving the digital experience for users.
        </Description>
        <Heading as="h2">Our Team</Heading>
        <Description>Coming soon</Description>
        <Taken />
        <Form />
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
