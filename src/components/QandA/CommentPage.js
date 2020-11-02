import React, {useState} from 'react';
import CommentList from './CommentList';

function CommentPage() {
    const [commentList, setcommentList] = useState([])
    const updateComment = (newComment) => {
        setcommentList(CommentList.concat(newComment))
    }
    const link="https://i.pinimg.com/564x/9e/05/7b/9e057b3a18abcdcaf0e40312335ac694.jpg"
    return (
        <CommentList />
    );
}

export default CommentPage