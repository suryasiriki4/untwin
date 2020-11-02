import React from "react";
import "./auth.css";
import Footer from "../components/Footer"

function Register() {
  return (
    <div className="container-fluid body">
      <h1 className="heading">Register</h1>
      <form className="form">
        <input type="email" placeholder="Email" className="inputfield"/>
        <input type="text" placeholder="Username" className="inputfield"/>
        <input type="password" placeholder="Password" className="inputfield"/>
        <button type="submit" className="formbutton">Register</button>
      </form>
      <Footer/>
    </div>
  );
}

export default Register;
