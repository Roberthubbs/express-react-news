import { fetchByCategory } from '../../../actions/article_actions';
import CategoryArticles from './category';
import { connect } from 'react-redux';

const mstp = (state, ownParams) => {

    return {
        category: ownParams.match.params.category,
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: (category) => dispatch(fetchByCategory(category))
})

export default connect(mstp, mdtp)(CategoryArticles);