import React from "react";
import styles from "../createprojectlist.module.css";

function CP5() {
  return (
    <div>
      {/* --------------------------------------- Company Overview -3 -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Company Overview</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>1</span> Name of the company
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>2</span> Tagline if any
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>3</span> Motto{" "}
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>4</span> How long has it been
              since you’ve established the company?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>5</span> Target Audience ?
              Demographics(gender)
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>6</span> "What
              emotion/Message do you want to communicate to your audience
              through the design?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>7</span> Brand Persona
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>8</span> Competitor
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- DesignObjectives -5 -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Design Objective</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2.1em" }}>9</span> What kind of logo
              are you looking for?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>10</span>Style definition
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>11</span>Look and Feel
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>12</span>Application of the
              Logo
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CP5;
