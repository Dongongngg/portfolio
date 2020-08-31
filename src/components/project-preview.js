import React from "react";
import "../styles/project-preview.css";

const ProjectPreview = () => {
  return (
    <div className="project-preview-box">
      <div className="container-fluid">
        <div className="row project-preview">
          <div className="col-sm-12 col-md-6">
            <div className="card shadow rounded mx-auto">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Property Management System</h5>
                <p className="card-text"></p>
                <p className="card-text">
                  A ongoing project with iShare Incubator team.
                </p>
                <p className="card-text">
                  It's a full-stack web application for real estate industry.
                </p>
                <small className="card-text">
                  React.js | Material UI | Node.js | MySQL
                </small>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card shadow rounded mx-auto">
              <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">This Page</h5>
                <p className="card-text">Just for Practicing purpose...</p>
                <small className="card-text">
                  Gatsby.js | React.js | Bootstrap
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
