import React, { useRef, useState } from "react";
import e_style from "./../../Signup/SignUp.module.css";
import styles from "./First.module.css";
import { ReactComponent as Man } from "./../assets/Firstman.svg";
import classnames from "classnames";
import {useLocation} from 'react-router-dom'
import { ReactComponent as ArrowRight } from "./../assets/ArrowRight.svg";

function First({ formData, setForm, navigation }) {
    const location = useLocation();
    //const email = location.state.email;
    const email = 'f20190120@hyderabad.bits-pilani.ac.in'
    console.log('from complete', email, 'rgh');
    const [grad, setGrad] = useState("false");

  const handleGrad = () => {
    setGrad(!grad);
  };
  var expanded = false;
  const showCheckboxes = () => {
    var check = document.getElementsByClassName(styles.checkboxes)[0];
    if (!expanded) {
      expanded = true;
      check.classList.add(styles.show);
      check.classList.remove(styles.hide);
    } else {
      expanded = false;
      check.classList.remove(styles.show);
      check.classList.add(styles.hide);
    }
  };

  return (
    <div className={e_style.container}>
      <div className={e_style.bottom_background}></div>

      <div className={e_style.page}>
        <div className={e_style.man_svg}>
          <Man />
        </div>
        <div className={e_style.box}>
          <div className={styles.header}>COMPLETE YOUR PROFILE</div>
          <div className={e_style.desc}>
            Caution! Existing opportunites ahead{" "}
          </div>
          <div className={e_style.data}>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Choose your Specialization</div>

              <div className={styles.multiselect}>
                <div className={styles.selectBox} onClick={showCheckboxes}>
                  <input
                    type="text"
                    className={styles.profile_input}
                    placeholder="Select Your Specializaiton"
                    disabled
                  />
                  <div clasNname={styles.overSelect}></div>
                </div>
                <div className={classnames(styles.hide, styles.checkboxes)}>
                  <label for="one">
                    <input
                      type="checkbox"
                      id="one"
                      className={styles.checkme}
                    />
                    First checkbox
                  </label>
                  <label for="two">
                    <input
                      type="checkbox"
                      id="two"
                      className={styles.checkme}
                    />
                    Second checkbox
                  </label>
                  <label for="three">
                    <input
                      type="checkbox"
                      id="three"
                      className={styles.checkme}
                    />
                    Third checkbox
                  </label>
                </div>
              </div>
            </div>
            <div
              className={classnames(e_style.input_cover, styles.checkbox_cover)}
            >
              <div className={styles.left}>
                <div className={classnames(e_style.titles, styles.titles)}>
                  Are you a student?
                </div>
                <span className={styles.check}>
                  <input
                    type="checkbox"
                    name="yes"
                    checked={grad}
                    onChange={handleGrad}
                    classname={styles.checkbox}
                  />
                  <label for="yes" style={{ fontSize: "2.5vh" }}>
                    Yes
                  </label>
                </span>
                <span className={styles.check}>
                  <input
                    type="checkbox"
                    name="no"
                    checked={!grad}
                    onChange={handleGrad}
                    classname={styles.checkbox}
                  />
                  <label for="no" style={{ fontSize: "2.5vh" }}>
                    No
                  </label>
                </span>
              </div>
              <div className={styles.right}>
                <div
                  className={classnames(e_style.titles, styles.titles)}
                  style={{ display: grad === true ? "block" : "none" }}
                >
                  Year of Graduation
                </div>
                <input
                  type="text"
                  placeholder="Eg. 2022"
                  style={{ display: grad === true ? "block" : "none" }}
                  className={styles.input}
                />
                <div
                  className={classnames(e_style.titles, styles.titles)}
                  style={{ display: grad === true ? "none" : "block" }}
                >
                  Year of Experience
                </div>
                <input
                  type="text"
                  placeholder="Eg. 5"
                  style={{ display: grad === true ? "none" : "block" }}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={e_style.input_cover}>
              <div className={classnames(e_style.titles, styles.titles)}>
                Work Experience
              </div>
              <div className={styles.work}>
                <div className={styles.work_input}>
                  <input
                    type="text"
                    className={classnames(styles.input, styles.work_left)}
                    placeholder="Your designation"
                    value={formData.work1}
                    onChange={setForm}
                    name="work1"
                  />
                  <input
                    type="text"
                    className={classnames(styles.input, styles.work_right)}
                    placeholder="Your Experience here"
                    value={formData.exp1}
                    onChange={setForm}
                    name="exp1"
                  />
                </div>
                <div className={styles.work_input}>
                  <input
                    type="text"
                    className={classnames(styles.input, styles.work_left)}
                    placeholder="Your designation"
                    value={formData.work2}
                    onChange={setForm}
                    name="work2"
                  />
                  <input
                    type="text"
                    className={classnames(styles.input, styles.work_right)}
                    placeholder="Your Experience here"
                    value={formData.exp2}
                    onChange={setForm}
                    name="exp2"
                  />
                </div>
                <div className={styles.work_input}>
                  <input
                    type="text"
                    className={classnames(styles.input, styles.work_left)}
                    placeholder="Your designation"
                    value={formData.work3}
                    onChange={setForm}
                    name="work3"
                  />
                  <input
                    type="text"
                    className={classnames(styles.input, styles.work_right)}
                    placeholder="Your Experience here"
                    value={formData.exp3}
                    onChange={setForm}
                    name="exp3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.next}
        onClick={async () => {
          if (
            formData.work1.trim() &&
            formData.exp1.trim()
          ) {
            navigation.next();
          }
            navigation.next();
        }}
      >
        <ArrowRight className={styles.arrow_right} />
      </div>
    </div>
  );
}

export default First;
