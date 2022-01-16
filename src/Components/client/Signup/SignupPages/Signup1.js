import React from 'react'
import styles from '../SignupPages/signup1.module.css'
import style from "../Signup.module.css"
import {ReactComponent as ArrowRight} from '../assets/ArrowRight.svg'
import {signup} from '../../../../firebasefunctions/login'
import Navbar3 from '../../../Navbar/Navbar3'
import Navbar2 from '../../../Navbar/Navbar2'
import { toast } from 'react-toastify'
import { search } from '../../../../firebasefunctions/firestore'

function signup1({formData,setForm,navigation, startLoading}) {
    return (
        <div>
        
        <div className={style.signupbox}>
        
            <div className={styles.container}>
            
            <div className={styles.box}>
                <div className={style.header}>DEAR Client</div>
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
                            value={formData.companyWebsite}
                            onChange={setForm}
                            placeholder="Enter Company Website Link"
                            // ref = {props.emailRef}   
                            name="companyWebsite"
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
                
            <div className={style.next} onClick={async() => {
                startLoading(true);
                //navigation.next();
                if (formData.fullname.trim() && formData.email.trim() && formData.companyName.trim() && formData.companyWebsite.trim() ) {
                    const sign = await search('Client', "email", formData.email);
                    if (sign != "f") {  
                        startLoading(false);
                        //setErr(`EmailID already in use. Please Login ${formData.email}`);
                        toast.error("EmailID already in use. Please Login", {className:'darktoast' ,position: toast.POSITION.BOTTOM_CENTER});
                      } else {startLoading(false); navigation.next();}
                    
                } else{
                    startLoading(false);
                    toast.error('Please fill all the fields', {
                        position: "bottom-center",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        });
                }
                }}><ArrowRight className={style.arrow_right}/></div>
                
        </div>
        </div>
    )
}

export default signup1
