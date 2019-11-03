import { connect } from 'react-redux';
import { seeActivityFollows } from '../../actions/follow_actions';
import ActivityFeed from './activity_feed';
export const mstp = (state, ownProps) => {

    return {
        currentUser: state.session.id,
        // userToFollow: ownProps.match.params.userId
        follows: Object.values(state.entities.follows)

    }
}

export const mdtp = (dispatch) => {
    return {
        seeActivityFollows: (currentUser) => dispatch((seeActivityFollows(currentUser)))
    }
}

export default connect(mstp, mdtp)(ActivityFeed)
