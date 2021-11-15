import React from 'react'
import styles from '../ToggleSwitch/toggle.module.css'

function Toggle() {
    return (
        <div>
            <label className={styles.switch}>
                <input type="checkbox"/>
                <div className={styles.slider}></div>
            </label>
        </div>
    )
}

export default Toggle
