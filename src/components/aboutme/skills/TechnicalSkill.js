import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
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
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-4">
            {[
              {
                title: "Programming Languages",
                items: [
                  "C++",
                  "C#",
                  "JavaScript (Web & Full Stack development)",
                  "Dart (Flutter)",
                ],
                borderColor: "#fe3e57",
              },
              {
                title: "Web Development",
                items: [
                  "ASP.NET MVC",
                  "ASP.NET Web API",
                  "HTML / CSS / JavaScript (Web Fundamentals)",
                  "React.js",
                  "MERN Stack (MongoDB, Express, React, Node.js)",
                ],
                borderColor: "#54faae",
              },
              {
                title: "Mobile Development",
                items: [
                  "Flutter Development",
                  "Cross-platform mobile app development",
                ],
                borderColor: "#39c4ff",
              },
              {
                title: "Databases",
                items: [
                  "SQL Server",
                  "Database fundamentals (design & queries)",
                  "Basic data modeling",
                ],
                borderColor: "#f1f965",
              },
              {
                title: "Software Engineering Concepts",
                items: [
                  "Object-Oriented Programming (OOP)",
                  "Data Structures basics",
                  "Software Development Life Cycle (SDLC)",
                  "Agile methodology",
                ],
                borderColor: "#ff0173",
              },
              {
                title: "Testing & Quality Assurance",
                items: [
                  "Software Testing basics",
                  "Bug tracking using Jira",
                  "QA processes in real environments",
                ],
                borderColor: "#ff8c2f",
              },
              {
                title: "Tools & Platforms",
                items: [
                  "Visual Studio / Visual Studio Code",
                  "Git & Version Control",
                  "Jira (issue tracking)",
                  "API testing & debugging tools",
                ],
                borderColor: "#41f2ff",
              },
              {
                title: "Systems & Embedded Knowledge",
                items: ["Internet of Things (IoT)", "Embedded Systems basics"],
                borderColor: "#fe3e57",
              },
              {
                title: "Practical Skills",
                items: [
                  "Full-stack web application development",
                  "API integration (frontend + backend)",
                  "Real-world project development",
                  "Freelance / paid project experience",
                  "AI-assisted development (modern workflow)",
                ],
                borderColor: "#54faae",
              },
            ].map((category, index) => (
              <Col md={4} key={index}>
                <div
                  style={{
                    border: `2px solid ${category.borderColor}`,
                    borderRadius: "16px",
                    padding: "30px 20px",
                    minHeight: "280px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        color: category.borderColor,
                        fontSize: "24px",
                        fontWeight: 700,
                        marginBottom: "16px",
                      }}
                    >
                      {category.title}
                    </h2>
                    <ul
                      style={{
                        color: "#f2f2f2",
                        paddingLeft: "18px",
                        margin: 0,
                      }}
                    >
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} style={{ marginBottom: "8px" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
