/* eslint-disable default-case */
import React from "react";

import CreateProject from "./Create/CreateProject";
import CreateProjectList from "./Create/CreateProjectList";
import { useStep } from "react-hooks-helper";

import Navbar3 from "../../Navbar/Navbar3";
import { BarWave } from "react-cssfx-loading/lib";
import Navbar2 from "../../Navbar/Navbar2";
import { useState } from "react";

const steps = [{ id: "create1" }, { id: "create2" }];

export default function CreateP() {
  const startLoading = (x) => {
    if (x) {
      var element = document.getElementById("loading");
      element.style.display = null;
      var element1 = document.getElementById("screen");
      element1.style.opacity = 0.16;
    } else {
      var element = document.getElementById("loading");
      element.style.display = "none";
      var element1 = document.getElementById("screen");
      element1.style.opacity = 10;
    }
  };

  const data = {
    state: "",
    clientName: "",
    title: "",
    start: "",
    companyName: "",
    end: "",
    brief: "",
    obj: "",
  };

  const [formData, setFormData] = useState(data);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setFormData, navigation, startLoading };
  switch (step.id) {
    case "create1":
      return (
        <>
          <div
            style={{
              backgroundColor: "#fafafa",
              height: "100vh",
              position: "fixed",
            }}
          >
            <Navbar2 />
          </div>
          <div>
            <CreateProject {...props} />
          </div>
        </>
      );
    case "create2":
      return (
        <>
          {/* <Navbar2/> */}
          <div id="screen" style={{ position: "absolute", width: "100vw" }}>
            <CreateProjectList {...props} />
          </div>
          <div
            id="loading"
            style={{
              position: "absolute",
              marginTop: "45vh",
              marginLeft: "47vw",
              display: "none",
            }}
          >
            <BarWave width="50px" height="50px" color="#1ABAA9" />
            <p style={{ marginTop: "5vh", marginLeft: "-3vw" }}>
              Creating account, Please wait{" "}
            </p>
          </div>
        </>
      );
  }
}
