import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//fontawesome library
import "../fontawesome.js";
//sections
import NavBar from "../components/nav-bar";
import Landing from "../sections/landing";
import Intro from "../sections/intro";
import Project from "../sections/project";
import Contact from "../sections/contact";
import Footer from "../sections/footer";
//
import "../styles/index.css";
import "../styles/font.css";

//
import "../styles/reset.css";
export default () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Landing></Landing>
      <Intro></Intro>
      <Project></Project>
      {/* <Contact></Contact> */}
      <Footer></Footer>
    </React.Fragment>
  );
};
