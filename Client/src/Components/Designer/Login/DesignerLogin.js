import React, { useRef, useState } from "react";
import e_style from "./../Signup/SignUp.module.css";
import styles from "./Login.module.css";
import { ReactComponent as Man } from "./assets/Man.svg";

function DesignerLogin() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [checkState, setCheckState] = useState(false);

  const submitHander = () => {};

  return (
    <div className={e_style.container}>
      <div className={e_style.bottom_background}></div>

      <div className={e_style.page}>
        <div className={e_style.man_svg}>
          <Man />
        </div>
        <div className={e_style.box}>
          <div className={e_style.header}>WELCOME BACK!</div>
          <div className={e_style.desc}>Freelancing was never this easy! </div>
          <div className={e_style.data}>
            <div className={styles.title}>Designer's Login</div>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Enter Your Email ID</div>
              <input
                className={e_style.inputs}
                type="email"
                placeholder="Ex: johndoe@example.com"
                ref={emailRef}
                required="true"
              />
            </div>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Enter Your Password</div>
              <input
                className={e_style.inputs}
                type="password"
                placeholder="Ex: Password@123"
                ref={passwordRef}
                required="true"
              />
            </div>
            <div className={styles.login_specifics}>
              <div className={styles.check}>
                <input
                  type="checkbox"
                  name="remember"
                  className={styles.checkbox}
                />
                <label for="remember" style={{ fontSize: "2.5vh" }}>
                  Remember Me
                </label>
              </div>
              <div className={styles.forget}>
                <a href="#" className={styles.link}>
                  Forget Password?
                </a>
              </div>
            </div>

            <div className={styles.cover}>
              <button onClick={submitHander} className={styles.complete}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignerLogin;
