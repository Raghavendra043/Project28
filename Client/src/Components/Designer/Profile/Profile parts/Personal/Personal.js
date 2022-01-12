import React, { useRef } from "react";
import styles from "./Personal.module.css";
import classnames from "classnames";
import data1 from "../../desProf.json";

function Personal({ data, setData }) {
  const Name = useRef();
  var expanded = false;
  const showCheckboxes = () => {
    var check = document.getElementsByClassName(styles.checkboxes)[0];
    if (!expanded) {
      expanded = true;
      check.classList.add(styles.show);
      check.classList.remove(styles.hide);
    } else {
      expanded = false;
      check.classList.remove(styles.show);
      check.classList.add(styles.hide);
    }
  };

  const special = data1.specialization;

  const handleCheck = (i) => {
    special[i].status = !special[i].status;
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main_title}>Perosnal Info</div>
        <div>
          <div className={styles.image_cover}>
            <img
              className={styles.image}
              src="https://source.unsplash.com/random/300x400"
            />
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.user}>
            <div className={styles.title}>
              UserName
              <span>
                {" "}
                <i class="fas fa-pencil-alt fa"></i>
              </span>
            </div>
            <div className={styles.input_cover}>
              <input
                type="text"
                className={styles.profile_input}
                ref={Name}
                onChange={() => {
                  setData({ ...data, name: Name.current.value });
                }}
                placeholder={data.name}
              />
            </div>
          </div>
          <div className={styles.special}>
            <div className={styles.title}>
              Specailizations
              <span>
                {" "}
                <i class="fas fa-pencil-alt fa"></i>
              </span>
            </div>
            <div className={styles.input_cover}>
              <div className={styles.multiselect}>
                <div className={styles.selectBox} onClick={showCheckboxes}>
                  <input
                    type="text"
                    className={styles.profile_input}
                    placeholder="Select Your Specializaiton"
                    disabled
                  />
                  <div clasNname={styles.overSelect}></div>
                </div>
                <div className={classnames(styles.hide, styles.checkboxes)}>
                  {special.map((data, key) => {
                    return (
                      <label for={key}>
                        {data.name}
                        <input
                          type="checkbox"
                          id={key}
                          onChange={handleCheck(key)}
                          className={styles.checkme}
                        />
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
