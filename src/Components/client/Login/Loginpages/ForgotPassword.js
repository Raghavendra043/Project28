import React, { useRef } from "react";
import styles from "../Loginpages/forgotpassword.module.css";
import style from "../ClientLogin.module.css";
import {ReactComponent as ArrowLeft} from '../assets/ArrowLeft.svg'
import axios from "axios";
import { useState } from "react";
import { ChatSettingsTop } from "react-chat-engine";
import { toast } from "react-toastify";

function generate_token(length){
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

function ForgotPassword({ formData, setForm, navigation }) {

  const [Error, setErr] = useState();
  const [otp, setOTp] = useState();
  const email = useRef();
  const Otp = useRef();
  const [Text1, setText] = useState("Send Recovery Email");
  const forgot =()=>{
    try{
      axios.post('link', {email:email}).then(()=>{

      })
    } catch(err){
      console.log(err);

    }
  }

  return (
    <div>
      <div className={style.signupbox}>
        <div className={style.previous} onClick={navigation.previous}>
                    <ArrowLeft className={style.arrow_left}/>
                </div>
            
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={style.header}>DEAR Client!</div>
            <div className={style.desc}>Freelancing was never this easy! </div>
            

            <div className={style.data}>
              <div className={style.input_cover}>
                <div className={style.titles}>Password Recovery</div>
                <div className={style.desc1}>Seems like you have forgotten your password but don’t worry, we’ll help you recover it! Enter your registered Email ID below. </div>
                <input
                  className={style.inputs}
                  type="text"
                  value={formData.email}
                  onChange={setForm}
                  placeholder="Ex: johndoe@gmail.com"
                  ref = {email}
                  name="email"
                />
                <div style={{marginTop:"1vh", display:"none"}} id="OTP">
                  <div className={style.desc1}><b>Enter the OTP</b><br/>OTP will be sent to Email address {email && email.current ? <>{email.current.value}</>:<></>}</div>
                <input
                  className={style.inputs}
                  type="text"
                  placeholder="OTP"
                  ref= {Otp}
                /></div>
              </div>
              
              

              <div className={styles.cover}>
                <button className={styles.complete} onClick={async()=>{
                  try{if(Text1 === "Send Recovery Email"){
                  setText("Next");
                  document.getElementById("OTP").style.display = "block";
                  const ran = generate_token(9);
                  setOTp(ran);
                  axios.get(`${process.env.REACT_APP_BACK}/resetpassword`, {params:{email:email.current.value, OTP:ran}}).then((req, res)=>{})
                } else {
                  console.log(otp);
                  if(Otp.current.value === otp ){
                    navigation.next();
                  } else {
                    toast.error("Wrong OTP", {position:"bottom-center"});
                  }
                }} catch(err){
                  toast.error("Error Occured", {position:"bottom-center"});
                }
                  
                }
                  
                  }>{Text1}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
