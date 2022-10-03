import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header-nav">
      <div className="header-nav-main">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <div>
            <Link to="/movies">Movies</Link>
            <Link to="/series">Series</Link>
            <Link to="episodes">Episodes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
