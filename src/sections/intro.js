import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="intro-box">
      <div className="dropdown-divider"></div>
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">img</div>
          <div className="col-sm-12 col-md-6">
            <p>
              asld lkasjd lkjdls lskfaslkjd ljglkfjslja lslk kjslkjalkdj alskj
              lfj ld jaskldj aslkd jaslk jasldk jaskld jalskdjljdf alsa das d
            </p>
            <p>
              Currently looking for job Currently looking for job Currently
              looking for job Currently looking for job
            </p>
            <p>
              Currently looking for job Currently looking for job Currently
              looking for job
            </p>

            <div className="row icon-box">
              <div className="col-12">
                <ul>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                      <p>React</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "bootstrap"]} size="2x" />
                      <p>Bootstrap</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-caption-box">
                      <FontAwesomeIcon icon={["fab", "html5"]} size="2x" />
                      <p>Html5</p>
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
