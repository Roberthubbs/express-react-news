import React, { Component } from 'react'

export default class AllLikes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.userId,
            likes: null,
            articleId: this.props.articleId,
            clicked: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
        // this.findIfLikeIncludesUser = this.findIfLikeIncludesUser.bind(this);
    }
    async componentDidMount() {
        this.props.fetchAllLikes(this.props.articleId).then((res) => {
            console.log(res)
        })
        this.props.likes.forEach((like) => {
            if (like.userId === this.props.userId) {
                this.setState({clicked: true})
            }
        });
    }
    componentDidUpdate(prevProps){
        // debugger
        if (this.props.likes.includes(1) || prevProps.likes.length < this.props.likes.length){
            this.componentDidMount()
        }
    }
    
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ clicked: true })
        this.props.createNewLike(this.state)//.then(this.props.history.push(`/show/${this.props.articleId}`));



        // this.props.createNewLike(this.state).then(this.props.history.push(`/show/${this.props.articleId}`));

    }
    handleUnlike(e) {
        e.preventDefault();
        this.setState({ clicked: false })
        this.props.deleteLike(this.state)//.then(this.props.history.push(`/show/${this.props.articleId}`));
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
                {this.props.userId ? 
                <div className="comment-form">
                    <form action="">
                        {this.state.clicked ?
                            <input className="comment-button" type="button" value="Unlike" onClick={this.handleUnlike} /> :
                            <input className="comment-button" type="button" value="Like" onClick={this.handleSubmit} />
                        }
                    </form>

                </div> : null}
            </div>
        )
    }
}
