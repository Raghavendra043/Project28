import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import { useLocation } from "react-router-dom";
import First from "./Dashboard_Parts/First/First";
import Second from "./Dashboard_Parts/Second/Second";
import Third from "./Dashboard_Parts/Third/Third";
import Fourth from "./Dashboard_Parts/Fourth/Fourth";
import Navbar from "./Dashboard_Parts/Navbar/Navbar";
import { search } from "../../../firebasefunctions/firestore";
import { BarWave } from "react-cssfx-loading";
import About from "../../Admin_new/ProjectTracker/TrackerParts/About";
import { getAuth } from "firebase/auth";
import NoProjects from '../NoProjectsRedirect/NoProjects'

function Main() {
  const location = useLocation();
  const [dt, setDt] = useState('Loading Account info');
  const auth = getAuth();
  const user = auth.currentUser;
  
  console.log("User logged in : ", user);
  //const email = 'f20190120@hyderabad.bits-pilani.ac.in';
  //const email = location.state.email;
  //const email = user.email;
  const email = atob(window.sessionStorage.getItem("key"));
  console.log("decoded email : ", email);

  const [Details, setDetails] = useState(false);
  let c;
  const [stat, setStat] = useState(0);

  const [formData, setForm] = useState(null);
  

  

  const Loading= (state)=>{
    if(state){
        console.log('coming inside');
        var element = document.getElementById("loading");
        element.style.display = null;
        var element1 = document.getElementById("screen");
        element1.style.opacity = 0.16;
        //setDt('Uploading');
    } else {
        console.log('coming outside');
        var element = document.getElementById("loading");
        element.style.display = "none";
        var element1 = document.getElementById("screen");
        element1.style.opacity = 10;
    }
  }
  const props = { formData, setForm, Loading };

  if (!Details) {
    search("Projects", "designerEmail", email).then((project) => {
      if (project && project !== "f") {
        console.log("from inside:", project);
        setDetails(project);
        c = { onCurrent: project.currentStage };
        setForm({ ...project, ...c });
      } else if (project === "f") {
        setDetails("f");
        setForm("f");
      }
    });
  }

  

  if (formData) {
    var element = document.getElementById("loading");
    if (element) {
      element.style.display = "none";
    }
    var element1 = document.getElementById("screen");
    if (element1) {
      element1.style.opacity = 10;
    }
  }

  return (
    <div>
      <div
        className="main_container1"
        style={{ position: "absolute", opacity: "0.16" }}
        id="screen"
      >
        <div className="Sidebar">
          <Navbar  />
        </div>

        {formData && formData !== "f" ? (
          <div className="outer_container1">
            <div className=" first">
              <First {...props} />
            </div>
            <div className="second">
              <Second {...props} />
            </div>
            <div className=" third">
              <Third {...props} />
            </div>
            <div className=" fourth">
              <Fourth {...props} />
            </div>
          </div>
        ) : (
          <div className="outer_container1">
            <NoProjects/>
          </div>
        )}
      </div>
      <div
        id="loading"
        style={{ position: "absolute", marginTop: "45vh", marginLeft: "47vw" }}
      >
        <BarWave width="50px" height="50px" color="#1ABAA9" />
        <p style={{ marginTop: "5vh", marginLeft: "-3vw" }}>
          {dt}
        </p>
      </div>
    </div>
  );
}

export default Main;
