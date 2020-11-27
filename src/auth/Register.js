import React from "react";
import "./auth.css";
import Footer from "../components/Footer"
import {UserRegistration} from "../services/registerservice.js"

class Register extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
      email:'',
      error: false,
      loginSuccess: false,
    };
  }

  handleEmail = (e) => {
    this.setState({
      email:e.target.value
    });
  }

  handleUsername = (e) => {
    this.setState({
      username:e.target.value
    });
  }

  handlePassword = (e) => {
    this.setState({
      password:e.target.value
    });
  }

  onSubmit = async (e) =>{
    e.preventDefault();
    const data = {
      name:this.state.username,
      email:this.state.email,
      password:this.state.password
    }
    const res = await UserRegistration(data);
    if(res.status === 200){
      this.props.history.push('/QandA')
    }
    localStorage.setItem('userinfo',res)
  }

  render() {
    return (
      <div className="container-fluid body">
        <h1 className="heading">Register</h1>
        <form className="form">
          <input type="email" placeholder="Email" className="inputfield" onChange = {this.handleEmail}/>
          <input type="text" placeholder="Username" className="inputfield" onChange = {this.handleUsername}/>
          <input type="password" placeholder="Password" className="inputfield" onChange = {this.handlePassword}/>
          <button type="submit" className="formbutton" onClick={this.onSubmit}>Register</button>
        </form>
        <Footer/>
      </div>
    );
  };
}

export default Register;
