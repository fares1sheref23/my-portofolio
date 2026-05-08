import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import aakha from "../../images/aakha.png";
import cenimams from "../../images/cenimams.png";
import fluttershop from "../../images/fluttershop.png";
import phpproject from "../../images/phpproject.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      AAKhadanaty App: Home Services Web Application
                    </h5>
                    <img src={aakha} alt={aakha} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://aakhadanaty-app.vercel.app/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A comprehensive home services web application designed to
                      seamlessly connect users with a network of trusted service
                      providers, including electricians, plumbers, AC
                      technicians, and home cleaners. The platform facilitates
                      service browsing, appointment booking, and provider rating
                      for users, while empowering service providers with
                      efficient request management and job tracking
                      functionalities.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    MERN Stack (MongoDB, Express.js, React, Node.js), HTML, CSS,
                    JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Flutter E-commerce Mobile Application
                    </h5>
                    <img src={fluttershop} alt={fluttershop} />
                    <div className="project--showcaseBtn">
                      <a
                        href={
                          "https://github.com/fares1sheref23/shopping_project_exam"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      A robust and user-friendly e-commerce mobile application
                      developed with Flutter, providing a seamless shopping
                      experience. This project demonstrates proficiency in
                      mobile application development and cross-platform
                      compatibility.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    Dart, Flutter
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Cinema Management System: Backend & RESTful API
                    </h5>
                    <img src={cenimams} alt={cenimams} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"#"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      Developed a scalable backend and RESTful API for a
                      comprehensive cinema management system. Key features
                      include robust management of movies, showtimes, bookings,
                      user accounts, and payment processing. The architecture
                      leverages Onion Architecture for clear separation of
                      concerns, maintainability, and scalability, alongside an
                      optimized SQL Server relational database schema with
                      proper indexing. Implementation adheres to industry best
                      practices, incorporating the Repository Pattern,
                      Dependency Injection, and a multi-layer architectural
                      design.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    .NET Web API, SQL Server, Entity Framework Core, Onion
                    Architecture
                  </div>
                </div>
              </Fade>
            </Col>
            <Col md={3}>
              <Fade bottom>
                <div
                  key={1}
                  className="singleProject"
                  style={{
                    backgroundColor: "rgb(142 70 186 / 31%)",
                    border: "1px solid",
                  }}
                >
                  <div className="projectContent">
                    <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                      Logic Gates & Numeric Systems Simulator: Educational Web
                      Tool
                    </h5>
                    <img src={phpproject} alt={phpproject} />
                    <div className="project--showcaseBtn">
                      <a
                        href={"https://fares1sheref23.github.io/PHP-Fares/"}
                        target="_blank"
                        rel="noreferrer"
                        className={"iconBtn"}
                        aria-labelledby={`code`}
                      >
                        <FaCode
                          id={`code`}
                          className={"icon"}
                          aria-label="Code"
                        />
                      </a>
                    </div>
                  </div>
                  <h6>
                    <p
                      className="project--desc"
                      style={{
                        background: "#fbd9ad",
                        color: "#b061df",
                        fontWeight: 600,
                      }}
                    >
                      An interactive educational web tool designed to enhance
                      student understanding of number systems and digital logic.
                      This project features a Numeric Systems Converter
                      supporting Binary, Decimal, Hexadecimal, and Octal with
                      step-by-step explanations, and provides real-time
                      simulation for various logic gates (AND, OR, NOT, NAND,
                      NOR, XOR, etc. ) with engaging visualizations. The project
                      is fully documented and published on GitHub.
                    </p>
                  </h6>
                  <div
                    className="project--lang"
                    style={{
                      background: "#fbd9ad",
                      color: "#b061df",
                      fontWeight: 600,
                    }}
                  >
                    PHP, HTML, CSS, JavaScript
                  </div>
                </div>
              </Fade>
            </Col>
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
