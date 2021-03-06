import React from "react";
import styles from "./Performance.module.css";
import RightUp from "./PerformanceParts/Right/Up/RightUp";
import RightDown from "./PerformanceParts/Right/Down/RightDown";
import DownLeft from "./PerformanceParts/Left/Down/Left/DownLeft";
import DownRight from "./PerformanceParts/Left/Down/Right/DownRight";
import LeftUp from "./PerformanceParts/Left/Up/LeftUp";
import Navbar from "../Dashboard new/Dashboard_Parts/Navbar/Navbar";
import Navbar2 from "../../Navbar/Navbar2";
import Navbar4 from "../../Navbar/Navbar4";

function DesignerPerformance() {
  return (
    <>
      <Navbar4 />
      <div className="Sidebar">
        <Navbar />
      </div>
      <div style={{ backgroundColor: "rgba(250, 235, 235, 0.103)" }}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.l_up}>
              <LeftUp />
            </div>
            <div className={styles.l_down}>
              <div className={styles.l_left}>
                <DownLeft />
              </div>
              <div className={styles.l_right}>
                <DownRight />
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.r_up}>
              <RightUp />
            </div>
            <div className={styles.r_down}>
              <RightDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignerPerformance;
