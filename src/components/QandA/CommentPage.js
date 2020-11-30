import React, {useState} from 'react';
import CommentList from './CommentList';

class CommentPage extends React.Component {
    constructor(props) {
        this.state = {
            commentList: []
        };
        this.updateComment = this.updateComment.bind(this);
    }

    updateComment(newComment) {
        this.setState({
            commentList: CommentList.concat(newComment)
        });
    }

    render() {
        return (
            this.state.commentList
        );
    }
}

export default CommentPage;