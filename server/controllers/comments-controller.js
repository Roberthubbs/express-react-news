const { Comment } = require("../models")
const express = require('express');
const router = express.Router();

router.post("/new", async(req, res) => {
    let { author_id, user_id, content} = req.body
    if (!user_id || !content){
        return res.status(400).send(
            "Must login and comment must include body"
        )
    }
    if (content) try {
        let comment = await Comment.create(author_id, user_id, content)
        comment.save()
        res.json(comment)
    } catch(err) {
        return res.status(400).send(err)
    }
})