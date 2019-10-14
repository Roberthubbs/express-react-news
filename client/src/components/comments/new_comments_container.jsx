import { connect } from 'react-redux';
import { createNewComment } from '../../actions/comment_actions';
import NewComment from './new_comment';
export const mstp = (state) => {
    return {
        userId: state.entities.session.id,
        articleId: state.entities.articles.id
    }
}


export const mdtp = dispatch => ({
    createNewComment: comment => dispatch((createNewComment(comment)))
})

export default connect(mstp, mdtp)(NewComment)
