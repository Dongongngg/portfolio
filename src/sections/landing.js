import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Banner from "../components/banner";
import "../styles/landing.css";

const Landing = () => {
  //scroll to location
  const scrollTo = (props) => {
    document.getElementById(props).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-box">
      <Banner></Banner>
      {/* arrow */}
      <div className="arrow-box">
        <FontAwesomeIcon
          className="vertical-align-child"
          icon={["fas", "chevron-down"]}
          size="4x"
          onClick={() => scrollTo("about-me")}
        />
      </div>
    </div>
  );
};
export default Landing;
