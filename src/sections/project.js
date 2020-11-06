import React from "react";
import ProjectPreview from "../components/project-preview";
//
import "../styles/project.scss";

const Project = () => {
  return (
    <div className="project-box shadow" id="projects">
      <div className="section-title title-project">
        <h1>Recent Projects</h1>
      </div>
      <ProjectPreview></ProjectPreview>
    </div>
  );
};

export default Project;
