import React, { Component } from 'react'
import { faDemocrat, faRepublican } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FollowUser  from './follow_user_container';
export default class UserStates extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { username, politicalAffiliation, commentTotal } = this.props
        return (
            <div className="user-stats">
                <div className="user-icon">
                    {politicalAffiliation === "Liberal" ? <FontAwesomeIcon icon={faDemocrat} className="donkey" size={"4x"}/> : null}
                    {politicalAffiliation === "Conservative" ? <FontAwesomeIcon icon={faRepublican} className="elephant" size={"4x"}/> : null}
                </div>
                <div className="user-stats-list">
                    <p className="username-for-stats">Username: {username}</p>
                    <p className="user-political-affiliation">Political Affiliation: {politicalAffiliation}</p>
                    <p className="usersTotalComments">Total Number of Comments: {commentTotal}</p>
                </div>
                {localStorage.getItem("currentUser") ? <FollowUser userToFollow={username} userId={this.props.userId}/> : null}
            </div>
        )
    }
}
