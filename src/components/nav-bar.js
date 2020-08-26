import React, { useState } from "react";
import "../styles/nav-bar.css";

const NavBar = () => {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);
  const handleNavBar = () => {
    setShowCollapsedMenu(!showCollapsedMenu);
  };
  const navOpen = (showCollapsedMenu && "show") || "";
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#faf0dc" }}>
        <div className="container nav-box">
          <div className="row nav-box">
            <nav className="navbar navbar-expand-md navbar-light navbar-custom">
              <span className="navbar-brand mb-0 h1">James Dong</span>
              <button
                className="navbar-toggler"
                onClick={handleNavBar}
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={"collapse navbar-collapse " + navOpen}
                id="navbarNav"
              >
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      ABOUT ME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      PROJECTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
