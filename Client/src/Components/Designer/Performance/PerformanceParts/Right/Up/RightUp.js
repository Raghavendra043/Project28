import React from 'react'
import styles from './Right.module.css';
import {ReactComponent as Arrow} from './Arrow.svg'

function RightUp() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
               <div className={styles.header}>
                    "Pro" Word Rating
               </div>
               <div className={styles.slider}>
                    <div className={styles.month}>
                        October Rating
                    </div>
                    <div className={styles.rating}>
                        <span className={styles.rate}>26</span>
                        <Arrow />
                    </div>
               </div>
               <div className={styles.text}>
                    Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. 
               </div>
            </div>
        </div>
    )
}

export default RightUp
