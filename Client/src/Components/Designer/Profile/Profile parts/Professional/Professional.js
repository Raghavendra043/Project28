import React from 'react'
import styles from './Professional.module.css';
// import {ReactComponent as Pencil} from './../pencil.svg';
// import P from './../p.png';

function Professional(props) {
    return (
        <div style={{height:"100vh",backgroundColor:"light grey"}}>
            <div className={styles.container}>
                <div className={styles.main_title}>
                    Professional Info

                </div>
                <div className={styles.work}>
                    <div className={styles.title}>
                        Work Experience
                        <span> <i class="fas fa-pencil-alt fa"></i></span>
                    </div>
                    {props.work.map((data,key)=>{
                        return(
                        <div className={styles.input_cover}>
                            <input type='text' className={styles.profile_input} value={data}/>
                        </div>
                        
                        );
                    })}
                </div>
                <div className={styles.links}>
                    <div className={styles.title}>
                        Portfolio Link 
                        <span> <i class="fas fa-pencil-alt fa"></i></span>
                        
                    </div>
                    <div className={styles.input_cover}>
                        <input type='text' className={styles.profile_input} value={props.link}/>
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
