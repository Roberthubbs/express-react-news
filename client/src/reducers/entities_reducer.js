import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import articlesReducer from './articles_reducer';
import commentsReducer from './comments_reducer';
import likesReducer from './likes_reducer';
const entities = combineReducers({
    users: usersReducer,
    articles: articlesReducer,
    comments: commentsReducer,
    likes: likesReducer
});

export default entities;