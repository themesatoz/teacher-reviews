import React, { useState } from "react";
import "./cstyle.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import {Link} from "react-router-dom";
// import SVGComponent from "../assets/logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container abc">
        <div className="logo">
            <h2><Link to="/">EduRater</Link></h2>
        </div>
        <div
          className={`menu-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="mnb">
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <Link to="/register" className="download-button">
              Register
            </Link>
          </ul>
          <div className={`right-icons ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" className="icons">
              <FaTwitter className="icon" />
            </Link>
            <Link to="/" className="icons">
              <FaDiscord className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;