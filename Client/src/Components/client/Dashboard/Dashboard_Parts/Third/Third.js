import React, { useState } from "react";
import "./Third.css";
import EditCheckbox from "./check.png";
import Extra from "./Extra.png";
import Tick from "./Tick.png";
//import data from "./drafts.json";
import { useHistory } from "react-router-dom";

// status:
// 0:completed
// 1:ongoing
// 2:upcoming

function Third({ formData, setForm }) {
  const history = useHistory();
  let current = formData.currentStage;
  current = formData.currentStage;
  console.log(formData);
  console.log("from third", current);
  const [data, setData] = useState();
  const count = ["First", "Second", "Third", "Fourth", "Fifth"]
  if(!data){
    const num = formData.stageCount;
    let Data = []
    for(let i =0;i<num;i++  ){
      let Desc='';
      if(i===num-1){Desc = "Final"}
      else{Desc=count[i]}
      Data.push({
        id:i+1,
        Desc
      })
    }
    setData(Data);
  }

  const changeStage = (id) => {
    console.log("current = ", id);
    formData.onCurrent = id;
    setForm(formData);
  };
  const Route= (id)=>{
    if(id === current){
      history.push('/feedback', {title:formData.title,id, from:'client', request:1});
    }
  }
  return (
    <div className="des-outtest">
      <div className="des-d-t-box-container">
        {data && data.map((data, key) => {
          return (
            <div
              className={
                (key < current
                  ? "des-d-t-comp"
                  : key  === current
                  ? "des-d-t-on"
                  : "des-d-t-up") + " des-d-t-box"
              }
              onClick={(e) => {
                changeStage(key);
              }}
            >
              <div
                className="des-d-t-number"
                onClick={(e) => {
                  changeStage(key);
                }}
              >
                {data.id}
              </div>
              <div>
                <div className="des-d-t-des">{data.Desc}</div>
                <hr
                  style={{
                    width: "25%",
                    height: "2px",
                    borderTop: "2.5px solid var(--des-text-col)",
                  }}
                ></hr>
              </div>
              <div className="des-task">
                <div style={{ fontSize: "0.8em", fontWeight: "normal" }}
                  onClick={(e)=>{
                    Route(key)}}
                >
                  {key < current
                    ? "TaskCompleted"
                    : key === current
                    ? "Feedback"
                    : ""}
                </div>
                <img
                  className="des-d-t-check"
                  src={
                    key < current === 0
                      ? Tick
                      : key === current
                      ? EditCheckbox
                      : Extra
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Third;
