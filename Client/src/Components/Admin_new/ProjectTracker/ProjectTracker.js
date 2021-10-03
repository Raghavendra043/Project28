import React from 'react'
import styles from './ProjectTracker.module.css';
import About from './TrackerParts/About';
import Utilites from './TrackerParts/Utilites';

function ProjectTracker() {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.about}>
                    <About/>
                </div>
                <div className={styles.details}>
                    <Utilites/>
                </div>  
                <div className={styles.chat}>

                </div>
            </div>
        </div>
    )
}

export default ProjectTracker
