const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require("../models");

router.post('/register', async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password, 10);

    try{
        let user = await User.create(
            Object.assign(req.body, { password: hash })
        );

        let data = await user.authorize();

        return res.json(data);
    } catch(err) {
        return res.status(400).send(err);
    }
});

router.post('/login', async(req, res) => {
    const { username, password } = req.body;

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
    const { user, cookies: {auth_token: authToken }} = req;


    if ( user && authToken){
        await req.user.logout(authToken);
        return res.status(204).send()
    }

    return res.status(400).send(
        { errors: [{ message: 'not authenticated' }]}
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