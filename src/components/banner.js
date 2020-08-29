import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="container-fluid banner">
      <div className="row shadow rounded">
        <div className="col align-self-center">
          <div>
            <a>
              <img src="img/Baa.jpg" alt="Avatar" className="avatar"></img>
            </a>

            <h1>Jingfu Dong</h1>
          </div>
          <h4>Web Developer</h4>
          <div style={{ paddingTop: "15px" }}>
            <a className="icon-btn" href="https://github.com/Dongongngg">
              <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
            </a>
            <a
              className="icon-btn"
              href="https://www.linkedin.com/in/jingfu-dong-556198148/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
