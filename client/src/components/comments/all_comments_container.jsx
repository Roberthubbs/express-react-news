import { connect } from 'react-redux';
import AllComments from './all_comments';
import { fetchAllComments } from '../../actions/comment_actions'
export const mstp = (state) => {
 
    return {
        comments: Object.values(state.entities.comments)
    }
};

export const mdtp = dispatch => ({
    fetchAllComments: (articleId) => dispatch(fetchAllComments(articleId))
})

export default connect(mstp, mdtp)(AllComments)