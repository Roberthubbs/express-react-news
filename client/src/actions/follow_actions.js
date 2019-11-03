import * as FollowUtil from '../util/follow_util';
export const RECEIVE_NEW_FOLLOW = "RECEIVE_NEW_FOLLOW";
export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";

export const receiveNewFollow = (follow) => ({
    type: RECEIVE_NEW_FOLLOW,
    follow
})
export const receiveAllFollows = (follows) => ({
    type: RECEIVE_ALL_FOLLOWS,
    follows
})

export const fetchFollows = userId => dispatch => (
    FollowUtil.seeFollows(userId).then((follows) => {
        dispatch(receiveAllFollows(follows))
    })
);

export const newFollow = follow => dispatch => (
    FollowUtil.newFollow(follow).then((follow) => {
        dispatch(receiveNewFollow(follow))
    })
);
export const seeActivityFollows = user => dispatch => (
    FollowUtil.seeActivity(user).then((follows) => {
        dispatch(receiveAllFollows(follows))
    })
);