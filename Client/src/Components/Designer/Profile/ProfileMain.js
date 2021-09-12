import React from 'react'
import './ProfileMain.css';
import Professional from './Profile parts/Professional/Professional';
import Personal from './Profile parts/Personal/Personal';
import data from './desProf.json';

function ProfileMain() {
    return (
        <div  style={{height:"100vh",backgroundColor:"#4d494905"}}>
            <div className='des-profile-container'>
                <div className='des-profile-per'>
                    <Personal user={data.username} work={data.specialization}/>
                </div>
                <div className='des-profile-pro'>
                    <Professional work={data.work_experience} link={data.link}/>
                </div>

            </div>
            <div className='des-pro-but-cover'>
                <button className='des-pro-but'>Save Changes & Proceed</button>
            </div>
        </div>
    )
}

export default ProfileMain
