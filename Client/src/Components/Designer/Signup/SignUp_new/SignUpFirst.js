import React from 'react'
import styles from "./First.module.css";


function SignUpFirst(props) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={props.styles.header}>DEAR DESIGNER</div>
                <div className={props.styles.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={props.styles.data}>
                    <div className={props.styles.input_cover}>
                        <div className={props.styles.titles}>Your Name</div>
                        <input
                            className={props.styles.inputs}
                            type="email"
                            placeholder="Enter Your Full Name"
                        />
                    </div>
                    <div className={props.styles.input_cover}>
                        <div className={props.styles.titles}>Enter Your Email ID</div>
                        <input
                            className={props.styles.inputs}
                            type="email"
                            placeholder="Eg. johndoe@email.com"
                        />
                    </div>
                    <div className={props.styles.input_cover}>
                        <div className={props.styles.titles}>Your Phone Number</div>
                        <input
                            className={props.styles.inputs}
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
