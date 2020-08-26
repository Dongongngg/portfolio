import React from "react";
//
import "../styles/intro.css";

const Intro = () => {
  return (
    <div className="intro-box">
      <div className="dropdown-divider"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-12 pt-3 align-self-center"
            style={{ textAlign: "center" }}
          >
            <h2>About Me</h2>
          </div>
          <div className="col-12 pb-5 align-self-center">
            <h4>Currently looking for job</h4>
          </div>
          <div className="col-12 pb-5 align-self-center">
            <h4># Open minded, creative individual</h4>
            <h4># Attention to detail</h4>
          </div>
          <div className="col-12 pb-5 align-self-center">
            <h4>
              Master Degree of Information Technology from University of
              Wollongong
            </h4>
            <h4></h4>
            <h4>AU permanent resident, 81/90 PTE English test</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
