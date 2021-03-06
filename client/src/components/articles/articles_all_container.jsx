import { fetchArticles } from '../../actions/article_actions';
import Articles from './articles_call';
import { connect } from 'react-redux';

const mstp = (state) => {
    
    return {
        articles: Object.values(state.entities.articles)
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchArticles())
})

export default connect(mstp, mdtp)(Articles);
