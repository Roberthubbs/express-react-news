import { connect } from 'react-redux';
import { createNewLike } from '../../actions/like_actions';
import NewLike from './new_likes';
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
    createNewLike: like => dispatch((createNewLike(like)))
})

export default connect(mstp, mdtp)(NewLike)