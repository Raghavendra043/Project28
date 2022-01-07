import React from "react";
import styles from "./createprojectlist.module.css";
import { ReactComponent as Time } from ".././assets/TimePeriod.svg";
import { ReactComponent as Edit } from ".././assets/pencil.svg";
import Navbar from "../../Dashboard/Dashboard_Parts/Navbar/Navbar";
import Navbar2 from "../../../Navbar/Navbar2";
import CP1 from "./CreateProjectList/CP1";
import CP2 from "./CreateProjectList/CP2";
import CP3 from "./CreateProjectList/CP3";
import CP4 from "./CreateProjectList/CP4";
import CP5 from "./CreateProjectList/CP5";
import CP6 from "./CreateProjectList/CP6";

function CreateProjectList() {
  let dis = 5;

  return (
    <div className={styles.container}>
      <Navbar2 />
      <div style={{ height: "6vh" }}></div>
      <div style={{ position: "absolute" }}>
        <Navbar />{" "}
      </div>
      <span style={{ display: dis === 1 ? "block" : "none" }}>
        <CP1 />
      </span>
      <span style={{ display: dis === 2 ? "block" : "none" }}>
        <CP2 />
      </span>
      <span style={{ display: dis === 3 ? "block" : "none" }}>
        <CP3 />
      </span>
      <span style={{ display: dis === 4 ? "block" : "none" }}>
        <CP4 />
      </span>
      <span style={{ display: dis === 5 ? "block" : "none" }}>
        <CP5 />
      </span>
      <span style={{ display: dis === 6 ? "block" : "none" }}>
        <CP6 />
      </span>

      {/* --------------------------------------- Time Period -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Time Period</span>
        <div className={styles.time}>
          <div className={styles.detail}>MileStone</div>

          <div className={styles.dates}>
            <div className={styles.date}>
              <div className={styles.BigDate}>24</div>
              <div className={styles.smolDate}>
                <div className={styles.month}>december</div>
                <div className={styles.mainDate}>2092</div>
              </div>
            </div>
            <div className={styles.svg}>
              <Time />
            </div>
            <div className={styles.date}>
              <div className={styles.BigDate}>24</div>
              <div className={styles.smolDate}>
                <div className={styles.month}>december</div>
                <div className={styles.mainDate}>2092</div>
              </div>
            </div>
            <div className={styles.pencil}>
              <Edit />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProjectList;
