import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTICLES, RECEIVE_ARTICLE, RECEIVE_ARTICLE_ERRORS, RECEIVE_ALL_WIDGET_ARTICLES } from '../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);

    
    switch (action.type) {
        case RECEIVE_ALL_ARTICLES:
            
            return merge({}, action.articles.data );
        case RECEIVE_ALL_WIDGET_ARTICLES:
            
            return merge({}, state, {sports: action.articles.data} )
        case RECEIVE_ARTICLE:
            
            return merge({}, state, {[action.payload.data.id]: action.payload.data});
        case RECEIVE_ARTICLE_ERRORS:
            return merge({}, state, action.data.err)
        default:
            return state;
    }
};


export default articlesReducer;