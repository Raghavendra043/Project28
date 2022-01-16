import React, { useState } from "react";
import styles from "./ProjectTracker.module.css";
import About from "./TrackerParts/About";
import { useForm } from "react-hooks-helper";
import Utilites from "./TrackerParts/Utilites";
import { ChatEngine } from "react-chat-engine";
import { addData, getDocData } from "../../../firebasefunctions/firestore";
import {
  ChatEngineWrapper,
  ChatSocket,
  ChatList,
  ChatFeed,
  ChatSettings,
} from "react-chat-engine";
import { Col } from "react-grid-system";
import axios from "axios";
import Navbar3 from "../../Navbar/Navbar3";
import { useHistory, useLocation } from "react-router-dom";
import Fourth from "./TrackerParts/Fourth/Fourth";

var PROJECT_ID = "68a08b56-b99d-4754-85e8-375c862bef48";
var USER_NAME = "Ragh";

function ProjectTracker({}) {
  const location = useLocation();
  const title = location.state.title;
  
  console.log('title : ', title);
  //const [formData1, setForm] = useForm(dummy);
  const [formData, setForm] = useState(null);
  if (!formData) {
    getDocData("Projects", title)
      .then((project) => {
        console.log(project);
        setForm(project);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const print = () => {
    console.log("printed");
  };

  const props = { formData, setForm, print };
  const props1 = { formData};

  return (
    <div>
      <Navbar3/>
      {formData ? (
        <div className={styles.container}>
          <div className={styles.about}>
            {formData ? <About {...props} /> : null}
          </div>
          <div className={styles.details}>
            {formData ? <Utilites {...props} /> : null}
          </div>
          <div className=" fourth">
              <Fourth {...props1} />
            </div>
        </div>
      ) : (
        <div>Wait</div>
      )}
    </div>
  );
}

export default ProjectTracker;
