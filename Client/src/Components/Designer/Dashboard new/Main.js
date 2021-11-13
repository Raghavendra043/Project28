import React, { useState } from 'react'
import './Main.css';
import { useLocation } from "react-router-dom";
import First from './Dashboard_Parts/First/First';
import Second from './Dashboard_Parts/Second/Second';
import Third from './Dashboard_Parts/Third/Third';
import Fourth from './Dashboard_Parts/Fourth/Fourth';
import Navbar from './Dashboard_Parts/Navbar/Navbar';
import {search} from '../../../firebasefunctions/firestore'
let i=0;
function Main() {
    
    const location = useLocation();
    const user = location.state.user;
    const email = location.state.email;
    const Details  =  location.state.details;
    const [formData, setForm] = useState(Details);
    const props = { formData, setForm };

    console.log(user, email, Details);
    
    if(formData && i==0){
        console.log(formData);i+=1;
    }
    return (
        <div className="main_container1">
                <div className="Sidebar">
                    <Navbar/>
            </div>
            <div className="outer_container1">
                <div className=' first'>
                    <First {...props}/>
                </div>
                <div className='second'>
                    <Second {...props}/>
                </div>
                <div className=' third'>
                    <Third {...props}/>
                </div>
                <div className=' fourth'>
                    <Fourth {...props}/>
                </div>
            </div>
        </div>
    )
}

export default Main
