import React, { useEffect, useState } from 'react';
import {Avatar, Button} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function ReplyComment(props) {
   /* const [ChildCommentNumber, setChildCommentNumber] = useState(0)
    const [OpenReplyComments, setOpenReplyComments] = useState(false)
    useEffect(() => {
        let commentNumber = 0;
        this.props.list.map((comment)=> {
            if(comment.responseTo === this.props.parentCommentId) {
                commentNumber ++
            }
        })
    }, [])

    let renderReplyComment = (parentCommentId) => 
        props.list && props.list.map((comment,index) => (
            <React.Fragment>
                {comment.responseTo === parentCommentId}
            <div style={{marginLeft:'50px', width:'80%'}}>
            <SingleComment comment={comment} postId={this.props.postId} refreshFunction={this.props.refreshFunction}/>
            <ReplyComment list={this.props.list} postId={comment.postId} parentCommentId={this.props.postId} refreshFunction={this.props.refreshFunction}/>
            </div>
            </React.Fragment>    
    ) ) 
    
    const handleChange = () => {
       setOpenReplyComments(!OpenReplyComments)
    } */

    return (
        <div>
            <div style={{float: 'left'}}>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Letter_u.svg/490px-Letter_u.svg.png" />
            </div> 
            <div style={{margin: '16px'}}>
                <h5> User1 </h5>  
                <p>{props.content}</p>
            </div>
            <div>
                <Button style={{float:'left', height:'30px', margin: '4px'}}><KeyboardArrowUpIcon fontSize="small"/></Button>
                <Button style={{float:'left', height:'30px', margin: '4px'}}><KeyboardArrowDownIcon fontSize="small"/></Button>
                <Button style={{height:'30px', margin: '4px'}}>Reply To</Button>
            </div>
            <br />
        </div>
)
}
export default ReplyComment;