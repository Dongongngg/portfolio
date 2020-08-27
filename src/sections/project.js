import React from "react";
import ProjectPreview from "../components/project-preview";
//
import "../styles/project.css";

const Project = () => {
  return (
    <div className="project-box">
      <div className="section-title">
        <h2>Recent Projects</h2>
      </div>
      <ProjectPreview></ProjectPreview>
    </div>
  );
};

export default Project;
