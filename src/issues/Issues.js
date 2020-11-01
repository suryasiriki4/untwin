import React from 'react'
import './Issues.css'
import IssueCard from './IssueCard.js';

function Issues() {
    return (
        <div className="issues">
            <div className="issues__title">
                <h1>Issues</h1>
            </div>
           <div className="issueCard__list">
                <IssueCard />
                <IssueCard />
                <IssueCard />
                <IssueCard />
                <IssueCard />
                <IssueCard />
                <IssueCard />
                <IssueCard />
                
           </div>
        </div>
    );
}

export default Issues;
