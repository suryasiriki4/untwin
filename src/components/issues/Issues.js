import React, { Component } from 'react'
import './Issues.css'
import IssueCard from './IssueCard.js';
import {Button} from '@material-ui/core';
import Issue from './DiscussionThread/Comment';

class Issues extends Component {


    constructor(props) {
        super(props);

        this.addIssue= this.addIssue.bind(this);
        this.handleIssueEditorInputChange = this.handleIssueEditorInputChange.bind(this);

        this.state = {
            issues: [],
            newIssueBody: '',
        }
    }

    addIssue() {
        const newState = Object.assign({}, this.state);
        newState.issues.push(this.state.newIssueBody);
        newState.newIssueBody = '';
        this.setState(newState);
    }

    handleIssueEditorInputChange(e) {
        this.setState({
            newIssueBody: e.target.value,
        })
    }

    render() {
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
                    {
                        this.state.issues.map((issue, idx) => {
                            return(
                                <IssueCard title={issue}/>
                            );
                        })
                    }
                </div>

               <div className="panel panel-default post-editor">
                <div className="panel-body">
                    <textarea   className="form-control post-editor-input" 
                                name="" id="" 
                                cols="30" 
                                rows="3"
                                value={this.state.newIssueBody}
                                onChange={this.handleIssueEditorInputChange}
                                >
                    </textarea>
                    <button className="btn btn-success post-editor-button" 
                            onClick={this.addIssue}>
                        Post
                    </button>
                </div>
    
                </div>
            </div>
        );
    }


    
    
}

export default Issues;
