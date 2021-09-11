import React from 'react'
import './Main.css';
import First from './Dashboard_Parts/First';
//<<<<<<< HEAD
import Second from './Dashboard_Parts/Second';
//=======
import Third from './Dashboard_Parts/Third/Third';
import Fourth from './Dashboard_Parts/Fourth/Fourth';

//>>>>>>> a7387ebf39c3ead08a312cd7155717bd6e81b9ba

function Main() {
    return (
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
    )
}

export default Main
