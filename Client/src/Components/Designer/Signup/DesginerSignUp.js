import React from 'react'
// import SignupA from './SignUp_Parts/SignupA';
// import SignupB from './SignUp_Parts/SignupB';
// import SignupC from './SignUp_Parts/SignupC';
import {ReactComponent as FirstMan} from './assests/Firstman.svg'
import styles from './SignUp.module.css';

import SignUpFirst from './SignUp_new/SignUpFirst';

function DesginerSignUp() {
    return (
        <div className={styles.container}>
            <div className={styles.bottom_background}></div>
            
            <div className={styles.man_svg}>
                <FirstMan/>
            </div>
            <div className={styles.box}>
                <SignUpFirst />
            </div>
        </div>
    )
}

export default DesginerSignUp;
