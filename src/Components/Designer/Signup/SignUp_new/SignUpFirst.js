import React, { useRef, useState } from "react";
import styles from "./First.module.css";
import third_styles from "./Third.module.css";
import style from "../../Signup/SignUp.module.css";
import { ReactComponent as ArrowRight } from "./../assests/ArrowRight.svg";
import classnames from "classnames";
import { BarWave } from "react-cssfx-loading";
import { toast } from "react-toastify";

import {
  sendcode,
  verify,
} from "../../../../firebasefunctions/phoneVerification";
import { signup } from "../../../../firebasefunctions/login";
import { search } from "../../../../firebasefunctions/firestore";
require('dotenv');

function SignUpFirst({ formData, setForm, navigation, startLoading }) {
  
  console.log(navigation);
  console.log(formData);
  const [Err, setErr] = useState("");
  const [phone, setPhone] = useState(false);
  
  

  const startOtp = async () => {
    if (
      !(
        formData.fullname &&
        formData.fullname.trim() &&
        formData.email &&
        formData.email.trim() &&
        formData.phonenumber &&
        formData.phonenumber.trim()
      )
    ) {
      //setErr("Please Fill all the fields");
      toast.error("Please Fill all the Fields", {className:'darktoast' ,position: toast.POSITION.BOTTOM_CENTER});
    } else {
      await sendcode(formData.phonenumber);
      var button = document.getElementsByClassName(third_styles.cover)[0];
      button.classList.add(styles.hide2);
      var button = document.getElementsByClassName(third_styles.complete)[0];
      button.classList.add(styles.hide);
      var button = document.getElementsByClassName(styles.otp_input_cover)[0];
      button.classList.remove(styles.hide2);
      var button = document.getElementsByClassName(styles.otp_titles)[0];
      button.classList.remove(styles.hide);
      var button = document.getElementsByClassName(styles.otp)[0];
      button.classList.remove(styles.hide);
    }
  };

  return (
    <>
    <div className={style.signupbox} >
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={style.header}>DEAR DESIGNER</div>
          <div className={style.desc}>Freelancing was never this easy! </div>

          <div className={style.data}>
            <div className={style.input_cover}>
              <div className={style.titles}>Your Name</div>
              <input
                className={style.inputs}
                type="text"
                value={formData.fullname}
                onChange={setForm}
                name="fullname"
                placeholder="Enter Your Full Name"
                // ref = {props.nameRef}
                
              />
            </div>
            <div className={style.input_cover}>
              <div className={style.titles}>Enter Your Email ID</div>
              <input
                className={style.inputs}
                type="email"
                value={formData.email}
                onChange={setForm}
                placeholder="Eg. johndoe@email.com"
                // ref = {props.emailRef}
                name="email"
                required = "true"
              />
            </div>
            <div className={style.input_cover}>
              <div className={style.titles}>Your Phone Number</div>
              <input
                className={style.inputs}
                type="tel"
                value={formData.phonenumber}
                onChange={setForm}
                placeholder="Eg. +91 9123456789"
                // ref= {props.phoneRef}
                name="phonenumber"
              />
            </div>
          </div>

          <div id="recaptcha" style={{ display: "none" }}></div>
          <div className={classnames(styles.complete, third_styles.cover)}>
            <button
              className={classnames(third_styles.complete)}
              style={{ maginTop: "8vh" }}
              onClick={startOtp}
            >
              Send Verification
            </button>
          </div>

          <div className={classnames(styles.otp_input_cover, styles.hide2)}>
            <div className={classnames(styles.otp_titles, styles.hide)}>
              Enter OTP
            </div>
            <div className={classnames(styles.otp, styles.hide)}>
              <input
                type="number"
                placeholder="******"
                className={styles.otp_input}
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
          startLoading(true);
          if (
            formData.fullname.trim() &&
            formData.email.trim() &&
            formData.phonenumber.trim()
          ) {
            let Verify = await verify(formData.otp);
            if (Verify === "1" || phone === true) {
              setPhone(true);
              const sign = await search('Designers', "email", formData.email);
              console.log(sign);
              if (sign != "f") {  
                startLoading(false);
                //setErr(`EmailID already in use. Please Login ${formData.email}`);
      toast.error("EmailID already in use. Please Login", {className:'darktoast' ,position: toast.POSITION.BOTTOM_CENTER});
                
              } else {
                startLoading(false);
                navigation.next();
              }
            } else {
              startLoading(false);
              //setErr("invalid OTP");
      toast.error("invalid OTP", {className:'darktoast' ,position: toast.POSITION.BOTTOM_CENTER});

            }
          } else {
            startLoading(false);
      toast.error("Please Fill all the Fields", {className:'darktoast' ,position: toast.POSITION.BOTTOM_CENTER});
            
            //setErr("Please Fill all the Fields");
          }
        }}
      >
        <ArrowRight className={style.arrow_right} />
      </div>
    </div>
    
    </>
  );
}

export default SignUpFirst;
