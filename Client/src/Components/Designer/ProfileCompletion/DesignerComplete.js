import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import First from "./Parts/First";
import Second from "./Parts/Second";

import styles from "./Complete.module.css";
import e_style from "./../Signup/SignUp.module.css";


const defaultData = {
  fullname: "",
  email: "",
  work1: "",
  exp1:"",
  work2: "",
  exp2:"",
  work3: "",
  exp3:"",
}

const steps = [
  { id: 1 },
  { id: 2 }
  
];

function DesignerComplete() {




  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps, initialStep: 0,
  });
  const props = { formData, setForm, navigation }
  switch (step.id) {
      case 1:
          return (
              <>
              <First {...props}/>
              </>
          )
      case 2:
              return (
              <>
                <Second {...props}/>
              </>
          )


  }     

}

export default DesignerComplete;