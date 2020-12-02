import React, { Component } from "react"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import Home from  "./Home"
import About from "./About"
import Contact from "./Contact"

import Login from "../auth/Login"
import Register from "../auth/Register"
import QandA from "./QandA/QandA"
import DiscussionThread from "./issues/DiscussionThread/DiscussionThread"
import Issues from "./issues/Issues"; 
import CommentPage from "./QandA/Comments/CommentPage"
import DoubtBox from "./QandA/DoubtBox"

import Join from "./Join/Join";
import Chat from "./Chat/Chat";


function App() {
  return (
    
    <BrowserRouter>
      <div>
      <Route exact path="/">
        <Redirect to="/Home" />
      </Route>
      <Route path="/Home" component={Home}/>
      <Route path="/QandA" component={QandA} />
      <Route path="/Post" component={DoubtBox}/>
      <Route path="/DiscussionThread" component={DiscussionThread} />
      <Route path="/Issues" component={Issues} />
      <Route path="/About" component={About}/>
      <Route path="/Join" exact component={Join} />
      <Route path="/Rooms" component={Chat}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Comments" component={CommentPage}/>
    </div>
    </BrowserRouter>
  );
}

export default App;



