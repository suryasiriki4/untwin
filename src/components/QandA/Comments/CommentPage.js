import React, {useState} from 'react';
import CommentList from './CommentList';

<<<<<<< HEAD:src/components/QandA/CommentPage.js
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
=======
function CommentPage(props) {
    const [commentList, setcommentList] = useState([])
    const updateComment = (newComment) => {
        setcommentList(CommentList.concat(newComment))
    }
    const link= props.link;
    return (
        <CommentList />
    );
>>>>>>> b28f392e3753677430c2c8f682c3449ca38d0cd2:src/components/QandA/Comments/CommentPage.js
}

export default CommentPage;