// const cookies = new Cookies(req.headers.cookie);
require('dotenv').config()
const cors = require('cors')

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
// app.use(cors({credentials: true}));
const path = require('path')
const cookieParser = require('cookie-parser');


const usersController = require('./server/controllers/user-controller');
const articlesController = require('./server/controllers/articles-controller');
const viewsController = require('./server/controllers/views_controller');
const commentsController = require('./server/controllers/comments-controller');
const likesController = require('./server/controllers/likes-contoller.js');
const followsController = require('./server/controllers/follows-controller.js');
const https = require('https');
const db = require('./server/models/index')

app.use((req, res, next) => {
    res.set({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    })
    next();
});
app.use(logger('dev'));
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.mode = 'no-cors'
//     next();
// });

const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(cookieParser());
// app.use(customAuthMiddleWare);



app.use(usersController);

app.use(articlesController);

app.use(viewsController);

app.use(commentsController);
app.use(likesController);
app.use(followsController);
app.set('views', path.join(__dirname, 'client'))
// import Cookies from 'universal-cookie';

 
    


db.sequelize.sync().then(() => {
    
    app.listen(port , () => {
        console.log(`App listening on PORT ${port}`)
    })
});
module.exports = app;