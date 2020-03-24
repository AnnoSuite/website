import Head from "next/head";
import { Heading, Container, Row, Col, P } from "../atoms";
import { Header, Footer } from "../components";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Privacy Policy</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Row as="main">
        <Col>
          <Heading as="h1">
            <span className="primaryMessage">Privacy Policy</span>
          </Heading>
          <P>
            At AnnoSuite, accessible from https://www.annosuite.com, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by AnnoSuite and how we use it.
          </P>
          <P>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </P>
          <Heading>Log Files</Heading>
          <P>
            AnnoSuite follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </P>
          <Heading>Cookies and Web Beacons</Heading>
          <P>
            Like any other website, AnnoSuite uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </P>
          <P>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on AnnoSuite, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </P>
          <P>
            Note that AnnoSuite has no access to or control over these cookies
            that are used by third-party advertisers.
          </P>
          <Heading>Third Party Privacy Policies</Heading>
          <P>
            AnnoSuite's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options. You may find a complete list of
            these Privacy Policies and their links here: Privacy Policy Links.
          </P>
          <P>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites. What Are Cookies?
          </P>
          <Heading>Children's Information</Heading>
          <P>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </P>
          <P>
            AnnoSuite does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </P>
          <Heading>Online Privacy Policy Only</Heading>
          <P>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in AnnoSuite. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </P>
          <Heading>Consent</Heading>
          <P>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its Terms and Conditions.
          </P>
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  );
};

export default Home;
