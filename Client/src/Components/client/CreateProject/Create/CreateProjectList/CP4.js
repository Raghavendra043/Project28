import React from "react";
import styles from "../createprojectlist.module.css";

function CP4({Data, setData}) {
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
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.companyName  = e.target.value;setData(Data)}}
                label="companyName"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>2</span> Tagline if any
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.tagline  = e.target.value;setData(Data)}}
                label="tagline"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>3</span> Motto{" "}
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.motto  = e.target.value;setData(Data)}}
                label="motto"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>4</span> How long has it been
              since you’ve established the company?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.since  = e.target.value;setData(Data)}}
                label="since"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>5</span> Target Audience ?
              Demographics(gender)
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.target  = e.target.value;setData(Data)}}
                label="target"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>6</span> "What
              emotion/Message do you want to communicate to your audience
              through the design?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.message   = e.target.value;setData(Data)}}
                label="message "
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>7</span> Brand Persona
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.brand   = e.target.value;setData(Data)}}
                label="brand "
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>8</span> Competitor
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.competitor   = e.target.value;setData(Data)}}
                label="competitor "
              />
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------- DesignObjectives -4 -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Design Objective</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>9</span> Are your brand
              guidlines in place?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.guidlinesPlace  = e.target.value;setData(Data)}}
                label="guidlinesPlace"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "1.8em" }}>10</span>What is your
              objective with these creatives
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.objective  = e.target.value;setData(Data)}}
                label="objective"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------TechDetials 4------------------------------------ */}

      <div className={styles.box}>
        <span className={styles.title}>TECHNICAL DETAILS</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>11</span> Number of creatives
            </div>

            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.creatives  = e.target.value;setData(Data)}}
                label="creatives"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>12</span> Which social media
              platform is it for?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.social  = e.target.value;setData(Data)}}
                label="social"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>13</span> What are the
              dimensions of the creative?
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
              <span style={{ marginRight: "2em" }}>14</span> Do you have your
              content deck sorted?
            </div>

            <div className={styles.radio_cover}>
              <div>
                <input
                  type="radio"
                  name="tech11"
                  className={styles.input_radio}
                  style={{
                    height: "3vh",
                    width: "3vh",
                    backgroundColor: "#24576A",
                  }}
                />
                <label for="tech11" className={styles.radio_label}>
                  Yes
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  name="tech11"
                  className={styles.input_radio}
                  style={{
                    height: "3vh",
                    width: "3vh",
                    backgroundColor: "#24576A",
                  }}
                />
                <label for="tech11" className={styles.radio_label}>
                  No
                </label>
              </div>
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>17</span> Any reels or video
              posts?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.reels  = e.target.value;setData(Data)}}
                label="reels"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CP4;
