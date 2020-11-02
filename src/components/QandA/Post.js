import { Avatar } from '@material-ui/core';
import React from 'react'
import "../component-styles/Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserSharp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
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
                            Sam Curran <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Please help with this doubt, highly appreciated??</p>
                    </div>
                </div>
                <img src="https://i.pinimg.com/564x/9e/05/7b/9e057b3a18abcdcaf0e40312335ac694.jpg" alt=""/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
