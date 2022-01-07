import React, { useState } from "react";
import "./Navbar.css";
import styles from "./Navbar.component.css";
import logo from "./../../assets/logo.svg";
import icon from "./../../assets/user.svg";
import { useHistory } from "react-router-dom";
import data from "./data.json";

function Navbar2() {
  const history = useHistory();
  const [Not, setNot] = useState(false);
  if(!Not){
    
  }
  const viewHandler = () => {
    var modal = document.getElementById("projectModalNotif");
    modal.style.display = "block";
  };

  const closeHandler = () => {
    var modal = document.getElementById("projectModalNotif");
    modal.style.display = "none";
  };
  return (
    <div className="navbar">
      <div className="part1">
        <div className="navLogo">
          <button className="nav-logo-button">
            <img
              src={logo}
              alt="logo"
              width="100vw"
              onClick={() => {
                history.push("/");
              }}
            />
          </button>
        </div>
        {/* <div className="navA"><button>About Us</button></div>
        <div className="navA"><button>How it Works</button></div>
        <div className="navA"><button>Get in touch</button></div> */}
      </div>
      <div className="toggle-button">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <div className="part2">
        {/* <div className="navB"><button>Notifications</button></div> */}
        
        <div className="navB">
          <button onClick={viewHandler}>Notifications</button>
        </div>
        <div>Hey Raghavendra !!</div>
        <div className="navE">
          <button
            onClick={() => {
              alert("Are you sure you want to Logout ? ");
              sessionStorage.clear();

              history.push("/");
            }}
          >
            <img src={icon} alt="userIcon" width="22px" height="24px" />
          </button>
        </div>
      </div>

      <div id="projectModalNotif" className="modal">
        <div classname="modal_content">
          <span className="close" onClick={closeHandler}>
            &times;
          </span>
          <div className="title">Notifications</div>
          <div className="notif_content">
            {data &&
              data.map((items, key) => {
                return (
                  <div
                    className={
                      (items.id === 1 ? "admin" : "client") + " notifs"
                    }
                  >
                    {items.data}
                    <hr style={{width:"80%",textAlign:"left",marginLeft:"0"}}></hr>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar2;
