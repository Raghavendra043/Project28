import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import { ReactComponent as Man } from '../Signup/assets/Man.svg'
//import Login from '../Login/Loginpages/Login'
import Login1 from './Loginpages/Login1'
import ForgotPassword from '../Login/Loginpages/ForgotPassword'
import styles from "../Login/ClientLogin.module.css"
import ForgetPassword2 from "../Login/Loginpages/ForgotPassword2"

const defaultData = {
    email: "",
    password:"",
}

const steps = [
    {id:"LoginPage"},
    {id:"ForgotPassword"},
    {id:"ForgotPassword2"},
]

function ClientLogin() {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps, initialStep: 0,
    });
    const props = { formData, setForm, navigation }

    switch (step.id) {
        case "LoginPage":
            return (
                <>
                    <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Man  className={styles.svg}/>
                            </div>
                            <div className={styles.box}>
                                <Login1  {...props} />
                            </div>
                        </div>
                    </div>
                </>
            )
        case "ForgotPassword":
            return (
                <>
                    <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Man className={styles.svg}/>
                            </div>
                            <div className={styles.box}>
                                <ForgotPassword  {...props} />
                            </div>
                        </div>
                    </div>
                </>
            )
        case "ForgotPassword2":
            return (
                <>
                    <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Man className={styles.svg} />
                            </div>
                            <div className={styles.box}>
                                <ForgetPassword2  {...props} />
                            </div>
                        </div>
                    </div>
                </>
            )
    }
    return (
        <div>
            
        </div>
    )
}

export default ClientLogin
