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

var PROJECT_ID = "68a08b56-b99d-4754-85e8-375c862bef48";
var USER_NAME = "Ragh";

function ProjectTracker({}) {
  const title = "1";
  const dummy = {
    endDate: "",
    projectType: "Design",
    designermail: "Designer@gmail.com",
    id: 1,
    projectSummary: "Sample Project",
    files: {
      0: { files: [] },
      1: {
        files: [],
        clientFiles: [],
        adminFiles: [],
        designerFiles: [],
        feedback: [],
        adminApproval: false,
        clientApproval: false,
        clientFeedback: [],
        approved: false,
        currentState: "Waiting for Files from Designers",
      },
      2: {
        files: [],
        clientFiles: [],
        adminFiles: [],
        designerFiles: [],
        feedback: [],
        adminApproval: false,
        clientApproval: false,
        clientFeedback: [],
        approved: false,
        currentState: "Waiting for Files from Designers",
      },
    },
    startDate: "12-12-12",
    notifications: [],
    title: "Sample",
    currentStage: 1,
    clientEmail: "sample@gmail.com",
  };

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
          <div>
            <Col style={{ height: "90vh", width: "27vw" }}>
              <ChatEngineWrapper>
                <ChatSocket
                  projectID={PROJECT_ID}
                  chatID="59600"
                  chatAccessKey="ca-e9987fb7-0adb-4df6-8f7f-75b06cdc59c9"
                  senderUsername={USER_NAME}
                />
                <ChatFeed />
              </ChatEngineWrapper>
            </Col>
          </div>
        </div>
      ) : (
        <div>Wait</div>
      )}
    </div>
  );
}

export default ProjectTracker;
