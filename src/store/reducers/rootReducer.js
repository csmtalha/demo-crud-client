/** @format */
import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import likesReducer from './likesReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  auth: authReducer,
  user: userReducer,
  likes: likesReducer,
});

export default rootReducer;
