import React from "react";
import styles from "./Utilites.module.css";
import classnames from "classnames";
import { ReactComponent as Download } from "./../../assets/download.svg";

function Utilites(props) {
  window.onclick = function (event) {
    var modal = document.getElementById("projectModal");
    var modal1 = document.getElementById("projectModalGive");
    var modal2 = document.getElementById("projectModalView");
    if (
      event.target == modal ||
      event.target == modal1 ||
      event.target == modal2
    ) {
      event.target.style.display = "none";
    }
  };

  const approveHandler = () => {
    var modal = document.getElementById("projectModal");
    modal.style.display = "block";
  };

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
    var modal = document.getElementById("projectModalView");
    modal.style.display = "none";
    var modal = document.getElementById("projectModalGive");
    modal.style.display = "none";
  };

  return (
    <div>
      <div className={styles.feed}>
        <div className={styles.title}>FEED</div>
        <div className={styles.list}>
          <div className={styles.box}>
            <div className={styles.name}>Project Name</div>

            <div className={styles.action}>
              <div className={styles.button_cover}>
                <button
                  onClick={approveHandler}
                  className={classnames(styles.button, styles.hello)}
                >
                  Approve
                </button>
              </div>
              <div className={styles.button_cover}>
                <button
                  onClick={viewHandler}
                  className={classnames(styles.button, styles.hello)}
                >
                  View FeedBack
                </button>
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
        </div>
      </div>

      <div id="projectModal" class={styles.modal}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeHandler}>
            &times;
          </span>
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
