/* eslint-disable*/
import React, { useState, useRef } from "react";
import styles from "./Utilites.module.css";
import classnames from "classnames";
import { Approve, Reject } from "../../../../firebasefunctions/firestore";
import App from "../../../../App";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { ReactComponent as Time } from "../../../client/CreateProject/assets/TimePeriod.svg";
import { ReactComponent as Edit } from "../../../client/CreateProject/assets/pencil.svg";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Utilites({ formData, setForm, print }) {
  const location = useLocation();
  const [present, setPre] = useState(false);
  const [stageNo, setStage] = useState();


  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date())
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <Edit style={{background:Edit}} className={styles.svg} onClick={onClick} ref={ref}/>
  ));
  const ExampleCustomInput1 = forwardRef(({ value, onClick }, ref) => (
    <Edit style={{background:Edit}} className={styles.svg} onClick={onClick} ref={ref}/>
  ));

  const clientPay = useRef();
  const designerPay = useRef();

  console.log('from Admin', formData);
  // const data = location.state.title;
  // console.log("from this is the last",data);
  const history = useHistory();
  const current = formData.currentStage;

  const stages = [...Array(formData.currentStage).keys()];
  console.log(stages);
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

  const Approve1 = async () => {
    console.log("came here finally");
    history.push("/feedback", {
      title: formData.title,
      id: formData.currentStage,
      from: "admin",
      request: 1,
      formData
    });
    //const project = await Approve(formData);
    //setForm(project);
    //window.location.reload();
  };
  const Reject1 = async () => {
    console.log("rejected");
    //await Reject(formData);
    history.push("/feedback", {
      title: formData.title,
      id: formData.currentStage,
      from: "admin",
      request: 0,
      formData
    });
    //window.location.reload();
  };

  const giveHandler = () => {
    var modal = document.getElementById("projectModalGive");
    modal.style.display = "block";
  };

  const viewHandler = (id) => {
    console.log("selected", id);
    setPre(id);
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

  const check = ()=>{
    let opts = {
      url: `${process.env.REACT_APP_BACK}/create-pdf`,
      method: "POST",
      responseType: 'blob',
      data:{title:formData.title}
  };
    axios(opts).then((res)=>{
      saveAs(res.data, `${formData.title}_Project28.pdf`, res.headers['content-type']);

    }).catch((err)=>{console.log(err);})
  }

  return (
    <div>
      <div className={styles.feed}>
        <div className={styles.title} style={{display:"inline"}}>FEED</div>
        <div className={styles.title} style={{display:"inline", marginLeft:"17vw"}}
          onClick={check}
        >Project Info</div>
        
        {formData && formData.assigned && formData.files[`0`]["files"].map((element, key)=>{
          return (<div className={styles.box}>
            <div className={styles.name}>{element.name}</div>
          </div>)
        })
          
        }
        <div style={{marginBottom:"10px"}}></div>

        {formData.assigned ? (<div className={styles.list}>
          {stages.map((data, key) => {
            return (
              <div>
                {" "}
                {data + 1}
                {formData &&
                  formData.files[`${data + 1}`]["adminFiles"].map(
                    (element, key) => (
                      <div className={styles.box}>
                        <div className={styles.name}>{element.name}</div>

                        <div className={styles.action}>
                          <div className={styles.button_cover}>
                            {key + 1 ===
                              formData.files[`${data + 1}`]["adminFiles"]
                                .length &&
                              formData["files"][`${data + 1}`][
                                "adminApproval"
                              ] === false &&
                              formData["files"][`${data + 1}`]["designerFiles"]
                                .length === 0 && (
                                <>
                                  <a href={element.url}>
                                    <button
                                      onClick={Approve1}
                                      className={classnames(
                                        styles.button,
                                        styles.hello
                                      )}
                                    >
                                      File
                                    </button>
                                  </a>
                                  <button
                                    onClick={approveHandler}
                                    // onclick={print}
                                    className={classnames(
                                      styles.button,
                                      styles.hello
                                    )}
                                  >
                                    Approve
                                  </button>
                                  
                                </>
                              )}
                          </div>
                          <div className={styles.button_cover}>
                            {(formData["files"][`${data + 1}`][
                              "adminApproval"
                            ] === "rejected" ||
                              formData["files"][`${data + 1}`][
                                "adminApproval"
                              ] === true ||
                              formData["files"][`${data + 1}`]["designerFiles"]
                                .length > 0 ||
                              key + 1 <
                                formData.files[`${data + 1}`]["adminFiles"]
                                  .length) && (
                              // key+1 < formData.files[current]['adminFiles'].length
                              <button
                                onClick={()=>{viewHandler(element)}}
                                className={classnames(
                                  styles.button,
                                  styles.hello
                                )}
                              >
                                View FeedBack / view File
                              </button>
                            )}
                          </div>
                          <div className={styles.button_cover}>
                            {key + 1 ===
                              formData.files[`${data + 1}`]["adminFiles"]
                                .length &&
                              formData["files"][`${data + 1}`][
                                "adminApproval"
                              ] === false &&
                              formData["files"][`${data + 1}`]["designerFiles"]
                                .length === 0 && (
                                <button
                                  onClick={giveHandler}
                                  className={classnames(
                                    styles.button,
                                    styles.hello
                                  )}
                                >
                                  Give Feedback
                                </button>
                              )}
                          </div>
                        </div>
                      </div>
                    )
                  )}
              </div>
            );
          })}

          {/* end of the map func */}
        </div>) : formData && formData['desStatus'] === 3 || formData['desStatus'] == 1?
        
        (<>
        {formData['desStatus'] == 3 ? (<>Designer has rejected , please Allot<br/></>) : (<></>)}
        <input type="number" placeholder="Number of Stages"
          onChange={(e) => setStage(e.target.value)}
        />
        <button
          onClick={()=>{
            history.push({ 
              pathname: '/designer',
              state: {title:formData.title, stage:stageNo, clientPay:clientPay.current.value, designerPay:designerPay.current.value, start:startDate.toString(), end:EndDate.toString()}
             });
          }}
        >Assign designer</button><br/><br/>
        Payment- client
        <input
          placeholder="Client"
          ref={clientPay}
        /><br/><br/>
        Payment- Designer
        <input
          placeholder="Designer"
          ref={designerPay}
        /><br/><br/>

        <div className={styles.TimePeriod}>
            <div className={styles.timeHeader}>
              <div className={styles.timeTitle}><b>Time Period</b></div><br/>
              <div className={styles.pencil}>                
              </div>
            </div>
            <div className={styles.dates}>
            <DatePicker
                selected={startDate}
                onChange={(date) => {setStartDate(date)}}
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
                onChange={(date) => {setEndDate(date) }}
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
        
        </>)
        : formData['desStatus'] ==2 ?
        (<>You have already alloted the designer,waiting for approval
              <></>
        </>) 
        : (<></>) 
      }

        
      </div>

      <div id="projectModal" class={styles.modal}>
        <div class={styles.modal_content}>
          <span class={styles.close} onClick={closeHandler}>
            &times;
          </span>
          <div className={styles.title}>APPROVE THE DRAFT</div>

          <div className={styles.actions}>
            <div className={styles.button_cover}>
              <button onClick={Approve1} className={classnames(styles.button)}>
                Ye1s
              </button>
            </div>
            <div className={styles.button_cover}>
              <button className={classnames(styles.button)} onClick={Reject1}>
                No
              </button>
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
            {present ? (<><div><b>Admin:</b><br/> {present['admin'][0][1]}</div>
            <div>{present['admin'][0][2]}</div>
            {present['adminApp'] != 1 && present['client'].length >0  ? (<><div><b>Client:</b><br/> {present['client'][0][1]}</div>
            <div>{present['client'][0][2]}</div></>) : present['adminApp'] != 3 ? (<><b>You disapproved this</b></>):(<></>)}
            </>) :(<></>)
            }
            <div className={styles.button_cover}>
              <button className={classnames(styles.button)}><a href={present.url}>View File</a></button>
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
