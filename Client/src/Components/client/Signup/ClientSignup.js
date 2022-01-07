/* eslint-disable default-case */
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
import Navbar3 from '../../Navbar/Navbar3';
import Navbar2 from '../../Navbar/Navbar2';
import Navbar1 from '../../Navbar/Navbar1';

import { BarWave } from 'react-cssfx-loading/lib';

const defaultData = {
    fullname: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    phoneNumber: "",
    otp:"",
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

    const startLoading = (x)=>{
        if(x)
            {var element = document.getElementById('loading');
            element.style.display = null;
            var element1 = document.getElementById('screen');
            element1.style.opacity = 0.16;
          } else {
              var element = document.getElementById('loading');
              element.style.display = "none";
              var element1 = document.getElementById('screen');
              element1.style.opacity = 10;
            }
        }

    const props = { formData, setForm, navigation, startLoading }

    

   switch (step.id) {
        case "Signup1":
            return (
                <div>
                <Navbar1/>
                <div style={{position:"absolute", width:"100vw"}} >
                <div className={styles.container} id = 'screen'>
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
        </div>
        <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
          </div>
                </div>
            )
        case "Signup2":
                        return (
                <>
                <Navbar1/>
                <div className={styles.container} id = 'screen' style={{position:"absolute", width:"100vw"}}>
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
                <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
          </div>
                </>
            )
        case "Signup3":
            return (
                <>
                <Navbar1/>
                <div className={styles.container} id = 'screen' style={{position:"absolute", width:"100vw"}}>
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
                <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
          </div>
                </>
           )
       case "Signup4":
                        return (
                <>
                <Navbar1/>
                <div className={styles.container} id = 'screen' style={{position:"absolute", width:"100vw"}}>
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
                <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
            <BarWave width="50px" height="50px" color="#1ABAA9"/>
            <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
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
