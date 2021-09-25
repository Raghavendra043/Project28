import React, { useRef, useState } from "react";
import e_style from "./../../Signup/SignUp.module.css";
import styles from "./First.module.css";
import { ReactComponent as Man } from "./../assets/Firstman.svg";
import classnames from 'classnames';

function First() {


  return (
    <div className={e_style.container}>
      <div className={e_style.bottom_background}></div>

      <div className={e_style.page}>
        <div className={e_style.man_svg}>
          <Man />
        </div>
        <div className={e_style.box} style={{ borderTop: "3px solid #00B4B3" }}>
          <div className={e_style.header}>COMPLETE YOUR PROFILE</div>
          <div className={e_style.desc}>
            Caution! Existing opportunites ahead{" "}
          </div>
          <div className={e_style.data}>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Choose your Specialization</div>
              <input
                className={e_style.inputs}
                type="text"
                placeholder="Ex: johndoe@example.com"
                required="true"
              />
            </div>
            <div className={classnames(e_style.input_cover,styles.checkbox_cover)}>
              <div className={styles.left}>
                <div className={classnames(e_style.titles,styles.titles)}>Are you a student?</div>
                <span className={styles.check}>
                  <input type="checkbox" name='yes'  classname={styles.checkbox} />
                  <label for='yes'>Yes</label>
                </span>
                <span className={styles.check}>
                  <input type="checkbox" name='no' classname={styles.checkbox}/>
                  <label for='no'>No</label>
                </span>
              </div>
              <div className={styles.right}>
                <div className={classnames(e_style.titles,styles.titles)}>Year of Graduation</div>
                <input type='text' placeholder='Eg. 2022' className={styles.input}/>
              </div>
            </div>

            <div className={e_style.input_cover}>
              <div className={classnames(e_style.titles,styles.titles)}>Work Experience</div>
              <div className={styles.work}>
                <div className={styles.work_input}>
                  <input type='text' className={classnames(styles.input,styles.work_left)} placeholder="Your designation"/>
                  <input type='text' className={classnames(styles.input,styles.work_right)} placeholder="Your Experience here"/>
                </div>
                <div className={styles.work_input}>
                  <input type='text' className={classnames(styles.input,styles.work_left)} placeholder="Your designation"/>
                  <input type='text' className={classnames(styles.input,styles.work_right)} placeholder="Your Experience here"/>
                </div>
                <div className={styles.work_input}>
                  <input type='text' className={classnames(styles.input,styles.work_left)} placeholder="Your designation"/>
                  <input type='text' className={classnames(styles.input,styles.work_right)} placeholder="Your Experience here"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default First;
