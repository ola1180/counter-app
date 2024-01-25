import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Number of counters:
        <span className="badge badge-pill bg-secondary ms-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
