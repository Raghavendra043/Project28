import React,{useRef, useState} from 'react'
import './ProfileMain.css';
import Professional from './Profile parts/Professional/Professional';
import Personal from './Profile parts/Personal/Personal';
import data from './desProf.json';

function ProfileMain() {

    const nameRef = useRef(data.username);
    const special = data.specialization;
    const [checkedState,setCheckedState] = useState(data.specialization_state);
    const workRef = useRef(data.work_experience);
    const linkRef = useRef(data.link);


    const handleSubmit = () =>{
        console.log("f");
        var x = {
            "username":"John Doe",
        
            "specialization":{ 
                "Graphic Design": true,
                "UI design": true,
                "UX desing":false,
                "Branding":false,
                "Social Media Posts":true    
            },
        
            "work_experience":[
                "Designation, lorem ipsum dolor sit amet Vivamus ",
                "Designation, lorem ipsum dolor sit amet Vivamus ",
                "Designation, lorem ipsum dolor sit amet Vivamus "
            ],
        
            "link":"facebook.com"
        }   
    }

    return (
        <div  style={{height:"100vh",backgroundColor:"#4d494905"}}>
            <div className='des-profile-container'>
                <div className='des-profile-per'>
                    <Personal nameRef={nameRef} special={special} checkedState={checkedState} setCheckedState={setCheckedState}/>
                </div>
                <div className='des-profile-pro'>
                    <Professional workRef={workRef} linkRef={linkRef}/>
                </div>

            </div>
            <div className='des-pro-but-cover'>
                <button className='des-pro-but' onClick={handleSubmit}>Save Changes & Proceed</button>
            </div>
        </div>
    )
}

export default ProfileMain
