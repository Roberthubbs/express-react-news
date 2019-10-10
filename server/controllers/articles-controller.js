const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const https = require('https');
const axios = require('axios');
const { Article } = require("../models");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('5d8f7e7fb04d49f8b5afc10db6e05367');
const cors = require('cors')


router.post('/all', async(req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // router.use(cors({origin: true}))
    // res.append('Access-Control-Allow-Origin', ['*']);
    // res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('mode', 'no-cors');
    // console.log(req)
    // console.log(res)
    let createNew = await Article.findRecent()
    let articles = await Article.findAll()
    // console.log(res)
    
    
    res.send(articles)
       res.end()
    
    
    
})

router.post("/conservative", async(req, res) => {
    let globalRes = res
    // console.log("hitting", req);
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'breitbart-news,the-american-conservative,fox-news',

    }).then((res) => {
        // console.log(res);
        // articles = Article.findConservative(res.articles)
        // return articles
        res.articles.forEach((article) => {
            Article.create(article)
        })
        globalRes.send(res.articles)
    })
})

router.post("/liberal", async(req, res) => {
    let globalRes = res
    // console.log("hitting", req);
    let articles;
    newsapi.v2.topHeadlines({
        sources: 'cnn,the-washington-post,the-new-york-times,cbs-news,nbc-news',

    }).then((res) => {
        // console.log(res);
        // articles = Article.findConservative(res.articles)
        // return articles
        res.articles.forEach((article) => {
            Article.create(article)
        })
        globalRes.send(res.articles)
    })
})


module.exports = router;
    
    

