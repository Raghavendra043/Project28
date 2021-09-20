import React from 'react'
import styles from './Third.module.css'
import style from '../../Signup/SignUp.module.css';
import {ReactComponent as ArrowLeft} from './../assests/ArrowLeft.svg'

function SignUpThird( { formData, setForm, navigation }) {
    return (
        <div className={styles.container}>
            <div className={style.previous} onClick={navigation.previous}><ArrowLeft className={style.arrow_left}/></div>
            <div className={styles.box}>
                <div className={style.header}>Hey! “Username”,</div>
                <div className={style.desc}>
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
