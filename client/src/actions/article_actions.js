import * as ArticleUtil from "../util/article_util";
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES"

export const receiveAllArticles = articles => ({
    type: RECEIVE_ALL_ARTICLES,
    articles
})
// export const receiveErrors = errors => ({
//     type: RECEIVE_SESSION_ERRORS,
//     errors
// });

export const fetchArticles = () => dispatch => (
    ArticleUtil.receiveAll().then((articles) => (
        dispatch(receiveAllArticles(articles)) 

    ))
);

export const fetchConservative = () => dispatch => (
    ArticleUtil.receiveConservative().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchLiberal = () => dispatch => (
    ArticleUtil.receiveLiberal().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)