import React, { useRef } from 'react'
import styles from './Professional.module.css';


function Professional({data, setData}) {
    const exp1 = useRef();
    const exp2 = useRef();
    const exp3 = useRef();
    const link = useRef();
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
                        <input type='text' className={styles.profile_input} ref = {exp1} placeholder={data.exp1}
                            //onChange={()=>{setData({...data, exp1:exp1.current.value})}}
                        />
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref = {exp2} placeholder={data.exp2}
                            //onChange={()=>{setData({...data, exp2:exp2.current.value})}}
                        />
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref = {exp3} placeholder={data.exp3}
                            //onChange={()=>{setData({...data, exp3:exp3.current.value})}}
                        />
                    </div>

                </div>
                <div className={styles.links}>
                    <div className={styles.title}>
                        Portfolio Link 
                        <span> <i class="fas fa-pencil-alt fa"></i></span>
                        
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} ref = {link} placeholder={data.link}
                            onChange={()=>{//setData({...data, link:link.current.value})
                            }}
                        />
                    </div>
                    <div className={styles.or}>OR</div>
                    <div className={styles.resume_cover}>
                        <input type="file" id='resume' />
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
