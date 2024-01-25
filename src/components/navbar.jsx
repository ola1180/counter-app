import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Number of counters:
        <span className="badge badge-pill bg-secondary ms-2">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
