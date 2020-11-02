import React from 'react'
import './Issues.css'
import IssueCard from './IssueCard.js';
import {Button} from '@material-ui/core';

function Issues() {
    return (
        <div className="issues">
            <div className="issues__title">
                <h1>Issues</h1>
            </div>

            <div className="home__button__container">
                <Button variant="outlined" className="home__button" href="/Home">
                    Return to Home
                </Button>
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
