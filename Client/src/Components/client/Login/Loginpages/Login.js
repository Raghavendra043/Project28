import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom';
import styles from "./login.module.css"
import style from "../ClientLogin.module.css"
import {ReactComponent as ArrowRight} from '../assets/ArrowLeft.svg'
import { BarWave } from 'react-cssfx-loading/lib'
import { Login } from '../../../../firebasefunctions/login'

function Login1({formData,setForm,navigation}) {

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
        const res = await Login(emailRef.current.value, passwordRef.current.value);
        if(res === true){      
          history.push("/home", {email: emailRef.current.value});
        } else if(res === false) {
          startLoading(false);
          setErr("Email is not Verified, please Verify your email");
        } else {
          startLoading(false);
          setErr(res);
        }
        
      };

    return (
        <>
        <div id= "screen" className={style.signupbox} style={{position:"absolute"}}>
            <div className={styles.container}>
            
            <div className={styles.box}>
                <div className={style.header}>WELCOME BACK!</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                    </div>
                    <div className={style.header2}>Client's Login</div>
        
                <div className={style.data}>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Your Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                            value={formData.email}
                            onChange={setForm}
                            placeholder="Ex: johndoe@gmail.com"
                            // ref = {props.nameRef}
                            name="email"
                        />
                    </div>
                    
                    
                    <div className={style.input_cover}>
                        <div className={style.titles}>Company Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                             value={formData.password}
                            onChange={setForm}
                            placeholder="Ex : Password@123"
                            // ref= {props.phoneRef}
                            name="password"
                        />
                        </div>
                        <div className={style.input_cover}>
                            <div className={style.underinputs}>
                                <div className={style.rememberMe}>
                                    <input type="checkbox" id="remember" name="vehicle1" value="Bike" className={style.remember} />
                                    <label for="remember"> { " "}Remember Me</label>
                                </div>
                                <div className={style.forgotPassword} onClick={navigation.next}>Forgot Password?</div>
                            </div>
                        </div>
                        <div className={styles.cover}>
                        <button className={styles.complete}
                            onClick={submitHander}
                        >Login</button>
                    </div>
                </div>
                </div>
                </div>
                
            {/* <div className={style.next} onClick={() => {
                if (formData.fullname.trim() && formData.email.trim()) {
                    navigation.next();
                }
                }}><ArrowRight className={style.arrow_right}/></div> */}
                
        </div>
        <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Getting account Info</p>
        </div>
        </>
    )
}

export default Login1
