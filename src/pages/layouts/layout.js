import React from "react";
import NavBar from "../../components/nav-bar";
//css
import "../../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="content">{children}</main>
    </React.Fragment>
  );
};
export default Layout;
