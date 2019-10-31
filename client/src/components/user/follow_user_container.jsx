import { connect } from 'react-redux';
import { newFollow, fetchFollows } from '../../actions/follow_actions';
import FollowUser from './follow_user';
export const mstp = (state, ownProps) => {
   
    return {
        currentUser: state.session.id,
        // userToFollow: ownProps.match.params.userId
        follows: Object.values(state.entities.follows)
        
    }
}

export const mdtp = (dispatch) => {
    return {
        createNewFollow: (follow) => dispatch(newFollow(follow)),
        fetchFollows: (userId) => dispatch(fetchFollows(userId))
    }
}

export default connect(mstp, mdtp)(FollowUser)