import React, { useState } from "react";
import styles from "./createprojectlist.module.css";
import { ReactComponent as Time } from ".././assets/TimePeriod.svg";
import { ReactComponent as Edit } from ".././assets/pencil.svg";
import Navbar from "../../Dashboard/Dashboard_Parts/Navbar/Navbar";
import Navbar2 from "../../../Navbar/Navbar2";
import CP1 from "./CreateProjectList/CP1";
import CP2 from "./CreateProjectList/CP2";
import CP3 from "./CreateProjectList/CP3";
import CP4 from "./CreateProjectList/CP4";
import CP5 from "./CreateProjectList/CP5";
import CP6 from "./CreateProjectList/CP6";
import { addData, adminNotify } from "../../../../firebasefunctions/firestore";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


const months = ["Febr3uary", "February", "Febrdeuary", "Februarefy", "Fdebruary", "February"];

function CreateProjectList({formData, setFormData, navigation,startLoading}) {
  const history = useHistory();
  let dis = false ;
  console.log(formData);
  if(!dis){for(let i=0;i<months.length;i++){
    if(formData.state == months[i]){
      dis = i+1;
      console.log(dis);
    }
  }}

  const data = {
    dis,
    "companyName":"",
    "tagline":"",
    "motto":"",
    "since":"",
    "target":"",
    "message":"", 
    "brand":"", //x1
    "competitor":"", // 2 //1
    "logo":"",
    "style":"",
    "look":"",
    "application":"", // 5

    "guidelines":"",
    "contentNo":"",
    "slides":"",
    "content":"", // 2

    "story":"",
    "guidlinesPlace":"",
    "brandcolleteral":"",
    "styledef":"",
    "applicationCollateral":"",
    "illustration":"", //1

    "objective":"",
    "packaging":"", // 3

    "material":"",
    "specs":"",
    "packcopy":"",
    "format":"",
    "productno":"", //3

    "creatives":"",
    "social":"",
    "dimensions":"",
    "reels":"", // 4

    "wordsNo":"",
  }
  const [Data, setData] = useState({...data, ...formData});
  const props = {Data, setData}

  const create=async()=>{
    try {const key = Object.keys(Data);
    let Data1 = {}
    for(const i of key){
      if(Data[i].toString().trim().length > 0){
        Data1[i] = Data[i]
      }
    }
    startLoading(true);
    await addData('Projects', Data.title, {title:Data.title,projectInfo:Data1, assigned:false,clientEmail:atob(window.sessionStorage.getItem("key"))});
    startLoading(false);

    toast.info("Project Created Successfully", {position:"bottom-center"})
    history.push("/");
    const content = {
      TO:process.env.REACT_APP_ADMIN,
      content:{
        subject:"New Project Created",
        text:"project",
        html:`<div><h2>New Project Created</h2><h3>Title : ${Data.title}</h3><h3>ClientEmail : ${Data.clientEmail}</h3></div>`
      }
    }
    const noti= {
      data:"New project Created",
      sub:`Created by ${Data.clientEmail}, Title: ${Data.title}`,
      created:new Date().toString(),
      user:"client"
    }
    adminNotify(noti).then(()=>{})
    axios.post(`${process.env.REACT_APP_BACK}/sendMail`, content).then(()=>{})
    history.push("/");} catch (err){
      console.log(err);
    }

  }

  return (
    <div className={styles.container}>
      <Navbar2/>
      <div style={{ height: "6vh" }}></div>
      <div style={{ position: "absolute" }}>
        <Navbar />{" "}
      </div>
      <span style={{ display: dis === 1 ? "block" : "none" }}>
        <CP1 {...props}/>
      </span>
      <span style={{ display: dis === 2 ? "block" : "none" }}>
        <CP2 {...props}/>
      </span>
      <span style={{ display: dis === 3 ? "block" : "none" }}>
        <CP3 {...props}/>
      </span>
      <span style={{ display: dis === 4 ? "block" : "none" }}>
        <CP4 {...props}/>
      </span>
      <span style={{ display: dis === 5 ? "block" : "none" }}>
        <CP5 {...props}/>
      </span>
      <span style={{ display: dis === 6 ? "block" : "none" }}>
        <CP6 {...props}/>
      </span>

      {/* --------------------------------------- Time Period -----------------------------*/}
      <div className={styles.box}>
        <span className={styles.title}>Time Period</span>
        <div className={styles.time}>
          <div className={styles.detail}>MileStone</div>

          <div className={styles.dates}>
            <div className={styles.date}>
              <div className={styles.BigDate}>24</div>
              <div className={styles.smolDate}>
                <div className={styles.month}>december</div>
                <div className={styles.mainDate}>2092</div>
              </div>
            </div>
            <div className={styles.svg}>
              <Time />
            </div>
            <div className={styles.date}>
              <div className={styles.BigDate}>24</div>
              <div className={styles.smolDate}>
                <div className={styles.month}>december</div>
                <div className={styles.mainDate}>2092</div>
              </div>
            </div>
            <div className={styles.pencil}>
              <Edit />
            </div>
          </div>
        </div>
      </div>

      <div  style={{textAlign:"center", marginBottom:"20px"}}>
        <button className={styles.title1}
          onClick={create}
        >Submit</button>
      </div>
    </div>
  );
}

export default CreateProjectList;
