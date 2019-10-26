import { fetchConservativeElection } from '../../../actions/article_actions';
import ConservativeArticlesElection from './conservative_election';
import { connect } from 'react-redux';

const mstp = (state) => {
    
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchConservativeElection())
})

export default connect(mstp, mdtp)(ConservativeArticlesElection);