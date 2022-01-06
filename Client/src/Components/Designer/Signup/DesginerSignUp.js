import React, { useRef } from "react";
import { useForm, useStep } from "react-hooks-helper";

import styles from "./SignUp.module.css";

import SignUpFirst from "./SignUp_new/SignUpFirst";
import SignUpSecond from "./SignUp_new/SignUpSecond";
import SignUpThird from "./SignUp_new/SignUpThird";
import { BarWave } from "react-cssfx-loading";
import { ReactComponent as FirstMan } from "./assests/Firstman.svg";
import { ReactComponent as SecondMan } from "./assests/SecondMan.svg";
import { ReactComponent as ThirdMan } from "./assests/ThirdMan.svg";
import Navbar2 from "../../Navbar/Navbar2";
import Navbar1 from "../../Navbar/Navbar1";

const defaultData = {
  fullname: "",
  email: "",
  phonenummber: "",
  otp: "",
  password1: "",
  password2: "",
};
const steps = [{ id: "Signup1" }, { id: "Signup2" }, { id: "Signup3" }];
function DesginerSignUp() {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  


  const startLoading = (x)=>{
    if(x)
        {var element = document.getElementById('loading');
        element.style.display = null;
        var element1 = document.getElementById('screen');
        element1.style.opacity = 0.16;
      } else {
          var element = document.getElementById('loading');
          element.style.display = "none";
          var element1 = document.getElementById('screen');
          element1.style.opacity = 10;
        }
    }
    const props = { formData, setForm, navigation, startLoading };

  switch (step.id) {
    case "Signup1":
      return (
        <>
        <Navbar1/>
          <div className={styles.container} id = 'screen' style={{position:"absolute"}}>
            <div className={styles.bottom_background}></div>
            <div className={styles.third}>
              <div className={styles.man_svg}>
                <FirstMan />
              </div>
              <div className={styles.box}>
                <SignUpFirst {...props} />
              </div>
            </div>
          </div>
          <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
          </div>
          
        </>
      );
    case "Signup2":
      return (
        <>
          <div className={styles.container} id = 'screen' style={{position:"absolute"}}>
            <div className={styles.bottom_background}></div>
            <div className={styles.third}>
              <div className={styles.man_svg}>
                <SecondMan />
              </div>
              <div className={styles.box}>
                <SignUpSecond {...props} />
              </div>
            </div>
          </div>
          <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
          </div>
        </>
      );
    case "Signup3":
      return (
        <>
          <div className={styles.container} id = 'screen' style={{position:"absolute"}}>
            <div className={styles.bottom_background}></div>
            <div className={styles.third}>
              <div className={styles.man_svg}>
                <ThirdMan />
              </div>
              <div className={styles.box}>
                <SignUpThird {...props} />
              </div>
            </div>
          </div>
          <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
          </div>
          
        </>
      );
  }
}

export default DesginerSignUp;
