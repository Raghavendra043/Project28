import React from "react";
import "./Navbar.css";
import logo from "./../../assets/logo.svg";
import icon from "./../../assets/user.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="part1">
        <div className="navLogo">
          <button className="nav-logo-button"><img src={logo} alt="logo" width='100vw'/></button>
        </div>
        <div className="navA"><button>About Us</button></div>
        <div className="navA"><button>How it Works</button></div>
        <div className="navA"><button>Get in touch</button></div>
      </div>
      <div className="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <div className="part2">
        <div className="navB"><button>GET STARTED</button></div>
        <div className="navE">
          <button>
            <img src={icon} alt="userIcon" width="22px" height="24px" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
