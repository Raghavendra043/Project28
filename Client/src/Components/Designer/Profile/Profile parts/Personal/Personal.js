import React from 'react'
import styles from './Personal.module.css';


function Personal(props) {

    var expanded = false;
    const showCheckboxes = () => {
      var check = document.getElementsByClassName(styles.checkboxes)[0];
      if (!expanded) {
        expanded = true;
        check.classList.add(styles.show);
        check.classList.remove(styles.hide);
      }
      else {
        expanded = false;
        check.classList.remove(styles.show);
        check.classList.add(styles.hide);
      }
    }

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
                            <input type="text" className={styles.profile_input} ref={props.nameRef} placeholder={props.nameRef.current}/>
                        </div>
                    </div>
                    <div className = {styles.special}> 
                        <div className={styles.title}>
                            Specailizations
                            <span> <i class="fas fa-pencil-alt fa"></i></span>
                        </div>
                        <div  className={styles.input_cover}>
                            <div className={styles.multiselect}>
                                <div className={styles.selectBox} onClick={showCheckboxes}>
                                    <select>

                                    </select>
                                    <div clasNname={styles.overSelect}></div>
                                </div>
                                <div className={styles.checkboxes}>
                                    <label for="one">
                                    <input type="checkbox" id="one" className={styles.checkme}/>First checkbox</label>
                                    <label for="two">
                                    <input type="checkbox" id="two" className={styles.checkme} />Second checkbox</label>
                                    <label for="three">
                                    <input type="checkbox" id="three" className={styles.checkme}/>Third checkbox</label>
                                    <label for="four">
                                    <input type="checkbox" id="four" className={styles.checkme}/>Third checkbox</label>
                                    <label for="five">
                                    <input type="checkbox" id="five" className={styles.checkme}/>Third checkbox</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Personal
