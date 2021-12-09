import React from "react";
import styles from "./Utilites.module.css";
import classnames from "classnames";
import {Approve} from '../../../../firebasefunctions/firestore'
import App from "../../../../App";

function Utilites({ formData, setForm , print}) {
  const current  = formData.currentStage;

  
  // window.onclick = function (event) {
  //   console.log('coming here not ');
  //   var modal = document.getElementById("projectModal");
  //   var modal1 = document.getElementById("projectModalGive");
  //   var modal2 = document.getElementById("projectModalView");
  //   if (event &&
  //     (event.target === modal ||
  //     event.target === modal1 ||
  //     event.target === modal2)
  //   ) {
  //     event.target.style.display = "none";
  //   }
  // };

  //------------------------------button handlers------------------------------

  const approveHandler = () => {
    console.log("coming here too");
    var modal = document.getElementById("projectModal");
    modal.style.display = "block";
  };

  const Approve1 = async ()=>{
    console.log("came here finally");
    await Approve(formData);
  }

  const giveHandler = () => {
    var modal = document.getElementById("projectModalGive");
    modal.style.display = "block";
  };

  const viewHandler = () => {
    var modal = document.getElementById("projectModalView");
    modal.style.display = "block";
  };

  const closeHandler = () => {
    var modal = document.getElementById("projectModal");
    modal.style.display = "none";
    modal = document.getElementById("projectModalView");
    modal.style.display = "none";
    modal = document.getElementById("projectModalGive");
    modal.style.display = "none";
  };

  //----------------------buttons--------------------------------------------

  //----------------------------------------------------------

  return (
    <div>
      <div className={styles.feed}>
        <div className={styles.title}>FEED</div>

        <div>
          {formData && formData.files[current]['adminFiles'].map((element, key)=>(

            <div className={styles.box}>
            <div className={styles.name}>
              {element.name}
            </div>

            <div className={styles.action}>
              <div className={styles.button_cover}>
                {((key+1) === formData.files[current]['adminFiles'].length && 
                  formData['files'][current]['adminApproval'] === false
                ) && (
                  <>
                  <button onClick={Approve1} className={classnames(styles.button, styles.hello)}>{element.URL}</button>
                  <button onClick={approveHandler}
                    // onclick={print}
                    className={classnames(styles.button, styles.hello)}
                  >
                    Approve
                  </button></>
                )}
              </div>
              <div className={styles.button_cover}>
                {(formData['files'][current]['adminApproval'] === "rejected" ||
                  key+1 < formData.files[current]['adminFiles'].length
                ) && (
                  <button
                    onClick={viewHandler}
                    className={classnames(styles.button, styles.hello)}
                  >
                    View FeedBack
                  </button>
                )}
              </div>
              <div className={styles.button_cover}>
                {(key+1 === formData.files[current]['adminFiles'].length &&
                  formData['files'][current]['adminApproval'] === false
                ) && (<button
                  onClick={giveHandler}
                  className={classnames(styles.button, styles.hello)}
                >
                  Give Feedback
                </button>)}
                
              </div>
            </div>
          </div>
          ))} 
          {/* end of the map func */}
        </div>


        {/* <div className={styles.list}>
          <div className={styles.box}>
            <div className={styles.name}>
              Draft {Object.keys(formData.files[current]['adminFiles']).length}
            </div>

            <div className={styles.action}>
              <div className={styles.button_cover}>
                {((formData.files[current].files.length > 0 ||
                  formData.files[current].adminFirstApproval === false) ||
                  (formData.files[current].clientFeedback.lenght > 0 &&
                    formData.files[current].adminSecondApproval === false)) && (
                  <button
                    onClick={print}
                    className={classnames(styles.button, styles.hello)}
                  >
                    Approve1
                  </button>
                )}
              </div>
              <div className={styles.button_cover}>
                {formData.files[current].clientFeedback > 0 && (
                  <button
                    onClick={viewHandler}
                    className={classnames(styles.button, styles.hello)}
                  >
                    View FeedBack
                  </button>
                )}
              </div>
              <div className={styles.button_cover}>
                <button
                  onClick={giveHandler}
                  className={classnames(styles.button, styles.hello)}
                >
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
        </div> /// */}
      </div>

      <div id="projectModal" class={styles.modal}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeHandler}>
            &times;
          </span>
          <div className={styles.title}>APPROVE THE DRAFT</div>

          <div className={styles.actions}>
            <div className={styles.button_cover}>
              <button onClick={Approve1} className={classnames(styles.button)}
                
              >Ye1s</button>
            </div>
            <div className={styles.button_cover}>
              <button className={classnames(styles.button)}>No</button>
            </div>
          </div>
        </div>
      </div>
      <div id="projectModalView" class={styles.modal}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeHandler}>
            &times;
          </span>
          <div className={styles.title}>View Feedback</div>

          <div className={styles.feedback_box}>
            <input
              type="text"
              className={styles.feedback}
              name="view_feedback"
            />
            <div className={styles.button_cover}>
              <button className={classnames(styles.button)}>Feedback</button>
            </div>
          </div>
          <div className={styles.confirm_cover}>
            <button className={classnames(styles.button, styles.confirm)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
      <div id="projectModalGive" class={styles.modal}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeHandler}>
            &times;
          </span>
          <div className={styles.title}>Give Feeback</div>

          <div className={styles.feedback_box}>
            <input
              type="text"
              className={styles.feedback}
              name="view_feedback"
            />
            <div className={styles.button_cover}>
              <button className={classnames(styles.button)}>Feedback</button>
            </div>
          </div>
          <div className={styles.confirm_cover}>
            <button className={classnames(styles.button, styles.confirm)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Utilites;
