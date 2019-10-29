import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
class NewLike extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            articleId: this.props.articleId,
            clicked: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    
    handleSubmit(e) {
        e.preventDefault();
        
            this.setState({ clicked: true })
            this.props.createNewLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

        
    
        // this.props.createNewLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

    }
    handleUnlike(e) {
        e.preventDefault();
        this.setState({ clicked: false })
        this.props.deleteLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));
    }
    render() {

        if (!this.props.userId){
            return(
                <div className="login-to-like">
                    <p>Login or Create an Account to Like Articles</p>
                </div>
            )
        }
        return (
            <div className="comment-form">
                <form action="">
                    {this.state.clicked ? 
                    <input className="comment-button" type="button" value="Unlike" onClick={this.handleUnlike} /> :
                    <input className="comment-button" type="button" value="Like" onClick={this.handleSubmit} /> 
                    }
                </form>

            </div>
        )
    }
}

export default withRouter(NewLike)