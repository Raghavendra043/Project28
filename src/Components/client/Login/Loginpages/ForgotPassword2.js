import React from 'react'
import style from "../ClientLogin.module.css";
import { useState } from 'react';
import styles from '../Loginpages/forgotpassword2.module.css';

import {ReactComponent as ArrowLeft} from './../assets/ArrowLeft.svg'
import axios from 'axios';


function ForgetPassword2({ formData, setForm, navigation }) {
    
    const [toggle, setToggle] = useState(false);

    return (
        <div className={style.signupbox}>
            
                <div className={style.previous} onClick={navigation.previous}>
                    <ArrowLeft className={style.arrow_left}/>
                </div>
        <div className={styles.container}>
                <div className={style.header}>DEAR Client !,</div>
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
                        name="password"
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
                        name="confirmPassword"
                         value={formData.confirmPassword}
                        onChange={setForm}
                        />
                    </div>
                    <div className={toggle? style.show : style.hide}>Passwords don't match! Try again</div>

                    <div className={styles.cover}>
                        <button className={styles.complete}
                            onClick={async()=>{
                                if(formData.password === formData.confirmPassword){
                                    axios.get(`${process.env.REACT_APP_BACK}/passwordReset`, {params:{email:formData.email,password:formData.password }}).then((req, res)=>{})
                                } else {
                                    setToggle(true);
                                }
                                
                            }}
                        >Set Password</button>
              </div>
                </div>
                </div>
        </div>
    )
}

export default ForgetPassword2
