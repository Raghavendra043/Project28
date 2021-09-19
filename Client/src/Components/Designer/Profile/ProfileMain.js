import React,{useRef, useState} from 'react'
import './ProfileMain.css';
import Professional from './Profile parts/Professional/Professional';
import Personal from './Profile parts/Personal/Personal';
import data from './desProf.json';

function ProfileMain() {

    const nameRef = useRef(data.username);
    const special = data.specialization;
    const [checkedState,setCheckedState] = useState(data.specialization_state);
    const work1Ref = useRef(data.work_experience1);
    const work2Ref = useRef(data.work_experience2);
    const work3Ref = useRef(data.work_experience3);
    const linkRef = useRef(data.link);


    const handleSubmit = () =>{
        console.log("f");
    }

    return (
        <div  style={{height:"100vh",backgroundColor:"#4d494905"}}>
            <div className='des-profile-container'>
                <div className='des-profile-per'>
                    <Personal nameRef={nameRef} special={special} checkedState={checkedState} setCheckedState={setCheckedState}/>
                </div>
                <div className='des-profile-pro'>
                    <Professional work1Ref={work1Ref} work2Ref={work2Ref} work3Ref={work3Ref} linkRef={linkRef}/>
                </div>

            </div>
            <div className='des-pro-but-cover'>
                <button className='des-pro-but' onClick={handleSubmit}>Save Changes & Proceed</button>
            </div>
        </div>
    )
}

export default ProfileMain
