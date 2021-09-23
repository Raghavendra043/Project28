import React from "react";
import "./Navbar.css";
import logo from "./../../assets/P28logo.png";
import icon from "./../../assets/UserIcon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="part1">
        <div id="navLogo">
          <img src={logo} alt="logo" width="100vw" />
        </div>
        <div className="navA">About Us</div>
        <div className="navA">How it Works</div>
        <div className="navA">Get in touch</div>
      </div>
      <div className="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <div className="part2">
        <div className="navB">GET STARTED</div>
        <div id="navE">
          <img src={icon} alt="userIcon" width="22px" height="24px" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
