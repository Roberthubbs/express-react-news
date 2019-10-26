import { fetchConservativeWorld } from '../../../actions/article_actions';
import ConservativeArticlesWorld from './conservative_world';
import { connect } from 'react-redux';

const mstp = (state) => {
    
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchConservativeWorld())
})

export default connect(mstp, mdtp)(ConservativeArticlesWorld);