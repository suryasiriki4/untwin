import React from "react";
import "./auth.css";
import Footer from "../components/Footer"

function Login() {
  return (
    <div className="container-fluid body">
      <h1 className="heading">Login</h1>
      <form className="form">
        <input type="email" placeholder="Email" className="inputfield"/>
        <input type="password" placeholder="Password" className="inputfield"/>
        <button type="submit" className="formbutton">Login</button>
      </form>
      <Footer/>
    </div>
  );
}

export default Login;
