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
          <div className="col-sm-12 col-md-6 intro-img-box">img</div>
          <div className="col-sm-12 col-md-6 intro-text-box">
            <p>
              Hi! Jingfu Dong here. I born in China and came to Australia 5
              years ago. After I finished my Master degree of IT at University
              of Wollongong, I moved to <big>Sydney</big> and now I'm living in
              Burwood.
            </p>
            <p>
              I'm a <big>web developer</big>, I'm passionate about IT stuff and
              always keen on learning new technologies. I'm currently looking
              for job.
            </p>
            <p>
              I have experiences of <big>full-stack</big> and{" "}
              <big>front-end</big> development. Here are my skill sets. Don't
              forget to check my recent project in the next section.
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
