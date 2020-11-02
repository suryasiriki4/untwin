import React, { useState } from 'react';
import {Avatar, Button} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ReplyComment from './ReplyComment';

function SingleComment(props) {
   /* const [CommentValue, setCommentValue] = useState("")

    const handleChange = (e) => {
        setCommentValue(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        const variables = {
            content: "This is a comment",
            author: "user@12345",
            postId: "12345", }

        Axios.post('api/comment/saveComment', variables)
          .then(response => {
              if(response.data.success) {
                setComment("")
                setOpenReply(!OpenReply)
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save comment')
            } 
          })
       
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
            <div style={{marginLeft:'50px', width:'80%'}}>
                <ReplyComment content={"This is a reply"}/>
            </div>
        </div>
    )
}

export default SingleComment
