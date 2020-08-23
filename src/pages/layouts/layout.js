import React from "react";
import NavBar from "../../components/nav-bar";
//css
import "../../styles/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar></NavBar> <div>{children}</div>
    </>
  );
};
export default Layout;
