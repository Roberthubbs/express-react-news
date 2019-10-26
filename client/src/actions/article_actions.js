import * as ArticleUtil from "../util/article_util";
export const RECEIVE_ARTICLE_ERRORS = "RECEIVE_ARTICLE_ERRORS";
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ALL_WIDGET_ARTICLES = "RECEIVE_ALL_WIDGET_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";


export const receiveAllArticles = articles => ({
    type: RECEIVE_ALL_ARTICLES,
    articles
});
export const receiveAllWidgetArticles = articles => ({
    type: RECEIVE_ALL_WIDGET_ARTICLES,
    articles
});

export const receiveArticle = payload => ({
    type: RECEIVE_ARTICLE,
    payload
});

export const receiveErrors = err => ({
    type: RECEIVE_ARTICLE_ERRORS,
    err
})
export const fetchArticle = id => dispatch => (
    ArticleUtil.fetchArticle(id).then(article => 
        dispatch(receiveArticle(article))
    )
);


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
export const fetchLiberalElection = () => dispatch => (
    ArticleUtil.receiveLiberalElection().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchConservativeElection = () => dispatch => (
    ArticleUtil.receiveConservativeElection().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchLiberalBusiness = () => dispatch => (
    ArticleUtil.receiveLiberalBusiness().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchLiberalWorld = () => dispatch => (
    ArticleUtil.receiveLiberalWorld().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchConservativeBusiness = () => dispatch => (
    ArticleUtil.receiveConservativeBusiness().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchConservativeWorld = () => dispatch => (
    ArticleUtil.receiveConservativeWorld().then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)
export const fetchSports = () => dispatch => (
    ArticleUtil.receiveSports().then((articles) => {
        dispatch(receiveAllWidgetArticles(articles))
    })
)
export const fetchByCategory = (category) => dispatch => (
    ArticleUtil.receiveCategory(category).then((articles) => {
        dispatch(receiveAllArticles(articles))
    })
)