import React from "react";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header className="header">
        <Link to="/">My Portfoilo</Link>
      </header>
      <main className="content">{children}</main>
    </React.Fragment>
  );
};
export default Layout;
