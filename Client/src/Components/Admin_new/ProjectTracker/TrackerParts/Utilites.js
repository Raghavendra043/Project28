import React from 'react'
import styles from './Utilites.module.css';
import classnames from 'classnames';
import { ReactComponent as Download } from './../../assets/download.svg';

function Utilites() {

    var modal = document.getElementById("projectModal");
    
    const approveHandler = () => {
            modal.style.display = "block";
    }
    
    const closeHandler = () => {
            modal.style.display = "none"
    }
    
    window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
    }

    const downloadHandler = () => {
        
    }

    const viewHandler = () => {
        
    }

    return (
        <div>
            <div className={styles.feed}>
                <div className={styles.title}>FEED</div>
                <div className={styles.list}>
                    <div className={styles.box}>
                        <div className={styles.name}>Project Name</div>

                        <div className={styles.action}>
                            <div className={styles.button_cover}>
                                <button onClick={approveHandler} className={classnames(styles.button,styles.hello)}>Approve</button>
                            </div>
                            <div className={styles.button_cover}>
                                <button onClick={viewHandler} className={classnames(styles.button,styles.hello)}>View FeedBack</button>
                            </div>
                            <div className={styles.button_cover}>
                                <button onClick={downloadHandler} className={classnames(styles.button,styles.hello)}>Download</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="projectModal" class={styles.modal}>
                <div class={styles.modal_content}>
                    <span class={styles.close} onClick={closeHandler}>&times;</span>
                    <div className={styles.title}>APPROVE THE DRAFT</div>


                    <div className={styles.actions}>
                        <div className={styles.button_cover}>
                                <button className={classnames(styles.button)}>Yes</button>
                        </div>
                        <div className={styles.button_cover}>
                                <button className={classnames(styles.button)}>No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Utilites
