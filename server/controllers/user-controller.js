const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require("../models");
const { Article } = require("../models")
const { Comment } = require("../models")
router.post('/register', async (req, res) => {
    
    
    const { username, password, politicalAffiliation } = req.body
    // console.log(req)
    const hash = bcrypt.hashSync(password, 10);
    if (username && password) try{
        // console.log("we have a username", username)
        let newObj = { username: username, password: hash, politicalAffiliation: politicalAffiliation}
        let user = await User.create(
            newObj
        );
        let data = await user.authorize();
        user.save();
        // console.log(res.data)
        return res.json(data);
    } catch(err) {
        // console.log("this is err",err)
        
        return res.status(400).send(['That Username Is Already Taken']);
    }
});

router.post('/login', async(req, res) => {
    // console.log(req.body)
    const username = req.body.user.username;
    const password = req.body.user.password;
    
    let ret;
    if (!username) {
        return res.status(400).send(
            ['Request missing username or password param']
        );
    }

    try {

        
        let user = await User.authenticate(username, password)
        // console.log(res.json(user.body))
        return res.json(user)
        
    } catch (err) {
        return res.status(400).send(['invalid username or password']);
    }

    
            
    
});

router.delete('/logout', async(req, res) => {
    
    
    
    const { user } = req.body
    
    const authToken = req.body.user.password
    

    if (user && authToken) {
        await User.prototype.logout(authToken);
        return res.status(204).send()
    }

    return res.status(400).send(
        { errors: [{ message: 'not authenticated' }] }
    );
});

router.get('/me', (req, res) => {
    if (req.user){
        return res.send(req.user);
    }
    res.status(404).send(
        {errors: [{ message: 'missing auth token' }]}
    );
});

router.get('/user/:id', async(req, res) => {

    // console.log(req)
    
    let id = req.params.id;
    // let articles = [];
    if (!id){
        return res.status(400).send("Log in to view user information")
    }
    let user = await User.findOne({where: {id: id}, raw: true})
    let comments = await Comment.findAll({where: {author_id: id}, raw: true});
    return Promise.all(comments.map(async(comment) => {
        article = await Article.findOne({where: {id: comment.post_id}, raw: true});
        comment.title = article.title;
        comment.url = article.url;
        // comment.articleId = article.id
        return comment
        
    })).then((result) => {
        res.send({comments: result, user: user})
    });
    // console.log(comments);
    // // console.log(articles)
    // res.send(comments)
})

module.exports = router;