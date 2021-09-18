import React,{useRef} from 'react'

import styles from './SignUp.module.css';

import SignUpFirst from './SignUp_new/SignUpFirst';
import SignUpSecond from './SignUp_new/SignUpSecond';
import SignUpThird from './SignUp_new/SignUpThird';

import {ReactComponent as FirstMan} from './assests/Firstman.svg'
import {ReactComponent as SecondMan} from './assests/SecondMan.svg'
import {ReactComponent as ThirdMan} from './assests/ThirdMan.svg'


function DesginerSignUp() {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const password1Ref = useRef('');
    const password2Ref = useRef('');
    
    return (
        <div className={styles.container}>
            <div className={styles.bottom_background}></div>
{/*             
            <div className={styles.first}>
                <div className={styles.man_svg}>
                    <FirstMan/>
                </div>
                <div className={styles.box}>
                    <SignUpFirst styles={styles} nameRef={nameRef} emailRef={emailRef} phoneRef={phoneRef}/>
                </div>
            </div> */}
            {/* <div className={styles.second}>
                <div className={styles.man_svg}>
                    <SecondMan/>
                </div>
                <div className={styles.box}>
                    <SignUpSecond styles={styles} password1Ref={password1Ref} password2Ref={password2Ref}/>
                </div>
            </div> */}
            <div className={styles.third}>
                <div className={styles.man_svg}>
                    <ThirdMan/>
                </div>
                <div className={styles.box}>
                    <SignUpThird styles={styles}/>
                </div>
            </div>


        </div>
    )
}

export default DesginerSignUp;
