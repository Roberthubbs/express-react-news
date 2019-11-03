const express = require('express');
const router = express.Router();
const { Comment } = require("../models")
const { User } = require('../models')

router.post("/show/:articleId/new", async(req, res) => {
    
    let { userId, articleId, body} = req.body.comment
    if (!userId || !body){
        return res.status(400).send(
            "Must login and comment must include body"
        )
    }
    if (body) try {
        let comment = await Comment.create({author_id: userId, post_id: articleId, content: body})
        comment.save()
        res.send(comment)
    } catch(err) {
        return res.status(400).send(err)
    }
});

router.get("/show/:articleId/comments", async(req, res) => {
    
    let articleId = req.params.articleId;
    let comments = await Comment.findAll({where: {post_id: articleId}, raw: true});
    let author_id;
    Promise.all(comments.map(async(comment) => {
        return await Comment.attachUserName(comment)
    })).then((result) => {
        res.send(result)
    })

})

module.exports = router;