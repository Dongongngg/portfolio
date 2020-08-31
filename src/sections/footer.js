import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer-box">
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 d-flex justify-content-start">
            contact:
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
              <a className="icon-btn mb-2 ml-2">0415767286</a>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <footer>Made by Jingfu</footer>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
