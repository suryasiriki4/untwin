import React, { useState } from 'react';
import {Button, Input, Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserSharp";
import SingleComment from './SingleComment';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import "../../component-styles/Post.css";

class CommentList extends React.Component {
   /* const [Comment, setComment] = useState("");

    const handleChange = (e) => {
        setComment(e.currentTarget.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        
        const variables = {
            content: "Hi",
            author: "user@123",
            postId: "1234"
        }

    } */

    handleSubmit() {

    }

    render() {
    return (
        <div style={{margin: '16px'}}>
            {/* <div className="post__avatar" style={{margin: '16px'}}>
                <Avatar style={{float: 'left'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Letter_u.svg/490px-Letter_u.svg.png" />
            </div>  */}
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Sam Curran <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Please help with this doubt, highly appreciated??</p>
                    </div>
                </div>
           <img src={"https://i.pinimg.com/564x/9e/05/7b/9e057b3a18abcdcaf0e40312335ac694.jpg"} alt=""/>
           </div>
             <h3 style={{fontSize:'25px', color: '#33aaa3'}}> Replies </h3>
             <SingleComment content={"This is a comment"} />
             <SingleComment content={"This is also another comment"} />
             <form style={{display:"flex"}} onSubmit={this.handleSubmit}>
                <Input 
                style={{width: '100%', borderRadius: '5px'}}
                placeholder={"Write a comment..."} 
                type='text'
                id='com'/>
                <br />
                <Button style={{float: 'left', height:'52px', backgroundColor: "#33aaa3", margin: '4px'}} onClick><SendIcon fontsize="small"/></Button>
                <Button style={{float: 'left', height:'52px',  backgroundColor: "#33aaa3", margin: '4px'}}><ImageIcon fontSize="small"/></Button>
            </form> 
         </div>
    )
    }
}

export default CommentList;