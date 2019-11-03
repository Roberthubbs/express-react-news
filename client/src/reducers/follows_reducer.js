import merge from 'lodash/merge';
import { RECEIVE_ALL_FOLLOWS, RECEIVE_NEW_FOLLOW } from '../actions/follow_actions';

const followReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_NEW_FOLLOW:
            
            return merge(state, action.follow.data);
        case RECEIVE_ALL_FOLLOWS:
        
            return merge({}, action.follows.data);
        default:
            return state
    }
}

export default followReducer