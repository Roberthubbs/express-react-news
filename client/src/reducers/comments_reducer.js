import merge from 'lodash/merge';

import { RECEIVE_COMMENT } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

    // debugger;
    // debugger;
    switch (action.type) {
        case RECEIVE_COMMENT:
            // console.log("action from front end", action)
            // debugger;
            return merge({}, action.comments.data);
        default:
            return state;
    }
};


export default commentsReducer;