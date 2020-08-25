import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/nav-bar";
import Landing from "../../sections/landing";
import Intro from "../../sections/intro";
import Project from "../../sections/project";

//css
import "../../styles/layout.css";

const Layout = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Landing></Landing>
      <Intro></Intro>
      <Project></Project>
    </React.Fragment>
  );
};
export default Layout;
