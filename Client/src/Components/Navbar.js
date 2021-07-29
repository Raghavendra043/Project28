import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="part1">
        <div id="navLogo">logo</div>
        <div className="navA">About Us</div>
        <div className="navA">How it Works</div>
        <div className="navA">Get in touch</div>
      </div>

      <div className="part2">
        <div className="navB">GET STARTED</div>
        <div id="navE"> Profile</div>
      </div>
    </div>
  );
}

export default Navbar;
