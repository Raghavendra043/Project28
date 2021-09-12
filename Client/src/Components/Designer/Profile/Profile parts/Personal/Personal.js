import React from 'react'
import styles from './Personal.module.css';
// import {ReactComponent as Pencil} from './../pencil.svg';

function Personal(props) {


    return (
        <div>
            <div className={styles.container}>
                <div className={styles.main_title}>Perosnal Info</div>
                <div>
                    <div className={styles.image_cover}>
                        <img className={styles.image} src="https://source.unsplash.com/random/300x400"/>
                    </div>

                </div>
                <div className={styles.details}>
                    <div className={styles.user}>
                    <div className={styles.title}>
                        UserName 
                        <span> <i class="fas fa-pencil-alt fa"></i></span>
                    </div>
                        <div  className={styles.input_cover}>
                            <input type="text" className={styles.profile_input} value={props.user}/>
                        </div>
                    </div>
                    <div className = {styles.special}> 
                        <div className={styles.title}>
                            Specailizations
                            <span> <i class="fas fa-pencil-alt fa"></i></span>
                        </div>
                        <div  className={styles.input_cover}>
                            <input type="text" className={styles.profile_input}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal
