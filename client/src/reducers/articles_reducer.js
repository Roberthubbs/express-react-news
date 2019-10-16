import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTICLES, RECEIVE_ARTICLE, RECEIVE_ARTICLE_ERRORS } from '../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);

    // debugger;
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_ARTICLES:
            // console.log("action from front end", action)
            // debugger;
            return merge({}, action.articles.data );
        case RECEIVE_ARTICLE:
            // debugger;
            return merge({}, state, {[action.payload.data.id]: action.payload.data});
        case RECEIVE_ARTICLE_ERRORS:
            return merge({}, state, action.data.err)
        default:
            return state;
    }
};


export default articlesReducer;