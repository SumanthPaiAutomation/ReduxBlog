    import React from 'react' 
    import axios from 'axios'
    import { Link } from 'react-router-dom'
    import{connect} from 'react-redux'
    import {showPosts,loadMore,startFetchPosts}from '../../src/actions/postaction'
    import PostShow from './PostShow';

    function Posts (props) {
       

        
             //const id = this.props.match.params.id
            
            /* axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    /* this.setState(() => ({
                        //posts: response.data
                        
                    })) */
                    //this.props.dispatch(showPosts(response.data))
                //}) */
         props.dispatch(startFetchPosts())

       /*  handleLoad() {
            this.setState((prevState) => ({
                limit: prevState.limit + 5
            }))
        } */
        props.dispatch(loadMore(props.limit))
        
            return (
                <div>
                    <h2>Listing Posts
                        <small> showing {props.posts.length !== 0 && props.limit} of {props.posts.length}</small>
                    </h2>
                    <ul>
                        {props.posts.slice(0, props.limit).map(post => <li key={post.id}>
                            <Link to={`/posts/${post.id}`}   target='_blank'>
                                {post.title}
                            </Link>

                        </li>)
                        }
                    </ul>
                    <button onClick={()=>props.dispatch(loadMore(props.limit))}>load more</button>
                    
                </div>
            )
        
    }
 const mapStateToProps=(state)=>{
     return{
        posts:state.posts,
        limit:state.limit
     }

   
 }
    export default connect(mapStateToProps)(Posts)