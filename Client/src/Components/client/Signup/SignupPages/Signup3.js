import React from 'react'
import styles from '../SignupPages/signup2.module.css'
import { useState } from 'react';
import style from '../Signup.module.css';
import { ReactComponent as ArrowRight } from '../assets/ArrowRight.svg'
import {ReactComponent as ArrowLeft} from '../assets/ArrowLeft.svg'
import {signup} from '../../../../firebasefunctions/login'
import {addData} from '../../../../firebasefunctions/firestore'
import { toast } from 'react-toastify';
import { CreateUser } from '../../../../trail/createchat';
function Signup3({ formData, setForm, navigation , startLoading}) {

     const [toggle, setToggle] = useState(false);

    return (
        <div>
           <div className={style.signupbox}>
            
               <div className={style.previous} onClick={navigation.previous}>
                    <ArrowLeft className={style.arrow_left}/>
                </div>
        <div className={styles.container}>
                <div className={style.header}>DEAR Client,</div>
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

                    <div className={styles.line}>
                        Almost there
                    </div>
                </div>
                </div>
                <div className={style.next} onClick={async () => {
                    startLoading(true);
                    if ( formData.password === formData.confirmPassword && formData.password.trim().length>=6) {
                        
                        await signup(formData.email, formData.password);
                        
                        
                        console.log(formData);
                        const chatData  = await CreateUser(formData.fullname, 'client');
                        await addData('Client', formData.email, {...formData, ...{phone:formData.phoneNumber,created:new Date().toString(),chat:chatData }});
                        // await addData('Client',formData.email ,{
                        //     "name":formData.fullname,
                        //     "email":formData.email,
                        //     "phone":formData.phoneNumber,
                        //     "created":new Date().toString(),
                        //     "chat":chatData
                        // });
                        startLoading(false);
                        navigation.next();
                    }
                    else if (formData.password != formData.confirmPassword) {
                        startLoading(false);
                        toast('Password dosent Match', {
                            position: "bottom-center",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            });
                        setToggle(true);

                    } else {
                        startLoading(false);
                        toast('Password should be greater than 6 characters', {
                            position: "bottom-center",
                            autoClose: 1500,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            });
                    }
                    }}>
                    <ArrowRight className={style.arrow_right}/>
                </div>
                
        </div>
        </div>
    )
}

export default Signup3
