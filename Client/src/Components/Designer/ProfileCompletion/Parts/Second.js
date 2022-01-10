import React, { useRef, useState } from "react";
import e_style from "./../../Signup/SignUp.module.css";
import styles from "./Second.module.css";
import { ReactComponent as Man } from "./../assets/Firstman.svg";
import { ReactComponent as ArrowRight } from "./../assets/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "./../assets/ArrowLeft.svg";
import classnames from "classnames";
import Slider from "./../../Slider/Slider";
import { useLocation, useHistory } from "react-router-dom";
import { Update } from "../../../../firebasefunctions/firestore";
import { storage } from "../../../../firebase";

function Second({ formData, setForm, navigation }) {
  const history = useHistory();
  const location = useLocation();
  //const email = location.state.email;
  const email = "f20190120@hyderabad.bits-pilani.ac.in";
  console.log("from second", email, "rgh");

  const uploadFile = async (image) => {
    // Loading(true);

    await storage.ref(`${formData.email}/profile`).put(image);
    const URL = await storage
      .ref(`${formData.email}/Profile-Link`)
      .getDownloadURL();
    setForm({
      ...formData,
      profileLink: URL,
    });
    //const file = await update('Projects', '1',image.name,URL, formData.currentStage);
    //if(file && file === 1 ){//Loading(false);}
  };

  return (
    <div className={e_style.container}>
      <div className={e_style.bottom_background}></div>

      <div className={e_style.page}>
        <div className={e_style.man_svg}>
          <Man />
        </div>
        <div className={styles.previous} onClick={navigation.previous}>
          <ArrowLeft className={styles.arrow_left} />
        </div>
        <div className={e_style.box}>
          <div className={styles.header}>COMPLETE YOUR PROFILE</div>
          <div className={e_style.desc}>
            Caution! Existing opportunites ahead{" "}
          </div>
          <div className={e_style.data}>
            <div className={e_style.input_cover}>
              <div className={e_style.titles}>Estimated Price Range</div>
              <div className={styles.desc}>Hourly Payment</div>
              <div className={styles.slider}>
                <Slider
                  min={0}
                  max={1000}
                  onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
              </div>
            </div>
            <div
              className={classnames(styles.input_cover, e_style.input_cover)}
            >
              <div className={e_style.titles} style={{ marginTop: "8vh" }}>
                Portfolio
              </div>
              <div className={styles.resume_cover}>
                <input
                  type="file"
                  id="resume"
                  onChange={(e) => {
                    uploadFile(e.target.files[0]);
                  }}
                />
                <label for="resume" className={styles.resume}>
                  <span style={{ marginRight: "1em" }}>
                    <svg
                      width="33"
                      height="28"
                      viewBox="0 0 33 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.1423 19.7769L16.5064 13.9983L10.8706 19.7769"
                        stroke="#C4C4C4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5061 13.9983V27.0001"
                        stroke="#C4C4C4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28.3273 23.2295C29.7015 22.4613 30.7871 21.2458 31.4127 19.7748C32.0383 18.3038 32.1684 16.661 31.7823 15.1058C31.3963 13.5506 30.5161 12.1715 29.2807 11.1861C28.0453 10.2008 26.525 9.66535 24.9598 9.66429H23.1846C22.7581 7.97297 21.9632 6.40278 20.8597 5.07177C19.7562 3.74076 18.3727 2.68357 16.8134 1.97968C15.254 1.27579 13.5593 0.943517 11.8567 1.00784C10.154 1.07216 8.48778 1.5314 6.98316 2.35104C5.47855 3.17068 4.17473 4.32938 3.16973 5.74005C2.16474 7.15071 1.48471 8.77661 1.18079 10.4955C0.876858 12.2144 0.956937 13.9816 1.415 15.6643C1.87307 17.3469 2.6972 18.9011 3.82543 20.2102"
                        stroke="#C4C4C4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.1423 19.7769L16.5064 13.9983L10.8706 19.7769"
                        stroke="#C4C4C4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  Drag & drop a compiled pdf of your best work!
                </label>
              </div>
              <div className={styles.or}>OR</div>
              <div className={styles.resume_input_cover}>
                <input
                  type="text"
                  className={styles.profile_input}
                  placeholder="Link to you website / behance  / google drive etc. "
                  value={formData.link}
                  onChange={setForm}
                  name="link"
                />
              </div>
            </div>
            <div className={classnames(styles.input_cover)}>
              <div className={e_style.input_cover}>
                <div className={styles.verify_cover}>
                  <input
                    type="checkbox"
                    name="verify"
                    style={{ width: "4em" }}
                  />
                  <label
                    for="verify"
                    style={{ textAlign: "left", fontSize: "2.1vh" }}
                  >
                    By selecting this box, you are providing us consent to share
                    your portfolio with potential clients in order to provide
                    you with opportunities.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.next}
        onClick={() => {
          Update("Designers", email, formData);
          alert("successfully prifile created");
          history.push("/designer/login");
        }}
      >
        <ArrowRight className={styles.arrow_right} />
      </div>
    </div>
  );
}

export default Second;
