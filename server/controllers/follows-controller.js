const express = require('express');
const router = express.Router();
const { User, Follow } = require("../models");


router.post("/user/:userId/follows", async(req, res) => {
    console.log(req.body)
    const { currentUser, userToFollow } = req.body.follow;
    const { userId } = req.params
    if (!currentUser){
        res.status(400).send(["Login to follow other users"])
    }
    try{
        let findUser = await User.findOne({where: {username: userToFollow}, raw: true});
        console.log(findUser)
        let follow = await Follow.create({follower_id: currentUser, following_id: parseInt(userId)});
        console.log(follow)
        res.send(follow);
    } catch(err){
        res.status(400).send(["Something went wrong on our end"])
    }
})
router.get("/user/:userId/follows", async(req, res) => {
 
    const { userId } = req.params
    // if (!userId){
    //     res.status(400).send(["Login to follow other users"])
    // }
    try{
        
        let follows = await Follow.findAll({where: {following_id: parseInt(userId)}, raw: true});
        res.send(follows)
    } catch(err){
        res.status(400).send(["Something went wrong on our end"])
    }
})

router.delete("/user/:userId/follows", async(req, res) => {
    const { userId, userToUnfollow} = req.body;
    if (!userId) {
        res.status(400).send(["Login to follow other users"])
    }
    try {

        let follow = await Follow.findOne({ where: { follower_id: userId, following_id: userToUnfollow } });
        Follow.delete(follow).then((deleted) => {
            res.send(deleted)
        })
        
    } catch (err) {
        res.status(400).send(["Something went wrong on our end"])
    }
})

router.get("/followings/activity/:currentUser", async(req, res) => {
    
    const { currentUser } = req.params;
    let globalRes = res;
    try {
        let followings = await Follow.findAll({where: {follower_id: parseInt(currentUser)}, raw: true});
        Promise.all(followings.map(async(following) => {
            return await Follow.attachComments(following)
        })).then((result) => {
           
            globalRes.send(result)
        })
    } catch (err){
        res.status(400).send(err)
    }
})

module.exports = router;