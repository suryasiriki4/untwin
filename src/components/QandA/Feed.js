import React, { Component } from 'react';
import "../component-styles/Feed.css";
import DoubtBox from "./DoubtBox";
import Post from "./Post";

const API = "https://localhost:5000/api";

class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        fetch(API + "/posts")
            .then(response => response.json())
            .then(data => this.setState({posts: data.posts}))
            .catch(e => console.log(e));
    }

    render() {

        const { posts } = this.state;

        return(


            <div className="feed">
                 <div className="feed__header">
                     <h2> Home </h2>
                 </div>

                 {console.log(posts)}

                 <ul>
                    {
                        posts.map(post =>
                            <li>
                                <h1>{post.title}</h1>
                            </li>
                        )
                    }
                </ul>

                 <Post />
                 <Post />
                 <Post />
                 <Post />
                 <Post />
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
