import React from 'react'
import './Main.css';
import First from './Dashboard_Parts/First/First';

import Second from './Dashboard_Parts/Second/Second';

import Third from './Dashboard_Parts/Third/Third';
import Fourth from './Dashboard_Parts/Fourth/Fourth';
import Navbar from './Dashboard_Parts/Navbar/Navbar';



function Main() {
    return (
        <div className="maincontainer">
                <div className="Sidebar">
                    <Navbar/>
            </div>
            <div className="outercontainer">
                <div className=' first'>
                    <First />
                </div>
                <div className='second'>
                    <Second/>
                </div>
                <div className=' third'>
                    <Third />
                </div>
                <div className=' fourth'>
                    <Fourth />
                </div>
            </div>
        </div>
    )
}

export default Main
