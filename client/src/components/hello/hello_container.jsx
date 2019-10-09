  
import { connect } from 'react-redux';

import Hello from './hello';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    // debugger;
    return {
        currentUser: state.entities.users[state.session.id],
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
