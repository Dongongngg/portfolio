import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/project-preview.css";

const ProjectPreview = () => {
  return (
    <div className="project-preview-box">
      <div className="container-fluid">
        <div className="row project-preview">
          <div className="col-sm-12 col-md-6">
            <div className="card shadow rounded mx-auto">
              <div className="project-img-box rounded">
                <img
                  className="project-img rounded"
                  src="img/projects/ishare/property-edit-list.png"
                  alt="ishare"
                ></img>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                  <a href="https://github.com/Dongongngg/portfolio">
                    <h4 className="card-title ml-3">
                      Property Management System
                    </h4>
                  </a>
                </div>

                <p className="card-text"></p>

                <p className="card-text">
                  Full-stack web application for real estate agency and property
                  owners.
                </p>
                <p className="card-text">
                  Allow users to create and manage property, partner and
                  different sources of payment.
                </p>
                <p className="card-text mt-3">
                  React | Material UI | RESTful API | Express | Node | MySQL
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card shadow rounded mx-auto">
              <div className="project-img-box rounded">
                <img
                  className="project-img rounded"
                  src="img/projects/portfolio/landing.png"
                  alt="portfolio"
                ></img>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                  <a href="https://github.com/Dongongngg/portfolio">
                    <h4 className="card-title ml-3">My Portfolio</h4>
                  </a>
                </div>

                <p className="card-text">
                  For practicing server-side rendering and deploymeny
                </p>
                <p className="card-text mt-3">Gatsby | React | Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
