import * as CommentUtil from '../util/comment_util';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveAllComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

export const createNewComment = comment => dispatch => (
    CommentUtil.newComment(comment).then((comment) => {
        dispatch(receiveComment(comment))
    })
)

export const fetchAllComments = articleId => dispatch => (
    CommentUtil.fetchComments(articleId).then((comments) => {
        dispatch(receiveAllComments(comments))
    })
)