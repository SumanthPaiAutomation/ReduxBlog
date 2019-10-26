import { createStore,combineReducers,applyMiddleware } from "redux";

import{postReducer} from '../reducers/posts'
import{postsShowReducer} from '../reducers/postShow'
import thunk from "redux-thunk";
const configureStore=()=>{
const state = createStore(combineReducers({
   
 posts: postReducer,
 postsShow: postsShowReducer   
}),applyMiddleware(thunk))

return state;
}

export default configureStore;