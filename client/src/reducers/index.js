import { combineReducers } from 'redux';
import posts from './posts';

// if there are more reducers they would all go here, we are only using 1 (posts)
export default combineReducers({
  // can be posts: posts
  posts,
});
