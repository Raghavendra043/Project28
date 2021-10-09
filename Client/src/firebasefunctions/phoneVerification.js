import { auth } from "../firebase"
import firebase from '../firebase'


const recaptcha = async ()=>{
    try{
        const re = document.getElementById('recaptcha');
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          re,
          {
            size: "invisible",
            callback: function (response) {
              console.log("Captcha Resolved");
              sendcode();
            },
            defaultCountry: "IN",
          }
        );
      }catch(error){
        console.log('1', error);
      }
  };

  export const sendcode = async (number)=>{
    
      await recaptcha();
      let phoneNumber = "+91" + number;
      console.log(phoneNumber);
      let appVerifier = window.recaptchaVerifier;
      firebase.auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          window.confirmationResult = confirmationResult;
          console.log("OTP is sent");
        })
        .catch(function (error) {
          console.log("here", error);
        });
  }

  export const verify = async (otpInput)=>{
    try{
      
      let optConfirm = window.confirmationResult;
      console.log(otpInput);
      const y = await optConfirm.confirm(otpInput);
      console.log("from verufy funciton", y);
      return "1";
    } catch(error){
      console.log(error);
      return "invalid OTP";
    }
  }