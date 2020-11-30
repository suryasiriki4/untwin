import React, { useState } from 'react';
import {Avatar, Button} from '@material-ui/core';
import Upvote from './Upvote.js';
import Downvote from './Downvote.js';
import ReplyComment from './ReplyComment';

class SingleComment extends React.Component {
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
    render() {
    return (
        <div>
            {/* <div style={{float: 'left'}}>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Letter_u.svg/490px-Letter_u.svg.png" />
            </div>  */}
            <div style={{margin: '16px'}}>
            <h3 style={{fontSize:'15px'}}> User1 </h3>
            <p>{this.props.content}</p>
            </div>
            <div>
                <Upvote/>
                <Downvote/>
                <Button style={{height:'30px', margin: '4px', backgroundColor: '#33aaa3'}}>Reply To</Button>
            </div> 
            <div style={{marginLeft:'50px', width:'80%'}}>
                <ReplyComment content={"This is a reply"}/>
            </div>
        </div>
    )
    }
}

export default SingleComment
