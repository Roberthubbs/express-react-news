import React, { Component } from 'react'

export default class AllLikes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: null
        }
    }
    async componentDidMount() {
        this.props.fetchAllLikes(this.props.articleId).then((res) => {
            console.log(res)
        })
    }
    render() {
        const likes = this.props.likes

        console.log(likes)
        if (likes === null) {
            return (null)
        }

        return (
            <div className="content-container">
                <p className="article-comments">This article has {likes.length} likes</p>
            </div>
        )
    }
}
