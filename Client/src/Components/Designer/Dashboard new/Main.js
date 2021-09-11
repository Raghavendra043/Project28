import React from 'react'
import './Main.css';
import First from './Dashboard_Parts/First';
import Third from './Dashboard_Parts/Third/Third';
import Fourth from './Dashboard_Parts/Fourth/Fourth';


function Main() {
    return (
        <div className="outercontainer">
          
                <div className=' first'>
                    <First />
                </div>
                <div className='second'>
                    sdf
                </div>
                <div className=' third'>
                    <Third />
                </div>
                <div className=' fourth'>
                    <Fourth />
                </div>
          
        </div>
    )
}

export default Main
