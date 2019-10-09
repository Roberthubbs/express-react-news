import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import articlesReducer from './articles_reducer';
const entities = combineReducers({
    users: usersReducer,
    articles: articlesReducer
});

export default entities;