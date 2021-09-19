import React from 'react'
import styles from "./First.module.css";
import style from '../../Signup/SignUp.module.css';


function SignUpFirst({ formData, setForm, navigation }) {
    console.log(navigation);
    console.log(formData);
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
                <div className={styles.otp_input_cover}>
                    <div className={styles.otp_titles}>Enter OTP</div>
                    <div className={styles.otp}>
                        <input type="text" className={styles.number} placeholder='-' name="otp1" value={formData.otp1} onChange={setForm} />
                        <input type="text" className={styles.number} placeholder='-' name="otp2" value={formData.otp2} onChange={setForm}/>
                        <input type="text" className={styles.number} placeholder='-' name="otp3" value={formData.otp3} onChange={setForm}/>
                        <input type="text" className={styles.number} placeholder='-' name="otp4" value={formData.otp4} onChange={setForm}/>
                    </div>
                </div>
                </div>
                </div>
                
            <div className={style.next} onClick={() => {
                if (formData.fullname.trim() && formData.email.trim()&& formData.phonenumber.trim() && formData.otp1.trim() && formData.otp2.trim()&& formData.otp3.trim()&& formData.otp4.trim()) {
                    navigation.next();
                }
                }}>{'>'}</div>
                
        </div>
    )
}


export default SignUpFirst
