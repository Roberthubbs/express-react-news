const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require("../models");

router.post('/register', async (req, res) => {
    
    const { username, password } = req.body
    
    const hash = bcrypt.hashSync(password, 10);
    if (username) try{
        console.log("we have a username", username)
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
    
    const username = req.body.username;
    const password = req.body.password;
    if (!username || !password ){
        
        return res.status(400).send(
            'Missing username or password dillweed'
        );
    }
    try {
        let user = await User.authenticate(username, password);

        user = await user.authorize();
        return res.json(user);
    } catch(err) {
        return res.status(400).send('invalid username or password')
    };
});

router.delete('/logout', async(req, res) => {
    
    
    
    const { user } = req.body
    console.log("USER",user,"/n========================")
    const authToken = req.body.user.password
    console.log("AuthToken", authToken)

    // we only want to attempt a logout if the user is
    // present in the req object, meaning it already
    // passed the authentication middleware. There is no reason
    // the authToken should be missing at this point, check anyway
    if (user && authToken) {
        await User.prototype.logout(authToken);
        return res.status(204).send()
    }

    // if the user missing, the user is not logged in, hence we
    // use status code 400 indicating a bad request was made
    // and send back a message
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