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
        // debugger;
        this.props.createNewComment(this.state).then(this.props.history.push(`/all`))
    }
    render() {

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