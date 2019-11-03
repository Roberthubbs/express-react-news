const express = require('express');
const router = express.Router();
const { Comment } = require("../models");
const { User } = require('../models');
const { Article } = require('../models');
const { Like } = require('../models');

router.post("/show/:articleId/likes/new", async(req,res) => {
    
    
    
    const { articleId, userId } = req.body.like
    if (!userId){
        return res.status(400).send(["Must login to like post"])
    }
    try {
        let obj = {postId: articleId, userId: userId}
       

            let like = await Like.create(obj);
            res.send(like)
        
    } catch(err){
        return res.status(400).send(["Sorry, something went wrong on our end"])
        
    }
})
router.delete("/show/:articleId/likes/new", async(req, res) => {
    const { articleId, userId } = req.body.like
    // let obj = { postId: articleId, userId: userId }
  
    if (await Like.findOne({ where: { postId: articleId, userId: userId } })) {
        let like = await Like.findOne({ where: { postId: articleId, userId: userId }, raw: true })
        Promise.resolve(Like.destroy({
            where: {
                postId: articleId,
                userId: userId
            }
        }))
        .then((deletedLike) => {
                res.json(deletedLike)
        }).catch((err) => {
            console.log(err)
        })
    } 
})
router.get("/show/:articleId/likes", async(req,res) => {
    
    const { articleId } = req.params
    if (!articleId){
        return res.status(400).send(["Select Post to Like"])
    }
    try {
        let likes = await Like.findAll({where: {postId: articleId}, raw: true})
        res.send(likes)
    } catch(err){

    }
})

module.exports = router;