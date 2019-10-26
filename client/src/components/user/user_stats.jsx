import React, { Component } from 'react'
import { faDemocrat, faRepublican } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class UserStates extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { username, politicalAffiliation, commentTotal } = this.props
        return (
            <div className="user-stats">
                {politicalAffiliation === "Liberal" ? <FontAwesomeIcon icon={faDemocrat} className="donkey" size={"4x"}/> : null}
                {politicalAffiliation === "Conservative" ? <FontAwesomeIcon icon={faRepublican} className="elephant" size={"4x"}/> : null}
                <p className="username-for-stats">Username: {username}</p>
                <p className="user-political-affiliation">Political Affiliation: {politicalAffiliation}</p>
                <p className="usersTotalComments">Total Number of Comments: {commentTotal}</p>
            </div>
        )
    }
}
