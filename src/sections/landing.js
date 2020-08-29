import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Banner from "../components/banner";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-box">
      <Banner></Banner>

      <div className="arrow-box">
        <FontAwesomeIcon
          className="vertical-align-child"
          icon={["fas", "chevron-down"]}
          size="4x"
        />
      </div>
    </div>
  );
};
export default Landing;
