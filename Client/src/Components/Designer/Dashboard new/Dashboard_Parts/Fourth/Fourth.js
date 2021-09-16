import React from 'react'
import updates from './updates.json';
import './Fourth.css';
import { UpdateTwoTone } from '@material-ui/icons';

function Fourth() {
    return (
        <div>
            
            <div style={{overflow:"auto",height:"100vh",marginTop:"20%"}}>
                <div className='des-d-f-container'>
                <div className='des-d-f-title'>Updates</div>
                    {updates.map((data,key) =>{
                        return (
                            <div className='des-d-f-update'>
                                <p>
                                    {data.Desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    )
}

export default Fourth
