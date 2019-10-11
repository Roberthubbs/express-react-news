import * as ArticleUtil from "../util/article_util";
export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";


export const receiveAllArticles = articles => ({
    type: RECEIVE_ALL_ARTICLES,
    articles
})

export const receiveArticle = payload => ({
    type: RECEIVE_ARTICLE,
    payload
})

export const fetchArticle = title => dispatch => (
    ArticleUtil.fetchArticle(title).then(article => dispatch(receiveArticle(article)))
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