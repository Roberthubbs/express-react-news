import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
class NewLike extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            articleId: this.props.articleId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleSubmit(e) {
        e.preventDefault();

        this.props.createNewLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

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
                 
                    <input className="comment-button" type="button" value="Like" onClick={this.handleSubmit} />
                </form>

            </div>
        )
    }
}

export default withRouter(NewLike)