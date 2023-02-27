import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logog.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo-img">
        <img src={logo} alt="Vanlife logo in SVG format" />
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Vans</Link>
      </nav>
    </div>
  );
};

export default NavBar;
