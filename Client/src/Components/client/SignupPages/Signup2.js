import React from 'react'
import styles from '../SignupPages/signup2.module.css'
import style from "../Signup.module.css"
import { ReactComponent as ArrowRight } from '../assets/ArrowRight.svg'
import {ReactComponent as ArrowLeft} from '../assets/ArrowLeft.svg'

function Signup2({ formData, setForm, navigation }) {
    return (
        <div className={style.signupbox}>
            <div className={style.previous} onClick={navigation.previous}>
                    <ArrowLeft className={style.arrow_left}/>
                </div>
            <div className={styles.container}>
                
            
            <div className={styles.box}>
                <div className={style.header}>DEAR DESIGNER</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={style.data}>
                   
                    <div className={style.input_cover}>
                        <div className={style.titles}>Your Phone Number</div>
                        <input
                            className={style.inputs}
                            type="tel"
                             value={formData.phoneNumber}
                            onChange={setForm}
                            placeholder="Eg. +91 9123456789"
                            // ref= {props.phoneRef}
                            name="phoneNumber"
                        />
                    </div>
                </div>
                <div className={styles.otp_input_cover}>
                    <div className={styles.otp_titles}>Enter OTP</div>
                    <div className={styles.otp}>
                        <input type="tel" className={styles.number} placeholder='-' name="otp1" value={formData.otp1} onChange={setForm} />
                        <input type="text" className={styles.number} placeholder='-' name="otp2" value={formData.otp2} onChange={setForm}/>
                        <input type="text" className={styles.number} placeholder='-' name="otp3" value={formData.otp3} onChange={setForm}/>
                        <input type="text" className={styles.number} placeholder='-' name="otp4" value={formData.otp4} onChange={setForm}/>
                    </div>
                </div>
                </div>
                </div>
                
            <div className={style.next} onClick={() => {
                if ( formData.phoneNumber.trim() && formData.otp1.trim() && formData.otp2.trim()&& formData.otp3.trim()&& formData.otp4.trim()) {
                    navigation.next();
                }
                }}><ArrowRight className={style.arrow_right}/></div>
                
        </div>
    )
}

export default Signup2
