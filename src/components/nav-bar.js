import React, { useState, useEffect } from "react";
import "../styles/nav-bar.scss";

const NavBar = () => {
  const [showCollapsedMenu, setShowCollapsedMenu] = useState(false);
  const handleNavBar = () => {
    setShowCollapsedMenu(!showCollapsedMenu);
  };
  const navOpen = (showCollapsedMenu && "show") || "";
  //handle scroll dirction to hide or display navbar
  const [scrollDir, setScrollDir] = useState("scrolled-up");
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "scrolled-down" : "scrolled-up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  //scroll to location
  const scrollTo = (props) => {
    document.getElementById(props).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={"nav-box" + (isTop ? " " : " shadow ") + scrollDir}>
        <div className="container navbar-box">
          <div className="row">
            <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
              <span className="navbar-brand mb-0 h1">James</span>
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
                    <button
                      className="nav-link mx-0"
                      onClick={() => scrollTo("about-me")}
                    >
                      ABOUT ME
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link mx-0"
                      onClick={() => scrollTo("projects")}
                    >
                      PROJECTS
                    </button>
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
