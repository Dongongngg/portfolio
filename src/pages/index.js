import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

//fontawesome library
import "../fontawesome.js";
//sections
import NavBar from "../components/nav-bar";
import Landing from "../sections/landing";
import Intro from "../sections/intro";
import Work from "../sections/work";
import Project from "../sections/project";
import Footer from "../sections/footer";
//style
import "../styles/index.scss";
import "../styles/reset.scss";
//no blink large svg
config.autoAddCss = false;
export default () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Landing></Landing>
      <Intro></Intro>
      <Work></Work>
      <Project></Project>
      <Footer></Footer>
    </React.Fragment>
  );
};
