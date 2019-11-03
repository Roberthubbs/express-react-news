import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
class UserModal extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.logout(this.props.user).then(this.props.history.push("/all"))
    }
    render() {
        return (
            <div className="user-modal">
                <p className="outer-p"><Link to={`/user/${this.props.userId}`} className="activity-button">Your Activity</Link></p>
                <p className="outer-p"><Link to={`/feed`} className="activity-button">Feed</Link></p>
                {/* <Link>Your Feed</Link> */}
                <button onClick={this.handleSubmit} className="logout-button">Logout</button>
            </div>
        )
    }
}

export default withRouter(UserModal)

