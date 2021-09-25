import React from 'react'
import styles from "./First.module.css";
import third_styles from "./Third.module.css";
import style from '../../Signup/SignUp.module.css';
import { ReactComponent as ArrowRight } from './../assests/ArrowRight.svg'
import classnames from 'classnames';

function SignUpFirst({ formData, setForm, navigation }) {
    console.log(navigation);
    console.log(formData);


    const startOtp = () => {
        var button = document.getElementsByClassName(third_styles.cover)[0];
        button.classList.add(styles.hide2);
        var button = document.getElementsByClassName(third_styles.complete)[0];
        button.classList.add(styles.hide);
        var button = document.getElementsByClassName(styles.otp_input_cover)[0];
        button.classList.remove(styles.hide2);
        var button = document.getElementsByClassName(styles.otp_titles)[0];
        button.classList.remove(styles.hide);
        var button = document.getElementsByClassName(styles.otp)[0];
        button.classList.remove(styles.hide);
    }


    return (
        <div className={style.signupbox}>
            <div className={styles.container}>
            
            <div className={styles.box}>
                <div className={style.header}>DEAR DESIGNER</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={style.data}>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Your Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                            value={formData.fullname}
                            onChange={setForm}
                            placeholder="Enter Your Full Name"
                            // ref = {props.nameRef}
                            name="fullname"
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Enter Your Email ID</div>
                        <input
                            className={style.inputs}
                            type="email"
                            value={formData.email}
                            onChange={setForm}
                            placeholder="Eg. johndoe@email.com"
                            // ref = {props.emailRef}
                            name="email"
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Your Phone Number</div>
                        <input
                            className={style.inputs}
                            type="tel"
                             value={formData.phonenumber}
                            onChange={setForm}
                            placeholder="Eg. +91 9123456789"
                            // ref= {props.phoneRef}
                            name="phonenumber"
                        />
                    </div>
                    </div>
                    <div className={classnames(third_styles.cover)}>
                        <button className={classnames(third_styles.complete)} onClick={startOtp}>Send Verification</button>
                    </div>


                    <div className={classnames(styles.otp_input_cover,styles.hide2)}>
                        <div className={classnames(styles.otp_titles,styles.hide)}>Enter OTP</div>
                        <div className={classnames(styles.otp,styles.hide)}>
                            <input type="" className={styles.number} placeholder='-' maxlength='1' pattern="[0-9]" name="otp1" value={formData.otp1} onChange={setForm} />
                            <input type="text" className={styles.number} placeholder='-' maxlength='1' pattern="[0-9]" name="otp2" value={formData.otp2} onChange={setForm}/>
                            <input type="text" className={styles.number} placeholder='-' name="otp3" maxlength='1' pattern="[0-9]" value={formData.otp3} onChange={setForm}/>
                            <input type="text" className={styles.number} placeholder='-' name="otp4" maxlength='1' pattern="[0-9]" value={formData.otp4} onChange={setForm}/>
                        </div>
                    </div>

                </div>
                </div>
                
            <div className={style.next} onClick={() => {
                if (formData.fullname.trim() && formData.email.trim()&& formData.phonenumber.trim() && formData.otp1.trim() && formData.otp2.trim()&& formData.otp3.trim()&& formData.otp4.trim()) {
                    navigation.next();
                }
                }}><ArrowRight className={style.arrow_right}/></div>
                
        </div>
    )
}


export default SignUpFirst
