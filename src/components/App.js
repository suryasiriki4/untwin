import './component-styles/App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Logo from "./Logo";
import React, { Component } from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import Home from  "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "../auth/Login"
import Register from "../auth/Register"

function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
    </div>
    </BrowserRouter>
  );
}

export default App;



