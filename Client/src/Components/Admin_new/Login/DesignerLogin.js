import React, { useRef, useState } from "react";
import { useHistory } from 'react-router-dom';
import e_style from "./SignUp.module.css";
import styles from "./Login.module.css";
import { ReactComponent as Man } from "./assets/Man.svg";
import {Login} from '../../../firebasefunctions/login'
import { BarWave } from "react-cssfx-loading";
import {getDocData, search} from '../../../firebasefunctions/firestore'
import Navbar1 from "../../Navbar/Navbar1";
import { blue, green, red } from "@material-ui/core/colors";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { css } from "glamor";

toast.configure()

function AdminLogin() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [checkState, setCheckState] = useState(false);
  const [Err, setErr] = useState(false);
  const history = useHistory();


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
    const data = await getDocData('Admin', 'Auth');
    const email = data.username;
    const password = data.password;
    if(emailRef.current.value === email && passwordRef.current.value === password){
      startLoading(false);
      history.push('/pro');
    } else {
      startLoading(false);
      toast('Invalid Credentials', {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
    
    
  };


  return (
    <>
    <Navbar1/>
    <div id= "screen" className={e_style.container} style={{position:"absolute"}}>
      <div className={e_style.bottom_background}></div>

      <div className={e_style.page} >
        <div className={e_style.man_svg}>
          {/* <Man /> */}
        </div>
        <div className={e_style.box}>
          <div className={e_style.header}>WELCOME BACK!</div>
          <div className={e_style.desc}>Freelancing was never this easy! </div>
          <div className={e_style.data}>
            <div className={styles.title}>Admin's Login</div>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Enter your Username</div>
              <input
                id="Email"
                className={e_style.inputs}
                type="email"
                placeholder="Ex: johndoe"
                ref={emailRef}
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
            

            <div className={styles.cover}>
              <button onClick={submitHander} className={styles.complete}>
                Login
              </button>
            </div>
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

export default AdminLogin;
