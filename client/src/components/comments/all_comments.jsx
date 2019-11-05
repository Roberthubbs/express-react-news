import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
class AllComments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: null,
            body: "",
            userId: this.props.userId,
            articleId: this.props.articleId,
            commentPosted: false,
            clickedWide: false,
            icon: faAngleDown
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCommentClick = this.handleCommentClick.bind(this);
    }
    async componentDidMount(){
        this.props.fetchAllComments(this.props.articleId);
    }
    componentDidUpdate(prevProps){
        if (this.state.commentPosted){
            this.setState({commentPosted: false})
            this.componentDidMount()
        }
        
    }
    updateField(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({commentPosted: true, description: ""})
        this.props.createNewComment(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

    }
    handleCommentClick(e){
        e.preventDefault();
        if (this.state.clickedWide){
            this.setState({clickedWide: false, icon: faAngleDown})
        } else {
            this.setState({clickedWide: true, icon: faAngleUp})
        }
    }
    render() {
        const comments = this.props.comments
        
       
        if (comments === null){
            return(null)
        }
        
        return (
            <div className="content-container">
                {this.props.userId ? 
                <div className="comment-form">
                    <p className="comment-title">Join The Conversation</p>
                    <form action="">
                        <input type="textbox"
                            className="comment-input"
                            value={this.state.description}
                            onChange={this.updateField("body")} />
                        <input className="comment-button" type="button" value="Post Comment" onClick={this.handleSubmit} />
                    </form>

                </div> : null}
                <p className="article-comments">This article has {comments.length} comments</p>
                <button onClick={this.handleCommentClick} className="view-comments-button"><FontAwesomeIcon icon={this.state.icon} /></button>
                {this.state.clickedWide ?
                <div>
                {comments.map((comment) => (
                    <div className="comment">
                        <p className="comment-username">Comment by: {comment.username}, {comment.politics} <Link to={`/user/${comment.userId}`}>View User</Link></p>
                        <p>{comment.content}</p>
                    </div>
                ))}</div>  : null }
                
            </div>
        )
    }
}


export default withRouter(AllComments)