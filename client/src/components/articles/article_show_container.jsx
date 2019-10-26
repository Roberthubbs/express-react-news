import ArticleShow from './article_show';
import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article_actions';


const mstp = (state, ownProps) => {
    
    return {
        articleId: ownProps.match.params.id,
        // article: state.entities.articles[ownProps.match.params.id]
    }
    
};

const mdtp = dispatch => ({
    fetchArticle: articleId => dispatch(fetchArticle(articleId))
})

export default connect(mstp, mdtp)(ArticleShow);