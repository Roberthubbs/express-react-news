import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NewComment from '../comments/new_comments_container';
import AllComments from '../comments/all_comments_container';

export default class ArticleShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            articleID: this.props.articleId,
            
        }
    }

    componentDidMount(){
        // debugger;
        this._isMounted = true
        // debugger;
        this.props.fetchArticle(this.props.match.params.articleId)
    }
    componentWillUnmount(){
        this._isMounted = false
    }

    render() {
        const article = this.props.article ? this.props.article : []
        const {id, content, author} = article
        // console.log(content)
        return (
            <div>
                <p>{content} {author}</p>
                <NewComment />
                <AllComments />
            </div>
        )
    }
}
