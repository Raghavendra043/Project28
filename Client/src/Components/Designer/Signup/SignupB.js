import React from "react";
import "./SignupB.css";

function SignupB() {
  return (
    <div className="loginParent">
      <div className="login">
        <div id="textA">WELCOME, DESIGNER</div>
        <div id="textB">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
        </div>

        <div id="form">
          <div id="password" className="spacing">
            <div className="inputText">Create a Password</div>
            <input
              className="inputInput"
              type="password"
              placeholder="password@123"
            />
          </div>
          <div id="password" className="spacing">
            <div className="inputText">Confirm Password</div>
            <input
              className="inputInput"
              type="password"
              placeholder="password@123"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupB;
