/* eslint-disable default-case */
import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import { ReactComponent as Man } from '../../client/Signup/assets/Man.svg'

import ForgotPassword from '../Login/Loginpages/ForgotPassword'
import styles from "../Login/ClientLogin.module.css"
import ForgetPassword2 from "../Login/Loginpages/ForgotPassword2"
import Navbar3 from '../../Navbar/Navbar3'
import Navbar1 from '../../Navbar/Navbar1'

const defaultData = {
    email: "",
    password:"",
    confirmPassword:""
}

const steps = [
    {id:"ForgotPassword"},
    {id:"ForgotPassword2"},
]

function DesForget() {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps, initialStep: 0,
    });
    const props = { formData, setForm, navigation }

    switch (step.id) {
        
        case "ForgotPassword":
            return (
                <><Navbar1/>
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
                <><Navbar1/>
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

export default DesForget
