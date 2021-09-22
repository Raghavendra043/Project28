import { Switch } from '@material-ui/core';
import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import Signup1 from '../Signup/SignupPages/Signup1';
import Signup2 from '../Signup/SignupPages/Signup2';
import Signup3 from '../Signup/SignupPages/Signup3';
import Signup4 from '../Signup/SignupPages/Signup4';
import {ReactComponent as Lady} from '../Signup/assets/Lady.svg'
import { ReactComponent as Man } from '../Signup/assets/Man.svg'
import styles from "../Signup/Signup.module.css"



const defaultData = {
    fullname: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    phoneNumber: "",
    otp1:"",
    otp2:"",
    otp3:"",
    otp4: "",
    password: "",
    confirmPassword:"",
}

const steps = [
    { id: "Signup1" },
    { id: "Signup2" },
    { id: "Signup3" },
    { id: "Signup4" },
    
];



function ClientSignup() {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps, initialStep: 0,
    });
    const props = { formData, setForm, navigation }

   switch (step.id) {
        case "Signup1":
            return (
                <>
                <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Lady />
                            </div>
                            <div className={styles.box}>
                    <Signup1  {...props}/>
                </div>
            </div>
        </div>
                </>
            )
        case "Signup2":
                        return (
                <>
                <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Lady />
                            </div>
                            <div className={styles.box}>
                                <Signup2  {...props}/>
                            </div>
                        </div>
                </div>
                </>
            )
        case "Signup3":
            return (
                <>
                <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Man />
                            </div>
                            <div className={styles.box}>
                                <Signup3  {...props} />
                            </div>
                        </div>
                </div>
                </>
           )
       case "Signup4":
                        return (
                <>
                <div className={styles.container}>
                        <div className={styles.bottom_background}></div>
                        <div className={styles.third}>
                            <div className={styles.man_svg}>
                                <Man />
                            </div>
                            <div className={styles.box}>
                                <Signup4  {...props}/>
                            </div>
                        </div>
                </div>
                </>
            )


    }        
    console.log(steps);



    return (
        <div>
            
        </div>
    )
}

export default ClientSignup
