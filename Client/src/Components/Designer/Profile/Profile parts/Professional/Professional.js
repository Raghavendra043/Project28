import React from 'react'
import styles from './Professional.module.css';


function Professional(props) {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.main_title}>
                    Professional Info

                </div>
                <div className={styles.work}>
                    <div className={styles.title}>
                        Work Experience
                        <span> <i class="fas fa-pencil-alt fa"></i></span>
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref={props.work1Ref} placeholder={props.work1Ref.current}/>
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref={props.work2Ref} placeholder={props.work2Ref.current}/>
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref={props.work3Ref} placeholder={props.work3Ref.current}/>
                    </div>

                </div>
                <div className={styles.links}>
                    <div className={styles.title}>
                        Portfolio Link 
                        <span> <i class="fas fa-pencil-alt fa"></i></span>
                        
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref={props.linkRef} placeholder={props.linkRef.current}/>
                    </div>
                    <div className={styles.or}>OR</div>
                    <div className={styles.resume_cover}>
                        <input type="file" id='resume' accept='image/*'/>
                        <label for='resume' className={styles.resume}>
                            <span><i class="far fa-folder" style={{paddingRight:"0.7em"}}></i></span>
                            Upload
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional
