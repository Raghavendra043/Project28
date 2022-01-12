import React, { useRef, useState } from "react";
import "./dash.css";
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
import NoProjects from "../../Designer/NoProjectsRedirect/NoProjects";
import Navbar3 from "../../Navbar/Navbar3";
import Navbar2 from "../../Navbar/Navbar2";

function Dashboard() {
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
  
  
  const Loading= (state, set = false)=>{
    try{if(state){
        console.log('coming inside');
        var element = document.getElementById("loading");
        element.style.display = null;
        var element1 = document.getElementById("screen");
        element1.style.opacity = 0.16;
        if(set){var element2 = document.getElementById("under");
        element2.innerHTML = ""}
        //setDt('Uploading');
    } else {
        console.log('coming outside');
        var element = document.getElementById("loading");
        element.style.display = "none";
        var element1 = document.getElementById("screen");
        element1.style.opacity = 10;
    }} catch(err){
      console.log(err);
    }
  }
  const props = { formData, setForm, Loading };
  const props1 = { formData, setForm, user:"client" };

  if (!Details) {
    search("Projects", "clientEmail", email).then((project) => {
      if (project && project !== "f") {
        setDetails(project);
        if(project.assigned){c = { onCurrent: project.currentStage };}
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
  //const props2 = {title:formData.title};
  return (
    <div>
      {formData && formData !== "f" ? (<Navbar2 {...props} />):(<></>)}
      <div
        className="main_container1"
        style={{ position: "absolute", opacity: "0.16" }}
        id="screen"
      >
        <div className="Sidebar">
          {formData && formData !== "f" ? <Navbar {...props}/> : <></>}
        </div>

        {formData && formData.assigned && formData !== "f" ? (
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
              <Fourth {...props1} />
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
        <p style={{ marginTop: "5vh", marginLeft: "-3vw" }} id="under">
          {dt}
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
