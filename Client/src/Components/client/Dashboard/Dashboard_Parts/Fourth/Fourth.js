import React from 'react'
import styles from './Fourth.module.css';
import Chat from '../../../../../trail/chat';

function Fourth({ formData, setForm }) {
    const props = { formData, setForm , User:"client", To:"designer"}
    return (
        <div className={styles.container}>
            
            <div className={styles.box}>
                <Chat {...props}/>     
            </div> 
        </div>

    )
}

export default Fourth
