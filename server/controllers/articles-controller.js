const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const https = require('https');
const axios = require('axios');
const { Article, Like, Comment } = require("../models");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5d8f7e7fb04d49f8b5afc10db6e05367');
const cors = require('cors')
// const Twitter = require('twitter');


let run = false;
findAndClearArticles = async () => {
    debugger;
    let arts = await Article.findAll();
    let comments = await Comment.findAll();
    let likes = await Comment.findAll();
    let commentsIdArr = [];
    comments.forEach((comment) => {
        commentsIdArr.push(comment.post_id)
    });
    likes.forEach((like) => {
        commentsIdArr.push(like.postId)
    });
    return await Article.delete({ where: !commentsIdArr.includes(id) }).then((deleted) => {
        console.log(deleted)
    })
}

router.post('/all', async(req, res) => {
    findAndClearArticles();
    let globalRes = res
    // console.log("hitting", req);
    let articles;
    
        newsapi.v2.topHeadlines({
            sources: 'breitbart-news,the-american-conservative,fox-news,cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',

        }).then((res) => {

            return Promise.all(res.articles.map(async (article) => {
                // article = await Article.create(article)
                // return article
                if (!await Article.findOne({ where: { title: article.title } })) {
                    article = await Article.create(article)
                    // console.log("not found", article)
                    return article
                } else {
                    article = await Article.findOne({ where: { title: article.title } })
                    return article
                }
            }))

        }).then((res) => {

            globalRes.send(res)

        }).catch((err) => {
            res.send(err)
        })
    
})

router.post("/conservative", async(req, res) => {
    let globalRes = res
    // console.log("hitting", req);
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'breitbart-news,the-american-conservative,fox-news',

    }).then((res) => {
       
        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))
        
    }).then((res) => {
        
        globalRes.send(res)

    }).catch((err) => {
            res.send(err)
        })
})

router.get(`/show/:id`, async(req, res) => {
    
    const article = await Article.findOne({where: {id: req.params.id}});
    // console.log(req)
    res.send(article)
})

//===============================  LIBERAL ROUTES ==========================================
router.post("/liberal", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',

    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})
router.post("/liberal/election", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',
        q: 'election'
    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})
router.post("/liberal/world", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',
        q: 'world'
    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})
router.post("/liberal/business", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',
        q: 'business'
    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})

//======================= CONSERVATIVE ROUTES ====================================
router.post("/conservative/election", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'breitbart-news,the-american-conservative,fox-news',
        q: 'election'
    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})
router.post("/conservative/world", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'breitbart-news,the-american-conservative,fox-news',
        q: 'world'
    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})
router.post("/conservative/business", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'breitbart-news,the-american-conservative,fox-news',
        q: 'business'
    }).then((res) => {

        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})
router.post("/categories/:category", async(req, res) => {
    
    let globalRes = res
    let { category } = req.params;
    let articles;
    newsapi.v2.topHeadlines({
        category: category,
        country: 'us'
    }).then((res) => {
        
        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})


router.post("/sports", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        
        category: "sports",
        country: 'us'
    }).then((res) => {
        console.log(res)
        return Promise.all(res.articles.map(async (article) => {
            // article = await Article.create(article)
            // return article
            if (!await Article.findOne({ where: { title: article.title } })) {
                article = await Article.create(article)
                // console.log("not found", article)
                return article
            } else {
                article = await Article.findOne({ where: { title: article.title } })
                return article
            }
        }))

    }).then((res) => {

        globalRes.send(res)

    }).catch((err) => {
        res.send(err)
    })
})



module.exports = router;
    
    

