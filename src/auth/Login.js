import React from "react";
import "./auth.css";
import Footer from "../components/Footer"
import {UserLogin} from "../services/loginservice.js"

class Login extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      username:'',
      password:''
    }

  }

  handleEmail = (e) => {
    this.setState({
      email:e.target.value
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
      email:this.state.email,
      password:this.state.password
    }
    const status = await UserLogin(data);
    console.log(status);
    if(status === 200){
      this.props.history.push('/QandA');
    }
  }

  render(){
    return (
      <div className="container-fluid body">
        <h1 className="heading">Login</h1>
        <form className="form">
          <input type="email" placeholder="Email" className="inputfield" onChange={this.handleEmail}/>
          <input type="password" placeholder="Password" className="inputfield" onChange={this.handlePassword}/>
          <button type="submit" className="formbutton" onClick={this.onSubmit}>Login</button>
        </form>
        <Footer/>
      </div>
    );
  }

}

export default Login;
