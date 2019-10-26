import axios from 'axios'
import thunk from 'redux-thunk';
-


 export const showPosts=(posts)=>{
    return{
        type:'DISPLAY_POSTS',
        payload:posts
    }
}

export const showAPost=(post)=>{
 return {
        type: 'DISPLAY_A_POST',
        payload:post
 }



}

export const showUserInfo=(user)=>{
  return {
      type : 'DISPLAY_USERINFO',
      payload:user

  }

}
export const showComments=(comments)=>{
    return{
        type:'DISPLAY_COMMENTS',
        payload:comments
    }
}

export const loadMore=(limit)=>{
    return{
        type:'LOAD_MORE',
        payload:limit
    }

export const startFetchPosts=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            /* this.setState(() => ({
                //posts: response.data
                
            })) */
            dispatch(showPosts(response.data))

    }
    
}

    export const startShowAPost=(id)=>{

        return(dispatch)=>{
            //const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                 
                const post = response.data 
                
                dispatch(showAPost(post));

                // once we get the post info from server then make another api call to fetch the user info

                axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                    .then(response => {
                        const user = response.data 
                        
                        dispatch(showUserInfo(user))
                    })
            })

        }
    }


export const startToShowComments=(id)=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => {
                const comments = response.data 
                //this.setState(() => ({ comments: comments }))
                dispatch(showComments(comments));
            })
    

    }
}


}


}




}