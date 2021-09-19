import React from 'react'
import styles from './Third.module.css'


function SignUpThird(props) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={props.styles.header}>Hey! “Username”,</div>
                <div className={props.styles.desc}>
                    Completing your profile will help you get noticed quicker!{" "}
                </div>
        
                <div className={styles.data}>
                    <div className={styles.title}>
                        You're All Set
                    </div>
                    <div className={styles.cover}>
                        <button className={styles.complete}>Complete Your Profile</button>
                    </div>
                    <div className={styles.cover}>
                        <button className={styles.proceed}>Proceed To DashBoard</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUpThird
