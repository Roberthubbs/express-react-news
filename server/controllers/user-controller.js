const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require("../models");

router.post('/register', async (req, res) => {
    
    const { username, password } = req.body
    
    const hash = bcrypt.hashSync(password, 10);
    if (username) try{
        // console.log("we have a username", username)
        let newObj = {username: username, password: hash}
        let user = await User.create(
            newObj
        );
        let data = await user.authorize();
        user.save();
        // console.log(res.data)
        return res.json(data);
    } catch(err) {
        console.log("this is err",err)
        return res.status(400).send(err);
    }
});

router.post('/login', async(req, res) => {
    // console.log(req.body)
    const username = req.body.user.username;
    const password = req.body.user.password;
    
    let ret;
    if (!username || !password) {
        return res.status(400).send(
            'Request missing username or password param'
        );
    }

    try {

        
        let user = await User.authenticate(username, password)
        // console.log(res.json(user.body))
        return res.json(user)
        
    } catch (err) {
        return res.status(400).send('invalid username or password');
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
})

module.exports = router;