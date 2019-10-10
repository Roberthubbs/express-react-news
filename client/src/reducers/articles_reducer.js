import merge from 'lodash/merge';

import { RECEIVE_ALL_ARTICLES} from '../actions/article_actions';

const articlesReducer = (state = {}, action) => {
    Object.freeze(state);

    // debugger;
    // debugger;
    switch (action.type) {
        case RECEIVE_ALL_ARTICLES:
            console.log("action from front end", action)
            
            return merge({}, state, [action.articles.data] );
        default:
            return state;
    }
};


export default articlesReducer;