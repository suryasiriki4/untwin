import React, {useState} from 'react';
import CommentList from './CommentList';
import axios from 'axios';
import { MYURL } from '../../../CONSTANTS';


class CommentPage extends React.Component {
    constructor(props) {
        super(props);
        this.loc = props.location.commentid;

        this.state = {
            post: null,
        };
       
        this.fetchPosts = this.fetchPosts.bind(this);
    }

    async fetchPosts() {
        const response = await axios.get(MYURL+ '/posts/'+this.loc)
        this.setState({
            post: response.data.post
        })
    }

    componentDidMount() {
        this.fetchPosts();
    }

    render() {
        console.log(this.state.post)
        return (
            (this.state.post===null) ? <p>Loading...</p> : <CommentList post={this.state.post}/>
        );
    };
    
    }

export default CommentPage;