import { connect } from 'react-redux';
import { createNewComment } from '../../actions/comment_actions';
import NewComment from './new_comment';
export const mstp = (state) => {
    let userId;
   
    if (state.session) {
        userId = state.session.id
    } else {
        userId = null;
    }
    return {
        userId: userId,
        
    }
}


export const mdtp = dispatch => ({
    createNewComment: comment => dispatch((createNewComment(comment)))
})

export default connect(mstp, mdtp)(NewComment)
