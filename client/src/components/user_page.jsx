import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import UserStats from './user/user_stats';
export default class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: null,

        }
    }

    componentDidMount(){
        this.props.fetchUsersInfo(this.props.userId).then((res) => {
            
            this.setState({comments: res.payload.data})
        });
    }
    render() {
        if (!this.state.comments || this.state.comments.length === 0){
            return (
                <div className="user-comments-info">
                    <div className="comment-block">
                        <h2 className="comment-history-title">You havent commented on anything yet</h2>
                    </div>
                </div>
            )
        }
        const comments = this.state.comments;
        const { user } = this.props;
        return (
            <div className="user-comments-info">
            <UserStats 
                username={user.username}
                politicalAffiliation={user.politicalAffiliation}
                commentTotal={comments.length}
                />
            <h2 className="comment-history-title">All Comment History</h2>
                {comments.map((comment) => (
                    <div className="comment-block">
                        <div className="comment-title-with-link">
                            <p >You Commented On: {comment.title}</p>
                            <Link className="discussion-link-4"to={`/show/${comment.post_id}`}>To Discussion</Link>
                        </div>
                        <p className="comment-info-content">{comment.content}</p>
                    </div>
                ))}
            </div>
        )
    }
}
