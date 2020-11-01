import React from 'react';
import "./component-styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search"

import Course from "./Course";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search untwin" type="text"/>
            </div>
            
            <div className="all__courses">
                <Course name="Web devlopment"/>
            </div>
        </div>
    );
}

export default Widgets;
