import React from 'react'
import './ProfileMain.css';
import Professional from './Profile parts/Professional/Professional';

function ProfileMain() {
    return (
        <div>
            <div className='des-profile-container'>
                <div className='des-profile-per'>
                    perosonal
                </div>
                <div className='des-profile-pro'>
                    <Professional />
                </div>
            </div>
        </div>
    )
}

export default ProfileMain
