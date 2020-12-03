import React, { useState } from 'react';
import {Button, Input, Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserSharp";
import SingleComment from './SingleComment';
import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import "../../component-styles/Post.css";
import { PostComment } from '../../../services/postingservices';

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

    constructor(props) {
        super(props);
        console.log(this.props.post);

        this.state = {
            title:'',
            description:'',
            image: null,
            id: null
        }

    }

    // handleTitle = (e) => {
    //     this.setState({
    //         title: e.target.value,
    //     })
    // }

    handleDesc = (e) => {
        this.setState({
            description: e.target.value,
            id: this.props.post._id
        })
    }

    handleImage = (e) => {
        console.log(e.target.files[0]);
        this.setState({
            image: e.target.files[0],
        })
    }

    handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await PostComment(this.state);
        // if(res.status === 200){
        //     this.props.history.push('/QandA');
        // }
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
                            {this.props.post.author.name} <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                        <h3>
                            {this.props.post.title}
                        </h3>
                    <div className="post__headerDescription">
                        <p>{this.props.post.description}</p>
                    </div>
                </div>
            <img src={`data:image/png;base64,${Buffer.from(this.props.post.image.data.data).toString('base64')}`} alt="a"/>
           </div>


        <h3 style={{fontSize:'25px', color: '#33aaa3', margin:'4px', align:'left'}}> Replies ({this.props.post.comments.length})</h3>
            <br/>
            <ul>
                    {
                        this.props.post.comments.map(com =>
                            // <li key={post._id}>
                            //     <h1>{post.title}</h1>
                            // </li>
                            <div>
                                <SingleComment style={{marginBottom:'8px'}} author={com.author} title={com.title} img={com.image} description={com.description} key={com._id}/>
                                <br/>
                            </div>
                        )
                    }
            </ul>

            

             {/* <SingleComment content={"This is a comment"} />
             <SingleComment content={"This is also another comment"} /> */}

            <form style={{display:"flex"}} onSubmit={this.handleSubmit}>
                <Input 
                style={{width: '100%', borderRadius: '5px', margin: '4px'}}
                placeholder={"Write a comment..."} 
                type='text'
                onChange={this.handleDesc}
                id='com'/>
                <br />
                {/* <Button style={{float: 'left', height:'52px',  backgroundColor: "#33aaa3", margin: '4px'}}><ImageIcon fontSize="small"/></Button> */}
                <Input
                style = {{margin: '4px'}}
                type='file'
                onChange={this.handleImage}
                />
                 <Button style={{float: 'left', height:'52px', backgroundColor: "#33aaa3", margin: '4px'}} type='submit'><SendIcon fontsize="small"/></Button>
            </form>  

         </div>
    )
    }
}

export default CommentList;