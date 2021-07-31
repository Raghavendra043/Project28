import React from "react";
import "./SignupA.css";

function SignupA() {
  return (
    <div className="loginParent">
      <div className="login">
        <div id="textA">WELCOME, DESIGNER</div>
        <div id="textB">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
        </div>

        <div id="form">
          <div id="email" className="spacing">
            <div className="inputText">Your Name</div>
            <input
              className="inputInput"
              type="email"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div id="email" className="spacing">
            <div className="inputText">Enter Your Email ID</div>
            <input
              className="inputInput"
              type="email"
              placeholder="Eg. johndoe@email.com"
            />
          </div>
          <div id="password" className="spacing">
            <div className="inputText">Your Phone Number</div>
            <input
              className="inputInput"
              type="password"
              placeholder="Eg. +91 9123456789"
            />
          </div>
        </div>
        <div className="phoneVerification">
          <div className="pvText">Phone Verification</div>
          <div className="pvInput">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupA;
