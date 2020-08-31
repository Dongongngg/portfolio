import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="intro-box rounded shadow" id="about-me">
      <div className="section-title">
        <h1>About Me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-5">
            <div className="intro-img-box mx-auto">
              <img src="img/desktop.png" className="mx-auto shadow"></img>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 intro-text-box">
            <p className="lead">
              Hi, Jingfu Dong here. I'm Chinese and I came to Australia in 2016.
              After I finished my Master degree of IT at University of
              Wollongong, I'm living in <big>Sydney</big>.
            </p>
            <p className="lead">
              I'm a <big>web developer</big> who is passionate about learning
              new technologies. I have experiences of <big>full-stack</big> and{" "}
              <big>front-end</big> development.
            </p>
            <p className="lead">
              Here is my skill set. Don't forget to check my recent project in
              the next section.
            </p>

            <div className="row icon-box">
              <div className="col-12">
                <ul>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "html5"]} size="lg" />
                      <p>Html5</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "js"]} size="lg" />
                      <p>JS-ES6</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "sass"]} size="lg" />
                      <p>SCSS</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fas", "database"]} size="lg" />
                      <p>MySQL</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <ul>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "react"]} size="lg" />
                      <p>React</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <img
                        src="img/Material UI.svg"
                        style={{ width: "25px" }}
                      ></img>
                      <p>Material UI</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "bootstrap"]} size="lg" />
                      <p>Bootstrap</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "wordpress"]} size="lg" />
                      <p>Wordpress</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
