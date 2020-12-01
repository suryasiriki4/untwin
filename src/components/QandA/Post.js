import { Avatar,Button } from '@material-ui/core';

import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import "../component-styles/Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserSharp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import CommentPage from './Comments/CommentPage';


function Post({
    name,
    question,
    img
    // displayName,
    // userName,
    // verified,
    // text,
    // image,
    // avatar,
}) {

    return (
        <div className="post">
            {/* <div className="post__avatar">
                <Avatar src="https://kcballet.org/wp-content/uploads/2019/11/Olivia-Denson-240x300.jpg" />
            </div> */}
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {name} <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <h3>{question}</h3>
                    </div>
                </div>
                <img src={`data:image/png;base64,${Buffer.from(img.data.data).toString('base64')}`} alt="a"/>                
                <div className="post__footer">

                    <Link to="/Comments">
                        <Button> <ChatBubbleOutlineIcon fontSize="small" /> </Button>
                    </Link>                    

                    {/* <ChatBubbleOutlineIcon fontSize="small" /> */}

                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
