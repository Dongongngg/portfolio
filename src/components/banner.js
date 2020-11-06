import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/banner.scss";

const Banner = () => {
  setTimeout(() => {
    document.getElementById("icons").style.display = "block";
  }, 1000);
  return (
    <div className="container-fluid banner">
      <div className="row shadow">
        <div className="col align-self-center">
          <div className="avatar-box mx-auto mb-2">
            <img src="img/avatar.png" alt="Avatar" className="avatar"></img>
          </div>
          <h1>Jingfu Dong</h1>
          <h4>Web developer, opening to work!</h4>
          <div className="icons pt-3 px-auto" id="icons">
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
            <a
              className="icon-btn mr-3 ml-3"
              href="/file/Resume - Jingfu Dong.pdf"
            >
              <FontAwesomeIcon icon={["fas", "file-download"]} size="2x" />
            </a>
            <h4 className="d-inline">CV</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
