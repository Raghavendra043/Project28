import React from 'react'
import styles from '../SignupPages/signup4.module.css'
import style from '../Signup.module.css';
import { ReactComponent as ArrowLeft } from '../assets/ArrowLeft.svg'
import { useHistory } from 'react-router-dom';


function Signup4({ formData, setForm, navigation , startLoading}) {
    const history = useHistory();
    return (
       <div className={styles.container}>
            <div className={style.previous} onClick={navigation.previous}><ArrowLeft className={style.arrow_left}/></div>
            <div className={styles.box}>
                <div className={style.header}>Hey! {formData.fullname},</div>
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
                                history.push("/create1");
                            }}
                        >Start a Project</button>
                    </div>
                    <div className={styles.cover}>
                        <button className={styles.proceed}
                            onClick={()=>{
                                window.sessionStorage.setItem("key", btoa(formData.email));
                                history.push("/chome");
                            }}
                        >Proceed To DashBoard</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup4
