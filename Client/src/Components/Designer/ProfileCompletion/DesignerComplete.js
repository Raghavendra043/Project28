import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import First from "./Parts/First";
import Second from "./Parts/Second";

import styles from "./Complete.module.css";
import e_style from "./../Signup/SignUp.module.css";


const defaultData = {
  fullname: "",
  email: ""
  
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


  return (
    <div>
      {/* <First /> */}
      <Second />
    </div>
  );
}

export default DesignerComplete;
