import React from "react";
import styles from "./createprojectlist.module.css";
import { ReactComponent as Time } from "./assets/TimePeriod.svg";
import { ReactComponent as Edit } from "./assets/pencil.svg";

function CreateProject() {
  return (
    <div className={styles.Body}>
      <div className={styles.maincontainer}>
        <div className={styles.left}>
          <div className={styles.header}>CREATE A PROJECT</div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Client Name</div>
            <div className={styles.input}>
              <select className={styles.maininput}>
                <option value="something"></option>
                <option value="something">paritosh</option>
                <option value="something">raghavendra</option>
                <option value="something">shashwat</option>
                <option value="something">yatharth</option>
              </select>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Project Name</div>
            <div className={styles.input}>
              <input type="text" className={styles.textinput}></input>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Type of Project </div>
            <div className={styles.input}>
              <select className={styles.maininput}>
                <option value="something"></option>
                <option value="something">paritosh</option>
                <option value="something">raghavendra</option>
                <option value="something">shashwat</option>
                <option value="something">yatharth</option>
              </select>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Company Name</div>
            <div className={styles.input}>
              <input type="text" className={styles.textinput}></input>
            </div>
          </div>
          <div className={styles.TimePeriod}>
            <div className={styles.timeHeader}>
              <div className={styles.timeTitle}>Time Period</div>
              <div className={styles.pencil}>
                <Edit />
              </div>
            </div>
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
            </div>
          </div>
          <div className={styles.button}>Allot Designers</div>
        </div>
        <div className={styles.right}>
          <div className={styles.Number}>PRIYA_N199AOP</div>
          <div className={styles.Para}>
            <div className={styles.paraHead}>Project Objective</div>
            <div className={styles.paramain}>
              Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique
              et. Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut
              tristique et. vLorem ipsum dolor sit amet. Vivamus ra felis
              bibendum ut tristique et.{" "}
            </div>
          </div>
          <div className={styles.Para}>
            <div className={styles.paraHead}>Brief Summary</div>
            <div className={styles.paramain}>
              Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique
              et. Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut
              tristique et. vLorem ipsum dolor sit amet. Vivamus ra felis
              bibendum ut tristique et.{" "}
            </div>
          </div>
          <div className={styles.rightInput}></div>
          <div className={styles.rightInput}></div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
