import React from 'react'
import styles from './About.module.css';
import classnames from 'classnames';
import { ReactComponent as Mail } from './../../assets/mail.svg';
import { ReactComponent as Download } from './../../assets/download.svg';

function About({ formData, setForm }) {
    return (
        <div>
            <div className={styles.details}>
                <div className={styles.header}>
                    <div className={styles.main_title}>
                        {formData.title}
                    </div>
                    <div className={styles.main_desc}>
                        {formData.startDate} - {formData.endDate}
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>
                        CLIENT NAME
                    </div>
                    <div className={styles.desc}>
                        {formData.clientEmail}
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>
                        DESIGNER
                    </div>
                    <div className={styles.desc}>
                    {formData.designerEmail}
                    </div>
                </div>

            </div>
            <div className={styles.notifications}>
                <div className={styles.title}>Push Notifications</div>
                <div className={styles.sub_title}>Client</div>
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
                <div className={styles.sub_title}>Designer</div>
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
            <div className={styles.buttons}>
                    <div className={styles.client}>
                        <button className={classnames(styles.button, styles.cbut)}>
                        <Mail/> Client
                        </button>
                    </div>
                    <div className={styles.des}>
                        <button className={classnames(styles.button, styles.dbut)}>
                            <Mail/>Designer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
