import React from "react";
import styles from "../createprojectlist.module.css";

function CP1({Data, setData}) {
  return (
    <div>
      {/* -----------------------------------------Company OVerview----------------------------- */}
      <div className={styles.box}>
        <span className={styles.title}>Company Overview</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>1</span> Name of the company
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.companyName = e.target.value;setData(Data)}}
                label="companyName"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>2</span>Tagline if any
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.tagline = e.target.value;setData(Data)}}
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
                onChange={(e) => {Data.motto = e.target.value;setData(Data)}}
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
                onChange={(e) => {Data.since = e.target.value;setData(Data)}}
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
                onChange={(e) => {Data.target = e.target.value;setData(Data)}}
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
                onChange={(e) => {Data.message = e.target.value;setData(Data)}}
                label="message"
              />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------Brand Persona------------------ */}

      <div className={styles.box}>
        <span className={styles.title}>Brand Persona</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>7</span> Competitor
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.competitor = e.target.value;setData(Data)}}
                label="competitor"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>8</span> Could share the
              story of how you came up with the name/story of the foundation of
              the company?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.story = e.target.value;setData(Data)}}
                label="story"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>9</span> Are your brand
              guidlines in place?{" "}
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.guidlinesPlace = e.target.value;setData(Data)}}
                label="guidlinesPlace"
              />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------Technical Details 1 -------------------------- */}

      <div className={styles.box}>
        <span className={styles.title}>TECHNICAL DETAILS</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>10</span> What kind of brand
              collaterals are you looking for?
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.brandcolleteral = e.target.value;setData(Data)}}
                label="brandcolleteral"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>11</span> Style defination
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.styledef = e.target.value;setData(Data)}}
                label="styledef"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>12</span> Application of the
              collaterals
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.applicationCollateral = e.target.value;setData(Data)}}
                label="applicationCollateral"
              />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>13</span> Illustration style
              if any
            </div>
            <div>
              <input type="text" className={styles.input} 
                onChange={(e) => {Data.illustration = e.target.value;setData(Data)}}
                label="illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CP1;
