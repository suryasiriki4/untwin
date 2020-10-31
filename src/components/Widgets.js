import React from 'react';
import "./component-styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search untwin" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What are the subjects? </h2>
            </div>    

    
        </div>
    );
}

export default Widgets;
