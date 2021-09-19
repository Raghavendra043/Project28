import React from 'react'
import styles from './RightDown.module.css';
import {ReactComponent as Man} from './man.svg'

function RightDown() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique et. 
                </div>
                <div className={styles.svgi}>
                    <Man />
                </div>
            </div>
        </div>
    )
}

export default RightDown
