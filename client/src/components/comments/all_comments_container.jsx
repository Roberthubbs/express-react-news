import { connect } from 'react-redux';
import AllComments from './all_comments';

export const mstp = (state) => ({
    comments: state.entities.comments
});

export const mdtp = dispatch => ({
    fetchAllComments: () => dispatch(fetchAllComments())
})

export default connect(mstp, mdtp)(AllComments)