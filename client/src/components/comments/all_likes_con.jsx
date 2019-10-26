import { connect } from 'react-redux';
import AllLikes from './all_likes';
import { fetchAllLikes } from '../../actions/like_actions'
export const mstp = (state) => {

    return {
       likes: Object.values(state.entities.likes)
    }
};

export const mdtp = dispatch => ({
    fetchAllLikes: (articleId) => dispatch(fetchAllLikes(articleId))
})

export default connect(mstp, mdtp)(AllLikes)