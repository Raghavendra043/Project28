import React, { useState } from "react";
import styles from "../SignupPages/signup2.module.css";
import style from "../Signup.module.css";
import { ReactComponent as ArrowRight } from "../assets/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../assets/ArrowLeft.svg";
import {
  sendcode,
  verify,
} from "../../../../firebasefunctions/phoneVerification";
import styles1 from "../../../Designer/Signup/SignUp.module.css";
import third_styles from "../../../Designer/Signup/SignUp_new/Third.module.css";
import classnames from "classnames";

function Signup2({ formData, setForm, navigation }) {
  const [Err, setErr] = useState("");
  const startOtp = async () => {
    if (!formData.phoneNumber.trim()) {
      setErr("Please Fill all the fields");
    } else {
      await sendcode(formData.phoneNumber);
      var button = document.getElementsByClassName(third_styles.cover)[0];
      button.classList.add(styles1.hide2);
      var button = document.getElementsByClassName(styles.complete)[0];
      button.classList.add(styles1.hide);
      var button = document.getElementsByClassName(styles1.otp_input_cover)[0];

      button.classList.remove(styles1.hide2);
      var button = document.getElementsByClassName(styles1.otp_titles)[0];
      console.log(button);
      // button.classList.remove(styles1.hide);
      // var button = document.getElementsByClassName(styles1.otp)[0];
      // button.classList.remove(styles1.hide);
    }
  };
  return (
    <div className={style.signupbox}>
      <div className={style.previous} onClick={navigation.previous}>
        <ArrowLeft className={style.arrow_left} />
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={style.header}>DEAR client</div>
          <div className={style.desc}>Freelancing was never this easy! </div>

          <div className={style.data}>
            <div className={style.input_cover}>
              <div className={style.titles}>Your Phone Number</div>
              <input
                className={style.inputs}
                type="tel"
                value={formData.phoneNumber}
                onChange={setForm}
                placeholder="Eg. +91 9123456789"
                // ref= {props.phoneRef}
                name="phoneNumber"
              />
            </div>
          </div>
          {/* <div className={styles.otp_input_cover}>
                    <div className={styles.otp_titles}>Enter OTP</div>
                    <div className={styles.otp}>
                        <input type="tel" className={styles.number} placeholder='-' name="otp1" value={formData.otp1} onChange={setForm} />
                        <input type="text" className={styles.number} placeholder='-' name="otp2" value={formData.otp2} onChange={setForm}/>
                        <input type="text" className={styles.number} placeholder='-' name="otp3" value={formData.otp3} onChange={setForm}/>
                        <input type="text" className={styles.number} placeholder='-' name="otp4" value={formData.otp4} onChange={setForm}/>
                    </div>
                </div> */}
          <div id="recaptcha" style={{ display: "none" }}></div>
          <div className={classnames(styles1.complete, third_styles.cover)}>
            <button
              className={classnames(styles.complete)}
              style={{ maginTop: "8vh" }}
              onClick={startOtp}
            >
              Send Verification
            </button>
          </div>

          <div className={classnames(styles1.otp_input_cover, styles1.hide2)}>
            <div className={classnames(styles1.otp_titles, styles1.hide)}>
              Enter OTP
            </div>
            <div className={classnames(styles1.otp, styles1.hide)}>
              <input
                type="number"
                placeholder="******"
                className={styles1.otp_input}
                name="otp"
                value={formData.otp}
                onChange={setForm}
              />
            </div>
          </div>
          <div id="message" value={Err} className={third_styles.errorMessage}>
            {Err}{" "}
          </div>
        </div>
      </div>

      <div
        className={style.next}
        onClick={async () => {
          navigation.next();
          if (formData.phoneNumber.trim() && formData.otp.trim()) {
            let Verify = await verify(formData.otp);
            if (Verify == "1") {
              navigation.next();
            } else {
              setErr("Incorrect OTP");
            }
          }
        }}
      >
        <ArrowRight className={style.arrow_right} />
      </div>
    </div>
  );
}

export default Signup2;
