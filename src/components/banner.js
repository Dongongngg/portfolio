import React from "react";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="container banner">
      <div className="row shadow rounded">
        <div className="col align-self-center">
          <h4>Front-end Developer</h4> <h1>James Dong</h1>
          <h4>React, Javascript, HTML</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
