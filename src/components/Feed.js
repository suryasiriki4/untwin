import React from 'react';
import "./component-styles/Feed.css";
import DoubtBox from "./DoubtBox";
import Post from "./Post";
import './component-styles/Feed.css'

function Feed() {
    return (
            <div className="feed">
                <div className="feed__header">
                    <h2> Home </h2>
                </div>

                <DoubtBox />

                { /* Post */ }
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
    );
}

export default Feed;
