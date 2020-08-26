import React from "react";
import NavBar from "../components/nav-bar";
import Landing from "../sections/landing";
import Intro from "../sections/intro";
import Project from "../sections/project";
import Footer from "../sections/footer";
import Layout from "../pages/layouts/layout";

//
import "../styles/reset.css";
export default () => {
  return (
    <Layout>
      <NavBar></NavBar>
      <Landing></Landing>
      <Intro></Intro>
      <Project></Project>
      <Footer></Footer>
    </Layout>
  );
};
