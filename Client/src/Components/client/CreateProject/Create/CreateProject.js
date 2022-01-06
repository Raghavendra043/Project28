import React from "react";
import styles from "./createprojecthello.module.css";
import { ReactComponent as Time } from ".././assets/TimePeriod.svg";
import { ReactComponent as Edit } from ".././assets/pencil.svg";

import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react";
import { forwardRef } from "react";

import Navbar2 from "../../../Navbar/Navbar2";
import Navbar from "../../Dashboard/Dashboard_Parts/Navbar/Navbar";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function CreateProject() {
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date())
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Edit style={{background:Edit}} className={styles.svg} onClick={onClick} ref={ref}/>
  ));
  const ExampleCustomInput1 = forwardRef(({ value, onClick }, ref) => (
    <Edit style={{background:Edit}} className={styles.svg} onClick={onClick} ref={ref}/>
  ));

  const history = useHistory();
  return (
    <>
    
    <div className={styles.Body}>
    <Navbar2/>
      <div style={{position:"absolute"}}> <Navbar/> </div>
    {/* <div> */}
      
      <div className={styles.maincontainer}>
        <div className={styles.left}>
          <div className={styles.header}>CREATE A PROJECT</div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Client Name</div>
            <div className={styles.input}>
              <select className={styles.maininput}>
                <option value="something"></option>
                <option value="something">paritosh</option>
                <option value="something">raghavendra</option>
                <option value="something">shashwat</option>
                <option value="something">yatharth</option>
              </select>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Project Name</div>
            <div className={styles.input}>
              <input type="text" className={styles.textinput}></input>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Type of Project </div>
            <div className={styles.input}>
              <select className={styles.maininput}>
                <option value="something"></option>
                <option value="something">paritosh</option>
                <option value="something">raghavendra</option>
                <option value="something">shashwat</option>
                <option value="something">yatharth</option>
              </select>
            </div>
          </div>
          <div className={styles.inputs}>
            <div className={styles.inputTitle}>Company Name</div>
            <div className={styles.input}>
              <input type="text" className={styles.textinput}></input>
            </div>
          </div>
          <div className={styles.TimePeriod}>
            <div className={styles.timeHeader}>
              <div className={styles.timeTitle}>Time Period</div>
              <div className={styles.pencil}>
                {/* <Edit /> */}
                

          
              </div>
            </div>
            <div className={styles.dates}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
              <div className={styles.date}>
                <div className={styles.BigDate}>{startDate.getDate()}</div>
                <div className={styles.smolDate}>
                  <div className={styles.month}>{months[startDate.getMonth()]}</div>
                  <div className={styles.mainDate}>{startDate.getFullYear()}</div>
                </div>
              </div>
              
              <div className={styles.svg}>
              
                <Time />
              </div>
              <div className={styles.date}>
              <DatePicker
                selected={EndDate}
                onChange={(date) => setEndDate(date)}
                customInput={<ExampleCustomInput1 />}
              />
                <div className={styles.BigDate}>{EndDate.getDate()}</div>
                <div className={styles.smolDate}>
                  <div className={styles.month}>{months[EndDate.getMonth()]}</div>
                  <div className={styles.mainDate}>{EndDate.getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.button}
            onClick={()=>{
              history.push("/createlist");
            }}
          >Next</div>
        </div>
        <div className={styles.right}>
          <div className={styles.Number}>PRIYA_N199AOP</div>
          <div className={styles.Para}>
            <div className={styles.paraHead}>Project Objective</div>
            <div className={styles.paramain} contentEditable="true">
              Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique
              et. Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut
              tristique et. vLorem ipsum dolor sit amet. Vivamus ra felis
              bibendum ut tristique et.{" "}
            </div>
          </div>
          <div className={styles.Para}>
            <div className={styles.paraHead}>Brief Summary</div>
            <div className={styles.paramain}>
              Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut tristique
              et. Lorem ipsum dolor sit amet. Vivamus ra felis bibendum ut
              tristique et. vLorem ipsum dolor sit amet. Vivamus ra felis
              bibendum ut tristique et.{" "}
            </div>
          </div>
          <div className={styles.rightInput}></div>
          <div className={styles.rightInput}></div>
        </div>
      </div>
    </div>
    </>
  );
}

export default CreateProject;
