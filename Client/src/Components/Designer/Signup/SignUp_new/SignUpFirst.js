import React from 'react'
import styles from "./First.module.css";


function SignUpFirst() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>DEAR DESIGNER</div>
                <div className={styles.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={styles.data}>
                    <div className={styles.input_cover}>
                        <div className={styles.titles}>Your Name</div>
                        <input
                            className={styles.inputs}
                            type="email"
                            placeholder="Enter Your Full Name"
                        />
                    </div>
                    <div className={styles.input_cover}>
                        <div className={styles.titles}>Enter Your Email ID</div>
                        <input
                            className={styles.inputs}
                            type="email"
                            placeholder="Eg. johndoe@email.com"
                        />
                    </div>
                    <div className={styles.input_cover}>
                        <div className={styles.titles}>Your Phone Number</div>
                        <input
                            className={styles.inputs}
                            type="tel"
                            placeholder="Eg. +91 9123456789"
                        />
                    </div>
                </div>
                <div className={styles.otp_input_cover}>
                    <div className={styles.otp_titles}>Enter OTP</div>
                    <div className={styles.otp}>
                        <input type="text" className={styles.number} placeholder='-'/>
                        <input type="text" className={styles.number} placeholder='-'/>
                        <input type="text" className={styles.number} placeholder='-'/>
                        <input type="text" className={styles.number} placeholder='-'/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUpFirst
