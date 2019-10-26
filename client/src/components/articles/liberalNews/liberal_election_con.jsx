import { fetchLiberalElection } from '../../../actions/article_actions';
import LiberalArticlesElection from './liberal_election';
import { connect } from 'react-redux';

const mstp = (state) => {
 
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchLiberalElection())
})

export default connect(mstp, mdtp)(LiberalArticlesElection);