/* eslint-disable default-case */
import React, { useState } from "react";
import { useForm, useStep } from "react-hooks-helper";
import First from "./Parts/First";
import Second from "./Parts/Second";
import { useHistory } from "react-router";
import styles from "./Complete.module.css";
import e_style from "./../Signup/SignUp.module.css";
import Navbar1 from "../../Navbar/Navbar1";
import { BarWave } from "react-cssfx-loading";

const defaultData = {
  work1: "",
  exp1:"",
  work2: "",
  exp2:"",
  work3: "",
  exp3:"",
  payment:"",
  profileLink:"",
  link:"",
  specs:[],
  grad:"",
  experience:"",
  verify:"",
  profile:""
}

const steps = [
  { id: 1 },
  { id: 2 }
  
];

function DesignerComplete() {

  const startLoading = (x)=>{
    if(x)
        {var element = document.getElementById('loading');
        element.style.display = null;
        var element1 = document.getElementById('screen');
        element1.style.opacity = 0.16;
      } else {
          var element = document.getElementById('loading');
          element.style.display = "none";
          var element1 = document.getElementById('screen');
          element1.style.opacity = 10;
        }
    }


  const [formData, setForm] = useForm(defaultData);
  const [formData1, setForm1] = useState(defaultData);
  const [spec, setSpec] = useState(null);
  const { step, navigation } = useStep({
    steps, initialStep: 0,
  });
  const props = { formData, setForm, navigation , spec,setSpec,startLoading}
  const props1 = { formData,formData1, setForm1, spec,setSpec,navigation ,startLoading}


  switch (step.id) {
      case 1:
          return (
              <>
              <Navbar1/>
              <div id = 'screen' style={{position:"absolute", width:"100%"}}>
              <First {...props}/>
              </div>
              <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
                <BarWave width="50px" height="50px" color="#1ABAA9"/>
                <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
              </div>
              </>
          )
      case 2:
              return (
              <>
              <Navbar1/>
              <div id = 'screen' style={{position:"absolute", width:"100%"}}>
              <Second {...props1}/>
              </div>
              <div id="loading" style={{position:"absolute", marginTop:"45vh", marginLeft:"47vw", display:"none"}}>
                <BarWave width="50px" height="50px" color="#1ABAA9"/>
                <p style={{marginTop:"5vh", marginLeft:"-3vw"}}>Creating account, Please wait </p>
              </div>
              </>
          )


  }     

}

export default DesignerComplete;
