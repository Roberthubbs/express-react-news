const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const https = require('https');
const axios = require('axios');
const { Article } = require("../models");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5d8f7e7fb04d49f8b5afc10db6e05367');
const cors = require('cors')


let run = false;
router.post('/all', async(req, res) => {
   
    let globalRes = res
    // console.log("hitting", req);
    let articles;
    if (!run){
        newsapi.v2.topHeadlines({
            sources: 'breitbart-news,the-american-conservative,fox-news,cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',

        }).then((res) => {
            run = true;
            return Promise.all(res.articles.map(async (article) => {
                article = await Article.create(article)
                return article
            }))

        }).then((res) => {

            globalRes.send(res)

        }).catch((err) => {
            globalRes.send(err)
        })
    } else {
        globalRes.send(Article.findAll())
    }
    
})

router.post("/conservative", async(req, res) => {
    let globalRes = res
    // console.log("hitting", req);
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'breitbart-news,the-american-conservative,fox-news',

    }).then((res) => {
       
        return Promise.all(res.articles.map(async (article) => {
            article = await Article.create(article)
            return article
        }))
        
    }).then((res) => {
        
        globalRes.send(res)

    }).catch((err) => {
            globalRes.send(err)
        })
})

router.get(`/show/:id`, async(req, res) => {
    debugger;
    const article = await Article.findOne({where: {id: req.params.id}});
    
    res.send(article)
})
router.post("/liberal", async(req, res) => {
    let globalRes = res
    
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',

    }).then(async(res) => {
       
        return Promise.all(res.articles.map(async (article) => {
            article = await Article.create(article)
            return article
        }))
        
    }).then((res) => {
       
        globalRes.send(res)

    })
    .catch((err) => {
        globalRes.send(err)
    })
})


module.exports = router;
    
    

