import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
class NewComment extends Component {
    constructor(props){
        super(props)
        this.state = {
            body: "",
            userId: this.props.userId,
            articleId: this.props.articleId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateField(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        
        this.props.createNewComment(this.state).then(this.setState({ description: "" })).then(this.props.history.push(`/show/${this.props.articleId}`));
        
    }
    render() {
        if (!this.props.userId) {
            return (
                <div className="login-to-like">
                    <p>Login or Create an Account to Comment On Articles</p>
                </div>
            )
        }
        return (
            <div className="comment-form">
                <p className="comment-title">Join The Conversation</p>
                <form action="">
                <input type="text" 
                className="comment-input"
                value={this.state.description}
                onChange={this.updateField("body")}/>
                <input className="comment-button"type="button" value="Post Comment" onClick={this.handleSubmit}/>
                </form>

            </div>
        )
    }
}

export default withRouter(NewComment)