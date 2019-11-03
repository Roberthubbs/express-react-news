import React, { Component } from 'react'

const styleOne = {
    backgroundColor: 'blue',
    width: "10%",
    fontSize: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "8px",
    color: "white",
    borderRadius: "3px"
}
const styleTwo = {
    backgroundColor: 'blue',
    width: "10%",
    fontSize: "20px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "8px",
    color: "white",
    borderRadius: "3px"
}

export default class FollowUser extends Component {
    constructor(props){
        super(props)
        this.state = ({
            userToFollow: this.props.userToFollow,
            currentUser: this.props.currentUser,
            userId: this.props.userId,
            follows: this.props.follows,
            userIncludes: false,
            updated: false
        });
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
    
       
        this.props.createNewFollow(this.state);
        this.setState({updated: true});
    }
    async componentDidMount(){
        await this.props.fetchFollows(this.props.userId)
        this.props.follows.forEach((follow) => {

            if (follow.follower_id === this.state.currentUser) {
                   this.setState({userIncludes: true})
            }
        })
       
    }
    componentDidUpdate(){
        if (this.state.updated){
            this.setState({updated: false})
            this.componentDidMount()
        }
    }
    render() {
        return (
            <div className="follow-user">
                {!this.state.userIncludes ? 
                <button className="follow-button" style={styleTwo} onClick={this.handleClick}>Follow</button>
                : <p style={styleOne}>Following</p>}
                <p>{this.props.follows.length} Followers</p>
            </div>
        )
    }
}
