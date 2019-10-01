  
import { connect } from 'react-redux';

import Hello from './hello';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({session, entities: {users}}) => {
    return {
        currentUser: users[session.id],
        location: document.location
    };
};

const mapDispatchToProps = dispatch => ({
    logout: (user) => dispatch(logout(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello);
