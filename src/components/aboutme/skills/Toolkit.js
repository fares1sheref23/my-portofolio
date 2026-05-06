import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import vscommunity from "../../../images/vsco.png";
import ssms from "../../../images/ssms.png";
import git from "../../../images/git.png";
import github from "../../../images/github.png";
import cb from "../../../images/cb.png";
import pm from "../../../images/pm.png";
import chrome from "../../../images/chorme.svg";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

export default function Toolkit() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {[
            {
              label: "VS Community",
              img: vscommunity,
              alt: "Visual Studio Community",
            },
            { label: "SQL Server", img: ssms, alt: "SQL Server SSMS" },
            { label: "Git", img: git, alt: "Git" },
            {
              label: "GitHub",
              img: github,
              alt: "GitHub",
              style: { filter: "grayscale(1) invert(1)" },
            },
            { label: "Code Blocks", img: cb, alt: "Code Blocks" },
            { label: "Project Management", img: pm, alt: "Project Management" },
            { label: "Chrome", img: chrome, alt: "Chrome" },
          ].map((tool, index) => (
            <Col xs={4} md={2} className="tech-icons" key={index}>
              <img
                src={tool.img}
                alt={tool.alt || tool.label}
                style={{ width: "85%", height: "85%", ...(tool.style || {}) }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
