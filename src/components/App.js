import React, { Component } from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import Home from  "./Home"
import About from "./About"
import Contact from "./Contact"
import QandA from "./QandA/QandA"

function App() {
  return (
    <BrowserRouter>
      <div>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home}/>
      <Route path="/QandA" component={QandA} />
      <Route path="/About" component={About}/>
      <Route path="/Contact" component={Contact}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
