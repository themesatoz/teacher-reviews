import React from "react";
import "./cstyle.css";
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaMedium,
  FaLinkedin,
  FaYoutube,
  FaProductHunt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import SVGComponent from "../assets/logo";
// import ftrimg from "../assets/ftrr.svg";

const Footer = () => {
  return (
    <>
    <div className="ftr">
      <div className="container">
        <div className="row">
          <div className="col-md-8 logo">
            {/* <SVGComponent /> */}
            <h2><Link to="/">EduRater</Link></h2>
          </div>
          <div className="col-md-4 ics">
            <a href="/" className="icons">
              <FaTwitter className="icon" />
            </a>
            <a href="/" className="icons">
              <FaGithub className="icon" />
            </a>
            <a href="/" className="icons">
              <FaDiscord className="icon" />
            </a>
            <a href="/" className="icons">
              <FaLinkedin className="icon" />
            </a>
            <a href="/" className="icons">
              <FaYoutube className="icon" />
            </a>
            <a href="/" className="icons">
              <FaProductHunt className="icon" />
            </a>
            <a href="/" className="icons">
              <FaMedium className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="ftrbtm">
    <div className="container">
        <div className="row">
          <div className="col-md-5 btlks">            
           <p className="copyrights ftbtlnk">@2023 EduRater</p>
           <a href="/" className="ftbtlnk">Privacy Policy</a>
           <a href="/" className="ftbtlnk">Terms of Use</a>
          </div>
          <div className="col-md-7 btics">
            {/* <img src={ftrimg} /> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;