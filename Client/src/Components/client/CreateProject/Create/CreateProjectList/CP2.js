import React from "react";
import styles from "../createprojectlist.module.css";

function CP2(props) {
  return (
    <div>
      {/* --------------------------------------- DesignObjectives -2 -----------------------------*/}
      <div
        className={styles.box}
        style={{ display: props.dis === 2 ? "block" : "none" }}
      >
        <span className={styles.title}>Design Objective</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>1</span> Brand Guidelines in
              place
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>2</span> What is the total no
              of words in your content?
            </div>
            <div>
              <input type="number" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>3</span> Look and Feel
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>4</span> How many slides are
              there?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>5</span> Content Deck
            </div>
            <div className={styles.radio_cover}>
              <div>
                <input
                  type="radio"
                  name="tech1"
                  className={styles.input_radio}
                  style={{
                    height: "3vh",
                    width: "3vh",
                    backgroundColor: "#24576A",
                  }}
                />
                <label for="tech1" className={styles.radio_label}>
                  Yes
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="tech1"
                  className={styles.input_radio}
                  style={{
                    height: "3vh",
                    width: "3vh",
                    backgroundColor: "#24576A",
                  }}
                />
                <label for="tech1" className={styles.radio_label}>
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CP2;
