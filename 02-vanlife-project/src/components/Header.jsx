import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo-img">
        <Link to="/">
          <img src={logo} alt="Vanlife logo in SVG format" />
        </Link>
      </div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </div>
  );
};

export default Header;
