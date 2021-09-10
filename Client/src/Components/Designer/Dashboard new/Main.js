import React from 'react'
import './Main.css';
import First from './Dashboard_Parts/First';

function Main() {
    return (
        <div>
            <div className="row">
                <div className='col-3 first'>
                    <First />
                </div>
                <div className='col-4 second'>

                </div>
                <div className='col-2 third'>dfa</div>
                <div className='col-3 f'>adf</div>
            </div>
        </div>
    )
}

export default Main
