import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="left"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            FOUNDATION EXPERIENCE
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            EVA International Applied School & EVA Pharma
          </h6>
          <p>QA Testing training at EVA Pharma company</p>
          <p>Learned bug tracking using Jira</p>
          <p>Introduction to Agile methodology</p>
          <p>Attended sessions about Software Development Life Cycle (SDLC)</p>
          <p>Gained basic understanding of real-world software workflow</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="right"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2024 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            PRACTICAL DEVELOPMENT EXPERIENCE
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Training & Real Projects
          </h6>
          <p>Training in API development and Web Applications</p>
          <p>Introduction to Flutter development</p>
          <p>Worked on paid real-world projects</p>
          <p>Applied backend and frontend integration</p>
          <p>Improved debugging and development skills</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          position="left"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2025 - 2026"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            SELF-DEVELOPMENT & PROFESSIONAL WORK
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Independent Learning & Freelance Work
          </h6>
          <p>Self-learned React.js and MERN Stack</p>
          <p>
            Practiced modern development approaches (including AI-assisted
            coding / vibe coding)
          </p>
          <p>Worked on real paid website projects</p>
          <p>Developed full-stack applications</p>
          <p>Improved soft skills:</p>
          <p>• Teamwork</p>
          <p>• Communication</p>
          <p>• Problem-solving</p>
          <p>• Working in real environments</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
