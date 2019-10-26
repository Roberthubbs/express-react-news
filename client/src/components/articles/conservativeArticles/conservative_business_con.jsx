import { fetchConservativeBusiness } from '../../../actions/article_actions';
import ConservativeArticlesBusiness from './conservative_business';
import { connect } from 'react-redux';

const mstp = (state) => {
   
    return {
        articles: state.entities.articles
    }
}

const mdtp = dispatch => ({

    receiveAllArticles: () => dispatch(fetchConservativeBusiness())
})

export default connect(mstp, mdtp)(ConservativeArticlesBusiness);