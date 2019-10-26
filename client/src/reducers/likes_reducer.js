import merge from 'lodash/merge';

import { RECEIVE_LIKE, RECEIVE_ALL_LIKES } from '../actions/like_actions';

const likesReducer = (state = {}, action) => {
    Object.freeze(state);


    switch (action.type) {
        case RECEIVE_LIKE:

            return merge({}, { [action.like.data.id]: action.like.data });
        case RECEIVE_ALL_LIKES:

            if (typeof action.likes === 'undefined') {
                return merge({}, state)
            }
            return merge({}, action.likes.data)
        default:
            return state;
    }
};


export default likesReducer;