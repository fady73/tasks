import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  return (
    <>
      <nav className="br-header" expand="lg">
        <Link to="/">home</Link>
      </nav>
    </>
  );
};

export default withRouter(Header);
