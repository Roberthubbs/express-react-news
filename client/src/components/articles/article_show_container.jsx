import ArticleShow from './article_show';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article_actions';


const mstp = (state, ownProps) => {
    // debugger;
    console.log(state.entities.articles)
    // console.log(ownProps.match.params)
    const article = state.entities.articles
    // console.log(article)
    return {
        articleTitle: ownProps.match.params.title,
        article: article
    }
};

const mdtp = dispatch => ({
    fetchArticle: articleTitle => dispatch(fetchArticle(articleTitle))
})

export default connect(mstp, mdtp)(ArticleShow);