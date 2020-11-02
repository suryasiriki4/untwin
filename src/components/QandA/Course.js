import React from 'react';
import "../component-styles/Course.css";

function Course({name}) {
    return (
        <div className="course">
            <span>{name}</span>
        </div>
    )
}

export default Course;
