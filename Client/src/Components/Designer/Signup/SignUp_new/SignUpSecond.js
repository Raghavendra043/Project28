import React from 'react'
import styles from './Second.module.css'
import { useState } from 'react';
import style from '../../Signup/SignUp.module.css';



function SignUpSecond({ formData, setForm, navigation }) {
    
    const [toggle, setToggle] = useState(false);

    return (
        <div className={style.signupbox}>
            
                <div className={style.next} onClick={navigation.previous}>
                    {'<'}
                </div>
        <div className={styles.container}>
                <div className={style.header}>DEAR DESIGNER,</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={style.data}>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Create Password</div>
                        <input
                            className={style.inputs}
                            type="password"
                            placeholder="Enter Your Password"
                            // ref={props.password1Ref}
                        name="password1"
                        value={formData.password1}
                        onChange={setForm}
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Confirm Password</div>
                        <input
                            className={style.inputs}
                            type="password"
                            placeholder="Renter Your Password"
                            // ref={props.password2Ref}
                        name="password2"
                         value={formData.password2}
                        onChange={setForm}
                        />
                    </div>
                    <div className={toggle? style.show : style.hide}>*passwords don't match*</div>

                    <div className={styles.line}>
                        Almost there
                    </div>
                </div>
                </div>
                <div className={style.next} onClick={() => {
                    if (formData.password1.trim() && formData.password2.trim() && formData.password1 == formData.password2) {
                            navigation.next();
                    }
                    else if (formData.password1 != formData.password2) {
                        setToggle(true)
                    }
                    }}>
                    {'>'}
                </div>
                
        </div>
    )
}

export default SignUpSecond
