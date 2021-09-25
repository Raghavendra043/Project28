import React from "react";
import styles from "../Loginpages/forgotpassword.css";
import style from "../ClientLogin.module.css";

function ForgotPassword({ formData, setForm, navigation }) {
  return (
    <div>
      <div className={style.signupbox}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={style.header}>DEAR DESIGNER!</div>
            <div className={style.desc}>Freelancing was never this easy! </div>
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

              <div className={styles.cover}>
                <button className={styles.complete}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
