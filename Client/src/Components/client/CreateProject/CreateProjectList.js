import React from "react";
import styles from "./createprojectlist.module.css";
import { ReactComponent as Time } from "./assets/TimePeriod.svg";
import { ReactComponent as Edit } from "./assets/pencil.svg";
import Navbar2 from "../../Navbar/Navbar2";
import Navbar from "../Dashboard/Dashboard_Parts/Navbar/Navbar";

function CreateProjectList() {
  let dis = 5;

  return (
    <div className={styles.container}>
      <Navbar2/><div style={{height:"6vh"}}></div>
      <div style={{position:"absolute"}}><Navbar/></div>
      {/* -----------------------------------------Company OVerview----------------------------- */}
      <div
        className={styles.box}
        style={{ display: dis === 1 ? "block" : "none"}}
      >
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
              <span style={{ marginRight: "2em" }}>2</span>Tagline if any
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
        </div>
      </div>

      {/* -------------------------------------Brand Persona------------------ */}

      <div
        className={styles.box}
        style={{ display: dis === 1 ? "block" : "none" }}
      >
        <span className={styles.title}>Brand Persona</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>7</span> Competitor
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>8</span> Could share the
              story of how you came up with the name/story of the foundation of
              the company?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>9</span> Are your brand
              guidlines in place?{" "}
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------Technical Details 1 -------------------------- */}

      <div
        className={styles.box}
        style={{ display: dis === 1 ? "block" : "none" }}
      >
        <span className={styles.title}>TECHNICAL DETAILS</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>10</span> What kind of brand
              collaterals are you looking for?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>11</span> Style defination
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>12</span> Application of the
              collaterals
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>13</span> Illustration style
              if any
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- DesignObjectives -2 -----------------------------*/}
      <div
        className={styles.box}
        style={{ display: dis === 2 ? "block" : "none" }}
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

      {/* --------------------------------------- Company Overview -3 -----------------------------*/}
      <div
        className={styles.box}
        style={{
          display: dis === 3 || dis === 4 || dis === 5 ? "block" : "none",
        }}
      >
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
      <div
        className={styles.box}
        style={{ display: dis === 3 ? "block" : "none" }}
      >
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

      <div
        className={styles.box}
        style={{ display: dis === 3 ? "block" : "none" }}
      >
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

      {/* --------------------------------------- DesignObjectives -4 -----------------------------*/}
      <div
        className={styles.box}
        style={{ display: dis === 4 ? "block" : "none" }}
      >
        <span className={styles.title}>Design Objective</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>9</span> Are your brand
              guidlines in place?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "1.8em" }}>10</span>What is your
              objective with these creatives
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------TechDetials 4------------------------------------ */}

      <div
        className={styles.box}
        style={{ display: dis === 4 ? "block" : "none" }}
      >
        <span className={styles.title}>TECHNICAL DETAILS</span>
        <div className={styles.items}>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>11</span> Number of creatives
            </div>

            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>12</span> Which social media
              platform is it for?
            </div>
            <div>
              <input type="text" className={styles.input} />
            </div>
          </div>
          <div className={styles.field}>
            <div className={styles.detail}>
              <span style={{ marginRight: "2em" }}>13</span> What are the
              dimensions of the creative?
            </div>

            <div>
              <input type="text" className={styles.input} />
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
              <input type="text" className={styles.input} />
            </div>
          </div>
        </div>
      </div>

      {/* --------------------------------------- DesignObjectives -5 -----------------------------*/}
      <div
        className={styles.box}
        style={{ display: dis === 5 ? "block" : "none" }}
      >
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

      {/* --------------------------------------- DesignObjectives -6 -----------------------------*/}
      <div
        className={styles.box}
        style={{ display: dis === 6 ? "block" : "none" }}
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
              <span style={{ marginRight: "2em" }}>5</span> Dimensions for the
              same
            </div>
            <div>
              <input type="text" className={styles.input} />
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
