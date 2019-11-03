import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
class AllComments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: null,
            body: "",
            userId: this.props.userId,
            articleId: this.props.articleId,
            commentPosted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    async componentDidMount(){
        this.props.fetchAllComments(this.props.articleId).then((res) => {
            
        })
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
                        <input type="text"
                            className="comment-input"
                            value={this.state.description}
                            onChange={this.updateField("body")} />
                        <input className="comment-button" type="button" value="Post Comment" onClick={this.handleSubmit} />
                    </form>

                </div> : null}
                <p className="article-comments">This article has {comments.length} comments</p>
                {comments.map((comment) => (
                    <div className="comment">
                        <p className="comment-username">Comment by: {comment.username}, {comment.politics} <Link to={`/user/${comment.userId}`}>View User</Link></p>
                        <p>{comment.content}</p>
                    </div>
                ))}
                
            </div>
        )
    }
}


export default withRouter(AllComments)