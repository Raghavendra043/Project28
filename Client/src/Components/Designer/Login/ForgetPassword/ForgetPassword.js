import React, { useRef, useState } from "react";
import e_style from "./../../Signup/SignUp.module.css";
import style from "./../../Signup/SignUp_new/First.module.css";
import styles from "./Forget.module.css";
import { ReactComponent as Man } from "./../assets/Man.svg";
import { ReactComponent as ArrowRight } from "./../assets/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "./../assets/ArrowLeft.svg";

import classnames from "classnames";

function ForgetPassword({ formData, setForm, navigation }) {
  const emailRef = useRef("");

  const submitHander = () => {
    var x = document.getElementsByClassName(styles.message);
    console.log(x[0].classList.toggle(styles.on));
  };

  const startOtp = () => {
    var button = document.getElementsByClassName(styles.cover)[0];
    button.classList.add(style.hide2);
    var button = document.getElementsByClassName(styles.complete)[0];
    button.classList.add(style.hide);
    var button = document.getElementsByClassName(style.otp_input_cover)[0];
    button.classList.remove(style.hide2);
    var button = document.getElementsByClassName(style.otp_titles)[0];
    button.classList.remove(style.hide);
    var button = document.getElementsByClassName(style.otp)[0];
    button.classList.remove(style.hide);
  };

  return (
    <div className={style.signupbox}>
      <div className={e_style.container}>
        <div className={e_style.bottom_background}></div>

        <div className={e_style.page}>
          <div className={e_style.man_svg}>
            <Man />
          </div>
          <div
            className={e_style.box}
            style={{ borderTop: "3px solid #00B4B3" }}
          >
            <div className={e_style.header}>WELCOME BACK!</div>
            <div className={e_style.desc}>
              Freelancing was never this easy!{" "}
            </div>
            <div className={e_style.data}>
              <div className={e_style.input_cover}>
                <div className={e_style.titles}>Password Recovery</div>
                <div className={styles.desc}>
                  Seems like you have forgotten your password but don’t worry,
                  we’ll help you recover it! Enter your registered Email ID
                  below.
                </div>

                <input
                  className={e_style.inputs}
                  type="email"
                  placeholder="Ex: johndoe@example.com"
                  ref={emailRef}
                  name="email"
                  onChange={setForm}
                  value={formData.email}
                  required="true"
                />
                <div className={styles.message}>
                  Password Recovery confirmation has been sent to this email.
                  Please approve to proceed
                </div>
              </div>
            </div>

            <div className={styles.cover}>
              <button
                type="submit"
                className={styles.complete}
                onClick={startOtp}
              >
                Send Recovery Email
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.next}
        onClick={() => {
          if (formData.email.trim()) {
            navigation.next();
          }
        }}
      >
        <ArrowRight className={styles.arrow_right} />
      </div>
    </div>
  );
}

export default ForgetPassword;
