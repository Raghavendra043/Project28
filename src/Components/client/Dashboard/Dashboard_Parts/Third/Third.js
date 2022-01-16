/* eslint-disable jsx-a11y/alt-text */
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
  let y = formData['files'][`${current}`]['files']
  if(y){y = y.length > 0}
  var x;
  if(current != 0){const len = formData['files'][formData.currentStage]['adminFiles'].length
  var x = false;
  if(len>0){
  x = (formData['files'][formData.currentStage]['adminFiles'][len-1]['adminApp'] === 1) && (formData['files'][formData.currentStage]['adminFiles'][len-1]['clientApp'] === 2)}
  }
  
  const [data, setData] = useState();
  const count = ["First", "Second", "Third", "Fourth", "Fifth"]
  if(!data){
    const num = formData.stageCount;
    let Data = []
    if(current == 0){
      if(formData['files']['0']['files'].length > 0){
        current+=1;
      }
    }
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
    //setForm(formData);
  };
  const Route= (id)=>{
    if(id === current){
      history.push('/feedback', {title:formData.title,id, from:'client', request:1, formData});
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
                  : current === 0 && !y && key === current
                  ? "des-d-t-error"
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
                    //const len = formData['files'][formData.currentStage]['adminFiles'].length
                    //const x = (formData['files'][formData.currentStage]['adminFiles'][len-1]['adminApp'] === 1) && (formData['files'][formData.currentStage]['adminFiles'][len-1]['clientApp'] === 2)
                    if(x){Route(key)}
                    }
                  }
                >
                  {key < current
                    ? "TaskCompleted"
                    : current === 0 && !y
                    ? "Upload Files"
                    : key === current && x
                    ? "Feedback"
                    : key === current && !x
                    ? "Waiting for files"
                    :  ""}
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
                  onClick={(e)=>{
                    
                    //const x = (formData['files'][formData.currentStage]['adminFiles'][len-1]['adminApp'] === 1) && (formData['files'][formData.currentStage]['adminFiles'][len-1]['clientApp'] === 2)
                    if(x){Route(key)}
                    }
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
