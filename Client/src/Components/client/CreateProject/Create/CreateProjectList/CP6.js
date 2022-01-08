import React from "react";
import styles from "../createprojectlist.module.css";

function CP6({Data, setData}) {
  return (
    <div>
      {/* --------------------------------------- DesignObjectives -6 -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Design Objective</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>1</span> Brand Guidelines in
              place
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.guidelines  = e.target.value;setData(Data)}}
                label="guidelines"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>2</span> What is the total no
              of words in your content?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.wordsNo  = e.target.value;setData(Data)}}
                label="wordsNo"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>3</span> Look and Feel
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.look  = e.target.value;setData(Data)}}
                label="look"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>4</span> How many slides are
              there?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.slides  = e.target.value;setData(Data)}}
                label="slides"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>5</span> Dimensions for the
              same
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.dimensions  = e.target.value;setData(Data)}}
                label="dimensions"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>6</span> Content Deck
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

export default CP6;
