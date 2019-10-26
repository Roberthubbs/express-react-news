import { fetchLiberalBusiness } from '../../../actions/article_actions';
import LiberalArticlesBusiness from './liberal_business';
import { connect } from 'react-redux';

const mstp = (state) => {
  
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchLiberalBusiness())
})

export default connect(mstp, mdtp)(LiberalArticlesBusiness);