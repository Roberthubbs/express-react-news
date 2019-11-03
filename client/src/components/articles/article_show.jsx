import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import NewComment from '../comments/new_comments_container';
import AllComments from '../comments/all_comments_container';
import NewLike from '../comments/new_likes_container';
import AllLikes from '../comments/all_likes_con';
import ClipLoader from 'react-spinners/ClipLoader';
class ArticleShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            articleID: this.props.articleId,
            article: null,
            isLoaded: false
        }
    }

    componentDidMount(){
        
        this._isMounted = true
       
        this.props.fetchArticle(this.props.articleId).then((res) => {
     
            this.setState({article: res, isLoaded: true})
        })
    }
    componentWillUnmount(){
        this._isMounted = false
    }

    render() {
        
        if (!this.state.isLoaded){
            return (
            <div className="article-show">
                <ClipLoader


                size={150}
                color={'#123abc'}
                loading={this.state.loading}
            /></div>
            )
        }  else {
            const article = this.state.article.payload.data;
            const {id, content, author, urlToImage } = article;
            
        return (
            <div className="article-show">
                <p className="article-show-author">{author}</p>
                <img src={urlToImage} alt="No Image Associated With Article" className="article-show-image"/>
                <p className="article-show-content">{content}</p> 
                {/* <NewLike 
                    articleId={id}
                /> */}
                <AllLikes 
                    articleId={id}
                />
                {/* <NewComment 
                    articleId={id}
                /> */}
                <AllComments 
                    articleId={id}
                />
            </div>
        )
        }
    }
}

export default withRouter(ArticleShow)