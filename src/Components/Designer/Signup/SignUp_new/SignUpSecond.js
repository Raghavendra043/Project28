import React from 'react'
import styles from './Second.module.css'
import { useState } from 'react';
import style from '../../Signup/SignUp.module.css';
import {ReactComponent as ArrowRight} from './../assests/ArrowRight.svg'
import {ReactComponent as ArrowLeft} from './../assests/ArrowLeft.svg'
import { addData, search } from '../../../../firebasefunctions/firestore';
import { signup } from '../../../../firebasefunctions/login';
import { CreateUser, CreateChat } from '../../../../trail/createchat';
import axios from 'axios'
require('dotenv');
require('../../../../firebasefunctions/firestore');


function SignUpSecond({ formData, setForm, navigation, startLoading }) {
    
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
                        value={formData.password1}
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
                         value={formData.password2}
                        onChange={setForm}
                        />
                    </div>
                    <div className={toggle? style.show : style.hide}>Passwords don't match! Try again</div>

                    <div className={styles.line}>
                        Almost there
                    </div>
                </div>
                </div>
                <div className={style.next} onClick={async() => {
                    startLoading(true);
                    if (formData.password1 && formData.password1.trim() && formData.password2 &&formData.password2.trim() && formData.password1 == formData.password2) {
                        await signup(formData.email, formData.password1);
                        console.log("in 2nd ", formData.email, formData.password1);
                        const data= {email:formData.email, password:formData.password1}
                        //axios.post(`${process.env.REACT_APP_BACK}/passwordReset`,data )
                        const chatData = await CreateUser(formData.fullname, 'designer');
                        await addData('Designers',formData.email ,{
                            "profile":false,
                            "name":formData.fullname,
                            "email":formData.email,
                            "phone":formData.phonenumber,
                            "created":new Date().toString(),
                            "chat":chatData
                        });
                        startLoading(false);
                        navigation.next();
                    }
                    else if (formData.password1 != formData.password2) {
                        setToggle(true)
                        startLoading(false);
                    }
                    }}>
                    <ArrowRight className={style.arrow_right}/>
                </div>
                
        </div>
    )
}

export default SignUpSecond
