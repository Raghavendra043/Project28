import React, { useState } from 'react'
import styles from './About.module.css';
import classnames from 'classnames';
import { ReactComponent as Mail } from './../../assets/mail.svg';
import { ReactComponent as Download } from './../../assets/download.svg';
import { search } from '../../../../firebasefunctions/firestore';

function About({ formData, setForm }) {

    const [clientName, setC] = useState(formData.clientEmail);
    const [desName, setD] = useState(formData.designerEmail);
    if(clientName === formData.clientEmail){
        search('Client', "email",formData.clientEmail ).then((det)=>{
            setC(det.fullname);
        })
    }
    if(desName === formData.designerEmail){
        search('Designers', "email",formData.designerEmail ).then((det)=>{
            setD(det.name);
        })
    }
    return (
        <div>
            <div className={styles.details}>
                <div className={styles.header}>
                    <div className={styles.main_title}>
                        {formData.title}
                    </div>
                    <div className={styles.main_desc}>
                        Start : {new Date(formData["projectInfo"].start).toDateString()}<br/> End : {new Date(formData["projectInfo"].end).toDateString()}
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>
                        CLIENT
                    </div>
                    <div className={styles.desc}>
                        {clientName}<br/>
                        {formData.clientEmail}
                    </div>
                </div>
                <div className={styles.group}>
                    <div className={styles.title}>
                        DESIGNER
                    </div>
                    <div className={styles.desc}>
                    {desName} <br/>
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
