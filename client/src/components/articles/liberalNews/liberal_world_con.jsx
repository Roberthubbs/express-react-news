import { fetchLiberalWorld } from '../../../actions/article_actions';
import LiberalArticlesWorld from './liberal_world';
import { connect } from 'react-redux';

const mstp = (state) => {
    
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchLiberalWorld())
})

export default connect(mstp, mdtp)(LiberalArticlesWorld);