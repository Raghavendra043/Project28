import React from 'react'
import style from "../ClientLogin.module.css";
import { useState } from 'react';
import styles from '../Loginpages/forgotpassword2.module.css';

import {ReactComponent as ArrowLeft} from './../assets/ArrowLeft.svg'


function ForgetPassword2({ formData, setForm, navigation }) {
    
    const [toggle, setToggle] = useState(false);

    return (
        <div className={style.signupbox}>
            
                <div className={style.previous} onClick={navigation.previous}>
                    <ArrowLeft className={style.arrow_left}/>
                </div>
        <div className={styles.container}>
                <div className={style.header}>DEAR DESIGNER,</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={style.data}>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Create Password</div>
                        <input
                            className={style.inputs}
                            type="password"
                            placeholder="Enter Your Password"
                            // ref={props.password1Ref}
                        name="password1"
                        value={formData.password}
                        onChange={setForm}
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Confirm Password</div>
                        <input
                            className={style.inputs}
                            type="password"
                            placeholder="Renter Your Password"
                            // ref={props.password2Ref}
                        name="password2"
                         value={formData.confirmPassword}
                        onChange={setForm}
                        />
                    </div>
                    <div className={toggle? style.show : style.hide}>Passwords don't match! Try again</div>

                    <div className={styles.cover}>
                        <button className={styles.complete}>Set Password { `&`} Login</button>
              </div>
                </div>
                </div>
        </div>
    )
}

export default ForgetPassword2
