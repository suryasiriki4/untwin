import React from "react";
import "./InfoBar.css";

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="chathead"><h3 >{room}</h3></div>
        <div className="leavebtn"><a href="/Home" type="button"><i className="fa fa-times-circle fa-2x exit" aria-hidden="true"></i></a></div>
    </div>
)

export default InfoBar;