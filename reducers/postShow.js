const initialState={
        user:{},
        post:{},
        comments:[]
}

const postShowReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'DISPLAY_A_POST': 
        return {...state,...action.payload}

        case 'DISPLAY_USERINFO':
                //this.setState(() => ({ comments: comments }))
                return {...state,...action.payload}

        case 'DISPLAY_COMMENTS':
                //this.setState(() => ({ comments: state.comments }))
                return {...state,...action.payload}

        
      default: return{...state};
}
}
export default postShowReducer;