import React from "react";
import "./Login.css";

function login() {
  return (
    <div className="loginParent">
      <div className="login_a" style={{ width: 320 }}>
        <div id="textA_a">WELCOME, DESIGNER</div>
        <div id="textB_a">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
        </div>
        <div id="textC_a">Designer’s Login</div>
        <div id="form">
          <div id="email" className="spacing_a">
            <div className="inputText_a">Enter Your Email ID</div>
            <input
              className="inputInput_a"
              type="email"
              placeholder="Ex. johndoe@example.com"
            />
          </div>
          <div id="password" className="spacing_a">
            <div className="inputText_a">Enter Your Password</div>
            <input
              className="inputInput_a"
              type="password"
              placeholder="password@123"
            />
          </div>
          <div id="options_a">
            <div id="opt1_a">
              <input type="checkbox" id="RememberMe_a" name="RememberMe" />
              <label id="remem" for="RememberMe">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <div id="opt2_a">Forgot Password?</div>
          </div>
        </div>
        <div id="loginBtn_a">
          <div id="liginBtnText_a">Login</div>
        </div>
      </div>
    </div>
  );
}

export default login;
