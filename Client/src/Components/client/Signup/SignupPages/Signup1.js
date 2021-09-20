import React from 'react'
import styles from '../SignupPages/signup1.module.css'
import style from "../Signup.module.css"
import {ReactComponent as ArrowRight} from '../assets/ArrowRight.svg'

function signup1({formData,setForm,navigation}) {
    return (
        <div className={style.signupbox}>
            <div className={styles.container}>
            
            <div className={styles.box}>
                <div className={style.header}>DEAR DESIGNER</div>
                <div className={style.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={style.data}>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Your Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                            value={formData.fullname}
                            onChange={setForm}
                            placeholder="Enter Your Full Name"
                            // ref = {props.nameRef}
                            name="fullname"
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Primary Email ID</div>
                        <input
                            className={style.inputs}
                            type="text"
                            value={formData.email}
                            onChange={setForm}
                            placeholder="example@gmail.com"
                            // ref = {props.nameRef}
                            name="email"
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Company Website</div>
                        <input
                            className={style.inputs}
                            type="email"
                            value={formData.companyName}
                            onChange={setForm}
                            placeholder="Enter Company Website Link"
                            // ref = {props.emailRef}
                            name="companyName"
                        />
                    </div>
                    <div className={style.input_cover}>
                        <div className={style.titles}>Company Name</div>
                        <input
                            className={style.inputs}
                            type="text"
                             value={formData.companyName}
                            onChange={setForm}
                            placeholder="Enter Your Company's Name "
                            // ref= {props.phoneRef}
                            name="companyName"
                        />
                    </div>
                </div>
                </div>
                </div>
                
            <div className={style.next} onClick={() => {
                if (formData.fullname.trim() && formData.email.trim()) {
                    navigation.next();
                }
                }}><ArrowRight className={style.arrow_right}/></div>
                
        </div>
    )
}

export default signup1
