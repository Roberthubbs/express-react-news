const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const https = require('https');
const axios = require('axios');
const { Article } = require("../models");
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


module.exports = router;
    
    

