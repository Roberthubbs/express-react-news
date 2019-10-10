import { fetchLiberal } from '../../../actions/article_actions';
import LiberalArticles from './liberal';
import { connect } from 'react-redux';

const mstp = (state) => {
    // debugger;
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchLiberal())
})

export default connect(mstp, mdtp)(LiberalArticles);