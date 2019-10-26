import React, { Component } from 'react'

export default class AllComments extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: null
        }
    }
    async componentDidMount(){
        this.props.fetchAllComments(this.props.articleId).then((res) => {
            console.log(res)
        })
    }
    render() {
        const comments = this.props.comments
        
        console.log(comments)
        if (comments === null){
            return(null)
        }
        
        return (
            <div className="content-container">
                <p className="article-comments">This article has {comments.length} comments</p>
                {comments.map((comment) => (
                    <div className="comment">
                        <p className="comment-username">Comment by: {comment.username}, {comment.politics}</p>
                        <p>{comment.content}</p>
                    </div>
                ))}
                {/* <p>comments here</p> */}
            </div>
        )
    }
}
