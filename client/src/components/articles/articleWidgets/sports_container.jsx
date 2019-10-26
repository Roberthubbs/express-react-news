import { fetchSports } from '../../../actions/article_actions';
import SportsArticles from './sports';
import { connect } from 'react-redux';

const mstp = (state) => {
    
    return {
        articles: state.entities.articles.sports
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchSports())
})

export default connect(mstp, mdtp)(SportsArticles);