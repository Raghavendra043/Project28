import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import { useHistory, useLocation } from "react-router-dom";
import First from "./Dashboard_Parts/First/First";
import Second from "./Dashboard_Parts/Second/Second";
import Third from "./Dashboard_Parts/Third/Third";
import Fourth from "./Dashboard_Parts/Fourth/Fourth";
import Navbar from "./Dashboard_Parts/Navbar/Navbar";
import { search } from "../../../firebasefunctions/firestore";
import { BarWave } from "react-cssfx-loading";
import About from "../../Admin_new/ProjectTracker/TrackerParts/About";
import { getAuth } from "firebase/auth";
import NoProjects from "../NoProjectsRedirect/NoProjects";
import Navbar1 from "../../Navbar/Navbar1";
//import Navbar from "./Components/Navbar/Navbar";
//import Navbar from "../../Navbar/Navbar";
import Navbar2 from "../../Navbar/Navbar2";
import Navbar4 from "../../Navbar/Navbar4";
require("../../../trail/chattest.css");

function Main() {
  const history = useHistory();
  const location = useLocation();
  const [dt, setDt] = useState("Loading Account info");
  const auth = getAuth();
  const user = auth.currentUser;

  const email = atob(window.sessionStorage.getItem("key"));

  const [Details, setDetails] = useState(false);
  const [designer, setDes] = useState(false);
  let c;
  const [stat, setStat] = useState(0);

  const [formData, setForm] = useState(null);

  const Loading = (state) => {
    console.log("triggred");
    if (state) {
      console.log("coming inside");
      var element = document.getElementById("loading");
      element.style.display = null;
      var element1 = document.getElementById("screen");
      element1.style.opacity = 0.16;
      // setDt('');
    } else {
      var element = document.getElementById("loading");
      element.style.display = "none";
      var element1 = document.getElementById("screen");
      element1.style.opacity = 10;
    }
  };
  const props = { formData, setForm, Loading };
  const props1 = { formData, setForm, user: "designer" };

  if (!Details) {
    search("Projects", "designerEmail", email).then((project) => {
      if (project && project !== "f") {
        setDetails(project);
        console.log(project);
        c = { onCurrent: project.currentStage };
        setForm({ ...project, ...c });
      } else if (project === "f") {
        setDetails("f");
        console.log("f");
        setForm("f");
      }
    });
  }

  if (!designer) {
    search("Designers", "email", email).then((project) => {
      if (project && project !== "f") {
        console.log("designer det : ",project);
        setDes(project.profile);
      } else if (project === "f") {
        //console.log("fuck");
        setDes("nt");
      }
    });
  }

  if (formData) {
    console.log("came but");
    var element = document.getElementById("loading");

    element.style.display = "none";

    var element1 = document.getElementById("screen");

    element1.style.opacity = 10;
  }

  return (
    <div>
      {/* <Navbar1/> */}
      <Navbar4 />

      <div
        className="main_container1"
        style={{ position: "absolute", opacity: "0.16" }}
        id="screen"
      >
        <div className="Sidebar">
          <Navbar />
        </div>

        {formData && formData !== "f" && formData["assigned"] ? (
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
        ) : 
          ((!formData || formData === "f") && designer) || ( formData && formData["desStatus"] && formData["desStatus"] !== 2) ? (
          <div className="outer_container1">
            <NoProjects {...{ x: false, formData }} />
          </div>
        ) : formData && formData["desStatus"] && formData["desStatus"] === 2 && !formData["assigned"] ? (
          <div className="outer_container1">
            <NoProjects {...{ x: 1, formData }} />
          </div>
        ) : (
          <div className="outer_container1">
            <NoProjects {...{ x: true, formData }} />
          </div>
        )}
      </div>
      <div
        id="loading"
        style={{ position: "absolute", marginTop: "45vh", marginLeft: "47vw" }}
      >
        <BarWave width="50px" height="50px" color="#1ABAA9" />
        <p style={{ marginTop: "5vh", marginLeft: "-3vw" }}>{dt}</p>
      </div>
    </div>
  );
}

export default Main;
