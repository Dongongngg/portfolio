import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer-box" id="footer">
      <div className="container">
        <div className="row justify-content-around">
          <div>
            <div>
              <a
                className="icon-btn mb-2 ml-2"
                href="https://www.linkedin.com/in/jingfu-dong-556198148/"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                className="icon-btn mb-2 ml-2"
                href="mailto:jingfu.dong@gmail.com"
              >
                <FontAwesomeIcon icon={["fas", "envelope-square"]} />
              </a>
              <h6 className="icon-btn mb-2 ml-2 d-inline">0415767286</h6>
            </div>
          </div>
          <div>
            <h6>Opening to work!</h6>
          </div>
          <div>
            <h6>&#169; Made by Jingfu</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
