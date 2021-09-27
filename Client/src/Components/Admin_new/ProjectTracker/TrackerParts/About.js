import React from 'react'
import styles from './About.module.css';

function About() {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.main_title}>
                    PROJECT NAME
                </div>
                <div className={styles.main_desc}>
                    John Doe
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.title}>
                    CLIENT NAME
                </div>
                <div className={styles.desc}>
                    John Doe
                </div>
            </div>
            <div className={styles.group}>
                <div className={styles.title}>
                    DESIGNER
                </div>
                <div className={styles.desc}>
                    John Doe
                </div>
            </div>
            <div className={styles.notifications}>
                <div className={styles.title}>Push Notifications</div>
                <div className={styles.push}>
                    <div>
                        <select className={styles.notif}>
                            <option>First Draft Approved</option>
                            <option>First Draft Approved</option>
                            <option>First Draft Approved</option>
                        </select>
                    </div>
                    <div>
                        <button className={styles.notif_p}><i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
