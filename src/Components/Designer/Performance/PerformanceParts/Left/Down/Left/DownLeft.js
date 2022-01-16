import React from 'react';
import styles from './DownLeft.module.css';

function DownLeft() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.header}>
                    Account Details
                </div>
                <div className={styles.content}>
                    <div className={styles.field}>
                        <div className={styles.title}>
                            Name
                        </div>
                        <div className={styles.value}>
                            John Doe
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>
                            Account Number
                        </div>
                        <div className={styles.value}>
                            28604003663
                        </div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.title}>
                            Bank Details
                        </div>
                        <div className={styles.value}>
                            Bank Road
                        </div>
                    </div>
                    <div className={styles.field,styles.ifsc}>
                        <div className={styles.title}>
                            IFSC Code
                        </div>
                        <div className={styles.value}>
                            SBIN000086
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownLeft
