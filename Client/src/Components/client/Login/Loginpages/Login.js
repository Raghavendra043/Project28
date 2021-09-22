import React from 'react'
import styles from "../Loginpages/login.module.css"
import style from "../ClientLogin.module.css"
import {ReactComponent as ArrowRight} from '../assets/ArrowLeft.svg'

function Login({formData,setForm,navigation}) {
    return (
        <div className={style.signupbox}>
            <div className={styles.container}>
            
            <div className={styles.box}>
                <div className={style.header}>WELCOME BACK!</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                    </div>
                    <div className={style.header2}>Client's Login</div>
        
                <div className={style.data}>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Your Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                            value={formData.email}
                            onChange={setForm}
                            placeholder="Ex: johndoe@gmail.com"
                            // ref = {props.nameRef}
                            name="email"
                        />
                    </div>
                    
                    
                    <div className={style.input_cover}>
                        <div className={style.titles}>Company Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                             value={formData.password}
                            onChange={setForm}
                            placeholder="Ex : Password@123"
                            // ref= {props.phoneRef}
                            name="password"
                        />
                        </div>
                        <div className={style.input_cover}>
                            <div className={style.underinputs}>
                                <div className={style.rememberMe}>
                                    <input type="checkbox" id="remember" name="vehicle1" value="Bike" className={style.remember} />
                                    <label for="remember"> { " "}Remember Me</label>
                                </div>
                                <div className={style.forgotPassword} onClick={navigation.next}>Forgot Password?</div>
                            </div>
                        </div>
                        <div className={styles.cover}>
                        <button className={styles.complete}>Login</button>
                    </div>
                </div>
                </div>
                </div>
                
            {/* <div className={style.next} onClick={() => {
                if (formData.fullname.trim() && formData.email.trim()) {
                    navigation.next();
                }
                }}><ArrowRight className={style.arrow_right}/></div> */}
                
        </div>
    )
}

export default Login
