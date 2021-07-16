import React, { useState } from "react";
// import logo from "../../Imgs/logo.png";
import "./Login.css";

function Login() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user, setuser] = useState(false);
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="#" alt="logo" width="350px" />
      </div>
      <div className="loginForm">
        <form
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            placeholder="Username"
            type="text"
          />
          {user ? (
            ""
          ) : (
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              type="text"
            />
          )}

          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
            type="Password"
          />

          {user ? <button>Sign In</button> : <button>Sign Up</button>}
        </form>
        {user ? (
          <p>
            <span>Not Signed up? </span>
            <span
              className="loginChange"
              onClick={() => {
                setuser(false);
              }}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p>
            <span>Already Signed up? </span>
            <span
              className="loginChange"
              onClick={() => {
                setuser(true);
              }}
            >
              Sign in
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
