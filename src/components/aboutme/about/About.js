import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { about, name } from "../../../portfolioContent";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">{name.about}</b>. I am a{" "}
                <b className="purple">full stack web developer</b>, a{" "}
                <b className="purple">Flutter</b> developer, and a{" "}
                <b className="purple">.NET backend</b> developer.
                <br />
                <br />
                I work with languages such as&nbsp;
                <b className="purple">{about.languages}</b>
                <br />
                <br />
                Across projects I use frameworks and tools such as&nbsp;
                <b className="purple">{about.frameworks}</b>
                <br />
                <br />
                I enjoy shipping complete features end to end — from web and
                mobile clients to APIs and services on the backend.
                <br />
                <br />
                Whenever I can, I focus on{" "}
                <b className="purple">
                  clean architecture, solid UX, and reliable .NET and Flutter
                  delivery.
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
