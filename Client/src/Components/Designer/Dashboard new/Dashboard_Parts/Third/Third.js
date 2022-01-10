/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import "./Third.css";
import EditCheckbox from "./check.png";
import Extra from "./Extra.png";
import Tick from "./Tick.png";
//import data from "./drafts.json";

// status:
// 0:completed
// 1:ongoing
// 2:upcoming

function Third({ formData, setForm }) {
  let current = formData.currentStage;


  const [data, setData] = useState();
  const count = ["First", "Second", "Third", "Fourth", "Fifth"]
  if(!data){
    const num = formData.stageCount;
    if(current == 0){
      if(formData['files']['0']['files'].length > 0){
        current+=1;
      }
    }
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
    //setForm(formData);
  };
  return (
    <div className="des-outtest">
      <div className="des-d-t-box-container">
        {data && data.map((data, key) => {
          return (
            <div
              className={
                (key < current
                  ? "des-d-t-comp"
                  : (formData['files'][current]['designerFiles'].length > 0 && key === current)
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
                    onClick={()=>{

                    }}
                >
                  {key < current
                    ? "TaskCompleted"
                    : key  === current
                    ? "View"
                    : ""}
                </div>
                <img
                  className="des-d-t-check"
                  src={
                    data.status === 0
                      ? Tick
                      : data.status === 1
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
