import merge from 'lodash/merge';

import { RECEIVE_COMMENT, RECEIVE_ALL_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);

   
    switch (action.type) {
        case RECEIVE_COMMENT:
          
            return merge({}, state, {[action.comment.data.id]: action.comment.data});
        case RECEIVE_ALL_COMMENTS:
            console.log(state)
            if(typeof action.comments === 'undefined'){
                return ({})
            }
            return merge({}, action.comments.data)
        default:
            return state;
    }
};


export default commentsReducer;