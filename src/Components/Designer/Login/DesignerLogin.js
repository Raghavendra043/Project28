/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState } from "react";
import { useHistory } from 'react-router-dom';
import e_style from "./../Signup/SignUp.module.css";
import styles from "./Login.module.css";
import { ReactComponent as Man } from "./assets/Man.svg";
import {Login} from '../../../firebasefunctions/login'
import { BarWave } from "react-cssfx-loading";
import {search} from '../../../firebasefunctions/firestore'
import Navbar1 from "../../Navbar/Navbar1";
import { blue, green, red } from "@material-ui/core/colors";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";

toast.configure()

function DesignerLogin() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [checkState, setCheckState] = useState(false);
  const [Err, setErr] = useState(false);
  const history = useHistory();

  const check=()=>{
    const Em = emailRef.current.value;
    var mail_format = /\S+@\S+\.\S+/;
    console.log(Em, mail_format.test(Em));
    if(!mail_format.test(Em)){
      const element = document.getElementById("Email");
      element.style.borderColor = "red";
      //setErr("error");
      //toast("error", {position: toast.POSITION.BOTTOM_CENTER});
    } else {
      const element = document.getElementById("Email");
      element.style.borderColor = "black";
      setErr("");
    }
  }

  const startLoading = (x)=>{
      if(x)
      {var element = document.getElementById('loading');
      element.style.display = null;
      var element1 = document.getElementById('screen');
      element1.style.opacity = 0.16;
      const email = emailRef.current.value;} else {
        var element = document.getElementById('loading');
        element.style.display = "none";
        var element1 = document.getElementById('screen');
        element1.style.opacity = 10;
        const email = emailRef.current.value;
      }
  }
  const submitHander = async () => {
    startLoading(true);
    const res = await Login(emailRef.current.value, passwordRef.current.value);
    if(res === true){      
      history.push("/home", {email: emailRef.current.value});
    } else if(res === false) {
      startLoading(false);
      //setErr("Email is not Verified, please Verify your email");
      toast("EmailID is not Verified", {className:'darktoast' ,position: toast.POSITION.BOTTOM_CENTER});
    } else {
      startLoading(false);
      toast.error("Invalid EmailID or password", {className: 'dark-toast',
      progressClassName: 'transparent-progress',position: toast.POSITION.BOTTOM_CENTER});

    }
    
  };


  return (
    <>
    <Navbar1/>
    <div id= "screen" className={e_style.container} style={{position:"absolute"}}>
      <div className={e_style.bottom_background}></div>

      <div className={e_style.page} >
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
                id="Email"
                className={e_style.inputs}
                type="email"
                placeholder="Ex: johndoe@example.com"
                ref={emailRef}
                onChange={check}
                required
              />
            </div>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Enter Your Password</div>
              <input
                className={e_style.inputs}
                type="password"
                placeholder="Ex: Password@123"
                ref={passwordRef}
                required
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
                <a className={styles.link} onClick={()=>{history.push('/designer/forget');}}>
                  Forget Password?
                </a>
              </div>
            </div>

            <div className={styles.cover}>
              <button onClick={submitHander} className={styles.complete}>
                Login
              </button>
            </div>
            <div style={{textAlign:"center"}}
              onClick={()=>{
                history.push("/designer/signup");
              }}
            >dont have an account ? Signup</div>
            <div>
              {Err} 
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
    <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
      <BarWave width="50px" height="50px" color="#1ABAA9"/>
      <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Getting account Info</p>
    </div>
    </>
  );
}

export default DesignerLogin;
