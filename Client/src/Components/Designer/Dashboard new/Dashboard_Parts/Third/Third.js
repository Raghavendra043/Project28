import React from "react";
import "./Third.css";
import EditCheckbox from "./check.png";
import Extra from "./Extra.png";
import Tick from "./Tick.png";
import data from "./drafts.json";

// status:
// 0:completed
// 1:ongoing
// 2:upcoming

function Third({ formData, setForm }) {
  let current = 1; //formData.currentStage;
  current = formData.currentStage;
  console.log(formData);
  console.log("from third", current);

  const changeStage = (id) => {
    console.log("current = ", id);
    formData.onCurrent = id;
    setForm(formData);
  };
  return (
    <div className="des-outtest">
      <div className="des-d-t-box-container">
        {data.map((data, key) => {
          return (
            <div
              className={
                (key < current
                  ? "des-d-t-comp"
                  : (formData['files'][1]['designerFiles'].length > 0 && key === current)
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
