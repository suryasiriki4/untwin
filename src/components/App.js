import React from "react";
import './component-styles/App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Logo from "./Logo";

function App() {
  return (
    <div className="app">

      {/* Side Bar*/}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
