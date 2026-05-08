import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import aakha from "../../images/aakha.png";
import cenimams from "../../images/cenimams.png";
import fluttershop from "../../images/fluttershop.png";
import phpproject from "../../images/phpproject.png";
import { FaCode } from "react-icons/fa";

/**
 * Project listing page.
 *
 * Note: the four <Col> blocks are intentionally verbose to keep the JSX
 * straightforward for contributors.
 */
export default function ProjectPage() {
  return (
    <section className="home-section">
      {/* Background particle effect */}
      <Container fluid id="home">
        <Particle />

        {/* Page content */}
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              {/* Section title */}
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>

          <div>
            <div>
              {/* Wrapper section (keeps styling consistent with other pages) */}
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={6} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                                minHeight: "400px",
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
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  A comprehensive home services web application
                                  designed to seamlessly connect users with a
                                  network of trusted service providers,
                                  including electricians, plumbers, AC
                                  technicians, and home cleaners. The platform
                                  facilitates service browsing, appointment
                                  booking, and provider rating for users, while
                                  empowering service providers with efficient
                                  request management and job tracking
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
                                MERN Stack (MongoDB, Express.js, React,
                                Node.js), HTML, CSS, JavaScript
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={6} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                                minHeight: "400px",
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
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  A robust and user-friendly e-commerce mobile
                                  application developed with Flutter, providing
                                  a seamless shopping experience. This project
                                  demonstrates proficiency in mobile application
                                  development and cross-platform compatibility.
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
                        <Col md={6} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                                minHeight: "400px",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Cinema Management System: Backend & RESTful
                                  API
                                </h5>
                                <img src={cenimams} alt={cenimams} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={"https://github.com/fares1sheref23"}
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
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Scalable backend and RESTful API for cinema
                                  management, handling movies, showtimes,
                                  bookings, and payments. Uses Onion
                                  Architecture, SQL Server with indexing,
                                  Repository Pattern, and Dependency Injection
                                  for maintainability.
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
                                .NET Web API, SQL Server, Entity Framework Core,
                                Onion Architecture
                              </div>
                            </div>
                          </Fade>
                        </Col>
                        <Col md={6} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <div
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                                minHeight: "400px",
                              }}
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Logic Gates & Numeric Systems Simulator:
                                  Educational Web Tool
                                </h5>
                                <img src={phpproject} alt={phpproject} />
                                <div className="project--showcaseBtn">
                                  <a
                                    href={
                                      "https://github.com/fares1sheref23/PHP-Fares"
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
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  An interactive educational web tool designed
                                  to enhance student understanding of number
                                  systems and digital logic. This project
                                  features a Numeric Systems Converter
                                  supporting Binary, Decimal, Hexadecimal, and
                                  Octal with step-by-step explanations, and
                                  provides real-time simulation for various
                                  logic gates (AND, OR, NOT, NAND, NOR, XOR,
                                  etc. ) with engaging visualizations. The
                                  project is fully documented and published on
                                  GitHub.
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
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
