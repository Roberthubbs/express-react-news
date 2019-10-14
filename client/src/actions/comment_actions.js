import * as CommentUtil from '../util/comment_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

export const createNewComment = comment => dispatch => (
    CommentUtil.newComment(comment).then((comment) => {
        dispatch(receiveComment(comment))
    })
)