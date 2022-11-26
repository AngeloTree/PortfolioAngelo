import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import "../styles/Experience.css";
import SchoolIcon from "@mui/icons-material/School";

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="October 2019 - Present"
          iconStyle={{ background: "#24a84e", color: "#fff" }}
          icon={<MilitaryTechIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            United States Airforce
          </h3>
          <p>Supply Technician</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2022 - Present"
          iconStyle={{ background: "#9cdae7", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Grand Canyon University
          </h3>
          <p>Bachelor of Science in Software Development</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
