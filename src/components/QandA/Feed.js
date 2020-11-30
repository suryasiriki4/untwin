import React, { Component } from 'react';
import "../component-styles/Feed.css";
import DoubtBox from "./DoubtBox";
import Post from "./Post";
import axios from 'axios';
import { MYURL } from '../../CONSTANTS';
import { FormatAlignJustifyRounded } from '@material-ui/icons';


class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    async fetchPosts() {

        axios.get(MYURL+ '/posts')
            .then(response => response)
            .then(json => this.setState({
                posts: json.data.posts,
                isLoading: false,
            }))
            .catch(e => console.log(e));
    }

    render() {

        const { posts, isLoading } = this.state;

        return(

            <div className="feed">
                 <div className="feed__header">
                     <h2> Home </h2>
                 </div>

                 {console.log(this.state.posts)}


                 <ul>
                    {
                        this.state.posts.map(post =>
                            // <li key={post._id}>
                            //     <h1>{post.title}</h1>
                            // </li>
                            <Post name={post.author.name} question={post.title} img={post.image}/>
                        )
                    }
                </ul>
             </div>
            // {/* <div>
            //     <h1>FEED</h1>
            //     <ul>
            //         {
            //             posts.map(post =>
            //                 <li key={post.id}>
            //                     <a href={post.title}></a>
            //                 </li>
            //             )
            //         }
            //     </ul>
            // </div> */}
        )
    }


}

export default Feed;


// function Feed() {
//     return (
//             <div className="feed">
//                 <div className="feed__header">
//                     <h2> Home </h2>
//                 </div>
//                 <Post />
//                 <Post />
//                 <Post />
//                 <Post />
//                 <Post />
//             </div>
//     );
// }

// export default Feed;
