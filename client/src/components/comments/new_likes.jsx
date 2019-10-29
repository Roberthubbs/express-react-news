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
    }

    
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.clicked){

            this.setState({clicked: false})
            this.props.deleteLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));
        } else {
            this.setState({ clicked: true })
            this.props.createNewLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

        }
    
        // this.props.createNewLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

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