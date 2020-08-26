import React from "react";
import "../styles/project-preview.css";

const ProjectPreview = () => {
  return (
    <div className="project-preview-box">
      <div className="container">
        <div style={{ textAlign: "center" }} className="mt-5">
          <h2>My Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-2 project-preview">
          <div className="col-sm-12 col-md-6 pb-5">
            <div className="card shadow rounded">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className="card-title">Property Management System</h4>
                <p className="card-text">
                  React.js, Material UI, Node.js, MySQL
                </p>
                <p className="card-text">
                  A ongoing project with iShare Incubator team.
                </p>
                <p className="card-text">
                  It's a full-stack web application for real estate industry.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 pb-5">
            <div className="card shadow rounded">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className="card-title">This Page</h4>
                <p className="card-text">Gatsby.js, React.js, Bootstrap</p>
                <p className="card-text">Just for Practicing purpose...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
