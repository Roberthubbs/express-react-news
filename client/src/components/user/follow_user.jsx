import React, { Component } from 'react'
const styleOne = {
    backgroundColor: 'blue',
    width: "40px",
    height: "30px",
    fontSize: "14px"
}
export default class FollowUser extends Component {
    constructor(props){
        super(props)
        this.state = ({
            userToFollow: this.props.userToFollow,
            currentUser: this.props.currentUser,
            userId: this.props.userId,
            follows: this.props.follows,
            userIncludes: false
        });
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        // debugger;
        this.props.createNewFollow(this.state)
    }
    async componentDidMount(){
        await this.props.fetchFollows(this.props.userId)
        debugger;
        this.props.follows.forEach((follow) => {
            debugger;
            if (follow.follower_id === this.state.currentUser) {
                   this.setState({userIncludes: true})
            }
        })
       
    }
    render() {
        return (
            <div className="follow-user">
                {!this.state.userIncludes ? 
                <button className="follow-button" onClick={this.handleClick}>Follow</button>
                : <p style={styleOne}>Following</p>}
                <p>{this.props.follows.length} Followers</p>
            </div>
        )
    }
}
