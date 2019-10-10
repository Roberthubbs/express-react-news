import { fetchConservative } from '../../../actions/article_actions';
import ConservativeArticles from './conservative';
import { connect } from 'react-redux';

const mstp = (state) => {
    // debugger;
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchConservative())
})

export default connect(mstp, mdtp)(ConservativeArticles);