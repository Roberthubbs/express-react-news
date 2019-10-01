const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('home', { user: req.user }));

router.get('/register', (req, res) => res.render('home', { user: req.user }));
router.get('/logout', (req, res) => res.render('home', { user: req.user }));
router.get('/login', (req, res) => res.render('home', { user: req.user }));

module.exports = router;