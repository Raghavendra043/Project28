import React from "react";
import Navbar from "../Dashboard new/Dashboard_Parts/Navbar/Navbar";
import styles from "./NoProjects.module.css";
import { ReactComponent as Man } from "./man.svg";
import { useHistory, useLocation } from "react-router-dom";
import { CreateChat } from "../../../trail/createchat";
import { BarWave } from "react-cssfx-loading";
import { toast } from "react-toastify";
import {
  addData,
  getDocData,
  search,
  Update,
} from "../../../firebasefunctions/firestore";

function NoProjects({ x, formData }) {
  const location = useLocation();
  const history = useHistory();
  console.log("x", x);

  const Approve = async () => {
    //Loading(false);
    try {
      const des = await getDocData("Designers", formData.designerEmail);
      const client = await getDocData("Client", formData.clientEmail);
      CreateChat(
        des["chat"].username,
        client["chat"].username,
        formData.title
      ).then(() => {});
      var project = await search("Projects", "title", formData.title);
      project.assigned = true;
      project["designer"] = des["chat"].username;
      project["client"] = client["chat"].username;
      //console.log(project);
      //await Update('Projects', formData.title, project);
      await addData("Projects", formData.title, project);
      //Loading(true);
      //window.location.reload(true);
    } catch (err) {
      //Loading(true);
      toast.error("Error Occured", { position: "bottom-center" });
      console.log(err);
    }
  };
  const Disapprove = async () => {
    //Loading(false);
    try {
      var project = await search("Projects", "title", formData.title);
      project["desStatus"] = 3;
      project["designerEmail"] = "";
      await Update("Projects", formData.title, project);
      //Loading(true);
      window.location.reload(true);
    } catch (err) {
      //Loading(true);
      toast.error("error Occured", { position: "bottom-center" });
      console.log(err);
    }
  };
  return (
    <div>
      {/* <div className={styles.Sidebar}>
                <Navbar/>
            </div> */}

      <div className={styles.RedirectNested}>
        <div className={styles.header}>You dont have any Projects Yet</div>
        <div className={styles.svg}>
          <Man />
        </div>
        <div className={styles.subheader}>Project-28</div>
        {x && x != 1 ? (
          <>
            Please Complete Your Profile to take up projects
            <button
              style={{
                border: "none",
                color: "white",
                background: "#19BBB9",
                borderRadius: "5px",
              }}
              onClick={() => {
                history.push("/designer/complete", {
                  email: formData.designerEmail,
                });
              }}
            >
              Complete
            </button>
          </>
        ) : (
          <></>
        )}
        {x == 1 ? (
          <>
            You have been assigned A project
            <button
              style={{
                border: "none",
                color: "white",
                background: "#19BBB9",
                borderRadius: "5px",
              }}
              onClick={() => {}}
            >
              Download Project Details
            </button>
            <button
              style={{
                border: "none",
                color: "white",
                background: "#19BBB9",
                borderRadius: "5px",
                marginTop: "3vh",
              }}
              onClick={Approve}
            >
              Approve
            </button>
            <button
              style={{
                border: "none",
                color: "white",
                background: "#19BBB9",
                borderRadius: "5px",
                marginTop: "3vh",
              }}
              onClick={Disapprove}
            >
              DisApprove
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default NoProjects;
