
import * as SessionAPIUtil from '../util/user_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_SESSION_ERRORS = "RESET_SESSION_ERRORS";



export const receiveCurrentUser = (currentUser) => {
    
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
        
    }
};

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
    
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const resetErrors = () => ({
    type: RESET_SESSION_ERRORS,
});

export const login = user => dispatch => {
    // debugger;
    return (
        SessionAPIUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err))
    ))
    )
};



export const signup = user => dispatch => {
    
    return (
        SessionAPIUtil.signup(user).then((user) => (
            dispatch(receiveCurrentUser(user))
        ), err => (
            dispatch(receiveErrors(err))
        ))
    )
};


export const logout = (user) => dispatch => (
    SessionAPIUtil.logout(user).then(()=> (
        dispatch(logoutCurrentUser())
    ), err => (
        dispatch(receiveErrors(err))
    ))
);