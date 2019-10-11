import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTICLES, RECEIVE_ARTICLE } from '../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);

    // debugger;
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_ARTICLES:
            console.log("action from front end", action)
            
            return merge({}, state, [action.articles.data] );
        case RECEIVE_ARTICLE:
            // debugger;
            return merge({}, state, {[action.payload.data.id]: action.payload.data});

        default:
            return state;
    }
};


export default articlesReducer;