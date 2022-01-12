import React, { useRef } from "react";
import styles from "./createprojecthello.module.css";
import { ReactComponent as Time } from ".././assets/TimePeriod.svg";
import { ReactComponent as Edit } from ".././assets/pencil.svg";

import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { forwardRef } from "react";

import Navbar2 from "../../../Navbar/Navbar2";
import Navbar from "../../Dashboard/Dashboard_Parts/Navbar/Navbar";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CreateProject({ formData, setFormData, navigation, startLoading }) {
  const clientName = useRef();
  const title = useRef();
  const companyName = useRef();
  const brief = useRef();
  const obj = useRef();

  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Edit
      style={{ background: Edit }}
      className={styles.svg}
      onClick={onClick}
      ref={ref}
    />
  ));
  const ExampleCustomInput1 = forwardRef(({ value, onClick }, ref) => (
    <Edit
      style={{ background: Edit }}
      className={styles.svg}
      onClick={onClick}
      ref={ref}
    />
  ));

  const setOption = (id) => {
    var x;
    if (id === 2) {
      x = document.getElementById("option2").value;
      formData["state"] = x;
    } else {
      x = document.getElementById("option").value;
      formData["clientName"] = x;
    }
    console.log("this", x);

    setFormData(formData);
  };
  const history = useHistory();
  return (
    <>
      <div className={styles.Body}>
        <div style={{ position: "absolute" }}>
          {" "}
          <Navbar />{" "}
        </div>
        {/* <div> */}

        <div className={styles.maincontainer}>
          <div className={styles.left}>
            <div className={styles.header}>CREATE A PROJECT</div>
            <div className={styles.inputs}>
              <div className={styles.inputTitle}>Client Name</div>
              <div className={styles.input}>
                <input
                  type="text"
                  className={styles.textinput}
                  name="clientName"
                  ref={clientName}
                />
                {/* <select className={styles.maininput} id="option"
                onChange={()=>{setOption(1)}}
              >
                {months.map((value, key)=>{
                  return(<>
                    <option value={value}>{value}</option>
                  </>)
                })

                }
                
              </select> */}
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputTitle}>Project Name</div>
              <div className={styles.input}>
                <input
                  type="text"
                  className={styles.textinput}
                  name="title"
                  ref={title}
                />
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputTitle}>Type of Project </div>
              <div className={styles.input}>
                <select
                  className={styles.maininput}
                  id="option2"
                  onChange={() => {
                    setOption(2);
                  }}
                  // name="state"
                >
                  <option value="something"></option>
                  <option value="February">February</option>
                  <option value="raghavendra">raghavendra</option>
                  <option value="shashwat">shashwat</option>
                  <option value="yatharth">yatharth</option>
                </select>
              </div>
            </div>
            <div className={styles.inputs}>
              <div className={styles.inputTitle}>Company Name</div>
              <div className={styles.input}>
                <input
                  type="text"
                  className={styles.textinput}
                  name="companyName"
                  ref={companyName}
                ></input>
              </div>
            </div>
            <div className={styles.TimePeriod}>
              <div className={styles.timeHeader}>
                <div className={styles.timeTitle}>Time Period</div>
                <div className={styles.pencil}>{/* <Edit /> */}</div>
              </div>
              <div className={styles.dates}>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    formData.start = startDate.toString();
                    setFormData(formData);
                  }}
                  customInput={<ExampleCustomInput />}
                />
                <div className={styles.date}>
                  <div className={styles.BigDate}>{startDate.getDate()}</div>
                  <div className={styles.smolDate}>
                    <div className={styles.month}>
                      {months[startDate.getMonth()]}
                    </div>
                    <div className={styles.mainDate}>
                      {startDate.getFullYear()}
                    </div>
                  </div>
                </div>

                <div className={styles.svg}>
                  <Time />
                </div>
                <div className={styles.date}>
                  <DatePicker
                    selected={EndDate}
                    onChange={(date) => {
                      setEndDate(date);
                      formData.end = EndDate.toString();
                      setFormData(formData);
                    }}
                    customInput={<ExampleCustomInput1 />}
                  />
                  <div className={styles.BigDate}>{EndDate.getDate()}</div>
                  <div className={styles.smolDate}>
                    <div className={styles.month}>
                      {months[EndDate.getMonth()]}
                    </div>
                    <div className={styles.mainDate}>
                      {EndDate.getFullYear()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={styles.button}
              onClick={() => {
                formData.start = startDate.toString();
                formData.end = EndDate.toString();
                formData.clientName = clientName.current.value;
                formData.companyName = companyName.current.value;
                formData.title = title.current.value;
                formData.brief = brief.current.value;
                formData.obj = obj.current.value;
                setFormData(formData);

                navigation.next();
              }}
            >
              Next
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.Para}>
              <div className={styles.paraHead}>Project Objective</div>
              <textarea
                className={styles.paramain}
                style={{ minWidth: "15vw", minHeight: "20vh" }}
                placeholder="Objective"
                ref={obj}
              />
            </div>
            <div className={styles.Para}>
              <div className={styles.paraHead}>Brief Summary</div>
              <textarea
                className={styles.paramain}
                style={{ minWidth: "15vw", minHeight: "20vh" }}
                placeholder="Brief"
                ref={brief}
              />
            </div>
            {/* <div className={styles.rightInput}></div>
          <div className={styles.rightInput}></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProject;
