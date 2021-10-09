import React from "react";
import styles from "../Loginpages/forgotpassword.module.css";
import style from "../ClientLogin.module.css";
import {ReactComponent as ArrowLeft} from '../assets/ArrowLeft.svg'

function ForgotPassword({ formData, setForm, navigation }) {
  return (
    <div>
      <div className={style.signupbox}>
        <div className={style.previous} onClick={navigation.previous}>
                    <ArrowLeft className={style.arrow_left}/>
                </div>
            
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={style.header}>DEAR DESIGNER!</div>
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
                  // ref = {props.nameRef}
                  name="email"
                />
              </div>

              <div className={styles.cover}>
                <button className={styles.complete} onClick={navigation.next}>Send Recovery Mail</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
