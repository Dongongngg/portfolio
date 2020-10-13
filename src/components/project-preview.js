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
                  src="img/projects/eduf3037/test.png"
                  alt="test"
                ></img>
              </div>

              <div className="card-body">
                <div className="mb-3">
                  <h4 className="card-title mr-3">Teacher Story Game</h4>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    size="2x"
                    className="mr-3"
                    onClick={() => {
                      window.open(
                        "https://github.com/Dongongngg/eduf3037-game"
                      );
                    }}
                  />
                  <FontAwesomeIcon
                    icon={["fas", "link"]}
                    size="2x"
                    onClick={() => {
                      window.open("https://eduf3037-game.netlify.app/");
                    }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Test it"
                  />
                </div>

                <p className="card-text"></p>

                <p className="card-text">
                  React application for a University educational course.
                </p>
                <p className="card-text">
                  There will be 5 scenarios and questions given to players in
                  order to test if they are creative teachers:)
                </p>
                <p className="card-text mt-3">React | SASS | JavaScript</p>
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
                  <h4 className="card-title mr-3">My Portfolio</h4>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    size="2x"
                    onClick={() => {
                      window.open("https://github.com/Dongongngg/portfolio");
                    }}
                    className="mr-3"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Check it on Github"
                  />
                  <FontAwesomeIcon
                    icon={["fas", "link"]}
                    size="2x"
                    onClick={() => {
                      window.open("https://jingfudong.com");
                    }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Test it"
                  />
                </div>

                <p className="card-text">
                  Try Graphql, GastbyJS and Netlify deployment for the first
                  time.
                </p>
                <p className="card-text mt-3">
                  Gatsby | React | Bootstrap | SASS
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card shadow rounded mx-auto">
              <div className="project-img-box rounded">
                <img
                  className="project-img rounded"
                  src="img/projects/covid19-au-stats/overall.png"
                  alt="covid-19-au-stats"
                ></img>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h4 className="card-title mr-3">COVID-19 stats</h4>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    size="2x"
                    onClick={() => {
                      window.open(
                        "https://github.com/Dongongngg/covid19-au-stats"
                      );
                    }}
                    className="mr-3"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Check it on Github"
                  />
                  <FontAwesomeIcon
                    icon={["fas", "link"]}
                    size="2x"
                    onClick={() => {
                      window.open("https://covid-19-au.netlify.app/");
                    }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Test it"
                  />
                </div>

                <p className="card-text">
                  Fetch and display daily COVID19 stats from api. Little
                  practice.
                </p>
                <p className="card-text">
                  Don't have a valid API for states, so states section doesn't
                  have data...
                </p>
                <p className="card-text mt-3">React | Material UI | SASS</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="card shadow rounded mx-auto">
              <div className="project-img-box rounded">
                <img
                  className="project-img rounded"
                  src="img/projects/todo-list-mern/newtodo.png"
                  alt="covid-19-au-stats"
                ></img>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <h4 className="card-title mr-3">To do list - MERN</h4>
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    size="2x"
                    onClick={() => {
                      window.open(
                        "https://github.com/Dongongngg/mern-todolist"
                      );
                    }}
                    className="mr-3"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Check it on Github"
                  />
                  <FontAwesomeIcon
                    icon={["fas", "link"]}
                    size="2x"
                    onClick={() => {
                      window.open(
                        "https://afternoon-inlet-07962.herokuapp.com/"
                      );
                    }}
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Test it"
                  />
                </div>

                <p className="card-text">
                  Full-stack application with standard functionality of to do
                  list.
                </p>
                <p className="card-text">
                  A practice of using MongoDB-Express-React-Node stack. Deployed
                  on Heroku.
                </p>
                <p className="card-text mt-3">
                  React | Bootstrap | SASS | Express | Node | MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
