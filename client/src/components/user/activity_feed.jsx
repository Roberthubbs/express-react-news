import React, { Component } from 'react'
import {Link } from 'react-router-dom';
export default class ActivityFeed extends Component {
    constructor(props){
        super(props)
        this.state= {
            follows: this.props.follows,
            loading: false
        }
    }

    componentDidMount(){
        this.props.seeActivityFollows(this.props.currentUser).then(() => {
            
            this.setState({follows: this.props.follows, loading: true})
        })
        
    }
    render() {
        if (!this.props.follows) return null
        if (!this.state.loading) return (
            <div>Loading follows</div>
        )
      
        const {follows} = this.state.follows;
        const comments = [];
        this.props.follows.map((follow)=> {
            follow.map((comment) => {
                console.log(comment)
                comments.push(comment)
            })
        })
        return (
            <div className="feed">
                <h2 className="feed-title">Your Feed</h2>
                {comments.map((comment) => (
                    <div className="feed-box">
                        <p>Comment by: <Link to={`/user/${comment.id}`}>{comment.username}</Link> On: {comment.title}</p>
                        <p className="comment-content">{comment.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}
