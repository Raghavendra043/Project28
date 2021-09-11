import React from 'react'
import './Main.css';
import First from './Dashboard_Parts/First';
import Second from './Dashboard_Parts/Second';

function Main() {
    return (
        <div className="outercontainer">
          
                <div className=' first'>
                    <First />
                </div>
                <div className='second'>
                    <Second/>
                </div>
                <div className=' third'>dfa</div>
                <div className=' fourth'>adf</div>
          
        </div>
    )
}

export default Main
