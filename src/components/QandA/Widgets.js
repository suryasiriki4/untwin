import React from 'react';
import "../component-styles/Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Course from "./Course";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search untwin" type="text"/>
            </div>
            
            <div className="title__of__courses">
                <h3>What are the subjects?</h3>
            </div>            

            <div className="all_courses">
                <Course name="Software Engineering"/>
                <Course name="Programming Methodology"/>
                <Course name="Compiler Design"/>
                <Course name="Operating Systems"/>
                <Course name="Machine Learning"/>
                <Course name="Data Structures"/>
                <Course name="Alogrithms"/>
                <Course name="Theory of Computation"/>
                <Course name="Discrete Mathematics"/>
                <Course name="Probability and Statistics"/>
                <Course name="Linear Algebra"/>
                <Course name="Digital Systems"/>
            </div> 
        </div>
    );
}

export default Widgets;
