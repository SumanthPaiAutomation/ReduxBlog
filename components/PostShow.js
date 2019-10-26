import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {connect} from  'react-redux'
import {showAPost,showUserInfo,showComments,startShowAPost,startToShowComments}from '../../src/actions/postaction'

function PostShow (props){
   
    const id = this.props.match.params.id 
    
       /* 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                 
                const post = response.data 
                
                props.dispatch(showAPost(post));

                // once we get the post info from server then make another api call to fetch the user info

                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then(response => {
                        const user = response.data 
                        
                        props.dispatch(showUserInfo(user))
                    })
            })
 */
            props.dispatch(startShowAPost(id))

       /*  axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => {
                const comments = response.data 
                //this.setState(() => ({ comments: comments }))
                props.dispatch(showComments(comments));
            }) */
            props.dispatch(startToShowComments(id))
    
   
        
        return (
            <div>
                <h2>{props.post.title}</h2>
                <p> by { props.user.name }</p>
                <p> { props.post.body } </p>
                
                <h2>Listing Comments - { props.comments.length }</h2>
                <ul>
                    { props.comments.map(comment => <li> { comment.name }</li> )}
                </ul>
                <Link to="/posts">back</Link>
            </div>  
        )
    
}

const mapsStateToProps=(state)=>{
return{
    post: state.post,
    user: state.user,
    comments: state.comments

}


}

export default connect(mapsStateToProps)(PostShow)
