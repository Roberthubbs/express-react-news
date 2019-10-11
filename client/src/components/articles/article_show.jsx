import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

export default class ArticleShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            articleTitle: this.props.articleTitle,
            article: ""
        }
    }

    componentDidMount(){
        // debugger;
        this._isMounted = true
        this.props.fetchArticle(this.state.articleTitle)
    }
    componentWillUnmount(){
        this._isMounted = false
    }

    render() {
        const article = this.props.article ? this.props.article : []
        const {id, content, author} = article
        console.log(content)
        return (
            <div>
                <p>{content} {author}</p>
            </div>
        )
    }
}
