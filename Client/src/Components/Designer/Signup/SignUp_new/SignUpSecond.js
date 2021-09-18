import React from 'react'
import styles from './Second.module.css'


function SignUpSecond(props) {
    return (
        <div className={styles.container}>
                <div className={props.styles.header}>DEAR DESIGNER,</div>
                <div className={props.styles.desc}>
                    Freelancing was never this easy!{" "}
                </div>
        
                <div className={props.styles.data}>
                    <div className={props.styles.input_cover}>
                        <div className={props.styles.titles}>Create Password</div>
                        <input
                            className={props.styles.inputs}
                            type="password"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <div className={props.styles.input_cover}>
                        <div className={props.styles.titles}>Confirm Password</div>
                        <input
                            className={props.styles.inputs}
                            type="password"
                            placeholder="Renter Your Password"
                        />
                    </div>

                    <div className={styles.line}>
                        Almost there
                    </div>
                </div>
        </div>
    )
}

export default SignUpSecond
