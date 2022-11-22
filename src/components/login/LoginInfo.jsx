import React from "react";
import "./LoginInfo.css"

function LoginInfo() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
         <form className="loginform">
          <div className="loginTitle">Sign in</div>
          <input className="loginInput" type="text" placeholder="Username" />
          <input className="loginInput"type="password" placeholder="Password" />
          <button className="loginButton" type="submit">Login</button>
      </form>
      </div>
    </div>

  );
}

export default LoginInfo;