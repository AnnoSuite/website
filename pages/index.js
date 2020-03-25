import Head from "next/head";
import {
  Heading,
  Container,
  Description,
  Button,
  Row,
  Col,
  P,
  Box
} from "../atoms";
import {
  Header,
  Form,
  Footer,
  LadyBook,
  PersonalData,
  PersonalNotebook,
  ServerStatus,
  Notify,
  EasterEgg
} from "../components";
// import img from "../images/book@2x.png";
import { useQuery } from "@apollo/react-hooks";
import { waitlistTotalCount as WAITLIST_TOTAL_COUNT } from "../graphql/queries/waitlist/waitlistCount.gql";

const tiers = [
  {
    name: "Free",
    features: [{}]
  },
  {
    name: "Premium",
    features: [{}]
  }
];

const Home = () => {
  const {
    data: { waitlist: { totalCount } = { totalCount: 0 } } = {}
  } = useQuery(WAITLIST_TOTAL_COUNT);
  return (
    <>
      <Container id={"PAGE_CONTENT"}>
        <Head>
          <title>AnnoSuite</title>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <section>
          <Row style={{ marginBottom: "2em" }}>
            <Col>
              <Heading as="h2" margin={0.5}>
                <span className="primaryMessage highlight-yellow">Read</span>
              </Heading>
              <Description margin={0.5}>
                Digital books revolutionized.{" "}
                <span className={"highlight-yellow"}>
                  A smooth and continuous reading experience across all your
                  devices.*
                </span>
              </Description>
              <Form tagline={"Sign me up for the beta!"} />
            </Col>
            <Col className={"hero-image"} style={{ alignItems: "center" }}>
              <img
                style={{ border: "6px solid #000", borderRadius: "1em" }}
                src={require("../images/book@2x.png?webp").default}
                width={"200"}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading as="h2">
                <span className="primaryMessage">Highlight. Note.</span>
              </Heading>
              <Description>
                Highlight and note while reading or listenting to your books.
                <sup>1</sup>
              </Description>
            </Col>
            <Col className={"hero-image"}>
              <PersonalNotebook />
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading as="h2">
                <span className="primaryMessage">
                  Use your existing cloud storage service.
                </span>
              </Heading>
              <Description>
                Don't pay extra for cloud storage, use already what you own!
              </Description>
            </Col>
            <Col className={"hero-image"}>
              <ServerStatus />
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Heading as={"h2"}>
                <span className="primaryMessage">Pricing</span>
              </Heading>
              <Description></Description>
              <Row>
                {tiers.map(({ name }) => (
                  <Col
                    style={{ flexGrow: 1, justifySelf: "stretch" }}
                    key={name}
                  >
                    <Box>
                      <Heading>{name}</Heading>
                    </Box>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <Heading>
                <span>When?</span>
                <br />
                <span className="primaryMessage highlight-yellow">
                  This Winter.
                </span>
              </Heading>
              {/* <Description>
                Digital life revolutionized: Books, Notes, Tasks, etc.
              </Description>
              <Form /> */}
            </Col>
            {/* <Col className={"hero-image"}>
              <LadyBook />
            </Col> */}
          </Row>
          <Row>
            <Col>
              <Heading as={"h2"} margin={0}>
                <span className="primaryMessage highlight-yellow">
                  Interested?
                </span>
              </Heading>
              <Description>
                {totalCount} people waitlisted, reserve your position!
              </Description>

              <Form tagline={"Sign me up for the beta!"} />
            </Col>
            <Col className={"hero-image"}>
              <Notify />
            </Col>
          </Row>
        </section>
        <hr></hr>
        <P style={{ fontSize: ".8em" }}>
          * Available on Mobile(Android and IOS) and Web only at launch
        </P>
        <P style={{ fontSize: ".8em" }}>
          1. Audio mode will not be available at launch
        </P>
        <Footer />
      </Container>
      <EasterEgg />
    </>
  );
};

export default Home;
