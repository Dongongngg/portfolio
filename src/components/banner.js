import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="row shadow rounded">
        <div className="col align-self-center">
          <div className="avatar-box mx-auto mb-2">
            <img src="img/avatar.png" alt="Avatar" className="avatar"></img>
          </div>
          <h1>Jingfu Dong</h1>
          <h4>I'm a web developer</h4>
          <div style={{ paddingTop: "15px" }}>
            <a
              className="icon-btn mr-3 ml-3"
              href="https://github.com/Dongongngg"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </a>
            <a
              className="icon-btn mr-3 ml-3"
              href="https://www.linkedin.com/in/jingfu-dong-james/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
            </a>
            <a
              className="icon-btn mr-3 ml-3"
              href="mailto:jingfu.dong@gmail.com"
            >
              <FontAwesomeIcon icon={["fas", "envelope-square"]} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
