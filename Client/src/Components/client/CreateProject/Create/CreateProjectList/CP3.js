import React from "react";
import styles from "../createprojectlist.module.css";

function CP3() {
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

      {/* --------------------------------------- DesignObjectives -3 -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Design Objective</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>10</span> Are your brand
              guidlines in place?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>11</span> What is your
              objective with this packagin
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>12</span> "Are you looking
              for a primary & Secondary packaging?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------TechDetials 3------------------------------------ */}

      <div className={styles.box}>
        <span className={styles.title}>TECHNICAL DETAILS</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>13</span> Is the material for
              manufacturing decided? If No, What would you want it to be?
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
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>14</span> Pack
              specifications/Dimensions of the label?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>15</span> Is the pack copy
              decided ?
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
              <span style={{ marginRight: "2em" }}>16</span> Style Definition?
              Types of fonts? Colour schemes? if any mind
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>17</span> Format of file for
              final product
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>18</span> Number Of Products
            </div>
            <div>
              <input type="number" className={styles.input} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CP3;
