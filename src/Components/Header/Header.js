import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import icon from "../../Utils/icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerleft">
        <Link to="/">
          <img className="header_icon" alt="Logo" src={icon} />
        </Link>
        <Link className="links" to="/movies/popular">
          Popular
        </Link>
        <Link className="links" to="/movies/top_rated">
          Top Rated
        </Link>
        <Link className="links" to="/movies/upcoming">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
