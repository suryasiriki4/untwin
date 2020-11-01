import React from 'react'
import './IssueCard.css'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function IssueCard() {
    return (
        <div>
            
                <div className="issueCard__box">
                            <h3> <ErrorOutlineIcon fontSize="small"/> name1</h3>
                            <div className="issueCard__text">                                
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
                            </div>
                </div>

            
        </div>
    )
}

export default IssueCard
