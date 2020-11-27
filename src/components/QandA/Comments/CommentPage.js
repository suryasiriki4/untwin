import React, {useState} from 'react';
import CommentList from './CommentList';

function CommentPage(props) {
    const [commentList, setcommentList] = useState([])
    const updateComment = (newComment) => {
        setcommentList(CommentList.concat(newComment))
    }
    const link= props.link;
    return (
        <CommentList />
    );
}

export default CommentPage