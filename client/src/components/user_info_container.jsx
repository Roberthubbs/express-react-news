import { connect} from 'react-redux';
import UserPage from './user_page';
import { findUserInformation } from '../actions/session_actions';
export const mstp = (state, ownParams) => {
    
    
    return {
        userId: ownParams.match.params.userId,
        user: state.entities.users[ownParams.match.params.userId]
    }
};

export const mdtp = (dispatch) => ({
    fetchUsersInfo: (userId) => (dispatch(findUserInformation(userId)))
});

export default connect(mstp, mdtp)(UserPage)