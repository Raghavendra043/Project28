<<<<<<< HEAD
import React from "react";
import styles from "./CreateProject.module.css";

function CreateProject() {
  return (
    <div className={styles.container}>
      {/* -----------------------------------------Company OVerview----------------------------- */}
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

      {/* --------------------------------------- Company Overview -2 -----------------------------*/}
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

      {/* -------------------------------------Brand Persona------------------ */}

      <div className={styles.box}>
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

      <div className={styles.box}>
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
              <span style={{ marginRight: "2em" }}>11</span>Style defination
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
    </div>
  );
}

export default CreateProject;
=======
import React from 'react'
import styles from './createproject.module.css'
import {ReactComponent as Time} from './assets/TimePeriod.svg'
import {ReactComponent as Edit} from './assets/pencil.svg'

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
                            <input type='text' className={styles.textinput}></input>
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
                            <input type='text' className={styles.textinput}></input>
                        </div>
                    </div>
                    <div className={styles.TimePeriod}>
                        <div className={styles.timeHeader}>
                            <div className={styles.timeTitle}>Time Period</div>
                            <div className={styles.pencil}><Edit/></div>
                        </div>    
                        <div className={styles.dates}>
                            <div className={styles.date}>
                                <div className={styles.BigDate}>24</div>
                                <div className={styles.smolDate}>
                                    <div className={styles.month}>december</div>
                                    <div className={styles.mainDate}>2092</div>
                                </div>
                            </div>
                            <div className={styles.svg}><Time/></div>
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
                        <div className={styles.paramain}>Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. vLorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et.  </div>
                    </div>
                    <div className={styles.Para}>
                        <div className={styles.paraHead}>Brief Summary</div>
                        <div className={styles.paramain}>Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. vLorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. </div>
                    </div>
                    <div className={styles.rightInput}></div>
                    <div className={styles.rightInput}></div>
                </div>
            </div>
        </div>
    )
}

export default CreateProject
>>>>>>> 887347226b571f5cdcf585b220fb39607b4c821e
