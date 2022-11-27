import React from "react";
import ProjectItem from "../components/ProjectItem";
import ethblox from "../assets/ethblox.png";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        <ProjectItem name="HACKFS Hackathon 2021" image={ethblox} />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Projects;
