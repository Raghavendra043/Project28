import React from 'react'
import Navbar from '../Dashboard new/Dashboard_Parts/Navbar/Navbar'
import styles from './NoProjects.module.css'
import {ReactComponent as  Man} from './man.svg'

function NoProjects() {
    return (
        <div>
            {/* <div className={styles.Sidebar}>
                <Navbar/>
            </div> */}
            <div className={styles.Redirect}>
                <div className={styles.RedirectNested}>
                <div className={styles.header}>Overall Performance {`&`} Account Details</div>
                <div className={styles.svg}><Man/></div>
                <div className={styles.subheader}>Priyanshu nigga hot bish got a fish in a dish with good meat to eat what a treat</div>
                </div>
                </div>
        </div>
    )
}

export default NoProjects
