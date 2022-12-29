import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users'
import userReducer from './userReducer'
// import storereducer from './store'





export default combineReducers({
    authReducer ,currentUserReducer,questionsReducer,usersReducer,userReducer
    
})
