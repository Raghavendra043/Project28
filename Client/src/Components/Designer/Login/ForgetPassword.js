import React,{useRef,useState} from 'react'
import e_style from './../Signup/SignUp.module.css';
import styles from './Forget.module.css';
import {ReactComponent as Man} from './assets/Man.svg'

function ForgetPassword() {

    const emailRef = useRef('');

    const submitHander = () =>{

         var x = document.getElementsByClassName(styles.message);
         console.log(x[0].classList.toggle(styles.on));

        

    }

    return (
        <div className={e_style.container}>
            <div className={e_style.bottom_background}></div>

            <div className={e_style.page}>
                <div className={e_style.man_svg}>
                    <Man/>
                </div>
                <div className={e_style.box} style={{borderTop:"3px solid #00B4B3"}}>
   
                            <div className={e_style.header}>WELCOME BACK!</div>
                            <div className={e_style.desc}>
                                Freelancing was never this easy!{" "}
                            </div>
                            <div className={e_style.data}>

                                <div className={e_style.input_cover}>
                                    <div className={e_style.titles}>Password Recovery</div>
                                    <div className={styles.desc}>
                                        Seems like you have forgotten your password but don’t worry,
                                        we’ll help you recover it! Enter your registered Email ID below.
                                    </div>

                                    <input
                                        className={e_style.inputs}
                                        type="email"
                                        placeholder="Ex: johndoe@example.com"
                                        ref={emailRef}
                                        required="true"
                                    />
                                    <div className={styles.message}>
                                        Password Recovery confirmation has been sent to this email. Please approve to proceed 
                                    </div>
                                </div>

                            </div>

                                <div className={styles.cover}>
                                    <button type='submit' onClick={submitHander} className={styles.complete}>Send Recovery Email</button>
                                </div>
                </div>
            </div>


        </div>
    )
}

export default ForgetPassword
