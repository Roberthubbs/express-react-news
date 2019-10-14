import React, { Component } from 'react'

export default class AllComments extends Component {
    componentDidMount(){
        this.props.fetchComments()
    }
    render() {
        let comments = this.props.comments ? this.props.comments : []
        return (
            <div>
                {comments.map((comment) => {
                    <div className="comment">
                        {comment.body}
                    </div>
                })}
            </div>
        )
    }
}
