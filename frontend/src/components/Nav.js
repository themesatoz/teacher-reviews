import React, { useState } from "react";
import "./cstyle.css";
import { FaTwitter, FaDiscord } from "react-icons/fa";
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
            <h2>EduRater</h2>
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
              <a href="#how">How it protects</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <a href="#" className="download-button">
              Download
            </a>
          </ul>
          <div className={`right-icons ${isMenuOpen ? "open" : ""}`}>
            <a href="#" className="icons">
              <FaTwitter className="icon" />
            </a>
            <a href="#" className="icons">
              <FaDiscord className="icon" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;