import React from 'react'
import './Main.css';
import First from './Dashboard_Parts/First';
import Third from './Dashboard_Parts/Third/Third';
import Fourth from './Dashboard_Parts/Fourth/Fourth';


function Main() {
    return (
        <div style={{  padding:"1em"  ,backgroundColor: "#FAFAFA"}}>
            <div className="row">
                <div className='col-3 first'>
                    <First />
                </div>
                <div className='col-4 second'>

                </div>
                <div className='col-2 third'>
                    <Third />
                </div>
                <div className='col-3 f'>
                    <Fourth />
                </div>
            </div>
        </div>
    )
}

export default Main
