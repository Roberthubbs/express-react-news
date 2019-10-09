import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    
    // debugger;
    // debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger;
            localStorage.setItem('currentUser', JSON.stringify(action.currentUser.data.user))
            return merge({}, state, { [action.currentUser.data.user.id]: action.currentUser.data.user });
        default:
            return state;
    }
};


export default usersReducer;
