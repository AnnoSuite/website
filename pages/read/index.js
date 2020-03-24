import Link from "next/link";
import Head from "next/head";
import {
  Logo,
  Heading,
  Container,
  Description,
  GlobalStyle,
  SocialMediaLinks,
  SocialMediaLink,
  Box
} from "../../atoms";
import { Header, Footer, Form } from "../../components";
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
      <Head>
        <title>AnnoSuite - Read</title>
      </Head>
      <Header />
      <section>
        <Heading>
          Digital books revolutionized: Books, Notes, Tasks, etc.
          <br />
          <span className="primaryMessage">Read.</span>
        </Heading>
        <Description>
          <s>
            Our proprietary technology, will save you time and money while you
            are reading your books.
          </s>
        </Description>
        <Form />
        <Footer />
      </section>
    </Container>
  );
};
