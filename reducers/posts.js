const iniState={
    post:[],
    limit:5
}

const postReducer=(state=iniState,action)=>{
    switch(action.type){
        case 'DISPLAY_POSTS': 
        return{...state,...action.payload}

        case 'LOAD_MORE':
                action.payload=action.payload+5
        return {...state,...action.payload}


        default:return{...state};      

    }


}
export default postReducer;