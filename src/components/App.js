import React, { Component } from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import Home from  "./Home"
import About from "./About"
import Contact from "./Contact"

import Login from "../auth/Login"
import Register from "../auth/Register"
import QandA from "./QandA/QandA"
import Issues from "./issues/Issues"


function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home}/>
      <Route path="/QandA" component={QandA} />
      <Route path="/issues" component={Issues} />
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
    </div>
    </BrowserRouter>
  );
}

export default App;



