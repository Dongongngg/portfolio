import React from "react";
import NavBar from "../../components/nav-bar";
//css
import "../../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
    </React.Fragment>
  );
};
export default Layout;
