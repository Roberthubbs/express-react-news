import merge from 'lodash/merge';

import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

   
    switch (action.type) {
        case RECEIVE_COMMENT:
          
            return merge({}, {[action.comment.data.id]: action.comment.data});
        case RECEIVE_ALL_COMMENTS:
       
            if(typeof action.comments === 'undefined'){
                return merge({}, state)
            }
            return merge({}, action.comments.data)
        default:
            return state;
    }
};


export default commentsReducer;