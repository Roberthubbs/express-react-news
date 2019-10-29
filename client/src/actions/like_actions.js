import * as LikeUtil from '../util/likes_util';
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const receiveAllLikes = likes => ({
    type: RECEIVE_ALL_LIKES,
   likes
})

export const createNewLike = like => dispatch => (
    LikeUtil.newLike(like).then((like) => {
        dispatch(receiveLike(like))
    })
)
export const destroyNewLike = like => dispatch => (
    LikeUtil.destroyLike(like).then((like) => {
        dispatch(receiveLike(like))
    })
)

export const fetchAllLikes = articleId => dispatch => (
    LikeUtil.fetchLikes(articleId).then((likes) => {
        dispatch(receiveAllLikes(likes))
    })
)