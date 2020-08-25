import React from "react";
import "../styles/nav-bar.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">
              James <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              Intro
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
