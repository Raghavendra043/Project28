import React from 'react'
import styles from './DownRight.module.css';

function DownRight() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>
                    Payment Summary
                </div>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.month}>
                            August
                        </div>
                        <div className={styles.money}>
                            8k 
                        </div>
                        <div className={styles.date}>
                            07-07-2001
                        </div>
                    </div>
                    <div className={styles.vl}></div>
                    <div className={styles.right}>
                        <div className={styles.month}>
                            August
                        </div>
                        <div className={styles.money}>
                            8k 
                        </div>
                        <div className={styles.date}>
                            07-07-2001
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DownRight
