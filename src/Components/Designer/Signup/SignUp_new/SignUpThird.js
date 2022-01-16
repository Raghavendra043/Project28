import React from 'react'
import styles from './Third.module.css'
import style from '../../Signup/SignUp.module.css';
import {ReactComponent as ArrowLeft} from './../assests/ArrowLeft.svg'
import { useHistory } from 'react-router-dom';

function SignUpThird( { formData, setForm, navigation }) {
    const history = useHistory();

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
                        <button className={styles.complete} 
                            onClick={()=>{
                                window.sessionStorage.setItem("key", btoa(formData.email));
                                history.push("/designer/complete", {email:formData.email});
                            }}>
                        Complete Your Profile</button>
                    </div>
                    <div className={styles.cover}>
                        <button className={styles.proceed} onClick={()=>{
                            window.sessionStorage.setItem("key", btoa(formData.email));
                            history.push("/home", {user:"designer", email:formData.email});
                        }}>Proceed To DashBoard</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUpThird
