import { connect } from 'react-redux';
import AllLikes from './all_likes';
import { fetchAllLikes, createNewLike, destroyNewLike } from '../../actions/like_actions'
export const mstp = (state) => {
    let userId;

    if (state.session) {
        userId = state.session.id
    } else {
        userId = null;
    }
    return {
       likes: Object.values(state.entities.likes),
        userId: userId,
    }
};

export const mdtp = dispatch => ({
    fetchAllLikes: (articleId) => dispatch(fetchAllLikes(articleId)),
    createNewLike: like => dispatch((createNewLike(like))),
    deleteLike: like => dispatch((destroyNewLike(like)))
})

export default connect(mstp, mdtp)(AllLikes)