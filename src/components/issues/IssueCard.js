import React from 'react'
import './IssueCard.css'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


function IssueCard(props) {
    return (
        <div>
            <div className="issueCard__box">
                <ErrorOutlineIcon fontSize="small" htmlColor="#22863a"/>
                <div>
                    <p className="issueCard__title">name1</p>
                    <p>{props.title}</p>
                    <p className="issueCard__text">#Opened by darahas 4 hours go</p>
                </div>
            </div>
        </div>
    )
}

export default IssueCard
