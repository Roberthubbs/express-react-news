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
            article: null,
            isLoaded: false
        }
    }

    componentDidMount(){
        // debugger;
        this._isMounted = true
        // debugger;
        this.props.fetchArticle(this.props.articleId).then((res) => {
            // console.log(res)
            this.setState({article: res, isLoaded: true})
        })
    }
    componentWillUnmount(){
        this._isMounted = false
    }

    render() {
        // const article = this.state.article ? this.state.article : null;
        // let id, content, author;
        // if (article){

        //         id = article.id
        //         content = article.id
        //         author= article.id
        // }
        if (!this.state.isLoaded){
            return("loading")
        }  else {
            const article = this.state.article.payload.data;
            const {id, content, author, urlToImage } = article;
            // debugger;
        return (
            <div className="article-show">
                <p className="article-show-author">{author}</p>
                <img src={urlToImage} alt="No Image Associated With Article" className="article-show-image"/>
                <p className="article-show-content">{content}</p> 
                <NewComment 
                    articleId={id}
                />
                <AllComments 
                    articleId={id}
                />
            </div>
        )
        }
    }
}
