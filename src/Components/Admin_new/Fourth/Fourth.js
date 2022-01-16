import React from 'react'
import styles from './Fourth.module.css';
// import Chat from '../../../../../trail/chat';
import Chat from '../../../trail/chat';

function Fourth1({ formData, setForm,admin }) {
    const props = { formData, setForm , User:"designer", To:"client"}
    return (
        <div className={styles.container}>
            
            <div className={styles.box}>
                {admin ? <Chat {...props}/> : <Chat {...props}/>    }
            </div> 
        </div>

    )
}

export default Fourth1
