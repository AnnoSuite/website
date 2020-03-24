import Link from "next/link";
import Head from "next/head";
import {
  Logo,
  Heading,
  Container,
  Description,
  GlobalStyle,
  SocialMediaLinks,
  SocialMediaLink
} from "../components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faTwitter, faGithub, faDribbble);

export default () => {
  const iconSize = "20";
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
        <Logo>AnnoSuite</Logo>
        <Heading>
          Coming&nbsp;
          <br />
          <span className="primaryMessage">This Winter.</span>
        </Heading>
        <Description>Digital life revolutionized</Description>
        <SocialMediaLinks>
          <SocialMediaLink href="https://www.instagram.com/annosuite/">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="fa-5x" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.twitter.com/annosuite/">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="fa-5x" />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.github.com/annosuite/">
            <FontAwesomeIcon icon={["fab", "github"]} size="fa-5x" />
          </SocialMediaLink>
          <SocialMediaLink href="https://dribbble.com/mtnn">
            <FontAwesomeIcon icon={["fab", "dribbble"]} size="fa-5x" />
          </SocialMediaLink>
        </SocialMediaLinks>
      </section>
    </Container>
  );
};
