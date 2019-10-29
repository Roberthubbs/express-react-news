import { connect } from 'react-redux';
import AllComments from './all_comments';
import { fetchAllComments, createNewComment } from '../../actions/comment_actions'
export const mstp = (state) => {
    let userId;
    if (state.session) {
        userId = state.session.id
    } else {
        userId = null;
    }
    return {
        userId: userId,
        comments: Object.values(state.entities.comments)
    }
};

export const mdtp = dispatch => ({
    createNewComment: comment => dispatch((createNewComment(comment))),
    fetchAllComments: (articleId) => dispatch(fetchAllComments(articleId))
})

export default connect(mstp, mdtp)(AllComments)