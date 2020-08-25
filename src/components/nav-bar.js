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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          onClick={handleNavBar}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={"collapse navbar-collapse " + navOpen} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                James Dong <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Project
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
