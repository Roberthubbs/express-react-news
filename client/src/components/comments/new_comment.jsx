import React, { Component } from 'react'

export default class NewComment extends Component {
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
        this.props.createNewComment(this.state).then(this.props.history.push("/"))
    }
    render() {

        return (
            <div>
                <form action="">Create New Comment
                <input type="text" 
                value={this.state.description}
                onChange={this.updateField("body")}/>
                <input type="button" value="Post Comment" onClick={this.handleSubmit}/>
                </form>

            </div>
        )
    }
}
