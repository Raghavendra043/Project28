import React from "react";
import "./Login.css";

function login() {
  return (
    <div className="loginParent">
    <div className="login">
      <div id="textA">WELCOME, DESIGNER</div>
      <div id="textB">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
      </div>
      <div id="textC">Designer’s Login</div>
      <div id="form">
        <div id="email" className='spacing'>
          <div className="inputText">Enter Your Email ID</div>
          <input
            className="inputInput"
            type="email"
            placeholder="Ex. johndoe@example.com"
          />
        </div>
        <div id="password" className='spacing'>
          <div className="inputText">Enter Your Password</div>
          <input
            className="inputInput"
            type="password"
            placeholder="password@123"
          />
        </div>
        <div id="options">
          <div id="opt1">
            <input type="checkbox" id="RememberMe" name="RememberMe" />
            <label for="RememberMe"> Remember me </label>
          </div>
          <div id="opt2">Forgot Password?</div>
        </div>
      </div>
      <div id="loginBtn">
        <div id="liginBtnText">Login</div>
      </div>
    </div>
    </div>
  );
}

export default login;
