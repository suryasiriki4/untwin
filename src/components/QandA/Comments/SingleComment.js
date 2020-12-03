import React, { useState } from 'react';
import {Avatar, Button} from '@material-ui/core';
import Upvote from './Upvote.js';
import Downvote from './Downvote.js';
import ReplyComment from './ReplyComment';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserSharp";

class SingleComment extends React.Component {

    constructor(props) {
        super(props);
    }
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

            <div>
                <div>
                        <p> {this.props.author.id} <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </p>
                        <p>{this.props.description}</p>
                </div>
            <img src={`data:image/png;base64,${Buffer.from(this.props.img.data.data).toString('base64')}`} style={{width:'500px', margin: '4px', height:'500px'}} alt="a"/>
           </div>

            {/* <div>
                <Upvote style={{marginLeft:'12px'}}/>
                <Downvote/>
                <Button style={{height:'30px', margin: '4px', backgroundColor: '#33aaa3'}}>Reply To</Button>
            </div>  */}
            {/* <div style={{marginLeft:'50px', width:'80%'}}>
                <ReplyComment content={"This is a reply"}/>
            </div> */}
        </div>

    )
    }
}

export default SingleComment
