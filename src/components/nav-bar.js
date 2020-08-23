import React from "react";
import { Link } from "gatsby";
import "../styles/nav-bar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <React.Fragment>
      <div>
        <h1>header</h1>
        <Link to="/">Navigation Bar</Link>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">1 of three columns</div>
          <div class="col-sm">2 of three columns</div>
          <div class="col-sm">3 of three columns</div>
        </div>
        <div class="row">
          <div class="col-8">asd asd as </div>
          <div class="col-4">asd asd asd as as ss s s </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
