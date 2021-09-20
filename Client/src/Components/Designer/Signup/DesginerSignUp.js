import React, { useRef } from 'react'
import { useForm, useStep } from 'react-hooks-helper'

import styles from './SignUp.module.css';

import SignUpFirst from './SignUp_new/SignUpFirst';
import SignUpSecond from './SignUp_new/SignUpSecond';
import SignUpThird from './SignUp_new/SignUpThird';

import {ReactComponent as FirstMan} from './assests/Firstman.svg'
import {ReactComponent as SecondMan} from './assests/SecondMan.svg'
import {ReactComponent as ThirdMan} from './assests/ThirdMan.svg'




//     const nameRef = useRef('');
//     const emailRef = useRef('');
//     const phoneRef = useRef('');
//     const password1Ref = useRef('');
//     const password2Ref = useRef('');
    
const defaultData = {
    fullname: "",
    email: "",
    phonenummber: "",
    otp1:"",
    otp2:"",
    otp3:"",
    otp4: "",
    password1: "",
    password2: "",
    
}
const steps = [
    { id: "Signup1" },
    { id: "Signup2" },
    { id: "Signup3" },
    
];
function DesginerSignUp() {

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
                                <FirstMan />
                            </div>
                            <div className={styles.box}>
                    <SignUpFirst  {...props}/>
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
                                <SecondMan />
                            </div>
                            <div className={styles.box}>
                                <SignUpSecond  {...props}/>
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
                                <ThirdMan />
                            </div>
                            <div className={styles.box}>
                                <SignUpThird  {...props} />
                            </div>
                        </div>
                </div>
                </>
            )


    }        


}

export default DesginerSignUp;
